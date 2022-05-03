import styled from "styled-components";
import { media } from "../utils/style-utils";

export default styled.div`
  ${media.tablet`
    background: ${props =>
      props.gradient ? `linear-gradient(#f9f9f9, #fff)` : ""};
    padding-top:${props => (props.top ? props.top : "80")}px;
    padding-bottom:${props => (props.bottom ? props.bottom : "80")}px;
  `} padding: 30px 0;
`;
