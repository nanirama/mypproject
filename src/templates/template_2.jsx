import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import withLocation from "../HOC/location";
import Space from "../components/space";
import Support from "../components/section/support";
import PricingContactForm from "../components/section/pricing_contact_form";
import SupportSegmentation from "../components/section/support_splitting";
import PricingConfig from "../components/section/pricing_v4/configuration";
import BuildPlanV2 from "../components/section/pricing_v6_build_plan";
import Checkout from "../components/section/pricing_v4/checkout";
import CheckoutConfirmation from "../components/section/pricing_v4/checkout-confirmation";
import MarvelApp from "../components/section/marvelapp";
import TitleSubTitle from "../components/section/title_subtitle";
import GetInTouch2 from "../components/section/get_in_touch_v2";

const Template2 = ({ ...props }) => {
  const previewData = typeof window !== "undefined" && window.__PRISMIC_PREVIEW_DATA__;
  const dataInitial = previewData ? previewData.prismicTemplate2 : props.data.prismicTemplate2;

  return (
    <Layout dataNavigation={props.data.translation} pageContext={props.pageContext}>
      {dataInitial.data.bodyMain.map((slice, index) => (
        <React.Fragment key={index}>
          {slice.slice_type === "space" && <Space data={slice} />}
          {slice.slice_type === "contact_v2_form" && <PricingContactForm data={slice} lang={props.pageContext.lang} />}
          {slice.slice_type === "support_form" && <Support lang={props.pageContext.lang} data={slice} />}
          {slice.slice_type === "support_segmentation" && (
            <SupportSegmentation lang={props.pageContext.lang} data={slice} />
          )}

          {slice.slice_type === "_1_title_and_subtitle" && slice.primary.display !== "No" && (
            <TitleSubTitle data={slice} lang={props.pageContext.lang} />
          )}

          {slice.slice_type === "_5_get_in_touch" && <GetInTouch2 data={slice} lang={props.pageContext.lang} />}
          {slice.slice_type === "build_plan_saas" && <BuildPlanV2 data={slice} lang={props.pageContext.lang} />}
          {slice.slice_type === "pricing_simulator" && <PricingConfig data={slice} lang={props.pageContext.lang} />}
          {slice.slice_type === "checkout" && <Checkout data={slice} lang={props.pageContext.lang} />}
          {slice.slice_type === "marvelapp" && <MarvelApp data={slice} lang={props.pageContext.lang} />}
          {slice.slice_type === "checkout_confirmation" && (
            <CheckoutConfirmation data={slice} lang={props.pageContext.lang} />
          )}
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default withLocation(Template2);

export const query = graphql`
  query getDocumentTemplate2($id: String!, $lang: String!) {
    prismicTemplate2(id: { eq: $id }) {
      ...titleAndSubtitleTemplate2
      ...supportFragment
      ...supportSplittingFragment
      ...spaceT2
      ...PricingConfigData
      ...PricingContactForm
      ...PricingConfigData
      ...PricingCheckout
      ...marvelApp
      ...getInTouch2Fragment2
      ...buildPlanV2
      ...PricingCheckoutConfirmation
    }
    translation: prismicTranslate(lang: { eq: $lang }) {
      ...genericData
    }
  }
`;
