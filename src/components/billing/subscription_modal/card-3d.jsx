import React, { useEffect, useState, useMemo } from "react";
import * as styled from "../styled";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { ModalTitle } from "./index";
import { SpaceH } from "../../space";
import { Col, Row, Grid } from "react-flexbox-grid";
import Submit from "../../form/submit";
import CardStripe from "../../stripe";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthProvider, useAuth } from "../../../context/auth";
import withLocation from "../../../HOC/location";
import { showPriceStrRaw } from "../utils";
import prices from "../upgrade_plan/prices.json";
import { analyticsTrack } from "../../utils/segment";
import tp from "../../../localization/tracking.json";

export const getSubscription = async (accessToken, organizationId, currency) => {
  const result = await axios({
    url: process.env.BILLING_API,
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "x-api-key": process.env.BILLING_X_API_KEY,
    },
    data: {
      variables: {
        input: {
          organizationId,
          productPriceId: prices["meetup"]["monthly"]["productPriceId"][currency],
        },
      },
      query: `
        mutation createOrgaSubscription($input: Billing_CreateOrganizationSubscriptionInput!) {
            Billing_createOrganizationSubscription(input: $input) {
              pgClientSecret
              errors {
                message
              }
            }
          }          
        `,
    },
  });
  return result.data?.data?.Billing_createOrganizationSubscription;
};

const CheckoutForm = ({ setStep, search, currency }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [billing, setBilling] = useState({});
  const billingPayload = JSON.parse(localStorage.getItem("billing"));
  const { accessToken } = useAuth();
  const [loading, isLoading] = useState(false);
  const [errorStripe, setError] = useState("");

  useEffect(() => {
    analyticsTrack(tp.events.plan_upgrade_modal_visited, {
      view: "4_payment_details",
    });

    setBilling(billingPayload);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    isLoading(true);
    const subscription = await getSubscription(accessToken, search.id, currency);

    if (!subscription) {
      toast.error("An error occured. Please contact our support.");
      isLoading(false);
      return;
    }

    if (subscription && subscription.errors && subscription.errors.length > 0) {
      toast.error(subscription.errors[0].message);
      isLoading(false);
      return;
    }

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const cardElement = elements.getElement(CardElement);

    let { error, paymentIntent } = await stripe.confirmCardPayment(subscription.pgClientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    isLoading(false);

    console.log(error, paymentIntent);

    if (error) {
      setError(error.message);
    }

    if (paymentIntent && paymentIntent.status === "succeeded") {
      analyticsTrack(tp.events.organization_plan_upgraded);
      setStep(4);
    }
  };

  return (
    <AuthProvider>
      <Grid>
        <Row>
          <Col xs={12}>
            <ModalTitle center>
              <styled.BackArrow onClick={() => setStep(2)} className="icons8-left-arrow" />
              Add your payment details
            </ModalTitle>
          </Col>
        </Row>
        <SpaceH of={20} />
        <form onSubmit={handleSubmit}>
          <CardStripe />
          {errorStripe && (
            <>
              <Row>
                <Col xs={12}>
                  <styled.ErrorMessage>{errorStripe}</styled.ErrorMessage>
                </Col>
              </Row>
              <SpaceH of={12} />
            </>
          )}
          <Row>
            <Col xs={12}>
              <styled.CreditCardTotalSummary>
                {billing && billing.country === "FR" && (
                  <styled.CreditCardTotalSummaryLine>
                    <span>Subtotal</span>
                    <span>{showPriceStrRaw(currency, prices["meetup"]["monthly"]["price"][currency])}/month</span>
                  </styled.CreditCardTotalSummaryLine>
                )}
                {billing && billing.country === "FR" && (
                  <styled.CreditCardTotalSummaryLine>
                    <span>TVA</span>
                    <span>20%</span>
                  </styled.CreditCardTotalSummaryLine>
                )}
                {billing && billing.country !== "FR" && (
                  <styled.CreditCardTotalSummaryLine>
                    <span>Tax</span>
                    <span>0%</span>
                  </styled.CreditCardTotalSummaryLine>
                )}
                <styled.CreditCardTotalSummaryLine>
                  <span>
                    <b>Total</b>
                  </span>
                  {billing && billing.country === "FR" ? (
                    <span>{showPriceStrRaw(currency, prices["meetup"]["monthly"]["price"][currency] * 1.2)}/month</span>
                  ) : (
                    <span>{showPriceStrRaw(currency, prices["meetup"]["monthly"]["price"][currency])}/month</span>
                  )}
                </styled.CreditCardTotalSummaryLine>
              </styled.CreditCardTotalSummary>
            </Col>
          </Row>
          <SpaceH of={10} />
          <Row end="xs">
            <Col xs={12}>
              <Submit value="Pay and subscribe" isLoading={loading} />
            </Col>
          </Row>
        </form>
      </Grid>
    </AuthProvider>
  );
};

const stripePromise = loadStripe(process.env.STRIPE);

const App = ({ setStep, ...props }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm setStep={setStep} search={props.search} currency={props.currency} />
    </Elements>
  );
};
export default withLocation(App);
