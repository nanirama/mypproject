import styled, { keyframes } from "styled-components";
import { brightness } from "chromatism";

const ripple = keyframes`
  from {
    left: -200%;
  }
  to {
    left: 200%;
  }
`;

export default styled.span`
  background-color: #e5e5e5;
  display: block;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 150%;
    height: 100%;
    animation: ${ripple} 1600ms linear infinite;
    background: linear-gradient(to right, #e5e5e5, ${brightness(-5, "#e5e5e5").hex}, #e5e5e5);
  }
`;
