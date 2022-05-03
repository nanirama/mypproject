import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Body } from "../../../typographie";
import Section from "../../../utils/section";
import styled from "styled-components";

export const ImageIntro = styled.img`
  max-width: 300px;
`;

export default ({ picture, text }) => (
  <React.Fragment>
    <Section>
      <Grid>
        <Row center="xs">
          <Col md={9} xs={12}>
            <Row middle="xs">
              <Col md={5} xs={12}>
                <ImageIntro className="img" src={picture} />
              </Col>
              <Col md={5} xs={12} style={{ textAlign: "left" }}>
                <Body
                  style={{ padding: "20px 0 0 20px" }}
                  dangerouslySetInnerHTML={{ __html: text.text }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
);
