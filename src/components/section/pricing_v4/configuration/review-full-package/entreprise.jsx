import React, { useEffect, useState } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import tp from "../../../../../localization/tracking.json";
import {
  ArrowIcon,
  // Contactlink,
  HLine,
  HLine3,
  LeftColumn,
  PriceInGrey,
  PriceItem,
  PriceItemDescription,
  PriceItemsCol,
  PriceRow,
  PriceTitle,
  // PriceTotal,
  // RigthColumn,
  TitleBlock,
  StyledRow,
  // StyledTypo4,
  RigthColumnContainer,
  StyledTypo4Green,
} from "../styled";
import { getUser } from "../../../../../HOC/auth";
import priceList from "../prices.json";
import { Typo2, Body } from "../../../../typographie";
import { SpaceH } from "../../../../space";
import { ButtonSecondary } from "../../../../button";
// import ProgressBar from "../../../../progress_bar";
import { analyticsTrack } from "../../../../utils/segment";
import {
  applyGradualDiscount,
  CurrencySwitcher,
  showPricePerUnit,
  // computeEventAppPrice,
  getPackage,
  showPriceStrByItem,
  showPriceStrRaw,
} from "../common";
import Link from "../../../../utils/link";
import Route from "../../../../../localization";

const ExhibitorsServices = ({ setStep, translation, lang }) => {
  const packageSelected = getPackage();

  const isClient = typeof window !== "undefined";
  let obj = {};

  if (isClient) {
    obj = JSON.parse(window.localStorage.getItem("package"));
  }

  const [setIsConnected] = useState(false);
  const [setLoading] = useState(true);
  const [setUserData] = useState(false);

  const [buildPlanId] = useState(Math.random().toString(36).substr(2, 9));

  const trackingProps = {
    [tp.properties.attendees_number]: packageSelected.attendeesVolume,
    [tp.properties.exhibitors_number]: packageSelected.exhibitorsVolume,
    [tp.properties.branded_app]: packageSelected.brandedApp,

    [tp.properties.floor_plan]: packageSelected.floorPlan,

    [tp.properties.first_event_date]: packageSelected.numberOfEvents,

    [tp.properties.dedicated_support]: packageSelected.dedicatedSupport,
    [tp.properties.dedicated_support_days]: packageSelected.dedicatedSupportDays,
    [tp.properties.onsite_support]: packageSelected.onSiteSupport,
    [tp.properties.onsite_support_days]: packageSelected.onSiteSupportDays,

    [tp.properties.first_event_date]: new Date(packageSelected.firstEventDate),

    [tp.properties.exhibitors_package_offline]: packageSelected.globalExhibitorPackage,
    [tp.properties.lead_capture_feature]: packageSelected.leadCaptureFeature,
    [tp.properties.exhibitors_package_virtual]: packageSelected.globalExhibitorPackage,

    [tp.properties.event_format]: packageSelected.eventFormat,
  };

  useEffect(() => {
    // const fetchAuth = async () => {
    //   const user = await getUser();
    //   setIsConnected(user !== null);
    //   setUserData(user);
    //   setLoading(false);
    // };

    // fetchAuth();

    analyticsTrack(tp.events.plan_building_visited, {
      [tp.properties.view]: "review_entreprise_package",
      [tp.properties.plan_building_id]: buildPlanId,
      ...trackingProps,
    });
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currency, setCurrency] = useState(packageSelected.currency);

  // const globalExhibitorPackagePrice = applyGradualDiscount(
  //   packageSelected.exhibitorsVolume,
  //   priceList["exhibitor_package_with_scan"][currency]
  // );

  const leadCapturePrice = applyGradualDiscount(
    packageSelected.exhibitorsVolume,
    priceList["lead_capture_per_exhibitor"][currency]
  );

  // const totalPrice = calculateSum(eventAppPrice, brandedApp && brandedAppPrice);

  const nullFeatureChoice = !packageSelected.leadCaptureFeature;

  const t = translation.data.primary;

  useEffect(() => {
    if (!obj) obj = {};
    obj.currency = currency;
    if (isClient) window.localStorage.setItem("package", JSON.stringify(obj));
  }, [currency]);

  const goBack = () => {
    if (!obj) obj = {};
    obj.step = 3;
    if (isClient) window.localStorage.setItem("package", JSON.stringify(obj));
    setStep(3);
  };

  const onClickContactSalesButton = () => {
    analyticsTrack(tp.events.plan_building_submitted, {
      [tp.properties.view]: "review_entreprise_package",
      [tp.properties.plan_building_id]: buildPlanId,
      ...trackingProps,
    });
  };

  return (
    <React.Fragment>
      <Grid>
        <Row center="xs">
          <Col xs={12}>
            <TitleBlock>
              <ArrowIcon src={t.arrow_go_backwards.url} alt={t.arrow_go_backwards.alt} onClick={goBack} />
              <Typo2>{t.step_4_heading_title.text}</Typo2>
            </TitleBlock>
          </Col>
        </Row>
        <Row center={"xs"}>
          <Col xs={12}>
            <CurrencySwitcher active={currency} onClick={(e) => setCurrency(e.target.id)} />
          </Col>
        </Row>

        <SpaceH of={48} />
        <StyledRow>
          <LeftColumn xs={12} md={8}>
            <PriceRow>
              <Col xs={12}>
                <PriceTitle>{t.step4_event_app_title.text}</PriceTitle>
              </Col>
            </PriceRow>

            <PriceRow>
              <PriceItemsCol xs={5} sm={8}>
                <PriceItem>{t.attendees_volume.text}</PriceItem>
                <PriceItemDescription>{packageSelected.attendeesVolume}</PriceItemDescription>
              </PriceItemsCol>
              {/* <Col xs={5} sm={4}>
                {attendeesVolume < 5000 ? (
                  <PriceInGrey>{computeEventAppPrice(100, 10)}</PriceInGrey>
                ) : (
                  <PriceInGrey>{t.get_in_touch}</PriceInGrey>
                )}
              </Col> */}
              <Col xs={5} sm={4}>
                <PriceInGrey>{t.get_in_touch}</PriceInGrey>
              </Col>
            </PriceRow>
            {(packageSelected.brandedApp ||
              packageSelected.floorPlan ||
              packageSelected.dedicatedSupport ||
              packageSelected.onsiteSupport) && (
              <>
                <HLine3 />
                <PriceRow>
                  <Col xs={12}>
                    <PriceTitle>{t.event_app_options_price_label.text}</PriceTitle>
                  </Col>
                </PriceRow>
              </>
            )}

            {packageSelected.brandedApp && (
              <PriceRow>
                <Col xs={6}>
                  <PriceItem>{t.step2_branded_app_title.text}</PriceItem>
                </Col>
                <Col xs={6}>
                  <PriceInGrey>{showPriceStrByItem(currency, "branded_app")}</PriceInGrey>
                </Col>
              </PriceRow>
            )}
            {packageSelected.floorPlan && (
              <PriceRow>
                <Col xs={6}>
                  <PriceItem>{t.step2_floor_plan_title.text}</PriceItem>
                </Col>
                <Col xs={6}>
                  <PriceInGrey>
                    {t.step2_start_at_label.text +
                      showPriceStrByItem(currency, "floor_plan") +
                      " + " +
                      showPriceStrByItem(
                        currency,
                        "floor_plan_per_exhibitors",
                        t.step3_exhibitor_singular_placeholder.text
                      )}
                  </PriceInGrey>
                </Col>
              </PriceRow>
            )}
            {packageSelected.dedicatedSupport && (
              <PriceRow>
                <PriceItemsCol xs={6}>
                  <PriceItem>{t.step2_dedicated_support_title.text}</PriceItem>
                </PriceItemsCol>
                <Col xs={6}>
                  <PriceInGrey>
                    {t.step2_start_at_label.text +
                      showPriceStrByItem(
                        currency,
                        "dedicated_manager_per_day",
                        t.step2_input_placeholder_day_singular.text
                      )}
                  </PriceInGrey>
                </Col>
              </PriceRow>
            )}
            {packageSelected.onsiteSupport && (
              <PriceRow>
                <PriceItemsCol xs={6}>
                  <PriceItem>{t.step2_on_site_support_title.text}</PriceItem>
                </PriceItemsCol>
                <Col xs={6}>
                  <PriceInGrey>
                    {t.step2_start_at_label.text +
                      showPricePerUnit(currency, "onsite_support_per_day", t.step2_input_placeholder_day_singular.text)}
                  </PriceInGrey>
                </Col>
              </PriceRow>
            )}

            {(!nullFeatureChoice || packageSelected.exhibitorsVolume > 0) && (
              <>
                <SpaceH of={1} />
                <HLine />
                <PriceRow>
                  <Col xs={12}>
                    <PriceTitle>{t.step3_image_title.text}</PriceTitle>
                  </Col>
                </PriceRow>
              </>
            )}

            {packageSelected.exhibitorsVolume > 0 && (
              <PriceRow>
                <PriceItemsCol xs={5} sm={8}>
                  <PriceItem>{t.step_4_exhibitors_volume}</PriceItem>
                  <PriceItemDescription></PriceItemDescription>
                </PriceItemsCol>
                <Col xs={5} sm={4}>
                  <PriceInGrey>
                    {packageSelected.exhibitorsVolume} {t.exhibitors}
                  </PriceInGrey>
                </Col>
              </PriceRow>
            )}

            {packageSelected.globalExhibitorPackage && (
              <PriceRow>
                <PriceItemsCol xs={6}>
                  <PriceItem>{t.step_4_exhibitors_global_package}</PriceItem>
                </PriceItemsCol>
                <Col xs={6}>
                  <PriceInGrey>
                    {packageSelected.exhibitorsVolume < 50 ? (
                      <>
                        {showPriceStrByItem(
                          currency,
                          "exhibitor_package_without_scan",
                          t.step3_exhibitor_singular_placeholder.text
                        )}{" "}
                        / {t.step3_exhibitor_singular_placeholder.text}
                      </>
                    ) : (
                      <span>{t.get_in_touch}</span>
                    )}
                  </PriceInGrey>
                </Col>
              </PriceRow>
            )}

            {packageSelected.leadCaptureFeature && (
              <PriceRow>
                <PriceItemsCol xs={6}>
                  <PriceItem>{t.step3_lead_capture_label.text}</PriceItem>
                </PriceItemsCol>
                <Col xs={6}>
                  {packageSelected.exhibitorsVolume < 50 ? (
                    <PriceInGrey>
                      {showPriceStrRaw(currency, Math.round(leadCapturePrice))} /{" "}
                      {t.step3_exhibitor_singular_placeholder.text}
                      {/* {showPricePerUnit(currency, leadCapturePrice, t.step3_exhibitor_singular_placeholder.text)} */}
                    </PriceInGrey>
                  ) : (
                    <PriceInGrey>{t.get_in_touch}</PriceInGrey>
                  )}
                </Col>
              </PriceRow>
            )}
            {/* {packageSelected.meetingsFeature && (
              <PriceRow>
                <PriceItemsCol xs={6}>
                  <PriceItem>{t.step3_package_meetings_label.text}</PriceItem>
                </PriceItemsCol>
                <Col xs={6}>
                  <PriceInGrey>
                    {showPriceStrRaw(currency, Math.round(meetingsPrice))} /{" "}
                    {t.step3_exhibitor_singular_placeholder.text}
                    {showPricePerUnit(currency, meetingsPrice, t.step3_exhibitor_singular_placeholder.text)}
                  </PriceInGrey>
                </Col>
              </PriceRow>
            )} */}
            {/* {packageSelected.contentManagementFeature && (
              <PriceRow>
                <PriceItemsCol xs={6}>
                  <PriceItem>{t.step3_content_management_label.text}</PriceItem>
                </PriceItemsCol>
                <Col xs={6}>
                  <PriceInGrey>
                    {showPriceStrRaw(currency, Math.round(contentManagementPrice))} /

                  </PriceInGrey>
                </Col>
              </PriceRow>
            )} */}

            {/* <HLine /> */}
            {/* <PriceRow>
              <Col xs={5} sm={8}>
                <PriceTitle>{t.total_label.text}</PriceTitle>
              </Col>
              <Col xs={5} sm={4}>
                <PriceTotal>{showPriceStr(currency, totalPrice)}</PriceTotal>
              </Col>
            </PriceRow>
            <SpaceH of={12} /> */}
          </LeftColumn>

          <Col xs={12} md={4}>
            {/* <RigthColumnContainer>
              <StyledTypo4>{t.package_is_ready_label.text}</StyledTypo4>
              <SpaceH of={24} />
              <ProgressBar progress={4} />
              <SpaceH of={28} />
              <Body>{t.step_4_sign_up_description}</Body>
              <SpaceH of={24} />
              <ButtonSecondary onClick={onClickContactSalesButton}>
                <Link to={Route[lang]["signup"]}>{t.sign_up_label.text}</Link>
              </ButtonSecondary>

              {/* <Contactlink>
                <Link to={Route[lang]["signup"]}>{t.sign_up_label.text}</Link>
              </Contactlink>
            </RigthColumnContainer> */}

            <RigthColumnContainer>
              {parseInt(packageSelected.attendeesVolume) <= 1500 && parseInt(packageSelected.exhibitorsVolume) === 0 ? (
                <>
                  <StyledTypo4Green>{t.plan_with_option_title}</StyledTypo4Green>

                  <SpaceH of={16} />
                  <Body>{t.plan_with_option_description}</Body>
                  <SpaceH of={16} />
                  <ButtonSecondary>
                    <Link
                      onClick={onClickContactSalesButton}
                      to={Route[lang]["about/contact/sales/v2"] + "?build_plan_id=" + buildPlanId}
                    >
                      {t.contact_sales_button_label.text}
                    </Link>
                  </ButtonSecondary>
                </>
              ) : (
                <>
                  {parseInt(packageSelected.exhibitorsVolume) > 0 ? (
                    <StyledTypo4Green>{t.step_4_plan_exhibitors_above}</StyledTypo4Green>
                  ) : (
                    <StyledTypo4Green>{t.step_1_plan_above_title}</StyledTypo4Green>
                  )}
                  <SpaceH of={16} />
                  <Body>{t.step_1_plan_above_description}</Body>
                  <SpaceH of={16} />
                  <ButtonSecondary>
                    <Link
                      onClick={onClickContactSalesButton}
                      to={Route[lang]["about/contact/sales/v2"] + "?build_plan_id=" + buildPlanId}
                    >
                      {t.contact_sales_button_label.text}
                    </Link>
                  </ButtonSecondary>
                </>
              )}
            </RigthColumnContainer>
          </Col>
        </StyledRow>
      </Grid>
    </React.Fragment>
  );
};

export default ExhibitorsServices;
