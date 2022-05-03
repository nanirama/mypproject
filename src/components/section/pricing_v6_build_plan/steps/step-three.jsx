import React, { useState, useEffect } from "react";
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

import { analyticsTrack } from "../../../utils/segment";
import tp from "../../../../localization/tracking.json";

const StepThree = ({ t, setStep, settings }) => {
  let obj = {};
  const isClient = typeof window !== "undefined";
  if (isClient) {
    obj = JSON.parse(window.localStorage.getItem("package_saas"));
  }
  const [registration, setRegistration] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [abstract, setAbstract] = useState(false);
  const [lead, setLead] = useState(false);
  const [whiteLabel, setWhiteLabel] = useState(false);
  const [currency, setCurrency] = useState(obj.currency);

  const handleRegistration = () => {
    setRegistration(!registration);
  };

  const handleStreaming = () => {
    setStreaming(!streaming);
  };

  const handleAbstract = () => {
    setAbstract(!abstract);
  };

  const handleLead = () => {
    setLead(!lead);
  };

  useEffect(() => {
    analyticsTrack(tp.events.plan_building_visited, {
      [tp.properties.view]: "step_3_modules",
    });
  }, []);

  const handleStep = (direction) => {
    const step = direction === "forward" ? 4 : 2;
    obj.step = step;
    obj.currency = currency;
    obj.options = {
      ...obj.options,
      registration,
      streaming,
      abstract,
      lead,
      whiteLabel,
    };

    analyticsTrack(tp.events.plan_building_submitted, {
      [tp.properties.view]: "step_3_modules",
      [tp.properties.registration]: registration,
      [tp.properties.streaming]: streaming,
      [tp.properties.abstract]: abstract,
      [tp.properties.lead_capture_feature]: lead,
      [tp.properties.branded_app]: whiteLabel,
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
              onClick={() => handleStep("backward")}
              src="https://images.prismic.io/showcase-dev/10840e12-7c12-4d4e-a41c-847d166c938e_icon_actions_navigation_arrow_left.svg?auto=format%2Ccompress&fit=max&q=50"
              alt="ico"
            />
            <H2 fs={30} color="#262f3d">
              {t.step_3}
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
              title={t.registration}
              description={t.registration_desc}
              image={
                "https://showcase-dev.cdn.prismic.io/showcase-dev/29fb93d0-166c-4d52-bead-99a81cd99dcf_profile.svg"
              }
              alt={"ico"}
              checked={registration}
              exhibitorsValue={100}
              subtitle={"none"}
              onChange={handleRegistration}
            />
            <CheckboxWithImage
              title={t.streaming}
              description={t.streaming_desc}
              image={
                "https://showcase-dev.cdn.prismic.io/showcase-dev/0ecf7c9b-1d21-4f31-957c-1918fea4e579_live-stream+%282%29.svg"
              }
              alt={"ico"}
              checked={streaming}
              exhibitorsValue={100}
              subtitle={"none"}
              mandatory={"none"}
              onChange={handleStreaming}
            />
            <CheckboxWithImage
              title={t.abstract_management}
              description={t.abstract_management_desc}
              image={
                "https://showcase-dev.cdn.prismic.io/showcase-dev/8545459f-149b-49c7-8454-9f3162677206_interactivity.svg"
              }
              alt={"ico"}
              checked={abstract}
              exhibitorsValue={100}
              subtitle={"none"}
              mandatory={"none"}
              onChange={handleAbstract}
            />
            <CheckboxWithImage
              title={t.lead_capture}
              description={t.lead_capture_desc}
              image={
                "https://showcase-dev.cdn.prismic.io/showcase-dev/58ddb4f9-d620-49d1-bc64-97ab0595799c_export-contacts.svg"
              }
              alt={"ico"}
              checked={lead}
              exhibitorsValue={100}
              subtitle={"none"}
              mandatory={"none"}
              onChange={handleLead}
            />
            <CheckboxWithImage
              title={t.white_label_title}
              description={t.white_label_content}
              image={
                "https://images.prismic.io/showcase-dev/768d1485-63de-4f53-99b8-388c046480d7_branded-app.svg?auto=format%2Ccompress&fit=max&q=50"
              }
              alt={"ico"}
              checked={whiteLabel}
              exhibitorsValue={100}
              subtitle={"none"}
              mandatory={"none"}
              onChange={() => setWhiteLabel(!whiteLabel)}
            />
          </Col>
          <Col md={4}>
            <RigthColumnContainer>
              <Typo4 align="left">{t.package_almost_ready}</Typo4>
              <OffsetTop mt={16} />
              <ProgressBar progress={3} />

              <OffsetTop mt={16} />
              <ButtonSecondary onClick={() => handleStep("forward")}>{t.continue}</ButtonSecondary>
              <OffsetTop mt={10} />
            </RigthColumnContainer>
          </Col>
        </Row>
      </Grid>
    </StepsWrapper>
  );
};

export default StepThree;
