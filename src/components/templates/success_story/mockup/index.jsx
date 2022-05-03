import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

export const Background = styled.div`
  background: ${props => props.theme.color.primary};
`;

export default ({ data }) => (
  <React.Fragment>
    <Background>
      <Grid>
        <Row center="xs">
          <Col xs={12}>
            <img className="img" alt="" src={data.primary.picture.url} />
          </Col>
        </Row>
      </Grid>
    </Background>
  </React.Fragment>
);
