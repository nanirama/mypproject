import styled from "styled-components";
import defaultStyle, { themeInput } from "../style";

export const StyledInput = styled.input`
  ${defaultStyle};
  border: ${(props) => themeInput[props.theme].border};
  /* border-color: ${(props) => (props.validField ? "" : "rgb(217, 65, 78)")}; */
`;

export const StyledTextarea = styled.textarea`
  ${defaultStyle} height:auto;
  padding: 10px;
  border: ${(props) => themeInput[props.theme].border};
  font-family: "sofia-pro";
`;

export const StyledLabel = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-top: 10px;
  text-align: left;
  //color:#FFF;
`;
