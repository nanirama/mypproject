import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { graphql } from "gatsby";
import {
  StyledProvider,
  StyledLogoProvider,
  StyledProviderItem
} from "./styled";

export default ({ data }) => (
  <React.Fragment>
    <Grid>
      <Row>
        <Col md={12} xs={12}>
          <StyledProvider>
            {data.items.map((integration, index) => (
              <StyledProviderItem key={index}>
                <StyledLogoProvider>
                  <img alt="" src={integration.logo.url} />
                </StyledLogoProvider>
              </StyledProviderItem>
            ))}
          </StyledProvider>
        </Col>
      </Row>
    </Grid>
  </React.Fragment>
);

export const query = graphql`
  fragment integrations2Fragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainIntegrations {
          slice_type
          items {
            logo {
              url
            }
          }
        }
      }
    }
  }
`;
