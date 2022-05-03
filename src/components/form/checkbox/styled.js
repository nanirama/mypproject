import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: left;
  clear: both;
`;

export const CheckboxText = styled.div`
  width: 94%;
  font-size: 0.9rem;
  float: right;
  display: block;
  color: ${props => props.theme.color.body};
`;

export const StyledCheckbox = styled.input`
  position: relative;
  -webkit-appearance: checkbox;
  -moz-appearance: checkbox;
  -ms-progress-appearance: checkbox;
`;
