import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo2, StyledLink } from "../../typographie";
import { StyledError, Backhome } from "./styled";
import Route from "../../../localization";

export default ({ message, backToHome, lang }) => (
  <React.Fragment>
    <Grid>
      <Row>
        <Col xs={12}>
          <StyledError>
            <Typo2 center>The request was not found (404)</Typo2>
            <Backhome>
              <StyledLink to={Route[lang]["homepage"]}>Back To Home</StyledLink>
            </Backhome>
          </StyledError>
        </Col>
      </Row>
    </Grid>
  </React.Fragment>
);
