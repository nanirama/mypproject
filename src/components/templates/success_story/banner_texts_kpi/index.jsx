import React from "react";
import Section from "../../../utils/section";
import styled, { createGlobalStyle } from "styled-components";
import { media } from "../../../utils/style-utils";

createGlobalStyle`
    .wistia_responsive_padding {
        box-shadow: 0 4px 9px 0 rgba(23,28,33,.3);
    }
`;

export const StyledBanner = styled.div`
  width: 100%;
  text-align: center;
`;

export const Title = styled.div`
  //color: ${props => props.theme.color.secondary};
  font-size:1.2rem;
  margin:0 10px;
  ${media.tablet`
  font-size: 1.6rem;
  `};
  font-weight: 600;
`;

export const Number = styled.div`
  color: ${props => props.theme.color.secondary};
  font-size: 2.5rem;
  ${media.tablet`
  font-size: 4.5rem;
  `} margin-bottom: 20px;
  font-weight: 600;
  margin-top: 15px;
`;

export default ({ data }) => (
  <React.Fragment>
    <Section top="0">
      <StyledBanner>
        <Number>{data.primary.number.text}</Number>
        <Title>{data.primary.content.text}</Title>
      </StyledBanner>
    </Section>
  </React.Fragment>
);
