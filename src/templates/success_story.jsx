import React, { Component } from "react";
import { graphql } from "gatsby";
import Hero from "../components/templates/success_story/hero";
import EventsPresentation from "../components/templates/success_story/event_presentation_stats";
import Video from "../components/templates/success_story/video";
import BannerTextsKpi from "../components/templates/success_story/banner_texts_kpi";
import SuccessStatement from "../components/templates/success_story/beneftis";
import FullBanner from "../components/templates/success_story/full_banner";
import Quote from "../components/templates/success_story/quote";
import FullText from "../components/templates/success_story/full_text";
import BigMetrics from "../components/templates/success_story/big_metrics";
import GetInTouch2 from "../components/section/get_in_touch_v2";
import Mockup from "../components/templates/success_story/mockup";
import Youtube from "../components/section/youtube";
import Space from "../components/space";
import Conclusion from "../components/templates/success_story/conclusion";
import Layout from "../components/layout";

export default class SuccessStory extends Component {
  render() {
    const previewData = typeof window !== "undefined" && window.__PRISMIC_PREVIEW_DATA__;
    const dataInitial = previewData ? previewData.prismicSuccessStory : this.props.data.prismicSuccessStory;
    return (
      <Layout dataNavigation={this.props.data.translation} pageContext={this.props.pageContext}>
        {dataInitial.data.bodySuccess.map((slice, index) => (
          <React.Fragment key={index}>
            {slice.slice_type === "hero_logo" && <Hero data={slice} lang={this.props.pageContext.lang} />}

            {slice.slice_type === "event_presentation_stats" && <EventsPresentation data={slice} />}

            {slice.slice_type === "space" && <Space data={slice} />}

            {slice.slice_type === "video" && <Video data={slice} />}

            {slice.slice_type === "banner_texts" && <BannerTextsKpi data={slice} />}

            {slice.slice_type === "youtube" && <Youtube data={slice} />}

            {slice.slice_type === "title_and_statement" && <SuccessStatement data={slice} />}

            {slice.slice_type === "full_banner_image" && <FullBanner data={slice} />}

            {slice.slice_type === "full_text" && <FullText data={slice} />}

            {slice.slice_type === "quote" && <Quote data={slice} />}

            {slice.slice_type === "iphone_mockup" && <Mockup data={slice} />}

            {slice.slice_type === "bottom_conclusion" && <Conclusion data={slice} />}

            {slice.slice_type === "get_in_touch_v2" && <GetInTouch2 data={slice} lang={this.props.pageContext.lang} />}

            {slice.slice_type === "big_metrics" && <BigMetrics data={slice} />}
          </React.Fragment>
        ))}
      </Layout>
    );
  }
}

export const query = graphql`
  query getDocumentSuccess($id: String!, $lang: String!) {
    prismicSuccessStory(id: { eq: $id }) {
      data {
        bodySuccess {
          __typename

          ... on PrismicSuccessStoryBodySuccessFullBannerImage {
            slice_type
            primary {
              full_image {
                url
              }

              full_image {
                fluid(maxWidth: 2200) {
                  ...GatsbyPrismicImageFluid_noBase64
                }
              }
            }
          }

          ... on PrismicSuccessStoryBodySuccessQuote {
            slice_type
            items {
              picture {
                url
              }

              picture {
                fluid(maxWidth: 130) {
                  ...GatsbyPrismicImageFluid_noBase64
                }
              }

              quote_content {
                text
                html
              }
              name
              position
            }
          }

          ... on PrismicSuccessStoryBodySuccessIphoneMockup {
            slice_type
            primary {
              background_color
              picture {
                url
              }

              picture {
                fluid(maxWidth: 2200) {
                  ...GatsbyPrismicImageFluid_noBase64
                }
              }
            }
          }

          ... on PrismicSuccessStoryBodySuccessBannerTexts {
            slice_type
            primary {
              content {
                text
                html
              }
              number {
                html
                text
              }
            }
          }

          ... on PrismicSuccessStoryBodySuccessBigMetrics {
            slice_type
            items {
              number
              label
            }
            primary {
              title {
                text
              }
            }
          }

          ... on PrismicSuccessStoryBodySuccessBottomConclusion {
            slice_type
            primary {
              content {
                text
                html
              }
            }
          }

          ... on PrismicSuccessStoryBodySuccessGetInTouchV2 {
            slice_type
            primary {
              title {
                text
                html
              }
              custom_link
              custom_label
              button_type
              theme
              margin
            }
          }

          ... on PrismicSuccessStoryBodySuccessVideo {
            slice_type
            primary {
              wistia_id
            }
          }

          ... on PrismicSuccessStoryBodySuccessFullText {
            slice_type
            primary {
              title_content

              picture {
                url
              }

              picture {
                fluid(maxWidth: 800) {
                  ...GatsbyPrismicImageFluid_noBase64
                }

                thumbnails {
                  large {
                    fluid(maxWidth: 800) {
                      ...GatsbyPrismicImageFluid_noBase64
                      src
                    }
                    url
                  }
                }
              }

              content {
                text
                html
              }
            }
          }

          ... on PrismicSuccessStoryBodySuccessTitleAndStatement {
            slice_type
            primary {
              title {
                text
              }
            }
            items {
              picto_class
              title
              content {
                text
                html
              }
            }
          }

          ... on PrismicSuccessStoryBodySuccessSpace {
            slice_type
            primary {
              top
              bottom
            }
          }

          ... on PrismicSuccessStoryBodySuccessYoutube {
            slice_type
            primary {
              youtube_id
            }
          }

          ... on PrismicSuccessStoryBodySuccessHeroLogo {
            primary {
              title {
                html
                text
              }
              background {
                url
              }

              background {
                fluid(maxWidth: 2000) {
                  ...GatsbyPrismicImageFluid_noBase64
                }
              }

              logo_swapcard {
                url
              }

              logo_swapcard {
                fluid(maxWidth: 300) {
                  ...GatsbyPrismicImageFluid_noBase64
                }
              }

              logo_customers {
                url
              }

              logo_customers {
                fluid(maxWidth: 300) {
                  ...GatsbyPrismicImageFluid_noBase64
                }
              }

              downloadpdf {
                url
              }
              downloadcta
            }
            slice_type
          }

          ... on PrismicSuccessStoryBodySuccessEventPresentationStats {
            slice_type
            items {
              picto_class
              title
              sub_title
            }
          }
        }
      }
    }

    translation: prismicTranslate(lang: { eq: $lang }) {
      ...genericData
    }
  }
`;
