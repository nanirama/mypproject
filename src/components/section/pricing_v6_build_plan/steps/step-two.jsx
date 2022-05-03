import React, { useReducer, useState, useEffect } from "react";
import { Col, Row, Grid } from "react-flexbox-grid";
import { ThemeProvider } from "styled-components";
import { DateSingleInput } from "@datepicker-react/styled";

import {
  RigthColumnContainer,
  StyledTypo4,
  ErrorEventFormat,
  LeftColumn,
  ArrowIcon,
  TitleBlock,
  ScaleInput,
  StyledRow,
  AttendeesVolumeGrey,
  StyledTypo3,
  StyledTypo5,
  SubtitleBlock,
} from "../../pricing_v4/configuration/styled";
import { InputWithButtons } from "../../../form/input_with_buttons";
import { CurrencySwitcher } from "../../pricing_v4/configuration/common";
import ProgressBar from "../../../progress_bar";
import { SpaceH } from "../../../space";
import { ButtonSecondary } from "../../../button";
import { OffsetTop, P, H2, StepsWrapper, Divider, PlanCardWrapper, PriceDate, ServiceCard } from "../styled";
import { StyledCheckbox } from "../../../form/checkbox/styled";
import PricingSlider2 from "../../../slider_rail_2";
import { Input } from "../../../form/input";
import { CustomCol } from "../styled";
import { Typo4 } from "../../../typographie";

import { analyticsTrack } from "../../../utils/segment";
import tp from "../../../../localization/tracking.json";

import Slider from "rc-slider";
import { StyledSlider } from "../../../slider_rail_2/styled";

