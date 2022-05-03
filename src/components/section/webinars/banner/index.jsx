import React from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import { media } from "../../../utils/style-utils";
import styled from "styled-components";
import { ButtonSecondary } from "../../../button";
import Image from "../../../image";
import { LinkInternal } from "../../../utils/link";
import { Margin } from "styled-components-spacing/dist/cjs/Margin";

const Banner = styled.div`
  background: ${(props) => props.theme.color.primary};
  width: 100%;
  color: #fff;
  padding: 5px;
  max-width: 900px;
  border-radius: 5px;
  text-align: center;
  ${media.tablet`
  height: 224px;
  text-align:left;
  `}
  /* padding: 40px; */
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: bold;
`;
const Content = styled.div`
  /* margin-bottom: 20px; */
  line-height: 1.3;
  ${media.tablet`
  margin:0;
    /* padding-right: 20px; */
  `}
`;

export const Zoom = styled.div`
  display: none;
  ${media.tablet`
    display:block;
    width:175%;
    margin-top:-40px;
    margin-left:-50px;
  `}
`;

export default ({ ...props }) => {
  return (
    <Grid>
      <Banner>
        <Row>
          <Col md={8} xs={12}>
            <div style={{ padding: "20px 40px" }}>
              <Title>{props.data.primary.title_webinar}</Title>
              <Content>{props.data.primary.content_webinar}</Content>
              <Margin top={4}>
                <ButtonSecondary to={LinkInternal(props.data.primary.button_link, null, props.lang)}>
                  {props.data.primary.button_label}
                </ButtonSecondary>
              </Margin>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <Zoom>
              <Image fluidImage={props.data.primary.image_webinars} />
            </Zoom>
          </Col>
        </Row>
      </Banner>
    </Grid>
  );
};

export const query = graphql`
  fragment webinarsBannerFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainWebinarsBanner {
          slice_type
          primary {
            title_webinar
            content_webinar
            button_label
            button_link {
              link_type
              url
              document {
                ... on PrismicTemplate1 {
                  id
                  data {
                    body {
                      ... on PrismicTemplate1BodyMeta {
                        id
                        primary {
                          route
                        }
                      }
                    }
                  }
                }
              }
            }

            image_webinars {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }
          }
        }
      }
    }
  }
`;
