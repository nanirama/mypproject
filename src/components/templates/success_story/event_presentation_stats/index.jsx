import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Body } from "../../../typographie";
import { Title } from "./styled";
import Section from "../../../utils/section";
import Icon from "../../../icon";

export default ({ data }) => (
  <React.Fragment>
    <Section>
      <Grid>
        <Row center="xs">
          {data.items.map((item, index) => (
            <Col md={3} sm={12} key={index}>
              <div style={{ display: "inline-block" }}>
                <Icon className={item.picto_class} style={{ margin: "0 auto" }} />
              </div>
              <Title>{item.title}</Title>
              <Body>{item.sub_title}</Body>
            </Col>
          ))}
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
);