const StepTwo = ({ t, setStep, settings }) => {
  let obj = {};
  const isClient = typeof window !== "undefined";
  if (isClient) {
    obj = JSON.parse(window.localStorage.getItem("package_saas"));
  }

  const minAttendees = 50;

  const convertHighRange = (value) => {
    if (value <= 5000) return "+1.5k";
    if (value <= 10000) return "+5k";
    if (value <= 20000) return "+10k";
    if (value < 50000) return "+25k";
    if (value >= 50000) return "+50k";
  };

  useEffect(() => {
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    analyticsTrack(tp.events.plan_building_visited, {
      [tp.properties.view]: "step_2_volumes",
    });
  }, []);

  const [currency, setCurrency] = useState(obj.currency);
  const [attendeesNumber, setAttendeesNumber] = useState(obj.options.attendeesNumber || 0);
  const [exhibitorsNumber, setExhibitorsNumber] = useState(obj.options.exhibitorsNumber || 0);

  const handleStep = (direction) => {
    const step = direction === "forward" ? 3 : 1;
    obj.step = step;
    obj.currency = currency;
    obj.options = {
      ...obj.options,
      attendeesNumber,
      exhibitorsNumber,
    };

    analyticsTrack(tp.events.plan_building_submitted, {
      [tp.properties.view]: "step_2_volumes",
      [tp.properties.attendees_number]: Number(attendeesNumber),
      [tp.properties.exhibitors_number]: Number(exhibitorsNumber),
    });

    window.localStorage.setItem("package_saas", JSON.stringify(obj));
    setStep(step);
  };

  return (
    <StepsWrapper>
      <Row center="xs">
        <Col xs={12}>
          <TitleBlock>
            <ArrowIcon
              onClick={() => setStep(1)}
              src="https://images.prismic.io/showcase-dev/10840e12-7c12-4d4e-a41c-847d166c938e_icon_actions_navigation_arrow_left.svg?auto=format%2Ccompress&fit=max&q=50"
              alt="ico"
            />
            <H2 fs={30} color="#262f3d">
              {t.step_2}
            </H2>
          </TitleBlock>
          <Divider mt={16} />
          {settings.showCurrencySwitcher && (
            <CurrencySwitcher active={currency} onClick={(e) => setCurrency(e.target.id)} />
          )}
        </Col>
      </Row>
      <Divider mt={32} />
      <Grid>
        <SpaceH of={16} />
        <Row>
          <Col md={8}>
            <Row>
              <Col xs={12}>
                <Typo4 bold>{t.attendees_volume_2}</Typo4>
                <SpaceH of={10} />
                <p>{t.define_volume_attendee}</p>
              </Col>
            </Row>
            <SpaceH of={16} />
            <Row>
              <Col md={8} xs={12}>
                <div style={{ position: "relative" }}>
                  <StyledSlider>
                    <PricingSlider2 currentAttendeesVolume={attendeesNumber} setSliderValue={setAttendeesNumber} />
                  </StyledSlider>
                </div>
              </Col>
              <Col md={4}>
                {parseInt(attendeesNumber) <= 1500 || isNaN(attendeesNumber) ? (
                  <ScaleInput
                    name={"attendees_volume"}
                    type="number"
                    min={minAttendees}
                    max={25000}
                    value={attendeesNumber}
                    onChange={(e) => setAttendeesNumber(parseInt(e.target.value))}
                  />
                ) : (
                  <>
                    <AttendeesVolumeGrey>{convertHighRange(attendeesNumber)}</AttendeesVolumeGrey>
                  </>
                )}
              </Col>
            </Row>
            <SpaceH of={56} />
            <Row>
              <Col xs={12}>
                <Typo4 bold>{t.exhibitors_volume}</Typo4>
                <SpaceH of={10} />
                <p>{t.exhibitors_volume_info}</p>
              </Col>
            </Row>
            <SpaceH of={16} />
            <Row>
              <Col md={8}>
                <div style={{ position: "relative" }}>
                  <StyledSlider>
                    <Slider
                      min={0}
                      max={250}
                      defaultValue={0}
                      value={exhibitorsNumber}
                      marks={{ 0: 0, 50: 50, 100: 100, 150: "150", 200: "200", 250: "+250" }}
                      step={1}
                      onChange={(value) => setExhibitorsNumber(value)}
                    />
                  </StyledSlider>
                </div>
              </Col>
              <Col md={4}>
                <p>
                  <ScaleInput
                    value={exhibitorsNumber}
                    type="number"
                    onChange={(e) => setExhibitorsNumber(e.target.value)}
                    name="v"
                  />
                </p>
              </Col>
            </Row>
          </Col>

          <Col md={4}>
            <RigthColumnContainer>
              <Typo4 align="left">{t.package_almost_ready}</Typo4>
              <OffsetTop mt={16} />
              <ProgressBar progress={2} />

              <OffsetTop mt={16} />
              <ButtonSecondary onClick={() => handleStep("forward")}>{t.continue}</ButtonSecondary>
              <OffsetTop mt={10} />
            </RigthColumnContainer>
          </Col>
        </Row>
      </Grid>
      {/* <Row between="lg" lg={12} style={{ maxWidth: 840, margin: "0 auto" }}>
        <LeftColumn lg={8}>
          <H2 fs={20} color="#505050" mb={16} align="left">
            {t.attendees_volume_2}
          </H2>
          <P mt={10} mb={10} align="left">
            {t.attendees_volume_info}
          </P>
          <Row between="lg">
            <CustomCol lg={10}>
              <PricingSlider2
                setSliderValue={(v) => setAttendees(v)}
                currentAttendeesVolume={attendees}
                style={{ width: "100%" }}
              />
            </CustomCol>
            <Col lg={2}>
              <Input value={attendees} type="number" onChange={(e) => setAttendees(e.target.value)} name="v" />
            </Col>
          </Row>
          <H2 mt={24} mb={10} fs={20} align="left">
            {t.exhibitors_volume}
          </H2>
          <Row between="lg">
            <CustomCol lg={10}>
              <PricingSlider2
                setSliderValue={(v) => setExhibitors(v)}
                currentAttendeesVolume={exhibitors}
                style={{ width: "100%" }}
              />
            </CustomCol>
            <Col lg={2}>
              <Input value={exhibitors} type="number" onChange={(e) => setExhibitors(e.target.value)} name="v" />
            </Col>
          </Row>
        </LeftColumn>
        <RigthColumnContainer lg={4} style={{ padding: 24, maxWidth: 240, height: "fit-content", borderRadius: 8 }}>
          <>
            <H2 align="left">{t.package_almost_ready}</H2>
            <OffsetTop mt={16} />
            <ProgressBar progress={2} />
            <OffsetTop mt={16} />
            <ButtonSecondary onClick={handleStep}>{t.continue}</ButtonSecondary>
            <OffsetTop mt={10} />
            <P align="left" transform="uppercase">
              {t.contact_sales}
            </P>
          </>
        </RigthColumnContainer>
      </Row> */}
    </StepsWrapper>
  );
};

export default StepTwo;
