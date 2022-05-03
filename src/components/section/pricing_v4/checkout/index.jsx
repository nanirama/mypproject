import React, { useState, useEffect, useReducer } from "react";
// import { useLayoutEffect } from "react";
import { graphql } from "gatsby";
import LogoSrc from "../../../../assets/images/Logo/LogoFINAL.svg";
import { Col, Grid, Row } from "react-flexbox-grid";
import * as styled from "./styled";
import { Typo4 } from "../../../typographie";
import { Input } from "../../../form/input";
import { Select } from "../../../form/select";
import ReactTooltip from "react-tooltip";
import Label from "../../../form/label";
import { SpaceH } from "../../../space";
import { v4 as uuidv4 } from "uuid";
import Submit from "../../../form/submit";
import ClientOnly from "../../../../HOC/clients";
import axios from "axios";
import { getUserAndToken } from "../../../../HOC/auth";
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { navigate } from "gatsby";
import Card from "./card";
import Route from "../../../../localization";
import tp from "../../../../localization/tracking.json";
import priceList from "../configuration/prices.json";
import {
  showPriceStrRaw,
  showPriceStrByItem,
  calculateSum2,
  getPackage,
  showPriceStrRawNumeral,
} from "../configuration/common";
import MixpanelHelper, { analyticsTrack, analyticsIdentify, analyticsIdentifyAnonymous } from "../../../utils/segment";
import Link from "../../../utils/link";
import * as helper from "./helper";
import ChameleonButton from "../../../form/chamaleon_button";
import SelectSearch from "react-select-search";
import { StyledSelectSearch } from "../../support/styled";

//Old cod

const promiseStripe = loadStripe(process.env.STRIPE);

const id = uuidv4();

