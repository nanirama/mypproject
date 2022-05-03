import styled, { keyframes } from "styled-components";

const ripple = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 200%;
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
   background-color: ${props =>
     props.checked ? "rgb(153, 153, 153)" : props.buttonColor ? props.buttonColor : props.theme.color.secondary};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12);
  border-style: solid;
  border-width: 0.5px;
  border-image-source: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.12),
    rgba(255, 255, 255, 0.06) 20%,
    rgba(255, 255, 255, 0)
  );
  border-image-slice: 1;
  border-radius: 50%;
  position: absolute;
  top: -4px;
  left: ${props => (props.checked ? "13px" : 0)};
  transition: 200ms;
  overflow: hidden;
  /* &::after {
    content: "";
    position: absolute;
    top: -10%;
    left: -10%;
    width: 100%;
    height: 120%;
    background: blue;
    animation: ${ripple} 1200ms linear infinite;
  } */
`;

export default Circle;
