import styled from "styled-components";
import { graphql } from "gatsby";
import { Grid } from "react-flexbox-grid";

export default styled(Grid)`
  opacity: 0.1;
  background-color: ${props => props.theme.color.primary};
  height: 1px;
  display: block;
`;

export const query = graphql`
  fragment dividerFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainDivider {
          slice_type
          primary {
            color
          }
        }
      }
    }
  }
`;
