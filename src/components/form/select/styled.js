import styled from "styled-components";
import caret from "../../../assets/images/Forms/caret.svg";
import defaultStyle, { themeInput } from "../style";

export const StyledSelect = styled.select`
    ${defaultStyle}
    background: url(${caret}) 97% no-repeat #fff;
    border: ${props => themeInput[props.theme].border};
    
`;

export const StyledLabel = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-top: 10px;
  color: #fff;
`;
