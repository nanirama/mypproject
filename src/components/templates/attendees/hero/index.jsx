import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Body } from "../../../typographie";
import { Margin } from "styled-components-spacing";
import { Home } from "./styled";
import { Typo1 } from "../../../typographie";
import Typing from "react-typing-animation";

export default ({ ...props }) => (
  <React.Fragment>
    <Grid>
      <Home>
        <Row center="xs">
          <Col xs={12} md={8}>
            <Typo1 center>{props.title}</Typo1>
            <Margin top={4} bottom={4}>
              <Body center>{props.subTitle}</Body>
            </Margin>
          </Col>
        </Row>
        <Row center="xs">
          <Col md={8} xs={12}>
            <Margin top={4} bottom={2}>
              <img className="img-responsive" src={props.img} />
            </Margin>
          </Col>
        </Row>
      </Home>
    </Grid>
  </React.Fragment>
);
