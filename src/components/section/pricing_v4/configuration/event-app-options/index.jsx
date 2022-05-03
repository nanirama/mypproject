import React, { useEffect, useState } from "react";
import moment from "moment";
import { Grid, Row, Col } from "react-flexbox-grid";
import tp from "../../../../../localization/tracking.json";
import {
  ArrowIcon,
  Contactlink,
  LeftColumn,
  StyledRow,
  TitleBlock,
  TextInGreen,
  StyledTypo4,
  SubtitleBlock,
  RigthColumnContainer,
} from "../styled";
import { Typo2 } from "../../../../typographie";
import { SpaceH } from "../../../../space";
import { ButtonSecondary } from "../../../../button";
import { CurrencySwitcher, showPricePerUnit, showPriceStrByItem, getPackage } from "../common";
import ProgressBar from "../../../../progress_bar";
import CheckboxWithImage from "../../../../form/checkbox_with_image";
import Link from "../../../../utils/link";
import Route from "../../../../../localization";
import { analyticsTrack } from "../../../../utils/segment";
// import { features } from "process";

const EventAppOptions = ({ setStep, translation, lang }) => {
  const isClient = typeof window !== "undefined";
  let obj = {};
  if (isClient) {
    obj = JSON.parse(window.localStorage.getItem("package"));
  }
  useEffect(() => {
    analyticsTrack(tp.events.plan_building_visited, {
      [tp.properties.view]: "event_app_option",
    });
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const t = translation.data.primary;

  const {
    attendeesVolume,
    brandedApp: initialBrandedApp,
    currency: initialCurrency,
    dedicatedSupport: initialDedicatedSupport,
    dedicatedSupportDays: initialDedicatedSupportDays,
    onSiteSupportDays: initialOnSiteSupportDays,
    onSiteSupport: initialOnsiteSupport,
    floorPlan: initialFloorPlan,
    eventFormat,
    ...features
  } = getPackage();

  const [currency, setCurrency] = useState(initialCurrency);
  const [brandedApp, setBrandedApp] = useState(initialBrandedApp);
  const [webTraining] = useState(false);
  // const [webTraining, setWebTraining] = useState(false);
  const [floorPlan, setFloorPlan] = useState(initialFloorPlan);
  const [dedicatedSupport, setDedicatedSupport] = useState(initialDedicatedSupport);
  const [onSiteSupport, setOnsiteSupport] = useState(initialOnsiteSupport);

  const [dedicatedSupportDays, setDedicatedSupportDays] = useState(initialDedicatedSupportDays);
  const [onSiteSupportDays, setOnSiteSupportDays] = useState(initialOnSiteSupportDays);

  const mandatoryWebTraining = attendeesVolume >= 500 && attendeesVolume <= 1500;

  // const isInesAccepted = moment(features.firstEventDate).isAfter(moment().add(2, "month"));
  const isInesAccepted = true;

  const nullChoice =
    !brandedApp && !floorPlan && !dedicatedSupport && !onSiteSupport && !webTraining && !mandatoryWebTraining;

  useEffect(() => {
    if (dedicatedSupportDays > 0) {
      setDedicatedSupport(true);
    }
    if (dedicatedSupportDays === 0) {
      setDedicatedSupport(false);
    }
  }, [dedicatedSupportDays]);

  useEffect(() => {
    if (onSiteSupportDays > 0) {
      setOnsiteSupport(true);
    }
    if (onSiteSupportDays === 0) {
      setOnsiteSupport(false);
    }
  }, [onSiteSupportDays]);

  const setInLocalStorage = (step) => {
    analyticsTrack(tp.events.plan_building_submitted, {
      [tp.properties.view]: "event_app_option",
      [tp.properties.branded_app]: brandedApp,
      [tp.properties.floor_plan]: floorPlan,

      [tp.properties.dedicated_support]: dedicatedSupport,
      [tp.properties.dedicated_support_days]: dedicatedSupportDays,
      [tp.properties.onsite_support]: onSiteSupport,
      [tp.properties.onsite_support_days]: onSiteSupportDays,

      [tp.properties.attendees_number]: attendeesVolume,
      [tp.properties.event_format]: eventFormat,
      [tp.properties.numbers_of_events]: features.numberOfEvents,

      [tp.properties.first_event_date]: new Date(features.firstEventDate),
    });

    // webTraining: webTraining || mandatoryWebTraining,

    if (!obj) obj = {};
    obj.step = step;
    obj.currency = currency;
    obj.options = {
      brandedApp,
      floorPlan,
      dedicatedSupport,
      dedicatedSupportDays,
      onSiteSupport,
      onSiteSupportDays,
    };
    if (isClient) window.localStorage.setItem("package", JSON.stringify(obj));
  };

  const goBack = () => {
    setInLocalStorage(1);
    setStep(1);
  };

  const onChangeDedicatedSupport = () => {
    setDedicatedSupport(!dedicatedSupport);

    if (!dedicatedSupport && dedicatedSupportDays === 0) {
      setDedicatedSupportDays(1);
    } else {
      setDedicatedSupportDays(0);
    }
  };

  const onChangeOnSiteSupport = () => {
    setOnsiteSupport(!onSiteSupport);

    if (!onSiteSupport && onSiteSupportDays === 0) {
      setOnSiteSupportDays(1);
    } else {
      setOnSiteSupportDays(0);
    }
  };

  const onClickContinueButton = () => {
    setInLocalStorage(3);
    setStep(3);
  };

  return (
    <React.Fragment>
      <Grid>
        <Row center="xs">
          <Col xs={12}>
            <>
              <TitleBlock>
                <ArrowIcon src={t.arrow_go_backwards.url} alt={t.arrow_go_backwards.alt} onClick={goBack} />
                <Typo2>
                  {t.step_2} · {t.step_2_heading_title.text}
                </Typo2>
              </TitleBlock>
              <SubtitleBlock center={"xs"}>
                <TextInGreen>{t.step3_heading_subtitle.text}</TextInGreen>
              </SubtitleBlock>
            </>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            <CurrencySwitcher active={currency} onClick={(e) => setCurrency(e.target.id)} />
          </Col>
        </Row>

        <SpaceH of={48} />
        <StyledRow>
          <LeftColumn xs={12} md={8}>
            <StyledRow>
              <Col>
                <StyledTypo4>{t.step_2_subtitle.text}</StyledTypo4>
              </Col>
            </StyledRow>
            <SpaceH of={12} />
            <StyledRow>
              {/* {attendeesVolume <= 1500 && (
                <CheckboxWithImage
                  title={t.step_2_web_training_title}
                  mandatory={attendeesVolume > 500 ? t.mandatory : ""}
                  subtitle={showPriceStrByItem(currency, "web_training")}
                  description={t.step_2_web_training_desc}
                  image={t.step_2_web_training_image.fluid.src}
                  alt={t.step2_branded_app_image.alt}
                  onChange={() => setWebTraining(mandatoryWebTraining ? true : !webTraining)}
                  checked={mandatoryWebTraining || webTraining}
                  key={"webTraining"}
                  t={t}
                />
              )} */}

              <CheckboxWithImage
                title={t.step2_branded_app_title.text}
                subtitle={t.step2_start_at_label.text + showPriceStrByItem(currency, "branded_app")}
                description={t.step2_branded_app_description.text}
                image={t.step2_branded_app_image.url}
                alt={t.step2_branded_app_image.alt}
                checked={brandedApp}
                onChange={() => setBrandedApp(!brandedApp)}
                key={"brandedApp"}
                t={t}
              />
              <CheckboxWithImage
                title={t.step2_floor_plan_title.text}
                subtitle={
                  t.step2_start_at_label.text +
                  showPriceStrByItem(currency, "floor_plan") +
                  " + " +
                  showPricePerUnit(currency, "floor_plan_per_exhibitors", t.step3_exhibitor_singular_placeholder.text)
                }
                description={t.step2_floor_plan_description.text}
                image={t.step2_floor_plan_image.url}
                alt={t.step2_floor_plan_image.alt}
                checked={floorPlan}
                t={t}
                onChange={() => setFloorPlan(!floorPlan)}
                key={"floorPlan"}
              />
              {/* {isInesAccepted && (
                <>
                  <CheckboxWithImage
                    title={t.step2_dedicated_support_title.text}
                    subtitle={
                      t.step2_start_at_label.text +
                      showPricePerUnit(
                        currency,
                        "dedicated_manager_per_day",
                        t.step2_input_placeholder_day_singular.text
                      )
                    }
                    description={t.step2_dedicated_support_description.text}
                    image={t.step2_dedicated_support_image.url}
                    alt={t.step2_dedicated_support_image.alt}
                    checked={dedicatedSupport}
                    t={t}
                    valueDays={dedicatedSupportDays}
                    days={true}
                    suffix={t.step2_input_placeholder_days_plural.text}
                    setValueDays={setDedicatedSupportDays}
                    onChange={onChangeDedicatedSupport}
                    key={"dedicatedSupport"}
                  />
                  {eventFormat !== "virtual" ? (
                    <CheckboxWithImage
                      title={t.step2_on_site_support_title.text}
                      subtitle={
                        t.step2_start_at_label.text +
                        showPricePerUnit(
                          currency,
                          "onsite_support_per_day",
                          t.step2_input_placeholder_day_singular.text
                        )
                      }
                      description={t.step2_on_site_support_description.text}
                      image={t.step2_on_site_support_image.url}
                      alt={t.step2_on_site_support_image.alt}
                      checked={onSiteSupport}
                      valueDays={onSiteSupportDays}
                      days={true}
                      suffix={t.step2_input_placeholder_days_plural.text}
                      setValueDays={setOnSiteSupportDays}
                      t={t}
                      onChange={onChangeOnSiteSupport}
                      key={"onsiteSupport"}
                    />
                  ) : (
                    <CheckboxWithImage
                      title={t.online_support_title}
                      subtitle={
                        t.step2_start_at_label.text +
                        showPricePerUnit(
                          currency,
                          "onsite_support_per_day",
                          t.step2_input_placeholder_day_singular.text
                        )
                      }
                      description={t.online_support_desc}
                      image={t.step2_on_site_support_image.url}
                      alt={t.step2_on_site_support_image.alt}
                      checked={onSiteSupport}
                      valueDays={onSiteSupportDays}
                      days={true}
                      suffix={t.step2_input_placeholder_days_plural.text}
                      setValueDays={setOnSiteSupportDays}
                      t={t}
                      onChange={onChangeOnSiteSupport}
                      key={"onsiteSupport"}
                    />
                  )}
                </>
              )} */}
            </StyledRow>
          </LeftColumn>

          <Col xs={12} md={4}>
            <RigthColumnContainer>
              <StyledTypo4>{t.package_is_almost_ready_label.text}</StyledTypo4>
              <SpaceH of={24} />
              <ProgressBar progress={2} />
              <SpaceH of={28} />
              <ButtonSecondary onClick={onClickContinueButton}>
                {nullChoice ? t.skip_button_label.text : t.continue_button_label.text}
              </ButtonSecondary>
              <SpaceH of={24} />
              <Contactlink>
                <Link to={Route[lang]["about/contact/sales/v2"]}>{t.contact_sales_label.text}</Link>
              </Contactlink>
            </RigthColumnContainer>
          </Col>
        </StyledRow>
      </Grid>
    </React.Fragment>
  );
};

export default EventAppOptions;
