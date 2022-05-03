import React, { useState } from "react";
import styled from "styled-components";
import { Typo4 } from "../../typographie";

import Billing from "./billing";
import Card from "./card-3d";
import Confirm from "./confirm";
import Plan from "./plan";
import Success from "./success";

const Wrapper = styled.div`
  padding: 10px 0;
  max-width: 500px;
  width: 100%;
  z-index: 1000;
`;

export const ModalTitle = styled(Typo4)`
  font-weight: bold;
`;

const SubscriptionModal = ({ setIsOpen, currency, cycle, setCurrency }) => {
  const [step, setStep] = useState(0);

  return (
    <Wrapper>
      {step === 0 && <Plan setStep={setStep} cycle={cycle} currency={currency} />}
      {step === 1 && <Billing setStep={setStep} currency={currency} setCurrency={setCurrency} />}
      {step === 2 && <Confirm setStep={setStep} cycle={cycle} currency={currency} />}
      {step === 3 && <Card setStep={setStep} currency={currency} />}
      {step === 4 && <Success setIsOpen={setIsOpen} />}
    </Wrapper>
  );
};

export default SubscriptionModal;
