import React from "react";
import styled from "styled-components";
import { media } from "../../../utils/style-utils";

export const Background = styled.div`
  background-image: url(${props => props.bg.src});
  background-repeat: none;
  background-size: cover;
  background-position: center;
  height: 300px;
  padding-top: 30px;
  ${media.giant`
  height: 500px;
  `} position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.giant`
  padding:0;
  margin: 76px 0 0 0;
  `}
    :after {
    content: " ";
    background: #000;
    height: 90%;
    ${media.giant`
    height: 100%;
    `}
    z-index: 10;
    width: 100%;
    position: absolute;
    opacity: 0.5;
  }
`;
export const Title = styled.h1`
  position: relative;
  font-weight: 800;
  font-size: 1.5rem;
  ${media.tablet`
  font-size: 3rem;
  `} color: #fff;
  z-index: 20;
`;

export default ({ bg }) => (
  <React.Fragment>
    <Background bg={bg}>
      <Title>Join The Revolution!</Title>
    </Background>
  </React.Fragment>
);
