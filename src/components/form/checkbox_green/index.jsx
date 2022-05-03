import React from "react";
import { CheckMarkContainer, Check, Input, Wrapper } from "./styled";

const CheckboxGreen = ({ register, required, ...props }) => {
  return (
    <Wrapper>
      {register ? (
        <Input type="checkbox" checked={props.checked} ref={register({ required })} {...props} />
      ) : (
        <Input type="checkbox" checked={props.checked} {...props} />
      )}
      <CheckMarkContainer>
        <Check />
      </CheckMarkContainer>
    </Wrapper>
  );
};

export default CheckboxGreen;
