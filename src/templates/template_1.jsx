import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/section/hero";
import HeroSaaS from "../components/section/hero_saas";
import Article from "../components/section/article";
import GetInTouch2 from "../components/section/get_in_touch_v2";
// import FAQ from "../components/section/faq";
// import Statement from "../components/section/statement";
import Space from "../components/space";
import WidgetSwapcard from "../components/section/widget_swapcard";
import HtmlField from "../components/section/html_field";
import WebinarsBanner from "../components/section/webinars/banner";
import Testimonials from "../components/section/testimonials_video_with_kpi";
import ButtonSlice from "../components/section/button_slice";
// import PrevNextButtons from "../components/section/prev_next_buttons";
import CustomersLogo from "../components/section/customers_logo";
import Integrations from "../components/section/integrations";
import EvolveBanner from "../components/section/evolve_banner";
import Policy from "../components/templates/policy";
import RedbullVideoCTA from "../components/section/redbull_video_cta";
import TitleSubTitle from "../components/section/title_subtitle";
import Paragraph from "../components/section/paragraph";
import TextVerticalImage from "../components/section/home_tabs";
// import Discovery from "../components/section/discovery";
import NavigationScroll from "../components/section/navigation_scroll";
import FeaturesOverviewScreenshots from "../components/section/features_overview_picto";
import TabsVerticalBigTexts from "../components/section/tabs_vertical_big_texts";
// import TabsHorizontal2 from "../components/section/tabs_horizontal_2";
import FeaturesListShortZoho from "../components/section/features_list_zoho";
import QuoteSlider from "../components/section/quote/slider";
import HubspotSupport from "../components/section/hubspot_support";
import QuoteV3 from "../components/section/quote/single";
import LogoLanding from "../components/section/landing/logo";
import LandingForm from "../components/section/landing/form";
import LandingPricing from "../components/section/landing/pricing";
import LandingStripe from "../components/section/landing/stripe";
import LandingGulfoodPayment from "../components/section/landing/gulfood";
import Twitter from "../components/section/twitter";
import RedBull from "../components/section/red_bull";
import Youtube from "../components/section/youtube";
import BenefitsGeneric from "../components/section/benefits";
import MeetingPlayFeatures from "../components/section/features/meetingplay";
// import BreadCrumbs from "../components/section/breadcrumbs";
import Image from "../components/section/image_center";
// import PricingNewPackages from "../components/section/pricing_new/packages";
import Intercom from "../components/section/intercom";

import Divider from "../components/section/divider";
// import Help from "../components/section/help";
import FaqAttendify from "../components/section/faq_attendify";
import KPICustomers from "../components/section/kpi_customers";
import Wallpaper from "../components/section/wallpaper";
// import Card from "../components/section/card_features";
import PricingV3FeaturesBloc from "../components/section/pricing_v3/features";
import VideoSlider from "../components/section/video_slider_youtube";
import Layout from "../components/layout";
import PricingPackages from "../components/section/pricing_v4/packages";
import PricingPackagesV5 from "../components/section/pricing_v5";
import PricingPackagesV6 from "../components/section/pricing_v6";
import FeaturesCards from "../components/section/features_cards";
import EbookBanner from "../components/section/ebooks";
import WebinarSaaS from "../components/section/webinar_saas";
import Registration from "../components/section/registration";
// import ClientOnly from "../HOC/clients";
import PricingV6FeaturesSaas from "../components/section/pricing_v6_features_saas";

