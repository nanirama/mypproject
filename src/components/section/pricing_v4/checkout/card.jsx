import React, { useState } from "react";
import * as styled from "./styled";
import { CardElement } from "@stripe/react-stripe-js";
import { SpaceH } from "../../../space";

const cardStyle = {
  hidePostalCode: true,
  style: {
    base: {
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default () => {
  const [error, setError] = useState(null);
  // const [disabled, setDisabled] = useState(true);

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    // setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <styled.Card>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <SpaceH of={5} />
      <styled.ErrorMessage>{error}</styled.ErrorMessage>
    </styled.Card>
  );
};
