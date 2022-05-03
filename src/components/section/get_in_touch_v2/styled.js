import styled from "styled-components";
import { Typo2, Typo3 } from "../../typographie";
import Link from "../../utils/link";

export const StyledGetInTouch = styled.div`
  /* //background: linear-gradient(#f9f9f9, #fff); */
  background: ${(props) =>
    props.colorTheme !== "grey" ? props.theme.color.primary : `linear-gradient(#f9f9f9, #fff)`};
  /* //background:${(props) => props.theme.color.primary}; */
  padding: 80px 0;
  text-align: center;
`;
export const StyledGetInTouchCustom = styled.div`
  /* //background: linear-gradient(#f9f9f9, #fff); */
  background: ${(props) => props.customColor};
  /* //background:${(props) => props.theme.color.primary}; */
  padding: 80px 0;
  text-align: center;
`;

export const StyledGetInTouchBody = styled(Typo2)`
  color: ${(props) => (props.colorTheme !== "grey" ? `#FFFFFF` : props.theme.color.primary)};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const StyledBody = styled(Typo3)`
  color: ${(props) => (props.colorTheme !== "grey" ? `#FFFFFF` : props.theme.color.primary)};
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

export const GetInTouchSecondary = styled(Link)`
  color: #fff;
  border-bottom: 1px solid #fff;
`;
