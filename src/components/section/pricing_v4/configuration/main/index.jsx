import React, { useState, useEffect } from "react";
import AttendeesVolume from "../attendees-volume";
import EventAppOptions from "../event-app-options";
import ExhibitorsServices from "../exhibitors-services";
import ClientOnly from "../../../../../HOC/clients";
import ReviewFullPackage from "../review-full-package";
import { graphql } from "gatsby";

const Main = (props) => {
  const isClient = typeof window !== "undefined";

  const stepAtComponentMount =
    isClient && window.localStorage.getItem("package") && JSON.parse(window.localStorage.getItem("package")).step;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.href = "https://www.swapcard.com/billing/organization/";
    }
  }, []);

  const [step, setStep] = useState(stepAtComponentMount);

  return (
    <div style={{ display: "block" }}>
      {(!step || step === 1) && <AttendeesVolume setStep={setStep} translation={props} lang={props.lang} />}
      {step === 2 && <EventAppOptions setStep={setStep} translation={props} lang={props.lang} />}
      {step === 3 && <ExhibitorsServices setStep={setStep} translation={props} lang={props.lang} />}
      <div>{step === 4 && <ReviewFullPackage setStep={setStep} translation={props} lang={props.lang} />}</div>
    </div>
  );
};

export default Main;

