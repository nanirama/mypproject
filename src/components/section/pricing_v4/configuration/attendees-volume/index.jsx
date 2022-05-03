import React, { useEffect, useState, useReducer } from "react";
// import numeral from "numeral";
import moment from "moment";
import tp from "../../../../../localization/tracking.json";
import { Grid, Row, Col } from "react-flexbox-grid";

import {
  ArrowIcon,
  ScaleInput,
  // Contactlink,
  LeftColumn,
  PackageDescription,
  // RigthColumn,
  TitleBlock,
  StyledRow,
  AttendeesVolumeGrey,
  StyledTypo3,
  StyledTypo4,
  StyledTypo5,
  ErrorEventFormat,
  RigthColumnContainer,
  SubtitleBlock,
} from "../styled";
import { Typo2 } from "../../../../typographie";
import withLocation from "../../../../../HOC/location";
import { SpaceH } from "../../../../space";
import { ButtonSecondary } from "../../../../button";
import "react-dates/lib/css/_datepicker.css";
// import { crossEurUsd, crossEurCad, crossEurAed } from "../common";
// import PricingSlider from "../../../../slider_rail";
import PricingSlider2 from "../../../../slider_rail_2";
import ProgressBar from "../../../../progress_bar";
import { InputWithButtons } from "../../../../form/input_with_buttons";
import Link from "../../../../utils/link";
import { Select } from "../../../../form/select";
import Route from "../../../../../localization";
import { analyticsTrack } from "../../../../utils/segment";
import { DateSingleInput } from "@datepicker-react/styled";

import { ThemeProvider } from "styled-components";
// import { features } from "process";

