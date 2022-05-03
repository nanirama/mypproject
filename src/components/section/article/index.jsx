import React, { Component } from "react";
import { graphql } from "gatsby";
import { Row } from "react-flexbox-grid";
import SwapImage from "../../image";
import { Body, Small, Typo2, Typo4, Typo5, Typo7 } from "../../typographie";
import {
  StyledArticle,
  StyledArticleDivider,
  ColOrderArticle,
  ArticleListItem,
  Icon,
  Items,
  IconImg,
  VideoWrapper,
} from "./styled";
import { Margin } from "styled-components-spacing";
import { GridLarge } from "../../utils/grid";
import Video from "../../video";
import { ButtonPrimary, ButtonSecondary } from "../../button";
import { SpaceH } from "../../space";
import ScrollAnimation from "react-animate-on-scroll";
import { LinkInternal } from "../../utils/link";

export default class Article extends Component {
  render() {
    const t = this.props.data.primary;
    const videosData = JSON.parse(t.video_link);
    const layout = this.props.layout !== null && this.props.layout !== undefined ? this.props.layout : "v";
    this.order = this.props.odd === "Yes" ? 2 : 1;
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: this.props.data.primary.background_odd === "Yes" ? "#F9FAFC" : "",
          }}
        >
          <StyledArticle odd={this.props.odd}>
            <GridLarge>
              {layout && layout === "v" && (
                <Row middle="xs" start="xs">
                  <ColOrderArticle xs={12} lg={5} smOffset={this.props.odd ? 1 : 0} order={this.order}>
                    <Small>{t.feature.text}</Small>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                      <Typo2 color="#00CC88" style={{ fontSize: "28px" }}>
                        {this.props.title}
                      </Typo2>
                    </ScrollAnimation>
                    {/* {this.props.title !== null && (
                      <Margin vertical={{ xs: "2", md: "4" }}>
                        <StyledArticleDivider />
                      </Margin>
                    )} */}
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                      {this.props.data.items &&
                      this.props.data.items.length > 0 &&
                      this.props.data.items[0]["article_list_item"] !== null ? (
                        this.props.data.items.map((item, key) => (
                          <>
                            {item.article_icon != null || item.article_icon_img != null ? (
                              <Items key={key}>
                                <div style={{ width: "50px" }}>
                                  <IconImg>
                                    <img src={item.article_icon_img.url} className="img-responsive" />
                                  </IconImg>
                                </div>
                                <Margin left={{ xs: "0", md: "4" }} top={{ xs: "4", md: "0" }}>
                                  <Typo5 bold>{item.article_list_item}</Typo5>
                                </Margin>
                              </Items>
                            ) : (
                              <ArticleListItem key={key}>
                                <Icon className="icons8-checked" />
                                {item.article_list_item}
                              </ArticleListItem>
                            )}
                          </>
                        ))
                      ) : (
                        <Body
                          dangerouslySetInnerHTML={{
                            __html: this.props.body.html,
                          }}
                        />
                      )}
                    </ScrollAnimation>

                    {t.button && (
                      <>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                          <SpaceH of={30} />
                          <ButtonSecondary size={"big"} to={LinkInternal(t.link_slug_v2, t.link_slug, this.props.lang)}>
                            {t.link_anchor}
                          </ButtonSecondary>
                        </ScrollAnimation>
                      </>
                    )}
                  </ColOrderArticle>
                  <ColOrderArticle centerflex="true" xs={12} lg={6} smOffset={this.props.odd ? 0 : 1} order={1}>
                    {t.video_webm && t.video_webm.url != "" ? (
                      <VideoWrapper odd={this.props.odd}>
                        <Video webm={t.video_webm.url} mp4={t.video_mp4.url} poster={t.article_image.fluid.src} />
                      </VideoWrapper>
                    ) : (
                      <Margin vertical={{ xs: 3, md: "0" }}>
                        <SwapImage
                          className="img-responsive"
                          style={{
                            width: this.props.maxWidth ? this.props.maxWidth + "px" : "500px",
                            margin: "0 auto",
                          }}
                          src={this.props.img}
                          fluidImage={this.props.data.primary.article_image}
                        />
                      </Margin>
                    )}
                  </ColOrderArticle>
                </Row>
              )}
            </GridLarge>
          </StyledArticle>
        </div>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  fragment article on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainArticle {
          slice_type
          items {
            article_list_item
            article_icon
            article_icon_img {
              url
            }
          }
          primary {
            background_odd
            button
            video_link
            odd
            article_title {
              text
            }
            link_anchor
            article_image {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }
            max_width_picture
            layout
            article_content {
              text
              html
            }
            feature {
              text
            }
            link_slug
            link_slug_v2 {
              uid
              type
              target
              slug
              lang
              link_type
              document {
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
            video_mp4 {
              url
            }
            video_webm {
              url
            }
          }
        }
      }
    }
  }
`;

// export const query = graphql`
//   fragment articleFragment on Query {
//     data {
//       bodyMain {
//         slice_type
//         primary {
//           odd
//           max_width_picture
//           layout
//           article_image {
//             url
//           }
//           article_title {
//             text
//             type
//           }
//           article_content {
//             text
//             type
//           }
//         }
//       }
//     }
//   }
// `;
