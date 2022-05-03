import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Section from "../../../utils/section";
import { Margin } from "styled-components-spacing";
import { Typo2, Body } from "../../../typographie";

export default ({ data }) => (
  <React.Fragment>
    <Section top={20}>
      <Grid>
        <Row center="xs">
          <Col md={8}>
            <Typo2>{data.primary.title_content}</Typo2>
          </Col>
        </Row>
        <Margin top={5}>
          <Row center="xs" middle="xs">
            <Col md={6}>
              {data.primary.picture.thumbnails.large ? (
                <img className="img" alt="" src={data.primary.picture.thumbnails.large.fluid.src} />
              ) : (
                <img className="img" alt="" src={data.primary.picture.fluid.src} />
              )}
            </Col>
            <Col md={5} mdOffset={1} style={{ textAlign: "left" }}>
              <Body
                dangerouslySetInnerHTML={{
                  __html: `${data.primary.content.text}`
                }}
              />
            </Col>
          </Row>
        </Margin>
      </Grid>
    </Section>
  </React.Fragment>
);
