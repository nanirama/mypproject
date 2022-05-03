import styled from "styled-components";
import { media } from "../utils/style-utils";

export default styled.div`
  width: 30px;
  display: none;
  height: 3px;
  background: ${props => props.bg};
  ${media.tablet`
        width:70px;
        height: 4px;
        display:block;
        margin:${props => (props.center ? `0 auto` : "0")};
    `};
`;
