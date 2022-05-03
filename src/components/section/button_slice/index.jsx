import React from "react";
import { graphql } from "gatsby";
import Arrow from "../../../assets/images/arrow_right.svg";
import ArrowGreen from "../../../assets/images/arrow_right_green.svg";
import { Grid, Row } from "react-flexbox-grid";
import MixpanelHelper from "../../utils/segment";
import styled from "styled-components";
import { ButtonPrimary, ButtonSecondary, ButtonWhite, ButtonBlank } from "../../button";
import { LinkInternal } from "../../utils/link";

export const WrapperButton = styled.div`
  margin: 0 10px;
`;

export default ({ ...props }) => {
  return (
    <Grid>
      <Row middle="xs" center="xs">
        {props.data.items.map((button, index) => (
          <WrapperButton key={index}>
            {button.theme === "Blue" && (
              <MixpanelHelper analytics-category={"Slice Button"} analytics-label={button.link_anchor}>
                <ButtonPrimary to={LinkInternal(button.link_slug_v2, button.link_slug, props.lang)}>
                  {button.link_anchor}
                </ButtonPrimary>
              </MixpanelHelper>
            )}
            {button.theme === "Green" && (
              <MixpanelHelper analytics-category={"Slice Button"} analytics-label={button.link_anchor}>
                <ButtonSecondary to={LinkInternal(button.link_slug_v2, button.link_slug, props.lang)}>
                  {button.link_anchor}
                </ButtonSecondary>
              </MixpanelHelper>
            )}
            {button.theme === "White" && (
              <MixpanelHelper analytics-category={"Slice Button"} analytics-label={button.link_anchor}>
                <ButtonWhite to={LinkInternal(button.link_slug_v2, button.link_slug, props.lang)}>
                  {button.link_anchor}
                </ButtonWhite>
              </MixpanelHelper>
            )}
            {button.theme === "Texts" && (
              <MixpanelHelper analytics-category={"Slice Button"} analytics-label={button.link_anchor}>
                <ButtonBlank
                  color={button.custom_color}
                  to={LinkInternal(button.link_slug_v2, button.link_slug, props.lang)}
                >
                  {button.link_anchor} &nbsp;
                  <div className="hideMobile">
                    <span
                      style={{ position: "absolute", top: "2px", right: "-15px", display: "inline-block" }}
                      className="icons8-right-pointing-arrow"
                    />
                  </div>
                </ButtonBlank>
              </MixpanelHelper>
            )}
            {button.theme === "Custom color" && (
              <MixpanelHelper analytics-category={"Slice Button"} analytics-label={button.link_anchor}>
                <ButtonSecondary
                  color={button.custom_color}
                  to={LinkInternal(button.link_slug_v2, button.link_slug, props.lang)}
                >
                  {button.link_anchor}
                </ButtonSecondary>
              </MixpanelHelper>
            )}
          </WrapperButton>
        ))}
      </Row>
    </Grid>
  );
};

export const query = graphql`
  fragment buttonsFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainButtons {
          slice_type
          primary {
            align
          }
          items {
            link_slug
            custom_color
            link_slug_v2 {
              link_type
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
                ... on PrismicDemo2 {
                  id
                  data {
                    body {
                      ... on PrismicDemo2BodyMeta {
                        id
                        primary {
                          route
                        }
                      }
                    }
                  }
                }
                ... on PrismicDemo {
                  id
                  data {
                    body {
                      ... on PrismicDemoBodyMeta {
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
              }
            }
            link_anchor
            theme
          }
        }
      }
    }
  }
`;
