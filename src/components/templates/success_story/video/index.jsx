import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import WistiaEmbed from "../../../wistia";
import Section from "../../../utils/section";

export default ({ data }) => (
  <React.Fragment>
    <Section bottom="40">
      <Grid>
        <Row center="xs">
          <Col xs={12} md={8}>
            <WistiaEmbed chaptersOn="false" doNotTrack hashedId={data.primary.wistia_id} playerColor="#123456" />
          </Col>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
);
