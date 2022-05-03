import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
`;

export const InputPicto = styled.div`
  margin-right: 15px;
  position: absolute;
  right: 0;
`;

export const Icon = styled.i`
  color: ${props => props.theme.color[props.color]};
`;

//Validation check

export const ValidationCheckIcon = styled.div`
  transform: rotate(0deg);
  padding: 0em;
  font-size: 8px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  border-color: rgb(223, 227, 235);
  border-style: solid;
  border-width: 2px;
  margin-right: 5px;

  &.ok {
    border-color: ${props => props.theme.color.success};
    background: ${props => props.theme.color.success};
    z-index: 1;
  }
`;

export const IconCheck = styled.i`
  color: #fff;
  z-index: 2;
`;

export const ValidationCheckWrapper = styled.div`
  display: flex;
  font-size: 0.8rem;
  align-items: center;
`;

export const StyledValidationMessage = styled.span`
  color: ${props =>
    props.fontColor === "error" && !props.isChecked
      ? props.theme.color.error
      : ""};
`;

export default class ValidationField extends Component {
  render() {
    return (
      <InputPicto>
        {this.props.validationIsPending && (
          <Rotate>
            <Icon color="body" className="icons8-synchroniser" />
          </Rotate>
        )}
        {this.props.inputIsValid && !this.props.validationIsPending && (
          <Icon color="success" className="icons8-checked" />
        )}
        {!this.props.inputIsValid && !this.props.validationIsPending && (
          <Icon color="error" className="icons8-close-button" />
        )}
      </InputPicto>
    );
  }
}

//Sous le input

export const ValidationCheckCircle = ({
  validationMessage,
  isChecked,
  fontColor
}) => (
  <ValidationCheckWrapper>
    <ValidationCheckIcon className={isChecked ? "ok" : ""}>
      <IconCheck className="icons8-green-check-mark-2" />
    </ValidationCheckIcon>
    <StyledValidationMessage fontColor={fontColor} isChecked={isChecked}>
      {validationMessage}
    </StyledValidationMessage>
  </ValidationCheckWrapper>
);
