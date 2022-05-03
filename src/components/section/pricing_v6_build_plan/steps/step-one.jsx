import React, { useEffect, useReducer, useState } from "react";
import { Col, Row, Grid } from "react-flexbox-grid";
import { ThemeProvider } from "styled-components";
import { DateSingleInput } from "@datepicker-react/styled";

import { analyticsTrack } from "../../../utils/segment";
import tp from "../../../../localization/tracking.json";

import { RigthColumnContainer, StyledTypo4, ArrowIcon, TitleBlock } from "../../pricing_v4/configuration/styled";
import { InputWithButtons } from "../../../form/input_with_buttons";
import { CurrencySwitcher, getPriceStringByPlanName, capitalize } from "../../pricing_v6/common";
import ProgressBar from "../../../progress_bar";
import { SpaceH } from "../../../space";
import { ButtonSecondary } from "../../../button";
import { OffsetTop, P, H2, StepsWrapper, Divider, PlanCardWrapper, PriceDate } from "../styled";
import { Typo4 } from "../../../typographie";
import { navigate } from "gatsby";
import Route from "../../../../localization";
import { Margin } from "styled-components-spacing";

const StepOne = ({ t, setStep, packageInitialData, settings, lang }) => {
  let obj = {};
  const isClient = typeof window !== "undefined";

  if (isClient) {
    obj = JSON.parse(window.localStorage.getItem("package_saas"));
  }

  const initialState = {
    date: (obj?.options?.firstEventDate && new Date(obj.options.firstEventDate)) || null,
    showDatepicker: false,
  };

  const [eventsNumber, setEventsNumber] = useState(obj?.options?.eventsNumber || 1);
  const [currency, setCurrency] = useState(packageInitialData.currency);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [buttonEnabled, setButtonEnabled] = useState();

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

  useEffect(() => {
    analyticsTrack(tp.events.plan_building_visited, {
      [tp.properties.view]: "step_1_number_of_events",
    });
  }, []);

  const handleStep = () => {
    if (state.date) {
      if (!obj) obj = {};
      obj.step = 2;
      obj.currency = currency;
      obj.options = {
        ...obj.options,
        firstEventDate: state.date,
        eventsNumber,
      };
      obj.plan = packageInitialData.plan.name;
      obj.billingPeriod = packageInitialData.billingPeriod;
      window.localStorage.setItem("package_saas", JSON.stringify(obj));

      analyticsTrack(tp.events.plan_building_submitted, {
        [tp.properties.view]: "step_1_number_of_events",

        [tp.properties.numbers_of_events]: Number(eventsNumber),
        [tp.properties.first_event_date]: state.date,
      });

      setStep(2);
    }
  };

  useEffect(() => {
    if (state.date) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }, [state.date]);

  const goToPricing = () => {
    navigate(Route[lang]["pricing_4"]);
  };

  return (
    <StepsWrapper>
      <Row center="xs">
        <Col xs={12}>
          <TitleBlock>
            <ArrowIcon
              onClick={goToPricing}
              src="https://images.prismic.io/showcase-dev/10840e12-7c12-4d4e-a41c-847d166c938e_icon_actions_navigation_arrow_left.svg?auto=format%2Ccompress&fit=max&q=50"
              alt="ico"
            />
            <H2 fs={30} color="#262f3d">
              {t.step_1}
            </H2>
          </TitleBlock>
          <Divider mt={16} />
          {settings.showCurrencySwitcher && (
            <CurrencySwitcher active={currency} onClick={(e) => setCurrency(e.target.id)} />
          )}
        </Col>
      </Row>
      <Divider mt={32} />
      {settings.showPlan && (
        <Row center="xs">
          <PlanCardWrapper>
            <div>
              <H2 mb={10} fs={20} align="left">
                <img src={packageInitialData.plan.iconUrl} alt="ico" height={16} style={{ marginRight: 18 }} />
                {capitalize(packageInitialData.plan.name)}
              </H2>
              <P fs={16} align="left">
                {packageInitialData.plan.description}
              </P>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                width: 150,
              }}
            >
              <P color="#686868">Starting at</P>
              <H2 fs={24} color="#262f3d">
                {getPriceStringByPlanName(currency, packageInitialData.billingPeriod, packageInitialData.plan.name)}{" "}
                <PriceDate>/month</PriceDate>
              </H2>
            </div>
          </PlanCardWrapper>
        </Row>
      )}
      <Grid>
        <Row between="lg">
          <Col md={8}>
            <Row middle="xs">
              <Col md={9}>
                <StyledTypo4>{t.number_of_events}</StyledTypo4>
              </Col>
              <Col md={3}>
                <InputWithButtons
                  name="events_number"
                  suffix=""
                  min={1}
                  value={eventsNumber}
                  setValue={setEventsNumber}
                />
              </Col>
            </Row>
            <SpaceH of={30} />
            <Row middle="xs">
              <Col md={9}>
                <StyledTypo4>{t.event_date}</StyledTypo4>
              </Col>

              <Col md={3}>
                <Margin top={{ xs: 2, md: 0 }}>
                  <ThemeProvider
                    theme={{
                      breakpoints: ["32em", "48em", "64em"],
                      reactDatepicker: {
                        datepickerZIndex: 100,
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
                      date={state?.date} // Date or null
                      displayFormat={lang === "fr-fr" ? "dd/MM/yyyy" : "MM/dd/yyy"}
                      phrases={{ datePlaceholder: "Select a date" }}
                      showDatepicker={state.showDatepicker} // Boolean
                    />
                  </ThemeProvider>
                </Margin>
              </Col>
            </Row>
          </Col>
          <Col md={4} xs={12}>
            <RigthColumnContainer>
              <Typo4 align="left">{t.package_almost_ready}</Typo4>
              <OffsetTop mt={16} />
              <ProgressBar progress={1} />

              <OffsetTop mt={16} />
              <ButtonSecondary onClick={handleStep} disabled={!buttonEnabled}>
                {t.continue}{" "}
              </ButtonSecondary>
              <OffsetTop mt={10} />
            </RigthColumnContainer>
          </Col>
        </Row>
      </Grid>
    </StepsWrapper>
  );
};

export default StepOne;
