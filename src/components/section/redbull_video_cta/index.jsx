import React from "react";
import { Grid, Row } from "react-flexbox-grid";
import { graphql } from "gatsby";
import styled from "styled-components";
import { ColFlex } from "../../utils/grid";
import { Body } from "../../typographie";
import { ButtonSecondary } from "../../button";
import { Margin } from "styled-components-spacing";
import { media } from "../../utils/style-utils";
import Modal from "./modal";
import { LinkInternal } from "../../utils/link";

export const CustomersVideoWrapper = styled.div`
  border: 1px solid #eee;
  width: 100%;
  margin-bottom: 40px;
  padding: 0 0 30px 0;
  box-shadow: 0px 4.5px 6.5px 0 rgba(181, 197, 213, 0.4);
  border: 1px solid #eee;
  text-align: center;
  ${media.tablet`
    margin:10px 0;
  `};
`;

export const CustomerVideoCaption = styled.div`
  border-top: 1px solid #eee;
  min-height: 170px;
  padding: 30px;
`;
export const CustomersVideoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  //justify-content: space-around;
  flex-direction: column;
  margin-bottom: 30px;
  ${media.tablet`
    flex-direction:row;
    margin-bottom:0;
  `};
`;

export const LogoCustomers = styled.img`
  max-width: 280px;
`;

export const LogoSwapcard = styled.img`
  max-width: 200px;
`;

export const With = styled.div`
  margin-top: 10px;
`;

const Tag = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export default ({ ...props }) => (
  <Grid>
    <Row center="xs">
      {props.data.items.map((item, index) => (
        <ColFlex md={4} xs={12} key={index}>
          <CustomersVideoWrapper>
            <Modal logo={item.logo.url} youtube={item.youtube_id} to={item.case_link} />
            {/* <CustomersVideoLogo class="img-responsive" src={item.logo.url} /> */}
            <CustomerVideoCaption>
              {item.tag_1 && <Tag>{item.tag_1}</Tag>}
              <Body>{item.introduction.text}</Body>
            </CustomerVideoCaption>
            <Margin top={0}>
              {item.link_slug_v2 !== null && (
                <ButtonSecondary to={LinkInternal(item.link_slug_v2, null, props.lang)}>
                  {item.case_anchor}
                </ButtonSecondary>
              )}
              {/* {/* <ButtonSecondary style={{ marginLeft: "10px" }} inverted="true">
                Read more
              </ButtonSecondary> */}
            </Margin>
          </CustomersVideoWrapper>
        </ColFlex>
      ))}
    </Row>
  </Grid>
);

export const query = graphql`
  fragment listCustomersVideoFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainListCustomersVideo {
          slice_type
          items {
            tag_1
            tag_2
            youtube_id
            case_anchor
            case_link
            logo {
              url
            }
            introduction {
              text
            }
            link_slug_v2 {
              link_type
              document {
                ... on PrismicSuccessStory {
                  id
                  data {
                    body {
                      ... on PrismicSuccessStoryBodyMeta {
                        id
                        primary {
                          route
                        }
                      }
                    }
                  }
                }

                ... on PrismicTemplate2 {
                  id
                  data {
                    body {
                      ... on PrismicTemplate2BodyMeta {
                        id
                        primary {
                          route
                        }
                      }
                    }
                  }
                }

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
          }
        }
      }
    }
  }
`;