const AttendeesVolume = ({ setStep, translation, lang, ...props }) => {
  const isClient = typeof window !== "undefined";
  let obj = {};
  if (isClient) {
    obj = JSON.parse(window.localStorage.getItem("package"));
  }
  const convertHighRange = (value) => {
    if (value <= 5000) return "+1.5k";
    if (value <= 10000) return "+5k";
    if (value <= 20000) return "+10k";
    if (value < 50000) return "+25k";
    if (value >= 50000) return "+50k";
  };

  useEffect(() => {
    analyticsTrack(tp.events.plan_building_visited, {
      [tp.properties.view]: "attendees_number",
    });
  }, []);

  const initialNumberOfAttendees = Number(obj && obj.numberOfAttendees) || 0;
  const initialNumberOfEvents = Number(obj && obj.numberOfEvents) || 1;

  const initialState = {
    date: (obj && obj.firstEventDate && new Date(obj.firstEventDate)) || null,
    showDatepicker: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "focusChange":
        return { ...state, showDatepicker: action.payload };
      case "dateChange":
        return action.payload;
      default:
        throw new Error();
    }
  }

  const t = translation.data.primary;

  const [nextButtonDisabled, setButtonDisabled] = useState(true);

  const [attendeesValue, setAttendeesValue] = useState(initialNumberOfAttendees);
  const [eventsValue, setEventsValue] = useState(initialNumberOfEvents);
  const [eventFormat, setEventFormat] = useState("virtual");

  const [state, dispatch] = useReducer(reducer, initialState);

  const minAttendees = 50;

  useEffect(() => {
    if (attendeesValue >= minAttendees && state.date) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [attendeesValue, state.date]);

  // const isInesAccepted = moment(state.date).isAfter(moment().add(2, "month"));
  const isInesAccepted = true;

  const onClickContinueButton = () => {
    if (attendeesValue >= 50 || props.search.bypass) {
      if (!obj) obj = {};
      obj.step = 2;
      obj.numberOfEvents = Number(eventsValue);
      obj.numberOfAttendees = Number(attendeesValue);
      obj.firstEventDate = state.date?.toString();
      obj.eventFormat = eventFormat;
      if (isClient) window.localStorage.setItem("package", JSON.stringify(obj));

      analyticsTrack(tp.events.plan_building_submitted, {
        [tp.properties.view]: "attendees_number",
        [tp.properties.attendees_number]: Number(attendeesValue),
        [tp.properties.event_format]: eventFormat,
        [tp.properties.numbers_of_events]: Number(eventsValue),
        [tp.properties.first_event_date]: state.date,
      });

      setStep(isInesAccepted ? 2 : 3);
    }
  };

  // const continueButtonIsDisabled = eventFormat !== "null";

  return (
    <React.Fragment>
      <Grid>
        <Row center="xs">
          <Col xs={12}>
            <TitleBlock>
              <Link to={Route[lang]["pricing_4"]}>
                <ArrowIcon src={t.arrow_go_backwards.url} alt={t.arrow_go_backwards.alt} />
              </Link>
              <Typo2>
                {t.step_1} · {t.step_1_heading_title.text}
              </Typo2>
            </TitleBlock>
          </Col>
        </Row>
        <SpaceH of={32} />
        <Row center="xs">
          <SubtitleBlock center={"xs"}>
            <img src={t.event_app_image.url} alt={t.event_app_image.alt} height={"74px"} />
            <SpaceH of={16} />
            <StyledTypo3>{t.image_title.text}</StyledTypo3>
            <SpaceH of={8} />
            <StyledTypo5>{t.image_subtitle.text}</StyledTypo5>
          </SubtitleBlock>
        </Row>
        <SpaceH of={70} />
        <StyledRow>
          <LeftColumn xs={12} md={8}>
            <StyledRow>
              <Col xs={12} sm={9}>
                <StyledTypo4>1. {t.number_of_events_title.text}</StyledTypo4>
              </Col>
              <Col xs={12} sm={3}>
                <InputWithButtons name="events_number" suffix="" value={eventsValue} setValue={setEventsValue} />
              </Col>
            </StyledRow>
            <SpaceH of={30} />
            <StyledRow>
              <Col xs={12} sm={9}>
                <StyledTypo4>2. {t.step_1_event_format}</StyledTypo4>
              </Col>
              <Col xs={12} sm={3}>
                <Select
                  name="event_format"
                  onChange={(e) => setEventFormat(e.target.value)}
                  options={[
                    {
                      value: "virtual",
                      label: t.virtual,
                    },
                    {
                      value: "hybrid",
                      label: t.hybrid,
                    },
                    {
                      value: "in_person",
                      label: t.in_person,
                    },
                  ]}
                ></Select>
              </Col>
            </StyledRow>
            <SpaceH of={30} />
            <StyledRow>
              <Col xs={12} sm={8}>
                <StyledTypo4>3. {t.datepicker_label}</StyledTypo4>
              </Col>
              <Col xs={12} sm={4}>
                <div style={{ marginLeft: "50px", zIndex: 100, display: "block" }}>
                  <ThemeProvider
                    theme={{
                      breakpoints: ["32em", "48em", "64em"],
                      reactDatepicker: {
                        daySize: [36, 40],
                        fontFamily: "system-ui, -apple-system",
                        colors: {
                          accessibility: "#00cc88",
                          selectedDay: "#00cc88",
                          selectedDayHover: "#00cc88",
                          primaryColor: "#00cc88",
                        },
                      },
                    }}
                  >
                    <DateSingleInput
                      onDateChange={(data) => dispatch({ type: "dateChange", payload: data })}
                      onFocusChange={(focusedInput) => dispatch({ type: "focusChange", payload: focusedInput })}
                      date={state.date} // Date or null
                      displayFormat={lang === "fr-fr" ? "dd/MM/yyyy" : "MM/dd/yyy"}
                      phrases={{ datePlaceholder: t.datepicker_placeholder }}
                      showDatepicker={state.showDatepicker} // Boolean
                    />
                  </ThemeProvider>
                </div>
              </Col>
            </StyledRow>
            <SpaceH of={30} />
            <StyledRow>
              <Col xs={12}>
                <StyledTypo4>4. {t.attendees_volume.text}</StyledTypo4>
                <SpaceH of={8} />
                <PackageDescription>{t.attendees_volume_subparagraph.text}</PackageDescription>
              </Col>
            </StyledRow>
            <SpaceH of={24} />
            <StyledRow>
              <Col xs={12} sm={8}>
                <PricingSlider2 currentAttendeesVolume={attendeesValue} setSliderValue={setAttendeesValue} />
              </Col>
              <Col xs={12} sm={4}>
                {parseInt(attendeesValue) <= 1500 || isNaN(attendeesValue) ? (
                  <ScaleInput
                    name={"attendees_volume"}
                    type="number"
                    min={minAttendees}
                    max={25000}
                    value={attendeesValue}
                    onChange={(e) => setAttendeesValue(parseInt(e.target.value))}
                  />
                ) : (
                  <>
                    <AttendeesVolumeGrey>
                      {convertHighRange(attendeesValue)} {t.step_1_attendees}
                    </AttendeesVolumeGrey>
                  </>
                )}
                {/* {attendeesValue < 25000 ? (
                  <AttendeesVolumeGrey>
                    {numeral(attendeesValue).format("0,0")} {t.step_1_attendees}
                  </AttendeesVolumeGrey>
                ) : (
                  <AttendeesVolumeGrey>25,000+ {t.step_1_attendees}</AttendeesVolumeGrey>
                )} */}
              </Col>
            </StyledRow>
            <SpaceH of={24} />
          </LeftColumn>
          <Col xs={12} md={4}>
            <RigthColumnContainer>
              <>
                <StyledTypo4>{t.package_is_almost_ready_label.text}</StyledTypo4>
                <SpaceH of={24} />
                <ProgressBar progress={1} />
                <SpaceH of={28} />

                <ButtonSecondary disabled={nextButtonDisabled} onClick={onClickContinueButton}>
                  {t.continue_button_label.text}
                </ButtonSecondary>
                <SpaceH of={10} />
                <ErrorEventFormat>
                  {t.min_volume} {minAttendees}
                </ErrorEventFormat>

                {/* <SpaceH of={24} />
                <Contactlink>
                  <Link to={Route[lang]["about/contact/sales/v2"]}>{t.contact_sales_label.text}</Link>
                </Contactlink> */}
              </>
            </RigthColumnContainer>

            {/* <RigthColumnContainer>
              {parseInt(attendeesValue) <= 5000 || isNaN(attendeesValue) ? (
                <>
                  <StyledTypo4>{t.package_is_almost_ready_label.text}</StyledTypo4>
                  <SpaceH of={24} />
                  <ProgressBar progress={1} />
                  <SpaceH of={28} />
                  <ButtonSecondary onClick={onClickContinueButton}>{t.continue_button_label.text}</ButtonSecondary>
                  <SpaceH of={24} />
                  <Contactlink>
                    <Link to={Route[lang]["about/contact/sales/v2"]}>{t.contact_sales_label.text}</Link>
                  </Contactlink>
                </>
              ) : (
                <>
                  <StyledTypo4>{t.step_1_plan_above_title}</StyledTypo4>
                  <SpaceH of={16} />
                  <Body>{t.step_1_plan_above_description}</Body>
                  <SpaceH of={16} />
                  <ButtonSecondary>
                    <Link
                      onClick={() =>
                        analyticsTrack("Pricing Simulator Submitted", {
                          view: "attendees_number",
                          attendees_volume: attendeesValue
                        })
                      }
                      to={Route[lang]["about/contact/sales/v2"]}
                    >
                      {t.contact_sales_button_label.text}
                    </Link>
                  </ButtonSecondary>
                </>
              )}
            </RigthColumnContainer> */}
          </Col>
        </StyledRow>
      </Grid>
    </React.Fragment>
  );
};

export default withLocation(AttendeesVolume);
