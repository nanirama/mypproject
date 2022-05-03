import React, { useEffect, useState } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import { ArrowIcon, TitleBlock } from "../styled";
import Route from "../../../../../localization";
import { Typo2, Typo3 } from "../../../../typographie";

import * as styled from "./styled";

import { SpaceH } from "../../../../space";
import { ButtonSecondary } from "../../../../button";
import { analyticsTrack, startExperiment } from "../../../../utils/segment";
import { CurrencySwitcher, getPackage } from "../common";

import { Experiment, Variant, experimentDebugger, emitter } from "@marvelapp/react-ab-test";
import tp from "../../../../../localization/tracking.json";

experimentDebugger.enable();

export default ({ setStep, translation, lang }) => {
  const isClient = typeof window !== "undefined";
  let obj;
  if (isClient) {
    obj = JSON.parse(window.localStorage.getItem("package"));
  }

  const goBack = () => {
    if (!obj) obj = {};
    obj.step = 3;
    if (isClient) window.localStorage.setItem("package", JSON.stringify(obj));
    setStep(3);
  };

  const features = getPackage();

  const [currency, setCurrency] = useState(features.currency);

  const trackingProps = {
    [tp.properties.attendees_number]: features.attendeesVolume,
    [tp.properties.exhibitors_number]: features.exhibitorsVolume,
    [tp.properties.branded_app]: features.brandedApp,

    [tp.properties.floor_plan]: features.floorPlan,

    [tp.properties.first_event_date]: features.numberOfEvents,

    [tp.properties.dedicated_support]: features.dedicatedSupport,
    [tp.properties.dedicated_support_days]: features.dedicatedSupportDays,
    [tp.properties.onsite_support]: features.onSiteSupport,
    [tp.properties.onsite_support_days]: features.onSiteSupportDays,

    [tp.properties.first_event_date]: new Date(features.firstEventDate),

    [tp.properties.exhibitors_package_offline]: features.globalExhibitorPackage,
    [tp.properties.lead_capture_feature]: features.leadCaptureFeature,
    [tp.properties.exhibitors_package_virtual]: features.globalExhibitorPackage,

    [tp.properties.event_format]: features.eventFormat,
  };

  const trackProceedCheckout = () => {};

  useEffect(() => {
    if (!obj) obj = {};
    obj.currency = currency;
    if (isClient) window.localStorage.setItem("package", JSON.stringify(obj));
  }, [currency]);

  useEffect(() => {
    window.scroll({
      top: 150,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    analyticsTrack(tp.events.plan_building_visited, { view: "review_self_service_package", ...trackingProps });
  }, []);

  const t = translation.data.primary;

  emitter.addPlayListener(function (experimentName, variantName) {
    console.log(`Displaying experiment ${experimentName} variant ${variantName}`);

    startExperiment(experimentName, variantName);
  });

  return (
    <Grid>
      <Row center="xs">
        <Col xs={12}>
          <TitleBlock>
            <ArrowIcon src={t.arrow_go_backwards.url} alt={t.arrow_go_backwards.alt} onClick={goBack} />
            <Typo2>
              {features.isInesAccepted ? t.step_4 : t.step_3} · {t.step_4_heading_title.text}
            </Typo2>
          </TitleBlock>
        </Col>
      </Row>
      <Row center={"xs"}>
        <Col xs={12}>
          <CurrencySwitcher active={currency} onClick={(e) => setCurrency(e.target.id)} />
        </Col>
      </Row>

      <Row center="xs">
        <Col md={10}>
          <FeatureIncluded t={t} features={features} lang={lang} trackProceedCheckout={trackProceedCheckout} />
        </Col>
      </Row>

      <div>
        <SpaceH of={40} />
        <Row center="xs">
          <Col md={10}>
            <FAQ t={t} items={translation.data.items} />
          </Col>
        </Row>
      </div>
    </Grid>
  );
};

const FeatureIncluded = ({ t, lang, trackProceedCheckout, features }) => (
  <styled.Features>
    <styled.ListWrapper>
      <Row center="xs" start="md" middle="xs">
        <Col md={8}>
          <Typo3 bold={600}>{t.summary_title}</Typo3>
        </Col>
        <Col md={4} xs={12}>
          <div style={{ float: "right" }}>
            <SpaceH of={12} />
            <Experiment name="proceed_checkout_cta">
              <Variant name="original">
                <span onClick={trackProceedCheckout}>
                  <ButtonSecondary id="proceed-checkout" to={Route[lang]["checkout-v1"]}>
                    {t.buy_credits}
                  </ButtonSecondary>
                </span>
              </Variant>
              <Variant name="variant_1">
                <span onClick={trackProceedCheckout}>
                  <ButtonSecondary id="proceed-checkout" to={Route[lang]["checkout-v1"]}>
                    {t.proceed_checkout_cta_variant_1}
                  </ButtonSecondary>
                </span>
              </Variant>
            </Experiment>
          </div>
        </Col>
      </Row>
      <SpaceH of={50} />
      {/* Start Blocks */}
      <styled.FeatureListRow>
        {/* Networking */}
        <styled.FeatureListItem>
          <styled.FeatureGroupTitle>
            <styled.Picto className="icons8-r-union" />
            {t.summary_feature_title_1}
          </styled.FeatureGroupTitle>
          <styled.FeatureItem>{t.summary_feature_19}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_1}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_2}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_3}</styled.FeatureItem>
        </styled.FeatureListItem>

        {/* Engagment  */}
        <styled.FeatureListItem>
          <styled.FeatureGroupTitle>
            <styled.Picto className="icons8-chat-room" /> {t.summary_feature_title_2}
          </styled.FeatureGroupTitle>
          <styled.FeatureItem>{t.summary_feature_4}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_5}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_6}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_7}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_8}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_9}</styled.FeatureItem>
        </styled.FeatureListItem>
        {/* Exhibitors  */}
        {(features.meetingsFeature ||
          features.contentManagementFeature ||
          features.leadCaptureFeature ||
          features.globalExhibitorPackage) && (
          <styled.FeatureListItem>
            {/* <SpaceH of={15} /> */}
            <styled.FeatureGroupTitle>
              <styled.Picto className="icons8-exposant" /> {t.summary_feature_title_exhibitors}
            </styled.FeatureGroupTitle>
            {features.globalExhibitorPackage && <styled.FeatureItem>{t.summary_feature_meetings}</styled.FeatureItem>}
            {features.leadCaptureFeature && <styled.FeatureItem>{t.summary_feature_lead_retriveal}</styled.FeatureItem>}
            {features.globalExhibitorPackage && <styled.FeatureItem>{t.summary_feature_cms}</styled.FeatureItem>}
          </styled.FeatureListItem>
        )}
        {/* Virtual Exhibitor */}
        {features.virtualExhibitorPackage && (
          <>
            <styled.FeatureListItem>
              {/* <SpaceH of={15} /> */}
              <styled.FeatureGroupTitle>
                <styled.Picto className="icons8-exposant" /> {t.summary_feature_title_exhibitors}
              </styled.FeatureGroupTitle>
              <styled.FeatureItem>{t.summary_feature_virtual_1}</styled.FeatureItem>
              <styled.FeatureItem>{t.summary_feature_virtual_2}</styled.FeatureItem>
              <styled.FeatureItem>{t.summary_feature_virtual_3}</styled.FeatureItem>
              <styled.FeatureItem>{t.summary_feature_virtual_4}</styled.FeatureItem>
            </styled.FeatureListItem>
          </>
        )}

        {/* Virtual Events */}
        <styled.FeatureListItem>
          <styled.FeatureGroupTitle>
            <styled.Picto className="icons8-air-play-button" /> {t.summary_feature_title_3}
          </styled.FeatureGroupTitle>
          <styled.FeatureItem>{t.summary_feature_10}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_11}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_12}</styled.FeatureItem>
        </styled.FeatureListItem>
        {/* <SpaceH of={15} /> */}
        {/* Sponsoring */}
        <styled.FeatureListItem>
          <styled.FeatureGroupTitle>
            <styled.Picto className="icons8-troph-e" /> {t.summary_feature_title_4}
          </styled.FeatureGroupTitle>
          <styled.FeatureItem>{t.summary_feature_13}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_14}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_15}</styled.FeatureItem>
        </styled.FeatureListItem>
        {/* <SpaceH of={15} /> */}
        {/* Setup  */}

        {/* Options */}
        {(features.brandedApp || features.dedicatedSupport || features.onSiteSupport) && (
          <styled.FeatureListItem>
            {/* <SpaceH of={15} /> */}
            <styled.FeatureGroupTitle>
              <styled.Picto className="icons8-technologie-lifestyle" /> {t.summary_feature_title_options}
            </styled.FeatureGroupTitle>
            {features.brandedApp && <styled.FeatureItem>{t.summary_feature_branded_app}</styled.FeatureItem>}
            {features.dedicatedSupport && features.dedicatedSupportDays > 0 && (
              <styled.FeatureItem>{t.summary_feature_dedicated_support}</styled.FeatureItem>
            )}
            {features.onSiteSupport && features.onSiteSupportDays > 0 && (
              <styled.FeatureItem>
                {features.eventFormat === "virtual" ? t.online_support_title : t.summary_feature_onsite_support}
              </styled.FeatureItem>
            )}
          </styled.FeatureListItem>
        )}

        <styled.FeatureListItem>
          <styled.FeatureGroupTitle>
            <styled.Picto className="icons8-cl" /> {t.summary_feature_title_5}
          </styled.FeatureGroupTitle>
          <styled.FeatureItem>{t.summary_feature_16}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_17}</styled.FeatureItem>
          <styled.FeatureItem>{t.summary_feature_18}</styled.FeatureItem>
        </styled.FeatureListItem>
      </styled.FeatureListRow>
      <SpaceH of={20} />
      <Row center="xs">
        <Col md={12}>
          <Experiment name="proceed_checkout_cta">
            <Variant name="original">
              <span onClick={trackProceedCheckout}>
                <ButtonSecondary id="proceed-checkout" to={Route[lang]["checkout-v1"]}>
                  {t.buy_credits}
                </ButtonSecondary>
              </span>
            </Variant>
            <Variant name="variant_1">
              <span onClick={trackProceedCheckout}>
                <ButtonSecondary id="proceed-checkout" to={Route[lang]["checkout-v1"]}>
                  {t.proceed_checkout_cta_variant_1}
                </ButtonSecondary>
              </span>
            </Variant>
          </Experiment>
        </Col>
      </Row>
      <SpaceH of={20} />
      <Row center="xs">
        <Col md={20}>
          <styled.MoreInfo
            dangerouslySetInnerHTML={{
              __html: t.more_info.html,
            }}
          />
        </Col>
      </Row>
    </styled.ListWrapper>
    <styled.SocialProof>
      <styled.SocialProofPicture src={t.summary_feature_persona.fluid.src} />
      <styled.SocialProofQuote>{t.summary_feature_quote}</styled.SocialProofQuote>
      <styled.SocialProofEventLogo
        className="img-responsive"
        src={t.summary_feature_logo.fluid.src}
      ></styled.SocialProofEventLogo>
    </styled.SocialProof>
  </styled.Features>
);

const FAQ = ({ t, items }) => {
  return (
    <>
      <Typo2>{t.faq_header}</Typo2>
      <SpaceH of={60} />
      <Grid>
        <Row start="xs">
          {items.map((e) => (
            <>
              <Col md={6}>
                <styled.FAQTitle>{e.faq_title}</styled.FAQTitle>
                <styled.FAQAnswer
                  dangerouslySetInnerHTML={{
                    __html: e.faq_answer.html,
                  }}
                />
                <SpaceH of={30} />
              </Col>
            </>
          ))}
        </Row>
      </Grid>
    </>
  );
};