export default ({ ...props }) => {
  const previewData = typeof window !== "undefined" && window.__PRISMIC_PREVIEW_DATA__;
  const dataInitial = previewData ? previewData.prismicTemplate1 : props.data.prismicTemplate1;
  return (
    <Layout dataNavigation={props.data.translation} pageContext={props.pageContext}>
      <div style={{ backgroundColor: props.pageContext.background_color }}>
        {dataInitial.data.bodyMain.map((slice, index) => (
          <React.Fragment key={index}>
            {/* <pre>{slice.slice_type}</pre> */}
            {slice.slice_type === "hero" && <Hero lang={props.pageContext.lang} data={slice} />}
            {/* {slice.slice_type === "statement" && (
              <Statement title={slice.primary.statement_title[0].text} body={slice.primary.statement_body} />
            )} */}

            {/* {slice.slice_type === "pricing_new_packages" && (
              <PricingNewPackages allData={props.data.prismicTemplate1.data.bodyMain} lang={props.pageContext.lang} />
            )} */}
            {slice.slice_type === "youtube" && <Youtube data={slice} />}
            {slice.slice_type === "hero_saas" && <HeroSaaS data={slice} lang={props.pageContext.lang} />}
            {slice.slice_type === "integrations" && <Integrations data={slice} />}
            {slice.slice_type === "features_overview_screenshots" && <FeaturesOverviewScreenshots data={slice} />}
            {slice.slice_type === "red_bull_block" && <RedBull data={slice} lang={props.pageContext.lang} />}
            {slice.slice_type === "customers_logo" && <CustomersLogo data={slice} />}
            {/* {slice.slice_type === "help" && <Help data={slice} />} */}
            {slice.slice_type === "kpi_customers" && <KPICustomers data={slice} />}
            {slice.slice_type === "banner_title" && <Wallpaper data={slice} />}
            {slice.slice_type === "divider" && <Divider data={slice} />}
            {slice.slice_type === "html_field" && <HtmlField data={slice} />}
            {slice.slice_type === "meetingplay_feature" && <MeetingPlayFeatures data={slice} />}
            {slice.slice_type === "quote" && <QuoteV3 data={slice} />}
            {/* {slice.slice_type === "fils_d_ariane" && <BreadCrumbs data={slice} />} */}
            {slice.slice_type === "benefits_global" && <BenefitsGeneric data={slice} />}
            {slice.slice_type === "navigation_scroll" && <NavigationScroll data={slice} />}
            {slice.slice_type === "buttons" && <ButtonSlice data={slice} lang={props.pageContext.lang} />}
            {slice.slice_type === "image_center" && <Image data={slice} />}
            {slice.slice_type === "quote_solution" && <Testimonials data={slice} lang={props.pageContext.lang} />}

            {slice.slice_type === "space" && <Space data={slice} />}
            {slice.slice_type === "ebook_download" && <EbookBanner data={slice} />}
            {slice.slice_type === "evolve" && <EvolveBanner data={slice} />}
            {slice.slice_type === "logo" && <LogoLanding data={slice} />}
            {/* {slice.slice_type === "stripe" && <LandingStripe data={slice} />} */}
            {/* {slice.slice_type === "pricing_v3_packages" && (
              <PricingV3Packages data={slice} lang={props.pageContext.lang} />
            )} */}

            {slice.slice_type === "landing_pricing" && <LandingPricing data={slice} lang={props.pageContext.lang} />}
            {slice.slice_type === "form_quote_exhibitors" && <LandingForm data={slice} lang={props.pageContext.lang} />}
            {slice.slice_type === "vertical_tabs_big_texts" && <TabsVerticalBigTexts data={slice} />}
            {slice.slice_type === "hubspot_support" && <HubspotSupport data={slice} />}
            {slice.slice_type === "quote_v2" && <QuoteSlider data={slice} />}
            {slice.slice_type === "webinar_saas" && <WebinarSaaS data={slice} />}
            {slice.slice_type === "list_customers_video" && (
              <RedbullVideoCTA lang={props.pageContext.lang} data={slice} />
            )}
            {slice.slice_type === "twitter" && <Twitter data={slice} />}
            {slice.slice_type === "v2_left_text___images" && <TextVerticalImage data={slice} />}
            {slice.slice_type === "title_and_subtitle" && slice.primary.display !== "No" && (
              <TitleSubTitle data={slice} lang={props.pageContext.lang} />
            )}
            {/* {slice.slice_type === "discovery" && <Discovery data={slice} lang={props.pageContext.lang} />} */}

            {/* {slice.slice_type === "prev_and_next_buttons" && (
              <PrevNextButtons data={slice} lang={props.pageContext.lang} />
            )} */}

            {slice.slice_type === "faq_attendify" && <FaqAttendify data={slice} lang={props.pageContext.lang} />}
            {/* {slice.slice_type === "tabs_horizontal_2" && <TabsHorizontal2 data={slice} />} */}

            {slice.slice_type === "webinars_banner" && <WebinarsBanner data={slice} lang={props.pageContext.lang} />}
            {slice.slice_type === "iframe" && <WidgetSwapcard data={slice} />}
            {slice.slice_type === "features_list_short" && <FeaturesListShortZoho data={slice} />}
            {slice.slice_type === "paragraph" && <Paragraph data={slice} />}
            {slice.slice_type === "intercom" && <Intercom data={slice} />}
            {slice.slice_type === "policy" && <Policy data={slice} />}
            {slice.slice_type === "article" && (
              <Article
                layout={slice.primary.layout}
                maxWidth={slice.primary.max_width_picture}
                odd={slice.primary.odd}
                title={slice.primary.article_title.text}
                body={slice.primary.article_content}
                img={slice.primary.article_image.url}
                data={slice}
                lang={props.pageContext.lang}
              />
            )}
            {slice.slice_type === "article_two_column" && (
              <Article
                items={slice.items}
                title={slice.primary.article_title[0].text}
                body={slice.primary.article_sub_title}
                layout="two-col"
              />
            )}
            {slice.slice_type === "get_in_touch_v2" && (
              <GetInTouch2 data={slice} route={props.pageContext.route} lang={props.pageContext.lang} />
            )}
            {slice.slice_type === "_55_hero_payment" && (
              <LandingGulfoodPayment data={slice} lang={props.pageContext.lang} />
            )}
            {/* {slice.slice_type === "faq" && <FAQ data={slice} />} */}
            {/* {slice.slice_type === "funcionalities_card" && <Card data={slice} />} */}
            {slice.slice_type === "pricing_v3_features_bloc" && <PricingV3FeaturesBloc data={slice} />}
            {slice.slice_type === "video_slider" && slice.primary.display !== "No" && <VideoSlider data={slice} />}
            {slice.slice_type === "pricing_v4" && <PricingPackages data={slice} lang={props.pageContext.lang} />}
            {slice.slice_type === "saas_features" && (
              <PricingV6FeaturesSaas lang={props.pageContext.lang} data={slice} route={props.pageContext.route} />
            )}
            {slice.slice_type === "pricing_saas" && (
              <PricingPackagesV6
                allData={props.data.prismicTemplate1.data.bodyMain}
                data={slice}
                route={props.pageContext.route}
                lang={props.pageContext.lang}
              />
            )}
            {slice.slice_type === "features_cards" && <FeaturesCards data={slice} lang={props.pageContext.lang} />}
            {slice.slice_type === "_44_pricing_free_plan" && (
              <PricingPackagesV5 data={slice} lang={props.pageContext.lang} />
            )}
            {slice.slice_type === "plan" && <Registration data={slice} lang={props.pageContext.lang} />}
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getDocumentTemplate($id: String!, $lang: String!) {
    prismicTemplate1(id: { eq: $id }) {
      ...heroFragment
      ...featureShortFragment
      ...listCustomersVideoFragment
      ...space
      ...textVertical
      ...benefitsFragment
      ...webinarSaaS
      ...titleAndSubtitle
      ...redBull
      ...policyFragment
      ...featuresOverviewPicto
      ...dividerFragment
      ...getInTouch2Fragment
      ...testimonailsSolutionFragment
      ...article
      ...pricingFeaturesBlocV3Fragment
      ...heroSaaSFeb
      ...youtubeFragment
      ...pricingPackage6
      ...landingFormFragment
      ...hubspotSupportFragment
      ...evolveFramgent
      ...tabsVerticalFragment
      ...landingStripeFragment
      ...kpiCustomersFragment
      ...quoteFragment
      ...faqAttendifyFragment
      ...quote2Fragment
      ...twitterFragment
      ...htmlFragment
      ...customersLogoFragment
      ...ebookFragment
      ...imageFragment
      ...logoLandingsFragment
      ...paragraphFragment
      ...webinarsBannerFragment
      ...buttonsFragment
      ...bannerTextsFragment
      ...meetingPlayFeatureFragment
      ...landingPricingFragment
      ...iframeFragment
      ...paymentGulfood
      ...integrations2Fragment
      ...intercom
      ...navigationScrollFragment
      ...pricingPackages5
      ...filsArianeFragment
      ...videoSliderFragment
      ...pricingSaaSFeatures
      ...pricingPackages4
      ...planFragment
      ...featuresCards
    }

    translation: prismicTranslate(lang: { eq: $lang }) {
      ...genericData
    }
  }
`;