const Checkout = ({ translation, lang }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.href = "https://www.swapcard.com/billing/organization/";
    }
  }, []);

  const env = process.env.ENV_NAME === "production" ? "production" : "development";

  const { attendeesVolume, eventFormat, ...features } = getPackage();

  const [currency] = useState(features.currency);

  const pricePerAttendees = priceList["attendees"][currency];

  const stripeClient = useStripe();

  const [userId, setUserId] = useState("");
  const [organizationsData, setOrganizationsData] = useState();
  const [organization, setOrganization] = useState();
  const [errorStripe, setErrorStripe] = useState("");

  const [HT, setHT] = useState(0);

  const [stripeLoading, setStripeLoading] = useState(false);

  const elements = useElements();

  const { register, handleSubmit, errors, watch, setValue } = useForm({
    defaultValues: {
      ...(currency === "eur" && {
        country: "FR",
      }),
      ...(currency === "cad" && {
        country: "CA",
      }),
    },
  });
  const watchCountry = watch("country");
  const watchEmail = watch("email");

  const [finalPrice, setFinalPrice] = useState(0);

  const [clientSecret, setClientSecret] = useState("");

  const initialState = {
    loggedIn: true,
    loadingSignup: true,
    shouldCreateEvent: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "LOADING": {
        return {
          ...state,
          loadingSignup: true,
        };
      }
      case "LOGGED_IN": {
        return {
          ...state,
          loggedIn: true,
          loadingSignup: false,
        };
      }
      case "LOGGED_OUT": {
        return {
          ...state,
          loggedIn: false,
          loadingSignup: false,
        };
      }
      case "NO_EVENTS_CREATED": {
        return {
          ...state,
          shouldCreateEvent: true,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };

  const [{ loggedIn, loadingSignup, shouldCreateEvent }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const isClient = typeof window !== "undefined";
    let packageInfo;
    if (isClient) packageInfo = JSON.parse(window.localStorage.getItem("package"));

    axios(process.env.STRIPE_INTENT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { country: watchCountry, ...packageInfo, id, userId },
    })
      .then((res) => {
        setClientSecret(res.data);
      })
      .catch((error) => {
        console.error(error);
        alert(`Please contact robin@swapcard.com. An error occurred. ${error}`);
      });
  }, [watchCountry, userId]);

  useEffect(() => {
    const fetchAuth = async () => {
      dispatch({ type: "LOADING" });
      const data = await getUserAndToken();
      if (data) {
        setValue("firstName", data.userData.me.user.firstName);
        setValue("lastName", data.userData.me.user.lastName);
        setValue("email", data.userData.me.user.primaryEmail);
        setUserId(data.userData.me.user._id);

        const organizations = (
          await axios({
            url: process.env.API_EVENTS,
            method: "post",
            headers: {
              Authorization: `Bearer ${data.accessToken}`,
            },
            data: {
              query: `
                query OrgsAndEvents {
                  organizations {
                    nodes {
                      id
                      name
                    }
                  }
                  viewer {
                    events: ownedEvents {
                      id
                    }
                  }
                }
        `,
            },
          })
        ).data;

        setOrganizationsData(organizations);

        if (organizations.data.viewer.events.length === 0) {
          dispatch({ type: "NO_EVENTS_CREATED" });
        }
        dispatch({ type: "LOGGED_IN" });
      } else {
        analyticsTrack(tp.events.checkout_page_visited, {
          [tp.properties.logged_in]: false,
        });

        dispatch({ type: "LOGGED_OUT" });
      }
    };

    fetchAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let total = 0;

    total += calculateSum2(currency, watchCountry);

    setHT(total);

    analyticsIdentifyAnonymous({
      [tp.properties.checkout_expected_revenue]: total,
      [tp.properties.checkout_expected_revenue_currency]: currency,
    });

    if (watchCountry === "FR") {
      total += total * 0.2;
    }

    console.log("Total", total, currency);

    setFinalPrice(showPriceStrRaw(currency, total));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchCountry]);

  const onSubmit = async (data) => {
    if (loggedIn) {
      setStripeLoading(true);

      await axios(process.env.CHECKOUT_SAVE_BILLING, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        data: {
          id,
          country: data.country,
          city: data.city,
          zip: data.zip,
          province: data.province,
          email: data.email,
          state: data.state,
          address: data.address,
          company: data.company,
          first_name: data.firstName,
          last_name: data.lastName,
          user_language: lang,
          currency: currency,
          user_id: userId || watchEmail,
          created_at: new Date(),
          vat: data.vatNumber,
          env,
          rate_per_attendees: pricePerAttendees,
          organizationId: organization,
          ...getPackage(),
        },
      });

      const payload = await stripeClient.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: data.firstName + " " + data.lastName,
            email: data.email,
            address: {
              country: data.country,
              city: data.city,
              line1: data.address,
              state: data.state,
            },
          },
        },
        receipt_email: data.email,
      });

      // console.log(payload);

      if (payload.error) {
        console.log(payload.error);
        setErrorStripe(payload.error.message);

        // alert("An error occured, please contact support@swapcard.com. Your card has not been charged");
        setStripeLoading(false);
      } else {
        navigate(process.env.HOST + Route[lang]["/checkout/confirmation"]);

        setStripeLoading(false);
      }
    }
  };

  useEffect(() => {
    register(
      { name: "organization" },
      {
        required: t.organization_error,
      }
    );
  }, []);

  const t = translation.primary;

  const labelColor = "#777788";

  const organizations = organizationsData?.data?.organizations?.nodes?.map((e) => {
    return {
      value: e.id,
      name: e.name,
    };
  });

  return (
    <div>
      <styled.Background>
        <form onSubmit={handleSubmit(onSubmit)}>
          <styled.ContainerCenter>
            <Grid>
              <Row center="xs" start="md">
                <Col md={12}>
                  <Link to={Route[lang]["pricing/build-plan"]}>
                    <styled.Logo src={LogoSrc} />
                  </Link>
                </Col>
              </Row>
              <Row>
                <Col md={7}>
                  {!loggedIn && (
                    <styled.PopupContainer>
                      <styled.PopupInvitation>
                        <Typo4>{t.login_or_signup}</Typo4>
                        <SpaceH of={20} />
                        <MixpanelHelper analytics-location="Checkout" analytics-category="Go login from checkout">
                          <Link to={"https://studio.swapcard.com/join?ref=checkout"}>
                            <ChameleonButton value={t.login_or_signup_button} />
                          </Link>
                        </MixpanelHelper>
                      </styled.PopupInvitation>
                    </styled.PopupContainer>
                  )}
                  {shouldCreateEvent && (
                    <styled.PopupContainer>
                      <styled.PopupInvitation>
                        <Typo4>{t.should_create_event_label}</Typo4>
                        <SpaceH of={20} />
                        <MixpanelHelper
                          analytics-location="Checkout"
                          analytics-category="Go create first event from checkout"
                        >
                          <Link to={"https://studio.swapcard.com/"}>
                            <ChameleonButton value={t.create_event_button} />
                          </Link>
                        </MixpanelHelper>
                      </styled.PopupInvitation>
                    </styled.PopupContainer>
                  )}
                  <styled.ContainerBorder>
                    <styled.LeftContainer blocked={!loggedIn || shouldCreateEvent}>
                      <Grid>
                        <Row>
                          <Col md={12}>
                            <Row>
                              <Col md={12}>
                                <Typo4 bold={600}>{t.account_information}</Typo4>
                              </Col>
                            </Row>
                            <SpaceH of={20} />
                            <Row>
                              <Col md={6}>
                                <Label color={labelColor}>{t.first_name}</Label>
                                <Input register={register} disabled={!loggedIn} required name="firstName" />
                                <styled.ErrorMessage>{errors.firstName && t.first_name_error}</styled.ErrorMessage>
                              </Col>
                              <Col md={6}>
                                <Label color={labelColor}>{t.last_name}</Label>
                                <Input register={register} required disabled={!loggedIn} name="lastName" />
                                <styled.ErrorMessage>{errors.lastName && t.last_name_error}</styled.ErrorMessage>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={12}>
                                <Label color={labelColor}>{t.email}</Label>
                                <Input name="email" register={register} type="text" disabled={!loggedIn} required />
                                <styled.ErrorMessage>{errors.lastName && t.email_error}</styled.ErrorMessage>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={12}>
                                <Label color={labelColor}>{t.organization}</Label>
                                <StyledSelectSearch theme="gray">
                                  <SelectSearch
                                    name="organization"
                                    inputRef={register}
                                    options={organizations}
                                    onChange={(e) => {
                                      setOrganization(e);
                                      setValue("organization", e);
                                    }}
                                    search
                                    value={organization}
                                    placeholder={"Please Select"}
                                  />
                                </StyledSelectSearch>
                                <styled.ErrorMessage>{errors.organization && t.organization_error}</styled.ErrorMessage>
                              </Col>
                            </Row>

                            <SpaceH of={40}></SpaceH>
                            <Row>
                              <Col md={12}>
                                <Typo4 bold={600}>{t.billing_information}</Typo4>
                              </Col>
                            </Row>
                            <SpaceH of={20} />

                            <Row>
                              <Col md={12}>
                                <Label color={labelColor}>{t.company}</Label>

                                <Input name="company" type="text" disabled={!loggedIn} register={register} required />

                                <styled.ErrorMessage>{errors.company && t.company_error}</styled.ErrorMessage>
                              </Col>
                            </Row>

                            <Row>
                              <Col md={12}>
                                <Label color={labelColor}>{t.country}</Label>
                                <Select
                                  name="country"
                                  required
                                  disabled={!loggedIn}
                                  register={register}
                                  options={[
                                    {
                                      label: t.please_select,
                                      value: "",
                                    },
                                    ...helper.countriesSelect,
                                  ]}
                                />
                                <styled.ErrorMessage>{errors.country && t.country_error}</styled.ErrorMessage>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={12}>
                                <Label color={labelColor}>{t.address}</Label>

                                <Input name="address" type="text" register={register} disabled={!loggedIn} required />

                                <styled.ErrorMessage>{errors.address && t.address_error}</styled.ErrorMessage>
                              </Col>
                            </Row>

                            <Row>
                              <Col md>
                                <Label color={labelColor}>{t.city}</Label>
                                <Input name="city" register={register} disabled={!loggedIn} required />
                                <styled.ErrorMessage>{errors.city && t.city_error}</styled.ErrorMessage>
                              </Col>

                              <Col md>
                                <Label color={labelColor}>{t.zip_code}</Label>
                                <Input register={register} required disabled={!loggedIn} name="zip" />
                                <styled.ErrorMessage>{errors.zip && t.zip_code_error}</styled.ErrorMessage>
                              </Col>
                              {watchCountry === "us" && (
                                <Col md={12}>
                                  <Label color={labelColor}>{t.state}</Label>
                                  <Select
                                    name="state"
                                    required={watchCountry === "us"}
                                    register={register}
                                    disabled={!loggedIn}
                                    options={[
                                      {
                                        label: t.please_select,
                                        value: "",
                                      },
                                      ...helper.usaState,
                                    ]}
                                  />
                                  <styled.ErrorMessage>{errors.state && t.state_error}</styled.ErrorMessage>
                                </Col>
                              )}
                              {watchCountry === "CA" && (
                                <Col md={12}>
                                  <Label color={labelColor}>{t.province}</Label>
                                  <Select
                                    name="province"
                                    required={watchCountry === "ca"}
                                    register={register}
                                    disabled={!loggedIn}
                                    options={[
                                      {
                                        label: t.please_select,
                                        value: "",
                                      },
                                      ...helper.canadaProvince,
                                    ]}
                                  />
                                  <styled.ErrorMessage>
                                    {errors.province && <p>{t.province_error}</p>}
                                  </styled.ErrorMessage>
                                </Col>
                              )}
                            </Row>

                            <Row>
                              <Col md={12}>
                                <Label color={labelColor}>VAT</Label>
                                <Input name="vatNumber" type="text" register={register} disabled={!loggedIn} />
                              </Col>
                            </Row>
                          </Col>
                        </Row>

                        <SpaceH of={30} />

                        <Row>
                          <Col md={12}>
                            <Typo4 bold={600}>{t.credit_card_title}</Typo4>
                          </Col>
                        </Row>
                        <SpaceH of={20} />
                        <Row>
                          <Col md={12}>
                            <Card setHasError={setErrorStripe} />
                            <styled.ErrorMessage>{errorStripe}</styled.ErrorMessage>
                          </Col>
                        </Row>
                      </Grid>
                    </styled.LeftContainer>
                  </styled.ContainerBorder>
                </Col>
                <Col md={5} xs={12}>
                  <styled.RightContainer>
                    <styled.OrderSummaryHead>{t.order_summary}</styled.OrderSummaryHead>

                    {features && attendeesVolume && eventFormat ? (
                      <div>
                        <styled.TotalWrapper>
                          <div>
                            <ReactTooltip id="attendees_credits" effect="solid" multiline="true">
                              <styled.TooltipContent
                                dangerouslySetInnerHTML={{
                                  __html: `${t.attendees_credit_help}`,
                                }}
                              />
                            </ReactTooltip>
                            <styled.OrderSummaryLine>
                              <span>{t.attendees_credits}</span>
                              &nbsp;
                              <styled.Question data-for="attendees_credits" data-tip="hello world">
                                (?)
                              </styled.Question>
                              <span>
                                <b>{attendeesVolume}</b> x&nbsp;
                                <span>{showPriceStrRaw(currency, pricePerAttendees)}</span>
                              </span>
                            </styled.OrderSummaryLine>
                          </div>
                          <div>
                            {eventFormat === "virtual" && (
                              <div>
                                <div>
                                  <ReactTooltip id="virtual_events" effect="solid" multiline="true">
                                    <styled.TooltipContent
                                      dangerouslySetInnerHTML={{
                                        __html: `${t.virtual_feature_help}`,
                                      }}
                                    />
                                  </ReactTooltip>
                                </div>
                                <styled.OrderSummaryLine>
                                  <span>{t.virtual_events}</span>
                                  &nbsp;
                                  <styled.Question data-for="virtual_events" data-tip="hello world">
                                    (?)
                                  </styled.Question>
                                  <span>
                                    <b>{t.included}</b>
                                  </span>
                                </styled.OrderSummaryLine>
                              </div>
                            )}
                          </div>
                          <div>{features.hasOptions && <styled.OrderGroup>{t.total_options}</styled.OrderGroup>}</div>
                          <div>
                            {features.brandedApp && (
                              <div>
                                <ReactTooltip id="branded_app" effect="solid" multiline="true" clickable={true}>
                                  <styled.TooltipContent
                                    dangerouslySetInnerHTML={{
                                      __html: `${t.branded_app_help}`,
                                    }}
                                  />
                                </ReactTooltip>
                                <styled.OrderSummaryLine>
                                  <span>{t.branded_app}</span>
                                  &nbsp;
                                  <styled.Question data-for="branded_app" data-tip="hello world" data-event="click">
                                    (?)
                                  </styled.Question>
                                  <span>
                                    <b>{showPriceStrByItem(currency, "branded_app")}</b>
                                  </span>
                                </styled.OrderSummaryLine>
                              </div>
                            )}
                          </div>
                          <div>{features.hasSupport && <styled.OrderGroup>{t.total_support}</styled.OrderGroup>}</div>
                          <div>
                            {features.webTraining && (
                              <div>
                                <ReactTooltip id="web_training" effect="solid" multiline="true">
                                  <styled.TooltipContent
                                    dangerouslySetInnerHTML={{
                                      __html: `${t.web_training_help}`,
                                    }}
                                  />
                                </ReactTooltip>
                                <styled.OrderSummaryLine>
                                  <span>{t.web_training}</span>
                                  &nbsp;
                                  <styled.Question data-for="web_training" data-tip="hello world">
                                    (?)
                                  </styled.Question>
                                  <span>
                                    <b>{showPriceStrByItem(currency, "web_training")}</b>
                                  </span>
                                </styled.OrderSummaryLine>
                              </div>
                            )}
                          </div>
                          <div>
                            {features.dedicatedSupport && features.dedicatedSupportDays > 0 && (
                              <div>
                                <ReactTooltip id="dedicated_support" effect="solid" multiline="true">
                                  <styled.TooltipContent
                                    dangerouslySetInnerHTML={{
                                      __html: `${t.dedicated_support_help}`,
                                    }}
                                  />
                                </ReactTooltip>
                                <styled.OrderSummaryLine>
                                  {/* <span>dedicatedSupport</span> */}
                                  {/* <span>
                            <b>{loggedIn && showPriceStrByItem(currency, "dedicated_manager_per_day")}</b>
                          </span> */}
                                  <span>{t.dedicated_support}</span>
                                  &nbsp;
                                  <styled.Question data-for="dedicated_support" data-tip="hello world">
                                    (?)
                                  </styled.Question>
                                  <span>
                                    <b>
                                      {features.dedicatedSupportDays} {t.dedicated_support_days}
                                    </b>
                                    &nbsp;x&nbsp;
                                    <span>{showPriceStrByItem(currency, "dedicated_manager_per_day")}</span>
                                  </span>
                                </styled.OrderSummaryLine>
                              </div>
                            )}
                          </div>
                          <div>
                            {features.onSiteSupport && features.onSiteSupportDays > 0 && (
                              <div>
                                <ReactTooltip id="onsite_support" effect="solid" multiline="true">
                                  <styled.TooltipContent
                                    dangerouslySetInnerHTML={{
                                      __html: `${
                                        eventFormat === "virtual" ? t.online_support_virtual : t.onsite_support_help
                                      }`,
                                    }}
                                  />
                                </ReactTooltip>

                                <styled.OrderSummaryLine>
                                  {eventFormat !== "virtual" ? t.onsite_support : t.online_support_virtual_help}
                                  <span></span>
                                  &nbsp;
                                  <styled.Question data-for="onsite_support" data-tip="hello world">
                                    (?)
                                  </styled.Question>
                                  <span>
                                    <b>
                                      {features.onSiteSupportDays} {t.dedicated_support_days}
                                    </b>
                                    &nbsp;x&nbsp;
                                    <span>{showPriceStrByItem(currency, "onsite_support_per_day")}</span>
                                  </span>
                                </styled.OrderSummaryLine>
                              </div>
                            )}
                          </div>
                          <div>
                            {features.hasExhibitorsServices && (
                              <styled.OrderGroup>{t.total_exhibitors}</styled.OrderGroup>
                            )}
                          </div>
                          <div>
                            {features.exhibitorsVolume > 0 && (
                              <div>
                                <styled.OrderSummaryLine>
                                  <span>{t.exhibitorvolume}</span>
                                  &nbsp;
                                  <styled.Question data-for="exhibitor_volume_help" data-tip="hello world">
                                    &nbsp;
                                  </styled.Question>
                                  <span>{features.exhibitorsVolume}</span>
                                </styled.OrderSummaryLine>
                              </div>
                            )}
                            <div></div>
                            {features.globalExhibitorPackage && (
                              <div>
                                <ReactTooltip id="exhibitor_package" effect="solid" multiline="true">
                                  <styled.TooltipContent
                                    dangerouslySetInnerHTML={{
                                      __html: `${t.exhibitor_global_package_help}`,
                                    }}
                                  />
                                </ReactTooltip>
                                <styled.OrderSummaryLine>
                                  <span>{t.exhibitor_package}</span>
                                  &nbsp;
                                  <styled.Question data-for="exhibitor_package" data-tip="hello world">
                                    (?)
                                  </styled.Question>
                                  <span>
                                    <span>{showPriceStrByItem(currency, "exhibitor_package_without_scan")}</span>
                                    <b>{features.exhibitorsVolume} x </b>
                                  </span>
                                </styled.OrderSummaryLine>
                              </div>
                            )}
                          </div>
                          <div>
                            {features.contentManagementFeature && (
                              <div>
                                <ReactTooltip id="exhibitorsVolume" effect="solid" multiline="true" clickable={true}>
                                  <styled.TooltipContent
                                    dangerouslySetInnerHTML={{
                                      __html: `${t.cms_help}`,
                                    }}
                                  />
                                </ReactTooltip>
                                <styled.OrderSummaryLine>
                                  <span>{t.cms}</span>
                                  &nbsp;
                                  <styled.Question
                                    data-for="exhibitorsVolume"
                                    data-event="click"
                                    data-tip="hello world"
                                  >
                                    (?)
                                  </styled.Question>
                                  <span>
                                    <b>{features.exhibitorsVolume} x </b>
                                    <span>{showPriceStrByItem(currency, "virtual_exhibitors_package")}</span>
                                  </span>
                                </styled.OrderSummaryLine>
                              </div>
                            )}
                          </div>
                          <div>
                            {features.leadCaptureFeature && (
                              <div>
                                <ReactTooltip id="lead_scan" effect="solid" multiline="true">
                                  <styled.TooltipContent
                                    dangerouslySetInnerHTML={{
                                      __html: `${t.lead_capture_help}`,
                                    }}
                                  />
                                </ReactTooltip>
                                <styled.OrderSummaryLine>
                                  <span>{t.lead_scan}</span>
                                  &nbsp;
                                  <styled.Question data-for="lead_scan" data-tip="hello world">
                                    (?)
                                  </styled.Question>
                                  <span>
                                    <b>{features.exhibitorsVolume} x </b>
                                    <span>{showPriceStrByItem(currency, "lead_capture_per_exhibitor")}</span>
                                  </span>
                                </styled.OrderSummaryLine>
                              </div>
                            )}
                          </div>
                          <div>
                            {features.meetingsFeature && (
                              <div>
                                <ReactTooltip id="meetingsFeature" effect="solid" multiline="true">
                                  <styled.TooltipContent
                                    dangerouslySetInnerHTML={{
                                      __html: `${t.meetings_help}`,
                                    }}
                                  />
                                </ReactTooltip>
                                <styled.OrderSummaryLine>
                                  <span>{t.meetings}</span>
                                  &nbsp;
                                  <styled.Question data-for="meetingsFeature" data-tip="hello world">
                                    (?)
                                  </styled.Question>
                                  <span>
                                    <b>{features.exhibitorsVolume} x </b>
                                    <span>{showPriceStrByItem(currency, "meetings_per_exhibitor")}</span>
                                  </span>
                                </styled.OrderSummaryLine>
                              </div>
                            )}
                          </div>
                          <div>
                            {features.virtualExhibitorPackage && (
                              <div>
                                <ReactTooltip id="virtualExhibitorPackage" effect="solid" multiline="true">
                                  <styled.TooltipContent
                                    dangerouslySetInnerHTML={{
                                      __html: `${t.exhibitor_virtual_help}`,
                                    }}
                                  />
                                </ReactTooltip>
                                <styled.OrderSummaryLine>
                                  <span>{t.virtual_exhibitor_package}</span>
                                  &nbsp;
                                  <styled.Question data-for="virtualExhibitorPackage" data-tip="hello world">
                                    (?)
                                  </styled.Question>
                                  <span>
                                    <b>{features.exhibitorsVolume} x </b>
                                    <span>{showPriceStrByItem(currency, "exhibitor_package_without_scan")}</span>
                                  </span>
                                </styled.OrderSummaryLine>
                              </div>
                            )}
                          </div>

                          {/* <SpaceH of={20} /> */}
                          {/* <styled.OrderSummaryLine>
                      <span>{t.event_app}</span>
                      <span>{t.included}</span>
                    </styled.OrderSummaryLine> */}
                          {/* <SpaceH of={20} /> */}
                          {/* <styled.OrderSummaryLine>
                      <span>{t.online_support}</span>
                      <span>{t.included}</span>
                    </styled.OrderSummaryLine> */}
                          {/* <SpaceH of={20} /> */}
                          <div>
                            <styled.OrderSummarySep></styled.OrderSummarySep>
                          </div>
                          <div>
                            {HT ? (
                              <styled.OrderTax>
                                {watchCountry === "FR" && <span>{t.subtotal}</span>}
                                {watchCountry === "FR" && (
                                  <span>{!loadingSignup && showPriceStrRawNumeral(currency, HT)}</span>
                                )}
                              </styled.OrderTax>
                            ) : (
                              <styled.OrderTax>
                                {watchCountry === "FR" && <span>{t.subtotal}</span>}
                                {watchCountry === "FR" && <span>{t.loading}</span>}
                              </styled.OrderTax>
                            )}
                            <styled.OrderTax>
                              {watchCountry === "FR" ? <span>{t.vat}</span> : <span>Tax</span>}
                              {watchCountry === "FR" ? <span>20%</span> : <span>0%</span>}
                            </styled.OrderTax>
                            {finalPrice ? (
                              <styled.OrderTotal>
                                <span>
                                  {t.total} {watchCountry === "FR" && <span>{t.with_tax}</span>}
                                </span>
                                <span>{!loadingSignup && showPriceStrRawNumeral(currency, finalPrice)}</span>
                              </styled.OrderTotal>
                            ) : (
                              <styled.OrderTotal>
                                <span>
                                  {t.total} {watchCountry === "FR" && <span>{t.with_tax}</span>}
                                </span>
                                <span>{t.loading}</span>
                              </styled.OrderTotal>
                            )}
                          </div>
                          <div>
                            <SpaceH of={20}></SpaceH>
                            <styled.CGU>
                              <input
                                type="checkbox"
                                name="cgu"
                                ref={register({ required: true })}
                                style={{ "-webkit-appearance": "checkbox", "-moz-appearance": "checkbox" }}
                              ></input>
                              <div>
                                <styled.CGUText
                                  error={errors.cgu}
                                  style={{ display: "block" }}
                                  dangerouslySetInnerHTML={{
                                    __html: `${t.cgu.html}`,
                                  }}
                                />
                              </div>
                            </styled.CGU>
                          </div>
                          <SpaceH of={20}></SpaceH>
                          {loggedIn ? (
                            <Submit value={t.buy_now} isLoading={stripeLoading} />
                          ) : (
                            <Link to={"https://studio.swapcard.com/join?ref=checkout"}>
                              <ChameleonButton value={t.lang == "fr-fr" ? "S'inscrire" : "Signup"} isLoading={false} />
                            </Link>
                          )}
                        </styled.TotalWrapper>
                      </div>
                    ) : (
                      <div>
                        <styled.TotalWrapperLoading>
                          <div>{t.loading}...</div>
                        </styled.TotalWrapperLoading>
                      </div>
                    )}
                  </styled.RightContainer>
                  <SpaceH of={20}></SpaceH>
                  <styled.SidebarQuestion>
                    <b>{t.credits_title}</b>
                  </styled.SidebarQuestion>
                  <styled.SidebarAnswer>{t.credits_content}</styled.SidebarAnswer>
                  <SpaceH of={20}></SpaceH>
                  <styled.SidebarQuestion>
                    {t.have_more_question}&nbsp;
                    <styled.ContactUs to={Route[lang]["about/contact/sales/v2"]}>{t.contact_us}</styled.ContactUs>
                  </styled.SidebarQuestion>
                  <SpaceH of={20}></SpaceH>
                  {lang == "en-us" && (
                    <styled.SidebarQuestion>
                      Call <b>+1 206 456 2756</b> for any Questions
                      <styled.NumberInfo>9:00 AM - 6:00 PM (EST), Monday - Friday</styled.NumberInfo>
                    </styled.SidebarQuestion>
                  )}
                  {lang == "fr-fr" && (
                    <styled.SidebarQuestion>
                      <b>+33 1 84 80 76 75</b> pour toutes questions
                      <styled.NumberInfo>9:00 - 18:00, Lundi - Vendredi</styled.NumberInfo>
                    </styled.SidebarQuestion>
                  )}
                </Col>
              </Row>
            </Grid>
          </styled.ContainerCenter>
        </form>
      </styled.Background>
    </div>
  );
};

