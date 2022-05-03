import React from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import { media } from "../../utils/style-utils";

import styled from "styled-components";

export const Banner = styled.div`
  background: url(${props => props.picture}) no-repeat;
  background-size: cover;
  height: 300px;
  ${media.tablet`
  height: 600px;
  `}
  /* max-width: 160px; */
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;

  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 32px rgba(0, 0, 0, 0.2);
  &:after {
    content: " ";
    background: #000;
    width: 100%;
    height: 600px;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

export const BannerTitle = styled.div`
  color: #fff;
  padding: 15px;
  z-index: 2;
  font-size: 2rem;
  text-align: center;
  ${media.tablet`
  font-size: 3rem;
  `}
`;

export const BannerSubtitle = styled.div`
  color: #fff;
  z-index: 2;
  font-size: ${props => props.theme.fontSize.typo2};
  max-width: 700px;
  position: relative;
  text-align: center;
  margin-top: 30px;
`;

export default ({ ...props }) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <Banner picture={props.data.primary.picture.fluid.src}>
          <BannerTitle>{props.data.primary.title.text}</BannerTitle>
          {/* <BannerSubtitle>
        Drive coastal tourism to the island of Maui, and increase traffic to the
        official government website.
      </BannerSubtitle> */}
        </Banner>
      </Col>
    </Row>
  </Grid>
);

export const query = graphql`
  fragment bannerTextsFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainBannerTitle {
          slice_type
          primary {
            picture {
              fluid(maxWidth: 2200) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }

            title {
              text
            }
          }
        }
      }
    }
  }
`;
