import React, { useEffect, useState } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import {
  ArrowIcon,
  CheckboxBlock,
  Contactlink,
  HLine2,
  LeftColumn,
  Package,
  PackageBlock,
  PackageDescription,
  PackageHeadTop,
  PackageOptionTitle,
  ScaleInput,
  PackageSubtitle,
  PackageTitle,
  SeparatorWithLabel,
  StyledRow,
  StyledTypo3,
  StyledTypo4,
  StyledTypo5,
  TooltipContent,
  AttendeesVolumeGrey,
  SubtitleBlock,
  TextInGreen,
  TitleBlock,
  RigthColumnContainer,
  ColRelative,
  PackageOptionImage,
  Helper,
} from "../styled";
import { Typo2 } from "../../../../typographie";
import { SpaceH } from "../../../../space";
import PricingSlider2 from "../../../../slider_rail_2";
import { ButtonSecondary } from "../../../../button";
import { applyGradualDiscount, getPackage, CurrencySwitcher, showPriceStrRaw, showPriceStrByItem } from "../common";
import priceList from "../prices.json";
// import PricingSlider from "../../../../slider_rail";
import ReactTooltip from "react-tooltip";
import ProgressBar from "../../../../progress_bar";
import CheckboxGreen from "../../../../form/checkbox_green";
// import ThemeProvider from "@swapcard-corporation/react-ui/lib/theme-provider";
import CheckboxWithImage from "../../../../form/checkbox_with_image";
import Link from "../../../../utils/link";
import Route from "../../../../../localization";
import { analyticsTrack } from "../../../../utils/segment";
import tp from "../../../../../localization/tracking.json";
import Slider from "rc-slider";
import { StyledSlider } from "../../../../slider_rail_2/styled";

