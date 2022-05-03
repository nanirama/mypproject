import styled from "styled-components";
import defaultStyle, { themeInput } from "../style";
import arrowUp from "../../../assets/icons/chevron-up.svg";
import arrowDown from "../../../assets/icons/chevron-down.svg";

export const ButtonsBlock = styled.div`
  border-left: none;
  width: 20px;
`;

export const InputBlock = styled.div`
  display: flex;
  display: -webkit-flex;
  @media only screen and (max-width: 576px) {
    margin-top: 16px;
    margin-bottom: 8px;
    float: left;
    width: 100%;
  }
  width: 110px;
  float: right;
  input[type="number"] {
    min-width: 0;
  }
`;

export const MinusButton = styled.div`
  width: 25px;
  border: 1px solid #d5d2d9;
  border-left: none;
  border-radius: 0 0 3px 0;
  height: 20px;
  background-image: url(${arrowDown});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10px;
`;

export const PlusButton = styled.div`
  width: 25px;
  border: 1px solid #d5d2d9;
  border-left: none;
  border-bottom: none;
  border-radius: 0 3px 0 0;
  height: 20px;
  background-image: url(${arrowUp});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10px;
`;

export const StyledInput = styled.input`
  ${defaultStyle};
  border: ${(props) => themeInput[props.theme].border};
  border-radius: 3px 0 0 3px;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export const StyledTextarea = styled.textarea`
  ${defaultStyle} height:auto;
  padding: 10px;
  border: ${(props) => themeInput[props.theme].border};
`;
