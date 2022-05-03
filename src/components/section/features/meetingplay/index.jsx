import React from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
// import { Body, Typo4, Typo3, Typo5 } from "../../../typographie";
import { Margin } from "styled-components-spacing";
import { SpaceH } from "../../../space";
import styled from "styled-components";
import { media } from "../../../utils/style-utils";
import LinkHelper from "../../../utils/link";

export const Background = styled.div`
  padding: 40px 0 20px 0;
  ${media.tablet`padding:30px 0 10px 0;`};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: center;
  ${media.tablet``};
`;

export const Title = styled.div`
  margin-bottom: 40px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.3rem;
`;

export const Feature = styled.div`
  color: #4c4c58;
`;

export const LinkToFeatures = styled(LinkHelper)`
  text-decoration: underline;
  &.hover {
    cursor: pointer;
  }
`;

const Icon = styled.i`
  font-size: 30px;
  color: ${(props) => props.theme.color.primary};
`;

export default ({ ...props }) => (
  <Background
    style={{
      backgroundColor: props.data.primary.grey_background ? "#F9FAFC" : "",
    }}
  >
    <Grid>
      <Row center="xs">
        <Col xs={12}>
          <Title>{props.data.primary.title_meetingplay}</Title>
        </Col>
      </Row>
      <Row around="xs">
        {props.data.items.map((item) => (
          <Col md={2} xs={6}>
            <Wrapper>
              <Icon className={item.picto}></Icon>
              <Margin top={2}>
                <Feature>{item.feature}</Feature>
              </Margin>
            </Wrapper>
          </Col>
        ))}
      </Row>
      {props.data.primary.link_anchor && (
        <>
          <SpaceH of={20} />
          <Row center="xs">
            <Col xs={12}>
              <LinkToFeatures target="_blank" to={props.data.primary.link_href}>
                {props.data.primary.link_anchor}
              </LinkToFeatures>
            </Col>
          </Row>
        </>
      )}
    </Grid>
  </Background>
);

export const query = graphql`
  fragment meetingPlayFeatureFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainMeetingplayFeature {
          slice_type
          primary {
            link_anchor
            link_href
            grey_background
            title_meetingplay
          }
          items {
            picto
            feature
          }
        }
      }
    }
  }
`;
