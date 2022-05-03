import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../../loader";
import axios from "axios";

const LoaderArrow = styled.span`
  opacity: ${(props) => (props.loading ? "1" : "0")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 150ms ease 0s;
`;

const ButtonStripe = styled.button`
  border-radius: 50px;
  position: relative;
  opacity: ${(props) => (props.disabled ? "0.8" : "1")};
  border: none;
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
  font-weight: 600;
  letter-spacing: 1px;
  transition: 0.3s all;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 1px 3px 0px;
  }

  background: #fff;
  color: ${(props) => props.theme.color.primary};
`;

function validateEmail(email) {
  // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase());
  return true;
}

export default ({ clientReferenceId, sku, successUrl, cancelUrl, submitValue, customField, disabled }) => {
  const [stripe, setStripe] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_DUBAI));
  }, []);

  if (
    customField.companyName.length > 0 &&
    customField.firstName.length > 0 &&
    customField.email.length > 0 &&
    validateEmail(customField.email)
  ) {
    disabled = false;
  }

  return (
    <form
      style={{ textAlign: "center" }}
      onSubmit={(e) => {
        e.preventDefault();

        setLoading(true);
        axios("https://hooks.zapier.com/hooks/catch/9880656/btm6xs3/", {
          method: "post",
          data: customField,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }).then((res) => {
          stripe &&
            stripe
              .redirectToCheckout({
                lineItems: [{ price: process.env.STRIPE_DUBAI_PRODUCT, quantity: 1 }],
                clientReferenceId,
                mode: "payment",
                successUrl,
                cancelUrl,
                billingAddressCollection: "required",
                customerEmail: customField.email,
              })
              .then((result) => {
                console.log({ result });
              })
              .catch((error) => {
                console.log(error);
                alert("Sorry, an error has occurred. Please contact support@swapcard.com");
              });
        });
      }}
    >
      <>
        <ButtonStripe disabled={disabled} loading={loading} type="submit">
          <LoaderArrow loading={loading}>
            <Loader color="blue" />
            <Loader color="blue" />
            <Loader color="blue" />
          </LoaderArrow>
          <span style={{ opacity: loading ? "0" : "1" }}>{submitValue}</span>
        </ButtonStripe>
      </>
    </form>
  );
};
