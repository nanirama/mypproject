import React, { useState, useEffect, useContext } from "react";
import { SpaceH } from "../../space";
import * as styled from "./styled";
import Modal from "react-modal";
import axios from "axios";

import { Grid, Col, Row } from "react-flexbox-grid";
import Submit from "../../form/submit";
import CardStripe from "../../stripe";

import { resolveRefreshToken } from "../../../HOC/auth";

import { fetchCreditsCardsQuery, deleteCreditCardsQuery, updateDefaultCreditCardsQuery } from "./query/credit-cards";

import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { Typo4 } from "../../typographie";

import { AuthContext } from "../../../context/auth";
import { toast } from "react-toastify";

const CreditsCard = ({ organizationId }) => {
  const [modalIsOpen, setModalOpen] = useState(false);
  const { accessToken } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");

  const [cardPayload, setCardPayload] = useState();
  const [loading, isLoading] = useState(false);

  const fetchCreditCards = async () => {
    const cards = await fetchCreditsCardsQuery(accessToken, organizationId);
    if (cards) {
      setCardPayload(cards.data?.data?.Billing_organizationPaymentMethods?.nodes);
    }
  };

  const deletePaymentMethod = async (paymentMethodId) => {
    await deleteCreditCardsQuery(accessToken, paymentMethodId);
    fetchCreditCards();
  };

  const setDefaultCard = async (paymentMethodId) => {
    await updateDefaultCreditCardsQuery(accessToken, paymentMethodId);
    fetchCreditCards();
  };

  useEffect(() => {
    fetchCreditCards();
  }, [organizationId, accessToken]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    isLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      isLoading(false);
    } else {
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
              cardBrand: paymentMethod.card.brand,
              cardLast4: paymentMethod.card.last4,
              pgPaymentMethodId: paymentMethod.id,
              isDefault: false,
            },
          },
          query: `
            mutation createCard($input: Billing_CreateCreditCardPaymentMethodInput!) {
              Billing_createCreditCardPaymentMethod(input: $input) {
                creditCardPaymentMethod {
                  id
                  isDefault
                }
                errors {
                  message
                }
              }
            }                  
          `,
        },
      });
      isLoading(false);

      if (result.data.data.Billing_createCreditCardPaymentMethod.errors.length > 0) {
        toast.error(result.data.data.Billing_createCreditCardPaymentMethod.errors[0].message);
      } else {
        fetchCreditCards();
        setModalOpen(false);
      }
    }
  };

  return (
    <div>
      <styled.Container>
        {cardPayload &&
          cardPayload.map((e) => (
            <styled.Wrapper>
              <styled.Line>
                <b>{e.brand}</b>
              </styled.Line>
              <SpaceH of={20} />
              <styled.Line>**** **** **** {e.cardLast4}</styled.Line>
              <SpaceH of={20} />
              {!e.isDefault && (
                <>
                  <styled.Update onClick={() => setDefaultCard(e.id)}>Set as default</styled.Update>&nbsp;|&nbsp;
                  <styled.Update onClick={() => deletePaymentMethod(e.id)}>Delete</styled.Update>
                </>
              )}
              {e.isDefault && (
                <styled.DefaultCard>
                  <i>Default card</i>
                </styled.DefaultCard>
              )}
            </styled.Wrapper>
          ))}
      </styled.Container>
      <SpaceH of={20} />
      <styled.Update onClick={() => setModalOpen(!modalIsOpen)}>Add Payment Method</styled.Update>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel=""
      >
        <styled.ModalWrapper>
          <Typo4>Please enter your new payment details below</Typo4>
          <SpaceH of={20} />
          <form onSubmit={handleSubmit}>
            <CardStripe />
            <SpaceH of={5} />
            <Row end="xs">
              <Col xs={12}>
                <Submit value="Add credit card" isLoading={loading} />
              </Col>
            </Row>
          </form>
        </styled.ModalWrapper>
      </Modal>
    </div>
  );
};

const promiseStripe = loadStripe(process.env.STRIPE);

const App = ({ organizationId }) => {
  return (
    <Elements stripe={promiseStripe}>
      <CreditsCard organizationId={organizationId} />
    </Elements>
  );
};

export default App;
