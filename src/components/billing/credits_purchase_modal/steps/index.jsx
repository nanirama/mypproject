import React, { useState } from "react";
import styled from "styled-components";
import { Typo4 } from "../../../typographie";

import Quantity from "./quantity";
import Summary from "./summary";
import Success from "./success";

const Wrapper = styled.div`
  padding: 10px 0;
  max-width: 400px;
  width: 100%;
`;

export const ModalTitle = styled(Typo4)`
  font-weight: bold;
`;

const SubscriptionModal = ({ setIsOpen }) => {
  const [step, setStep] = useState(1);

  const [people, setPeople] = useState(0);
  const [exhibitors, setExhibitors] = useState(0);

  return (
    <Wrapper>
      {step === 1 && <Quantity setStep={setStep} people={people} setPeople={setPeople} setExhibitors={setExhibitors} />}
      {step === 2 && <Summary setStep={setStep} people={people} exhibitors={exhibitors} />}
      {step === 3 && <Success setIsOpen={setIsOpen} people={people} exhibitors={exhibitors} />}
    </Wrapper>
  );
};

export default SubscriptionModal;