export default ({ data, lang }) => {
  return (
    <ClientOnly>
      <Elements stripe={promiseStripe}>
        <Checkout translation={data} lang={lang} />
      </Elements>
    </ClientOnly>
  );
};

export const query = graphql`
  fragment PricingCheckout on PrismicTemplate2 {
    data {
      bodyMain {
        ... on PrismicTemplate2BodyMainCheckout {
          slice_type
          primary {
            online_support_virtual
            online_support_virtual_help

            account_information
            first_name
            first_name_error
            last_name
            last_name_error
            email
            email_error
            organization
            organization_error
            should_create_event_label
            create_event_button
            city
            city_error
            country
            country_error
            address
            address_error
            billing_information
            zip_code
            zip_code_error
            state
            state_error
            buy_now
            credits_content
            credits_title
            stripe_redirection
            have_more_question
            order_summary

            credit_card_title

            exhibitor_volume_help

            attendees_credits
            online_support
            web_training
            included
            event_app
            virtual_events
            total

            branded_app

            company
            company_error
            contact_us
            province
            province_error

            dedicated_support
            dedicated_support_days

            onsite_support
            onsite_support_days

            exhibitorvolume

            global_exhibitor_package
            virtual_exhibitor

            meetings
            cms
            lead_scan

            please_select

            web_training_help
            exhibitor_virtual_help

            loading

            total_support
            total_exhibitors
            total_options

            virtual_exhibitor_package
            exhibitor_package

            branded_app_help
            cms_help
            lead_capture_help
            meetings_help
            exhibitor_global_package_help
            dedicated_support_help
            onsite_support_help
            attendees_credit_help

            event_app_help
            online_support_help
            virtual_feature_help

            login_or_signup
            login_or_signup_button
            signup_button
            vat
            subtotal

            cgu {
              html
            }
          }
        }
      }
    }
  }
`;
