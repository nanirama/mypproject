import React from "react";
import { Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import { LogoDefault } from "../../../logo";
import { ButtonSecondary } from "../../../button";
import { media } from "../../../utils/style-utils";
import Route from "../../../../localization";
import Link from "../../../utils/link";
import { exportLocale } from "../../../../localization";

const Header = styled.div`
  padding: 20px 10px;
  box-shadow: 0 0 0 1px #ebf0f5;
  margin-bottom: 30px;
  ${media.tablet`
    padding:20px 0; 
  `};
`;

export default ({ ...props }) => (
  <Header>
    <Grid>
      <Row between="xs" middle="xs">
        <div md={4}>
          <Link to={Route[props.lang]["homepage"]}>
            <LogoDefault />
          </Link>
        </div>
        <div md={4}>
          <Link to={Route[props.lang]["demo-v2"]}>
            <ButtonSecondary to={exportLocale(props.lang).hero.Request_demo.to}>
              {exportLocale(props.lang).hero.Request_demo.button}
            </ButtonSecondary>
          </Link>
        </div>
      </Row>
    </Grid>
  </Header>
);
