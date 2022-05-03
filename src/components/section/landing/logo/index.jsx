import React from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Margin } from "styled-components-spacing";
import { SpaceH } from "../../../space";
// import styled from "styled-components";

export default ({ ...props }) => (
  <React.Fragment>
    <Margin vertical={{ xs: "0", md: "0" }}>
      <Grid>
        <Row center="xs">
          <Col md={8} xs={12} style={{ maxWidth: props.data.primary.max_width + "px" }}>
            <img src={props.data.primary.logo.url} alt="" className="img-responsive" />
          </Col>
        </Row>
      </Grid>
    </Margin>
    <SpaceH of={32} />
  </React.Fragment>
);

export const query = graphql`
  fragment logoLandingsFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainLogo {
          slice_type
          primary {
            logo {
              url
            }

            logo {
              fluid(maxWidth: 900) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }
            align
            max_height
            max_width
          }
        }
      }
    }
  }
`;
