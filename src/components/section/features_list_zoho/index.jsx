import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import { media } from "../../utils/style-utils";
import { Body } from "../../typographie";
import { graphql } from "gatsby";
// import "../../picto";

export const Icon = styled.i`
  margin-right: 15px;
  font-size: 22px;
`;
export const Items = styled.div`
  border: none;
  display: flex;
  ${media.tablet`
  width: 33.2%;
  border-right: 1px solid #f2f2f2;
  `} align-items: center;
  text-align: left;
  flex-wrap: wrap;

  &:nth-child(3n) {
    border: none;
  }
`;

export const ItemsSub = styled.div`
  display: flex;
  padding: 15px 0;

  width: 205px;
  margin: 0 auto;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
  flex-direction: row;
  `} flex-wrap: wrap;
`;

export default ({ ...props }) => (
  <React.Fragment>
    <Grid>
      <Row>
        <Col xs={12}>
          <ItemsWrapper>
            {props.data.items.map((item, index) => (
              <Items key={index}>
                <ItemsSub>
                  <Icon className={item.picto_class} />
                  <Body>{item.title.text}</Body>
                </ItemsSub>
              </Items>
            ))}
          </ItemsWrapper>
        </Col>
      </Row>
    </Grid>
  </React.Fragment>
);

export const query = graphql`
  fragment featureShortFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainFeaturesListShort {
          slice_type
          items {
            title {
              text
            }
            picto_class
          }
        }
      }
    }
  }
`;
