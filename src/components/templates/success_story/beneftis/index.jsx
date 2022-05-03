import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo2, Body } from "../../../typographie";
import { Title } from "./styled";
import Icon from "../../../icon";

import Section from "../../../utils/section";
import { Margin } from "styled-components-spacing";
import DividerBlue from "../../../utils/divider-blue";

//@TO DO

export default ({ data }) => (
  <React.Fragment>
    <Section
      bottom="40"
      style={{
        background: "linear-gradient(#f9f9f9, #fff)"
      }}
    >
      <Grid>
        <Row center="xs">
          <Col md={8} xs={12}>
            <Typo2 center>{data.primary.title.text}</Typo2>
            <Margin top={4} bottom={5}>
              <DividerBlue center />
            </Margin>
          </Col>
        </Row>
        <Row around="xs" center="xs">
          {data.items.map((item, index) => (
            <Col
              key={index}
              md={4}
              xs={12}
              style={{
                textAlign: "center",
                padding: "0 20px",
                marginBottom: "80px"
              }}
            >
              <div style={{ display: "inline-block" }}>
                <Icon className={item.picto_class} style={{ margin: "0 auto" }} />
              </div>
              <Title>{item.title}</Title>
              <Body>{item.content.text}</Body>
            </Col>
          ))}
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
);
