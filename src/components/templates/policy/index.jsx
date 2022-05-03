import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { StyledPolicy } from "./styled";
import { graphql } from "gatsby";

export default ({ data }) => {
  let html = data.primary.policy_content.html;
  return (
    <Grid>
      <Row center="md">
        <Col xs={12} md={9}>
          <StyledPolicy
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
          <br />
          <br />
        </Col>
      </Row>
    </Grid>
  );
};

export const query = graphql`
  fragment policyFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainPolicy {
          slice_type
          primary {
            policy_content {
              text
              html
            }
          }
        }
      }
    }
  }
`;