const ExhibitorsServices = ({ setStep, translation, lang }) => {
  const isClient = typeof window !== "undefined";
  let obj;
  if (isClient) {
    obj = JSON.parse(window.localStorage.getItem("package"));
  }

  const [setIsSticky] = useState(false);
  const [setIsStickyBottom] = useState(false);

  const {
    currency: initialCurrency,
    exhibitorsVolume: initialNumberOfExhibitors,
    globalExhibitorPackage: initialGlobalExhibitorPackage,
    meetingsFeature: initialMeetingsFeature,
    leadCaptureFeature: initialLeadCaptureFeature,
    contentManagementFeature: initialContentManagementFeature,
    ...features
  } = getPackage();

  useEffect(() => {
    analyticsTrack(tp.events.plan_building_visited, {
      [tp.properties.view]: "exhibitors_volume",
    });
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });

    if (features.eventFormat === "virtual") {
      console.log("Reset Virtual");
      setGlobalExhibitorPackage(false);
      setLeadCaptureFeature(false);
    } else {
      console.log("Reset In-Person");
      setVirtualExhibitorPackage(false);
    }
  }, []);

  const t = translation.data.primary;

  const [exhibitorsValue, setExhibitorsValue] = useState(initialNumberOfExhibitors);
  const [currency, setCurrency] = useState(initialCurrency);
  const [globalExhibitorPackage, setGlobalExhibitorPackage] = useState(initialGlobalExhibitorPackage);
  const [meetingsFeature, setMeetingsFeature] = useState(initialMeetingsFeature);
  const [leadCaptureFeature, setLeadCaptureFeature] = useState(initialLeadCaptureFeature);
  const [contentManagementFeature, setContentManagementFeature] = useState(initialContentManagementFeature);
  const [virtualExhibitorPackage, setVirtualExhibitorPackage] = useState(features.virtualExhibitorPackage);

  const exhibitor_package_without_scan = applyGradualDiscount(
    exhibitorsValue,
    priceList["exhibitor_package_without_scan"][currency]
  );

  // const contentManagementPriceFinal = applyGradualDiscount(
  //   exhibitorsValue,
  //   priceList["content_management_per_exhibitor"][currency]
  // );

  // const meetingsPriceFinal = applyGradualDiscount(exhibitorsValue, priceList["meetings_per_exhibitor"][currency]);

  const leadCapturePriceFinal = applyGradualDiscount(
    exhibitorsValue,
    priceList["lead_capture_per_exhibitor"][currency]
  );

  const nullChoice = !globalExhibitorPackage && !leadCaptureFeature && !virtualExhibitorPackage;

  const canNextStep = (globalExhibitorPackage || leadCaptureFeature || virtualExhibitorPackage) && exhibitorsValue > 0;

  useEffect(() => {
    if (features.eventFormat === "virtual") {
      if (exhibitorsValue > 0) {
        setVirtualExhibitorPackage(true);
      } else {
        setVirtualExhibitorPackage(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exhibitorsValue]);

  const goBack = () => {
    // const step = features.isInesAccepted ? 2 : 1;
    const step = 2;

    setInLocalStorage(step);
    setStep(step);
  };

  const onClickContinueButton = () => {
    if (nullChoice) {
      setVirtualExhibitorPackage(false);
      setGlobalExhibitorPackage(false);
      setLeadCaptureFeature(false);
    }

    if (canNextStep || nullChoice) {
      analyticsTrack(tp.events.plan_building_submitted, {
        [tp.properties.view]: "exhibitors_volume",
        [tp.properties.exhibitors_number]: nullChoice ? 0 : Number(exhibitorsValue),

        [tp.properties.exhibitors_package_offline]: globalExhibitorPackage,
        [tp.properties.lead_capture_feature]: leadCaptureFeature,
        [tp.properties.exhibitors_package_virtual]: virtualExhibitorPackage,

        [tp.properties.branded_app]: features.brandedApp,
        [tp.properties.floor_plan]: features.floorPlan,

        [tp.properties.dedicated_support]: features.dedicatedSupport,
        [tp.properties.dedicated_support_days]: features.dedicatedSupportDays,
        [tp.properties.onsite_support]: features.onSiteSupport,
        [tp.properties.onsite_support_days]: features.onSiteSupportDays,

        [tp.properties.attendees_number]: features.attendeesVolume,
        [tp.properties.event_format]: features.eventFormat,
        [tp.properties.numbers_of_events]: features.numberOfEvents,

        [tp.properties.first_event_date]: new Date(features.firstEventDate),
      });

      setInLocalStorage(4);
      setStep(4);
    }
  };

  const onChangeVirtualExhibitorsPackage = () => {
    setVirtualExhibitorPackage(!virtualExhibitorPackage);

    setGlobalExhibitorPackage(false);
    setMeetingsFeature(false);
    setLeadCaptureFeature(false);
    setContentManagementFeature(false);
  };

  const onChangeGlobalExhibitorPackage = () => {
    setVirtualExhibitorPackage(false);
    setGlobalExhibitorPackage(!globalExhibitorPackage);

    if (!globalExhibitorPackage === false) {
      setLeadCaptureFeature(false);
    }

    // setMeetingsFeature(false);
    // setLeadCaptureFeature(false);
    // setContentManagementFeature(false);
  };

  const onChangeLeadCaptureFeature = () => {
    setVirtualExhibitorPackage(false);
    setLeadCaptureFeature(!leadCaptureFeature);
    if (!leadCaptureFeature) setGlobalExhibitorPackage(true);
  };

  const setInLocalStorage = (step) => {
    if (!obj) obj = {};
    obj.step = step;
    obj.currency = currency;
    obj.numberOfExhibitors = nullChoice ? 0 : Number(exhibitorsValue);
    obj.exhibitorServices = {
      globalExhibitorPackage,
      virtualExhibitorPackage,
      leadCaptureFeature,
    };

    if (isClient) window.localStorage.setItem("package", JSON.stringify(obj));
  };

  return (
    <React.Fragment>
      <Grid>
        <Row center="xs">
          <Col xs={12}>
            <TitleBlock>
              <ArrowIcon src={t.arrow_go_backwards.url} alt={t.arrow_go_backwards.alt} onClick={goBack} />
              <Typo2>
                {features.isInesAccepted ? t.step_3 : t.step_2} · {t.step_3_heading_title.text}
              </Typo2>
            </TitleBlock>
            <SubtitleBlock center={"xs"}>
              <TextInGreen>{t.step3_heading_subtitle.text}</TextInGreen>
            </SubtitleBlock>
          </Col>
        </Row>
        <SpaceH of={16} />
        <Row center="xs">
          <Col xs={12} md={7}>
            <SubtitleBlock center={"xs"}>
              <img src={t.step3_image.url} alt={t.step3_image.alt} height={"74px"} />
              <SpaceH of={16} />
              <StyledTypo3>{t.step3_image_title.text}</StyledTypo3>
              <SpaceH of={10} />
              <StyledTypo5>{t.step3_image_subtitle.text}</StyledTypo5>
              <CurrencySwitcher active={currency} onClick={(e) => setCurrency(e.target.id)} />
            </SubtitleBlock>
          </Col>
        </Row>
        <SpaceH of={48} />
        <StyledRow>
          <LeftColumn xs={12} md={8}>
            <StyledRow>
              <Col sm={10}>
                <StyledTypo4>1. {t.step3_exhibitors_volume_label.text}</StyledTypo4>
              </Col>
            </StyledRow>
            <SpaceH of={16} />
            <StyledRow>
              <Col xs={12} md={8}>
                <div style={{ position: "relative" }}>
                  <StyledSlider>
                    <Slider
                      min={0}
                      max={250}
                      defaultValue={exhibitorsValue}
                      value={exhibitorsValue}
                      marks={{ 0: 0, 50: 50, 100: 100, 150: "150", 200: "200", 250: "+250" }}
                      step={1}
                      onChange={(value) => setExhibitorsValue(value)}
                    />
                  </StyledSlider>
                </div>
              </Col>
              <Col xs={12} md={4}>
                {exhibitorsValue < 250 ? (
                  // <AttendeesVolumeGrey>
                  //   {exhibitorsValue} {t.step_3_exhibitors}
                  // </AttendeesVolumeGrey>
                  <ScaleInput
                    name={"exhibitors_volume"}
                    type={"number"}
                    min={0}
                    max={2500}
                    value={exhibitorsValue}
                    onChange={(e) => setExhibitorsValue(e.target.value)}
                  />
                ) : (
                  <AttendeesVolumeGrey>+250 {t.step_3_exhibitors}</AttendeesVolumeGrey>
                )}
              </Col>
            </StyledRow>

            <>
              <SpaceH of={56} />
              {features.eventFormat !== "virtual" && (
                <StyledRow>
                  <Col xs={12}>
                    <StyledTypo4>2. {t.step_3_select_exhibitors_package}</StyledTypo4>
                  </Col>
                </StyledRow>
              )}
              <SpaceH of={16} />
            </>

            {/* <StyledRow>
              <Col sm={10}>
                <Typo5>{t.step3_type_of_exhibitor_services_label.text}</Typo5>
              </Col>
            </StyledRow> */}

            {features.eventFormat === "virtual" && (
              <Package className={virtualExhibitorPackage ? "active" : ""} onClick={onChangeVirtualExhibitorsPackage}>
                <Row>
                  <Col xs={11}>
                    <PackageBlock>
                      <PackageHeadTop>
                        <PackageTitle>{t.virtual_exhibitor_package_title}</PackageTitle>
                        <PackageSubtitle>
                          {exhibitorsValue <= 50 ? (
                            <>
                              {showPriceStrByItem(currency, "exhibitor_package_without_scan")} /
                              {t.step3_exhibitor_singular_placeholder.text}
                            </>
                          ) : (
                            <span>{t.get_in_touch}</span>
                          )}
                        </PackageSubtitle>
                      </PackageHeadTop>
                      <PackageDescription>{t.virtual_exhibitor_package_desc}</PackageDescription>
                    </PackageBlock>
                  </Col>
                  <Col xs={1} style={{ alignSelf: "center" }}>
                    <CheckboxBlock>
                      {/* <ThemeProvider>
                        <CheckboxGreen
                          checked={virtualExhibitorPackage}
                          onChange={onChangeVirtualExhibitorsPackage}
                          key={"virtualExhibitorPackage"}
                          style={{ webkitAppearance: "checkbox" }}
                        />
                      </ThemeProvider> */}
                    </CheckboxBlock>
                  </Col>
                </Row>
                {/* {globalExhibitorPackage && ( */}
                <>
                  <SpaceH of={6} />
                  {features.eventFormat === "virtual" && (
                    <>
                      <HLine2 />
                      <SpaceH of={8} />
                      <Row center={"xs"}>
                        <Col xs={12} sm={6}>
                          <PackageOptionImage
                            src={t.step3_package_meeting_image.url}
                            alt={t.step3_package_meetings_label.text}
                          />
                          <ReactTooltip id="step3_package_meetings_label" effect="solid" multiline="true">
                            <TooltipContent
                              dangerouslySetInnerHTML={{
                                __html: `${t.virtual_meeting_help}`,
                              }}
                            />
                          </ReactTooltip>
                          <PackageOptionTitle firstLine={true}>
                            {t.step3_package_meetings_label.text}
                            <Helper className="icons8-aide" data-for="step3_package_meetings_label" data-tip="" />
                          </PackageOptionTitle>
                        </Col>

                        <Col xs={12} sm={6}>
                          <ReactTooltip id="virtual_booth" effect="solid" multiline="true">
                            <TooltipContent
                              dangerouslySetInnerHTML={{
                                __html: `${t.virtual_booth_help}`,
                              }}
                            />
                          </ReactTooltip>
                          <PackageOptionImage
                            src={t.virutal_booth.fluid.src}
                            alt={t.step3_lead_capture_feature_title.text}
                          />
                          <PackageOptionTitle firstLine={true}>
                            {t.virtual_booth}
                            <Helper className="icons8-aide" data-for="virtual_booth" data-tip="" />
                          </PackageOptionTitle>
                        </Col>
                      </Row>

                      <Row center={"xs"}>
                        <Col xs={12} sm={6}>
                          <PackageOptionImage
                            src={t.exhibitor_live_chat.fluid.src}
                            alt={t.step3_lead_capture_feature_title.text}
                          />
                          <ReactTooltip id="live_chat" effect="solid" multiline="true">
                            <TooltipContent
                              dangerouslySetInnerHTML={{
                                __html: `${t.exhibitor_live_chat_help}`,
                              }}
                            />
                          </ReactTooltip>
                          <PackageOptionTitle firstLine={false}>
                            {t.exhibitior_live_chat_text}
                            <Helper className="icons8-aide" data-for="live_chat" data-tip="" />
                          </PackageOptionTitle>
                        </Col>
                        <Col xs={12} sm={6}>
                          <PackageOptionImage
                            src={t.step3_content_management_image.url}
                            alt={t.step3_content_management_feature_title.text}
                          />
                          <ReactTooltip id="step3_content_management_feature_title" effect="solid" multiline="true">
                            <TooltipContent
                              dangerouslySetInnerHTML={{
                                __html: `${t.cms_help}`,
                              }}
                            />
                          </ReactTooltip>
                          <PackageOptionTitle firstLine={false}>
                            {t.step3_content_management_feature_title.text}
                            <Helper
                              className="icons8-aide"
                              data-for="step3_content_management_feature_title"
                              data-tip=""
                            />
                          </PackageOptionTitle>
                        </Col>
                      </Row>
                    </>
                  )}
                </>
                {/* )} */}
              </Package>
            )}

            {features.eventFormat !== "virtual" && (
              <Package className={globalExhibitorPackage ? "active" : ""} onClick={onChangeGlobalExhibitorPackage}>
                <Row>
                  <Col xs={11}>
                    <PackageBlock>
                      <PackageHeadTop>
                        <PackageTitle>{t.step3_package_title_label.text}</PackageTitle>
                        <PackageSubtitle>
                          {exhibitorsValue <= 50 ? (
                            <>
                              {showPriceStrRaw(currency, Math.round(exhibitor_package_without_scan))} /
                              {t.step3_exhibitor_singular_placeholder.text}
                            </>
                          ) : (
                            <span>{t.get_in_touch}</span>
                          )}
                        </PackageSubtitle>
                      </PackageHeadTop>
                      <PackageDescription>{t.step3_package_description_text.text}</PackageDescription>
                    </PackageBlock>
                  </Col>
                  <Col xs={1} style={{ alignSelf: "center" }}>
                    <CheckboxBlock>
                      {/* <ThemeProvider> */}
                      <CheckboxGreen
                        checked={globalExhibitorPackage}
                        onChange={onChangeGlobalExhibitorPackage}
                        key={"globalExhibitorPackage"}
                        style={{ webkitAppearance: "checkbox" }}
                      />
                      {/* </ThemeProvider> */}
                    </CheckboxBlock>
                  </Col>
                </Row>
                {/* {globalExhibitorPackage && ( */}
                <>
                  <SpaceH of={6} />
                  <HLine2 />
                  <SpaceH of={8} />
                  <Row center={"xs"}>
                    <Col xs={12} sm={4}>
                      <ReactTooltip id="virtual_meeting_help" effect="solid" multiline="true">
                        <TooltipContent
                          dangerouslySetInnerHTML={{
                            __html: `${t.virtual_meeting_help}`,
                          }}
                        />
                      </ReactTooltip>

                      <img
                        src={t.step3_package_meeting_image.url}
                        alt={t.step3_package_meetings_label.text}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                      <PackageOptionTitle>
                        {t.step3_package_meetings_label.text}
                        <Helper className="icons8-aide" data-for="virtual_meeting_help" data-tip="" />
                      </PackageOptionTitle>
                    </Col>
                    {/* <Col xs={12} sm={4}>
                      <img
                        src={t.step3_lead_capture_image.url}
                        alt={t.step3_lead_capture_feature_title.text}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                      <PackageOptionTitle>{t.step3_lead_capture_feature_title.text}</PackageOptionTitle>
                    </Col> */}
                    <Col xs={12} sm={4}>
                      <ReactTooltip id="step3_content_management_feature_title" effect="solid" multiline="true">
                        <TooltipContent
                          dangerouslySetInnerHTML={{
                            __html: `${t.virtual_meeting_help}`,
                          }}
                        />
                      </ReactTooltip>
                      <img
                        src={t.step3_content_management_image.url}
                        alt={t.step3_content_management_feature_title.text}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                      <PackageOptionTitle>
                        {t.step3_content_management_feature_title.text}{" "}
                        <Helper className="icons8-aide" data-for="step3_content_management_feature_title" data-tip="" />
                      </PackageOptionTitle>
                    </Col>
                  </Row>
                </>
                {/* )} */}
              </Package>
            )}
            {features.eventFormat !== "virtual" && (
              <SeparatorWithLabel>
                <HLine2 />
                <p>{t.addon}</p>
                <HLine2 />
              </SeparatorWithLabel>
            )}

            {features.eventFormat !== "virtual" && (
              <CheckboxWithImage
                title={t.step3_lead_capture_feature_title.text}
                subtitle={
                  showPriceStrRaw(currency, Math.round(leadCapturePriceFinal)) +
                  " /" +
                  t.step3_exhibitor_singular_placeholder.text
                }
                description={t.step3_lead_capture_feature_description.text}
                image={t.step3_lead_capture_image.url}
                alt={t.step3_lead_capture_image.alt}
                checked={leadCaptureFeature}
                t={t}
                exhibitorsValue={exhibitorsValue}
                onChange={onChangeLeadCaptureFeature}
              />
            )}

            <>
              {/* <Row>
                <Col xs={12}>
                  <StyledTypo4>{t.step3_features_label.text}</StyledTypo4>
                </Col>
              </Row> */}

              {/* {features.eventFormat === "virtual" && <p>virtuel</p>} */}

              {/* <CheckboxWithImage
                title={t.step3_package_meetings_label.text}
                subtitle={
                  showPriceStrRaw(currency, Math.round(meetingsPriceFinal)) +
                  " /" +
                  t.step3_exhibitor_singular_placeholder.text
                }
                description={t.step3_meetings_feature_description.text}
                image={t.step3_package_meeting_image.url}
                alt={t.step3_package_meeting_image.alt}
                checked={meetingsFeature}
                t={t}
                exhibitorsValue={exhibitorsValue}
                onChange={onChangeMeetingsFeature}
              /> */}

              {/* <CheckboxWithImage
                title={t.step3_content_management_feature_title.text}
                subtitle={
                  showPriceStrRaw(currency, Math.round(contentManagementPriceFinal)) +
                  " /" +
                  t.step3_exhibitor_singular_placeholder.text
                }
                description={t.step3_content_management_feature_description.text}
                image={t.step3_content_management_image.url}
                alt={t.step3_content_management_image.alt}
                checked={contentManagementFeature}
                exhibitorsValue={exhibitorsValue}
                t={t}
                onChange={onChangeContentManagementFeature}
              /> */}
            </>
          </LeftColumn>

          <SpaceH of={24} />
          <ColRelative xs={12} md={4}>
            <RigthColumnContainer>
              <StyledTypo4>{t.package_is_almost_ready_label.text}</StyledTypo4>
              <SpaceH of={24} />
              <ProgressBar progress={3} />
              <SpaceH of={28} />
              <ButtonSecondary onClick={onClickContinueButton} disabled={!nullChoice && !canNextStep}>
                {nullChoice ? t.skip_button_label.text : t.continue_button_label.text}
              </ButtonSecondary>
              <SpaceH of={24} />
              <Contactlink>
                <Link to={Route[lang]["about/contact/sales/v2"]}>{t.contact_sales_label.text}</Link>
              </Contactlink>
            </RigthColumnContainer>
          </ColRelative>
        </StyledRow>
      </Grid>
    </React.Fragment>
  );
};

export default ExhibitorsServices;
