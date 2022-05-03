import React from "react";
import { graphql } from "gatsby";
import { Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
// import "../../picto";
import Link from "../../utils/link";
import { media } from "../../utils/style-utils";

export const BreadCrumbs = styled.ul`
  border-radius: 10px;
  padding: 0 60px;
  border: 1px solid ${props => props.theme.color.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet`
    flex-direction:row;
  `}
`;

export const BreadCrumbsItem = styled.li`
  padding: 13px 0;
  ${media.desktop`
    & + &::before {
      font-family: "Showcase-icons";
      content: "\f152";
      transform:rotate(-90deg);
      opacity: .3;
      font-size: 15px;
      padding: 0px 60px;
      display: inline-block;
  }
`}
`;

export const BreadCrumbsItemLink = styled(Link)`
  text-decoration: none;
  &.active {
    font-weight: 600;
    color: ${props => props.theme.color.secondary};
  }
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.color.secondary};
  }
`;

export default ({ ...props }) => (
  <React.Fragment>
    <Grid>
      <Row center="xs">
        <BreadCrumbs>
          {props.data.items.map((item, index) => (
            <BreadCrumbsItem key={index}>
              <BreadCrumbsItemLink to={item.link} className={item.current === "Yes" ? "active" : ""}>
                {item.step}
              </BreadCrumbsItemLink>
            </BreadCrumbsItem>
          ))}
        </BreadCrumbs>
      </Row>
    </Grid>
  </React.Fragment>
);

export const query = graphql`
  fragment filsArianeFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainFilsDAriane {
          slice_type
          items {
            current
            link
            step
          }
        }
      }
    }
  }
`;
