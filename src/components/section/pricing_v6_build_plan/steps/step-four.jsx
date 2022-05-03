import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { Grid, Col, Row } from "react-flexbox-grid";
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
import CheckboxWithImage from "../../../form/checkbox_with_image";
import { Typo4 } from "../../../typographie";
import Route from "../../../../localization";

import { analyticsTrack } from "../../../utils/segment";
import tp from "../../../../localization/tracking.json";

const StepFour = ({ t, setStep, settings, lang }) => {
  let obj = {};
  const isClient = typeof window !== "undefined";
  if (isClient) {
    obj = JSON.parse(window.localStorage.getItem("package_saas"));
  }
  const [dedicatedSupport, setDedicatedSupport] = useState(false);
  const [onSiteSupport, setOnSiteSupport] = useState(false);
  const [currency, setCurrency] = useState(obj.currency);

  useEffect(() => {
    window.scroll({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    analyticsTrack(tp.events.plan_building_visited, {
      [tp.properties.view]: "step_4_support",
    });
  }, []);

  const handleStep = () => {
    obj.currency = currency;
    obj.options = {
      ...obj.options,
      dedicatedSupport,
      onSiteSupport,
    };

    analyticsTrack(tp.events.plan_building_submitted, {
      [tp.properties.view]: "step_4_support",
      [tp.properties.dedicated_support]: dedicatedSupport,
      [tp.properties.onsite_support]: onSiteSupport,
    });

    window.localStorage.setItem("package_saas", JSON.stringify(obj));

    if (obj.options.attendeesNumber < 500 && obj.options.exhibitorsNumber < 10) {
      window.location.href = "https://www.swapcard.com/billing/organization";
    } else {
      navigate(Route[lang]["about/contact/sales/v2"] + "?build");
    }
  };

  return (
    <StepsWrapper>
      <Row center="xs">
        <Col xs={12}>
          <TitleBlock>
            <ArrowIcon
              onClick={() => handleStep("backward")}
              src="https://images.prismic.io/showcase-dev/10840e12-7c12-4d4e-a41c-847d166c938e_icon_actions_navigation_arrow_left.svg?auto=format%2Ccompress&fit=max&q=50"
              alt="ico"
            />
            <H2 fs={30} color="#262f3d">
              {t.step_4}
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
        <Row>
          <Col md={8}>
            {/* <H2 fs={20} color="#505050" mb={16} align="left">
              {t.select_the_service_you_need}
            </H2> */}
            <CheckboxWithImage
              title={t.dedicated_event_expert}
              description={t.dedicated_event_expert_desc}
              image={
                "https://showcase-dev.cdn.prismic.io/showcase-dev/2791541d-14b9-4a15-8b10-fd8fef4d2460_support-swapcard.svg"
              }
              alt={"ico"}
              checked={dedicatedSupport}
              exhibitorsValue={100}
              subtitle={"none"}
              onChange={() => {
                setDedicatedSupport(!dedicatedSupport);
              }}
            />
            <CheckboxWithImage
              title={t.onsite_support}
              description={t.onsite_support_desc}
              image={
                "https://showcase-dev.cdn.prismic.io/showcase-dev/12a040ae-3406-4a01-b3db-d7e7f6b0cc43_invite-team.svg"
              }
              alt={"ico"}
              checked={onSiteSupport}
              exhibitorsValue={100}
              subtitle={"none"}
              mandatory={"none"}
              onChange={() => {
                setOnSiteSupport(!onSiteSupport);
              }}
            />
          </Col>
          <Col md={4}>
            <RigthColumnContainer>
              <Typo4 align="left">{t.package_almost_ready}</Typo4>
              <OffsetTop mt={16} />
              <ProgressBar progress={4} />

              <OffsetTop mt={16} />
              <ButtonSecondary onClick={handleStep}>{t.continue}</ButtonSecondary>
              <OffsetTop mt={10} />
            </RigthColumnContainer>
          </Col>
        </Row>
      </Grid>
    </StepsWrapper>
  );
};

export default StepFour;