export const query = graphql`
  fragment PricingConfigData on PrismicTemplate2 {
    data {
      bodyMain {
        ... on PrismicTemplate2BodyMainPricingSimulator {
          slice_type

          items {
            faq_title
            faq_answer {
              text
              html
            }
          }

          primary {
            step_1
            step_2
            step_3
            step_4

            proceed_checkout_cta_variant_1

            online_support_desc
            online_support_title

            datepicker_placeholder
            datepicker_label

            cms_help
            virtual_meeting_help
            exhibitor_live_chat_help
            virtual_booth_help

            min_volume

            addon

            virtual_exhibitor_package_title
            virtual_exhibitor_package_desc
            virtual_booth

            summary_feature_virtual_1
            summary_feature_virtual_2
            summary_feature_virtual_3
            summary_feature_virtual_4

            summary_feature_roundtable
            summary_feature_exhibitor_package
            summary_feature_cms
            summary_feature_meetings
            summary_feature_lead_retriveal
            summary_feature_title_exhibitors
            summary_feature_title_options
            summary_feature_onsite_support
            summary_feature_dedicated_support
            summary_feature_branded_app

            step_1_plan_above_title
            step_1_plan_above_description
            step_1_attendees
            step_3_exhibitors
            step_4_sign_up_description
            step_3_select_exhibitors_package
            step_4_plan_exhibitors_above
            get_in_touch
            step_4_exhibitors_global_package
            step_4_exhibitors_volume
            exhibitors
            or

            exhibitior_live_chat_text

            virutal_booth {
              fluid(maxWidth: 200) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }

            more_info {
              html
            }

            step_1_event_format

            hybrid
            in_person
            virtual

            mandatory

            plan_with_option_title
            plan_with_option_description

            step_2_web_training_title
            step_2_web_training_desc

            step_2_web_training_image {
              fluid(maxWidth: 200) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }

            exhibitor_live_chat {
              fluid(maxWidth: 200) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }

            step_1_heading_title {
              text
            }
            arrow_go_backwards {
              url
            }
            event_app_image {
              url
            }
            image_title {
              text
            }
            image_subtitle {
              text
            }
            number_of_events_title {
              text
            }
            attendees_volume {
              text
            }
            attendees_volume_subparagraph {
              text
            }
            step_2_heading_title {
              text
            }
            step_2_subtitle {
              text
            }
            step2_branded_app_image {
              url
            }
            step2_branded_app_title {
              text
            }
            step2_start_at_label {
              text
            }
            step_2_discount_label {
              text
            }
            step2_branded_app_description {
              text
            }
            step2_floor_plan_image {
              url
            }
            step2_floor_plan_title {
              text
            }
            step2_floor_plan_description {
              text
            }
            step2_dedicated_support_image {
              url
            }
            step2_dedicated_support_title {
              text
            }
            step2_dedicated_support_description {
              text
            }
            step2_on_site_support_image {
              url
            }
            step2_on_site_support_title {
              text
            }
            step2_on_site_support_description {
              text
            }
            step2_multiple_year_agreement_image {
              url
            }
            step2_multiple_year_agreement_title {
              text
            }
            step2_multiple_year_agreement_subtitle {
              text
            }
            step2_multiple_year_agreement_description {
              text
            }
            step2_input_placeholder_day_singular {
              text
            }
            step2_input_placeholder_days_plural {
              text
            }
            step_3_heading_title {
              text
            }
            step3_heading_subtitle {
              text
            }
            step3_image {
              url
            }
            step3_image_title {
              text
            }
            step3_image_subtitle {
              text
            }
            step3_exhibitors_volume_label {
              text
            }
            step3_type_of_exhibitor_services_label {
              text
            }
            step3_type_of_exhibitor_service_most_popular_label {
              text
            }
            step3_in_bulk_button_label {
              text
            }
            step3_in_bulk_popup_text {
              text
            }
            step3_a_la_carte_button_label {
              text
            }
            step3_a_la_carte_popup_text {
              text
            }
            step_3_services_label {
              text
            }
            step3_package_title_label {
              text
            }
            step3_package_description_text {
              text
            }
            step3_package_meeting_image {
              url
            }
            step3_package_meetings_label {
              text
            }
            step3_package_selling_price_label {
              text
            }
            step3_meetings_price_input_placeholder {
              text
            }
            step3_exhibitor_singular_placeholder {
              text
            }
            step3_exhibitors_plural_placeholder {
              text
            }
            step3_lead_capture_image {
              url
            }
            step3_lead_capture_label {
              text
            }
            step3_lead_capture_price_placeholder {
              text
            }
            step3_content_management_image {
              url
            }
            step3_content_management_label {
              text
            }
            step3_content_management_price_placeholder {
              text
            }
            step3_or_label {
              text
            }
            step3_features_label {
              text
            }
            step3_meetings_feature_title {
              text
            }
            step3_meetings_feature_description {
              text
            }
            step3_meetings_feature_exhibitors_number_label {
              text
            }
            step3_lead_capture_feature_title {
              text
            }
            step3_lead_capture_feature_description {
              text
            }
            step3_content_management_feature_title {
              text
            }
            step3_content_management_feature_description {
              text
            }
            step_4_heading_title {
              text
            }
            step4_event_app_title {
              text
            }
            step4_mobile_event_app_subtitle {
              text
            }
            step4_event_singular_label {
              text
            }
            step4_events_plural_label {
              text
            }
            event_app_price_label {
              text
            }
            event_app_options_price_label {
              text
            }
            exhibitor_profits_price_label {
              text
            }
            price_label {
              text
            }
            revenues_label {
              text
            }
            net_proft_label {
              text
            }
            net_loss_label {
              text
            }
            total_label {
              text
            }
            package_is_almost_ready_label {
              text
            }
            package_is_ready_label {
              text
            }
            continue_button_label {
              text
            }
            skip_button_label {
              text
            }
            contact_sales_button_label {
              text
            }
            sign_up_label {
              text
            }
            contact_sales_label {
              text
            }

            summary_feature_1
            summary_feature_2
            summary_feature_3
            summary_feature_4
            summary_feature_5
            summary_feature_6
            summary_feature_7
            summary_feature_8
            summary_feature_9
            summary_feature_10
            summary_feature_11
            summary_feature_12
            summary_feature_13
            summary_feature_14
            summary_feature_15
            summary_feature_16
            summary_feature_17
            summary_feature_18
            summary_feature_19
            summary_feature_20
            summary_feature_21
            summary_feature_22
            summary_feature_23

            summary_feature_title_1
            summary_feature_title_2
            summary_feature_title_3
            summary_feature_title_4
            summary_feature_title_5

            summary_feature_quote

            faq_header
            buy_credits

            summary_title
            summary_sub_title

            summary_feature_persona {
              fluid(maxWidth: 200) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }

            summary_feature_logo {
              fluid(maxWidth: 200) {
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
