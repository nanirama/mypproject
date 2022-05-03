import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { graphql } from "gatsby";
import styled from "styled-components";
import Link, { LinkInternal } from "../../utils/link";
import { media } from "../../utils/style-utils";
import Image from "../../image";

export const ImageWrapper = styled.div`
  width: 100%;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.22);
  ${media.tablet`
    width: ${props => props.width}px;
  `}
  margin: 0 auto;
`;

export default ({ ...props }) => (
  <Grid>
    <Row center="xs">
      <Col md={12} xs={12}>
        <ImageWrapper width={props.data.primary.max_width}>
          <Link to={LinkInternal(props.data.primary.link, null, null)}>
            <Image
              className="img-responsive"
              fluidImage={props.data.primary.picture}
              src={props.data.primary.picture.fluid.src}
            />
          </Link>
        </ImageWrapper>
      </Col>
    </Row>
  </Grid>
);

export const query = graphql`
  fragment imageFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainImageCenter {
          slice_type
          primary {
            link {
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

            max_width
            picture {
              fluid(maxWidth: 1300) {
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
