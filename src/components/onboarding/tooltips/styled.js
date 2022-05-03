import styled, { keyframes } from "styled-components";

export const blink = keyframes`
    0% {
        transform:scale(1);
    }
  50% {
    transform:scale(1.05);
  }
`;

export const TooltipsWrapper = styled.div`
  position: relative;
`;

export const TooltipsChildren = styled.div``;

export const TooltipsBlock = styled.div`
  background: red;
  background: ${props => props.theme.color.primary};
  position: absolute;
  top: -39px;
  color: #fff;
  font-size: 0.8rem;
  padding: 10px 10px;
  animation: ${blink} 3s linear infinite;
  border-radius: 3px;
  opacity: 1;
  //box-shadow: ${props => props.theme.shadow.primary};
  letter-spacing: 0.3px;
  &:after {
    content: " ";
    width: 0;
    left: 25px;
    height: 0;
    opacity: 1;
    position: absolute;
    top: 32px;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    animation: ${blink} 3s linear infinite;
    border-color: ${props =>
      props.theme.color.primary} transparent transparent transparent;
  }
`;
