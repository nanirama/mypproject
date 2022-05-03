import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { graphql } from "gatsby";
import { Body } from "../../typographie";
import { Margin } from "styled-components-spacing";
import YouTube from "react-youtube";
import Arrow from "../../../assets/images/arrow_right_green.svg";
import styled from "styled-components";
import {
  LogoQuote,
  WrapperQuote,
  NumberWrapper,
  Number,
  NumberContainer,
  NumberLabel,
  ReadMore,
  IconArrow
} from "./styled";
import { LinkInternal } from "../../utils/link";

export const YoutubeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  box-shadow: ${props => props.theme.shadow.primary};
  padding-top: 30px;
  height: 0;
  overflow: hidden;

  & iframe,
  & object,
  & embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const opts = {
  height: "390",
  width: "640",
  allowfullscreen: "true",
  playerVars: {
    autoplay: 0,
    controls: 1,
    rel: 0,
    fs: 0
  }
};

export default ({ data, lang }) => (
  <React.Fragment>
    <Grid>
      <Row middle="xs">
        <Col xs={12} md={7}>
          <YoutubeContainer>
            <YouTube videoId={data.primary.youtube_id} opts={opts} />
          </YoutubeContainer>
        </Col>
        <Col xs={12} md={5}>
          <WrapperQuote>
            <LogoQuote src={data.primary.logo.url} />
            <Margin top="3" bottom="3">
              <Body>{data.primary.body_quote.text}</Body>
            </Margin>
            <NumberWrapper>
              {data.items.map((n, index) => (
                <NumberContainer key={index}>
                  <React.Fragment>
                    <Number>{n.number}</Number>
                    <NumberLabel>{n.number_label}</NumberLabel>
                  </React.Fragment>
                </NumberContainer>
              ))}
            </NumberWrapper>
            {data.primary.link_slug_v2 !== null && (
              <ReadMore to={LinkInternal(data.primary.link_slug_v2, null, lang)}>
                {data.primary.link_anchor} <IconArrow src={Arrow} />
              </ReadMore>
            )}
          </WrapperQuote>
        </Col>
      </Row>
    </Grid>
  </React.Fragment>
);

export const query = graphql`
  fragment testimonailsSolutionFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainQuoteSolution {
          slice_type
          primary {
            link_anchor
            link_slug
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
            logo {
              url
            }
            body_quote {
              text
            }
            youtube_id
            event_name {
              text
            }
          }
          items {
            number
            number_label
          }
        }
      }
    }
  }
`;
