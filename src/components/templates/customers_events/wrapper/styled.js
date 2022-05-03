import styled from "styled-components";
import { media } from "../../../utils/style-utils";

export const Background = styled.div`
    /* background-image: linear-gradient(30deg, ${props =>
      props.bg} 10%, ${props => props.gradient} 100%); */
    position: relative;
    z-index:20;
    min-height: 100vh; 
    /* position: relative;
    overflow: hidden; */
    /* margin-top:50px; */
    ${media.tablet`
  
    text-align: center;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: 50%;
        height: 100%;
        background-color: ${props => props.bg};
        /* transform: translate(0,180px) rotate(-10deg); */
    }    
    `}
`;

export const Zindex = styled.div`
  position: relative;
  z-index: 10;
`;
