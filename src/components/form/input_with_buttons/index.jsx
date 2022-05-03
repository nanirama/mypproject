import React from "react";
import { ButtonsBlock, InputBlock, MinusButton, PlusButton, StyledInput, StyledTextarea } from "./styled";

export const InputWithButtons = ({ value, setValue, suffix, min, ...props }) => {
  const onChange = () => {
    // console.log(value.match(/\d+/g));
    if (value && value.match(/\d+/g) < min) {
      setValue(1);
    }
  };

  const onClickPlus = () => {
    setValue(value + 1);
  };
  const onClickMinus = () => {
    // console.log(value);
    if (value <= min) {
      setValue(1);
    } else {
      setValue(value - 1);
    }
  };

  return (
    <>
      <InputBlock>
        <StyledInput
          theme="gray"
          onChange={onChange}
          type={"text"}
          name={props.name}
          value={value + " " + suffix}
          {...props}
        />
        <ButtonsBlock>
          <PlusButton type={"button"} id={"plusButton"} onClick={onClickPlus} />
          <MinusButton type={"button"} id={"minusButton"} onClick={onClickMinus} />
        </ButtonsBlock>
      </InputBlock>
    </>
  );
};

export const Textarea = ({ label, ...props }) => (
  <React.Fragment>
    <StyledTextarea theme="gray" {...props} />
  </React.Fragment>
);
