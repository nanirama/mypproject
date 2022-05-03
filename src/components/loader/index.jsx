import styled, { keyframes } from "styled-components";

const bounce = keyframes`
0%,
80%,
100% {
  transform: scale(0);
}
40% {
  transform: scale(1);
}
`;

export default styled.div`
  background-color: ${(props) => (props.color ? props.theme.color.primary : "#FFF")};
  animation: ${bounce} 1s ease-in-out infinite both;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
  transform: scale(0);
  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    animation-delay: -0.32s !important;
  }
  &:nth-child(2) {
    animation-delay: -0.16s !important;
  }
`;
