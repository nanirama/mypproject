import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import Banner from "../components/home/banner";
import Clients from "../components/home/clients";
import Production from "../components/home/production";
import SuccessSection from "../components/home/success";
import JoinCommunity from "../components/home/join-community";
import Guide from "../components/home/guide";
import Brands from "../components/home/brands";
import Technology from "../components/home/service-technology";
import EnterPrise from "../components/home/enterprise";
import Events from "../components/home/events";

export default ({ ...props }) => {
  const previewData = typeof window !== "undefined" && window.__PRISMIC_PREVIEW_DATA__;
  const dataInitial = previewData ? previewData.prismicTemplate1 : props.data.prismicHomeTemplate1;
  const { PageData } = props.data;

  const metaData = PageData.data.body.filter((item) => {
    return item.slice_type === "meta";
  });
  const HeroSection = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "hero_section";
  });
  const ClientLogos = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "customers_logo";
  });

  const Blogos = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "brand_logos";
  });

  const eventSuccess = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "event_success_section";
  });

  const eventTags = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "event_success_tags";
  });
  const smartEvents = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "create_smart_events_section";
  });
  const guideYou = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "guide_you_section";
  });

  const leadingBrands = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "how_leading_brands_section";
  });
  const serviceTechPartner = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "your_service_tech_partner";
  });
  const enterpriseSection = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "enterprise_ready_section";
  });
  const swapcardInAction = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "swapcard_in_action";
  });

  const image = metaData[0].primary.meta_card.fixed.src;

  return (
    <Layout dataNavigation={props.data.translation} pageContext={props.pageContext} seoImage={image}>
      <Banner data={HeroSection[0]} />
      <Clients data={ClientLogos[0]} logos={Blogos[0].items} />
      <Production data={PageData.data} />
      <SuccessSection data={eventSuccess[0]} tags={eventTags[0]} />
      <Events data={smartEvents[0]} />
      <Technology data={serviceTechPartner[0]} />
      <EnterPrise data={enterpriseSection[0]} />
      <Brands data={leadingBrands[0]} />
      <Guide data={guideYou[0]} />
      <JoinCommunity data={swapcardInAction[0]} />
    </Layout>
  );
};
export const query = graphql`
  query getHomeTemplate($id: String!, $lang: String!) {
    PageData: prismicHomeTemplate1(id: { eq: $id }) {
      ...heroSectionFragment
      ...clientsLogoFragment
      ...eventSuccess
      ...createSmartEvents
      ...guideYou
      ...leadingBrands
      ...serviceTechPartner
      ...enterpriseSection
      ...swapcardInAction
      id
      data {
        body {
          ... on PrismicHomeTemplate1BodyMeta {
            slice_type
            id
            primary {
              meta_card {
                fixed(width: 1200) {
                  src
                }
              }
            }
          }
        }
        event_production_heading {
          text
          html
        }
        event_production_description {
          text
          html
        }
        event_production_image {
          fluid(maxWidth: 600) {
            ...GatsbyPrismicImageFluid_noBase64
          }
        }
        event_client_review {
          document {
            ... on PrismicClientReviews {
              ...clientReviews
            }
          }
        }
        engage_title {
          text
        }
        engage_description {
          text
          html
        }
        engage_image {
          fluid(maxWidth: 600) {
            ...GatsbyPrismicImageFluid_noBase64
          }
        }
        engage_client_reviews {
          document {
            ... on PrismicClientReviews {
              ...clientReviews
            }
          }
        }
        drive_value_heading {
          text
        }
        drive_value_description {
          text
          html
        }
        drive_value_image {
          fluid(maxWidth: 700) {
            ...GatsbyPrismicImageFluid_noBase64
          }
        }
        drive_value_review {
          document {
            ... on PrismicClientReviews {
              ...clientReviews
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
// export const query = graphql`
//   query getHomeTemplate($id: String!, $lang: String!) {
//     prismicTemplate1(id: { eq: $id }) {
//       ...heroFragment
//       ...featureShortFragment
//       ...listCustomersVideoFragment
//       ...space
//       ...textVertical
//       ...benefitsFragment
//       ...webinarSaaS
//       ...titleAndSubtitle
//       ...redBull
//       ...policyFragment
//       ...featuresOverviewPicto
//       ...dividerFragment
//       ...getInTouch2Fragment
//       ...testimonailsSolutionFragment
//       ...article
//       ...pricingFeaturesBlocV3Fragment
//       ...heroSaaSFeb
//       ...youtubeFragment
//       ...pricingPackage6
//       ...landingFormFragment
//       ...hubspotSupportFragment
//       ...evolveFramgent
//       ...tabsVerticalFragment
//       ...landingStripeFragment
//       ...kpiCustomersFragment
//       ...quoteFragment
//       ...faqAttendifyFragment
//       ...quote2Fragment
//       ...twitterFragment
//       ...htmlFragment
//       ...customersLogoFragment
//       ...ebookFragment
//       ...imageFragment
//       ...logoLandingsFragment
//       ...paragraphFragment
//       ...webinarsBannerFragment
//       ...buttonsFragment
//       ...bannerTextsFragment
//       ...meetingPlayFeatureFragment
//       ...landingPricingFragment
//       ...iframeFragment
//       ...paymentGulfood
//       ...integrations2Fragment
//       ...intercom
//       ...navigationScrollFragment
//       ...pricingPackages5
//       ...filsArianeFragment
//       ...videoSliderFragment
//       ...pricingSaaSFeatures
//       ...pricingPackages4
//       ...planFragment
//       ...featuresCards
//     }

// translation: prismicTranslate(lang: { eq: $lang }) {
//   ...genericData
// }
//   }
// `;
