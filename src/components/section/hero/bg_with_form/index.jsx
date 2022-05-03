import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import HubspotForm from "../../../form/hubspot";
import LogoWhite from "../../../../assets/images/Logo/logo-swapcard-blanc-blanc.svg";
import { Typo1, Typo2 } from "../../../typographie";
import { SpaceH } from "../../../space";
import { media } from "../../../utils/style-utils";
import Link from "../../../utils/link";
import Route from "../../../../localization";

const Background = styled.div`
  background-image: url(${(props) => props.bg});
  background-repeat: none;
  background-size: cover;
  background-position: center;
  padding: 30px;
  ${media.tablet`
    padding: 40px 50px;
    height: 650px;
  `}
  position: relative;
  :after {
    content: " ";
    background: #000;
    height: 100%;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
    opacity: 0.55;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 20;
`;

export const Form = styled.div`
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);
  z-index: 200;
  position: relative;
  max-width: 450px;
  min-height: 445px;
  width: 100%;
`;

export const FormHeader = styled.div`
  background-color: #0c8;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.3px;
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 20px 20px 20px 20px;
`;

export const Logo = styled.img`
  width: 180px;
`;

const WrapperText = styled.div`
  margin: 20px 0 30px 0;
  ${media.tablet`
  padding: 0 80px 0 0;
  margin:0;
  margin-top: 90px;
  `}
`;

const BackgroundWithForm = ({ props, lang }) => (
  <Background bg={props.hero_image.fluid.src}>
    <Wrapper>
      <Grid>
        <Row>
          <Col md={12}>
            <Link to={Route[lang]["homepage"]}>
              <Logo src={LogoWhite}></Logo>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <WrapperText>
              <Typo1 color={"#FFF"}>{props.hero_title.text}</Typo1>
              <SpaceH of={30} />
              <Typo2 color={"#FFF"}>{props.hero_sub_title.text}</Typo2>
            </WrapperText>
          </Col>
          <Col md={5}>
            <Form>
              <FormHeader>Talk to our sales team</FormHeader>
              <FormContainer>
                <HubspotForm
                  hubspot_dev_id={props.hubspot_form_id}
                  hubspot_id={props.hubspot_form_id}
                  centerSubmit="center"
                ></HubspotForm>
              </FormContainer>
            </Form>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  </Background>
);

export default BackgroundWithForm;
