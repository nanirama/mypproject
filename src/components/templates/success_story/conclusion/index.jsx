import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo2 } from "../../../typographie";
import Section from "../../../utils/section";
import { Margin } from "styled-components-spacing";

export default ({ data }) => (
  <React.Fragment>
    <Section bottom="0">
      <Grid>
        <Row center="xs">
          <Col xs={12} md={9}>
            <Margin bottom={5}>
              <Typo2>{data.primary.content.text}</Typo2>
            </Margin>
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
);
