import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo2 } from "../../../typographie";
import Section from "../../../utils/section";
import styled from "styled-components";
import DividerBlue from "../../../utils/divider-blue";
import { Margin } from "styled-components-spacing";
import { media } from "../../../utils/style-utils";

export const Number = styled.div`
  color: ${props => props.theme.color.secondary};
  font-size: 2.5rem;
  ${media.tablet`
  font-size: 4rem;
  `} text-align: center;
  font-weight: 800;
`;
export const Label = styled.div`
  text-align: center;
  margin-top: 5px;
  font-weight: 600;
  text-transform: lowercase;
  margin-bottom: 50px;
  /* */
  color: ${props => props.theme.color.body};
`;

export default ({ data }) => (
  <React.Fragment>
    <Section
      style={{
        background: "rgba(249, 249, 249,0.8)"
      }}
    >
      <Grid>
        <Row center="xs">
          <Col xs={12}>
            <Typo2>{data.primary.title.text}</Typo2>
            <Margin top={4} bottom={4}>
              <DividerBlue center />
            </Margin>
          </Col>
        </Row>
        <Row around="xs">
          {data.items.map((item, index) => (
            <Col md={4} xs={12} key={index}>
              <Number>{item.number}</Number>
              <Label>{item.label}</Label>
            </Col>
          ))}
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
);
