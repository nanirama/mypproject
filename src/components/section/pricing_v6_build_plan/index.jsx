import React, { useState } from "react";
import { graphql } from "gatsby";

import StepOne from "./steps/step-one";
import StepTwo from "./steps/step-two";
import StepThree from "./steps/step-three";
import StepFour from "./steps/step-four";
import ClientOnly from "../../../HOC/clients";
import withLocation from "../../../HOC/location";
import * as queryString from "query-string";

/*
  README ME:
  - Those page are similar to ../pricing_v4/configuration
  - Almost no components should be created
  - Data between pages are saved in localStorage
  - Button are extract from ../../button => it's OK if they dont look like the design
  - All texts are loaded in variables t
  - Do a responsive version like https://www.swapcard.com/pricing/build-plan/
  // Build
*/

const BuildPlan = ({ ...props }) => {
  const [step, setStep] = useState(1);

  const goBack = (step) => {
    console.log(step);
    setStep(step);
  };

  const t = props.data.primary;
  const defaultCurrency = props.lang === "fr-fr" ? "eur" : "usd";
  const { plan, billingPeriod, currency } = queryString.parse(props.location.search);

  const planDetails = (plan) => {
    switch (plan) {
      case "free":
        return {
          name: t.free_plan_title,
          description: t.free_plan_desc,
          iconUrl: t.free_plan_img.url,
        };
      case "event":
        return {
          name: t.event_plan_title,
          description: t.event_plan_desc,
          iconUrl: t.event_plan_img.url,
        };
      case "meetup":
        return {
          name: t.meetup_plan_title,
          description: t.meetup_plan_desc,
          iconUrl: t.meetup_plan_img.url,
        };
      case "community":
        return {
          name: t.community_plan_title,
          description: t.community_plan_desc,
          iconUrl: t.community_plan_img.url,
        };
      default:
        return {
          name: t.event_plan_title,
          description: t.event_plan_desc,
          iconUrl: t.event_plan_img.url,
        };
    }
  };
  const packageInitialData = {
    plan: planDetails(plan),
    billingPeriod: billingPeriod ? billingPeriod : "monthly",
    currency: currency ? currency : defaultCurrency,
  };

  const settings = {
    showCurrencySwitcher: false,
    showPlan: false,
  };

  return (
    <ClientOnly>
      <div style={{ marginBottom: "80px" }}>
        {step === 1 ? (
          <StepOne
            t={t}
            lang={props.lang}
            setStep={goBack}
            packageInitialData={packageInitialData}
            settings={settings}
          />
        ) : null}
        {step === 2 ? <StepTwo t={t} setStep={goBack} settings={settings} /> : null}
        {step === 3 ? <StepThree t={t} setStep={goBack} settings={settings} /> : null}
        {step === 4 ? <StepFour t={t} setStep={goBack} lang={props.lang} settings={settings} /> : null}
      </div>
    </ClientOnly>
  );
};

export default withLocation(BuildPlan);

export const query = graphql`
  fragment buildPlanV2 on PrismicTemplate2 {
    data {
      bodyMain {
        ... on PrismicTemplate2BodyMainBuildPlanSaas {
          id
          primary {
            abstract_management
            abstract_management_desc
            attendees_volume_2: attendees_volume
            attendees_volume_info
            community_plan_desc
            community_plan_title

            define_volume_attendee
            white_label_title
            white_label_content
            white_label_content
            event_date

            community_plan_img {
              url
            }
            contact_sales
            continue
            dedicated_event_expert
            dedicated_event_expert_desc
            event_plan_desc
            event_plan_title
            event_plan_img {
              url
            }
            exhibitors_volume
            exhibitors_volume_info
            free_plan_title
            free_plan_desc
            free_plan_img {
              url
            }
            get_in_touch_phone_number
            lead_capture
            lead_capture_desc
            meetup_plan_desc
            meetup_plan_title
            meetup_plan_img {
              url
            }
            number_of_events
            need_some_help
            onsite_support
            onsite_support_desc
            package_almost_ready
            registration
            registration_desc
            select_additional_modules_you_need
            select_the_service_you_need
            step_1
            step_2
            step_3
            step_4
            streaming
            streaming_desc
          }
          slice_type
          slice_label
        }
      }
    }
  }
`;
