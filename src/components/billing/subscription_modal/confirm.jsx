import React, { useState, useEffect, useContext } from "react";
import { ModalTitle } from "./index";
import { Col, Row, Grid } from "react-flexbox-grid";
import * as styled from "../styled";
import { SpaceH } from "../../space";
import { savePaymentMethod, createSubscription } from "./query/subscription";
import { ButtonSecondary } from "../../button";
import { loadStripe } from "@stripe/stripe-js";
import withLocation from "../../../HOC/location";
import { AuthContext } from "../../../context/auth";
import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import prices from "../upgrade_plan/prices.json";
import Submit from "../../form/submit";
import { toast } from "react-toastify";
import { showPriceStrRaw } from "../utils";
import { analyticsTrack } from "../../utils/segment";
import tp from "../../../localization/tracking.json";

function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

const Confirm = ({ setStep, ...props }) => {
  useEffect(() => {
    analyticsTrack(tp.events.plan_upgrade_modal_visited, {
      view: "3_proceed_checkout",
    });
  }, []);

  const [acceptLegal, setAcceptLegal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [billing, setBilling] = useState({});
  const [cardInfo, setCardInfo] = useState({});
  const { accessToken } = useContext(AuthContext);
  const billingPayload = JSON.parse(localStorage.getItem("billing"));
  const paymentMethodPayload = JSON.parse(localStorage.getItem("paymentMethod"));

  useEffect(() => {
    setBilling(billingPayload);
    setCardInfo(paymentMethodPayload);
  }, []);

  const subscribe = async () => {
    setLoading(true);

    setLoading(false);
    setStep(3);
  };

  return (
    <>
      <Grid>
        <Row>
          <Col xs={12}>
            <ModalTitle center>
              <styled.BackArrow onClick={() => setStep(1)} className="icons8-left-arrow" />
              Proceed checkout
            </ModalTitle>
          </Col>
        </Row>
        <SpaceH of={20} />
        <Row>
          <Col xs={12}>
            <styled.PlanConfirmTitleWrapper>
              <styled.PlanConfirmTitle>Plan</styled.PlanConfirmTitle>
              {/* <styled.PlanConfirmEditButton onClick={() => setStep(2)}>Edit</styled.PlanConfirmEditButton> */}
            </styled.PlanConfirmTitleWrapper>
            <styled.PlanConfirmLine>
              Meetup Plan Monthly -
              {showPriceStrRaw(props.currency, prices["meetup"]["monthly"]["price"][props.currency])} / month
            </styled.PlanConfirmLine>
            <SpaceH of={20} />
            <styled.PlanConfirmTitleWrapper>
              <styled.PlanConfirmTitle>Billing</styled.PlanConfirmTitle>
              <styled.PlanConfirmEditButton onClick={() => setStep(1)}>Edit</styled.PlanConfirmEditButton>
            </styled.PlanConfirmTitleWrapper>
            {billing && (
              <>
                <styled.PlanConfirmLine>{billing.companyName}</styled.PlanConfirmLine>
                <styled.PlanConfirmLine>{billing.street}</styled.PlanConfirmLine>
                <styled.PlanConfirmLine>
                  {billing.city}, {billing.zipCode}, {billing.country}
                </styled.PlanConfirmLine>
              </>
            )}
            <SpaceH of={20} />
            <styled.PlanConfirmTitleWrapper>
              <styled.PlanConfirmTitle>Payment Method</styled.PlanConfirmTitle>
              <styled.PlanConfirmEditButton onClick={() => setStep(2)}>Edit</styled.PlanConfirmEditButton>
            </styled.PlanConfirmTitleWrapper>
            {cardInfo && <styled.PlanConfirmLine>Ending {cardInfo.last4}</styled.PlanConfirmLine>}
          </Col>
        </Row>

        <SpaceH of={20} />
        <Row>
          <Col xs={11}>
            <label for="cgu">
              I have read and accepted{" "}
              <a href="https://www.swapcard.com/terms-of-use/" target="_blank">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="https://www.swapcard.com/privacy-policy/" target="_blank">
                Privacy Policy
              </a>
            </label>
          </Col>
          <Col xs={1}>
            <input
              type="checkbox"
              id="cgu"
              onClick={(e) => setAcceptLegal(e.target.value)}
              name="cgu"
              style={{ "-webkit-appearance": "checkbox", "-moz-appearance": "checkbox" }}
            ></input>
          </Col>
        </Row>
        <SpaceH of={20} />
        <Row end="xs">
          <Col xs={12}>
            <Submit onClick={acceptLegal && subscribe} isLoading={loading} value={"Proceed to payment"} />
          </Col>
        </Row>
      </Grid>
    </>
  );
};

const calculateFinalPrice = (price, country, currency) => {
  if (country === "FR") {
    return showPriceStrRaw(currency, 0.2 * price + price);
  }
  return showPriceStrRaw(currency, price);
};

const stripePromise = loadStripe(process.env.STRIPE);

const App = ({ setStep, ...props }) => {
  return (
    <Elements stripe={stripePromise}>
      <Confirm setStep={setStep} {...props} />
    </Elements>
  );
};

export default withLocation(App);
