import React from "react";
import { ModalTitle } from "./index";
import { Col, Row, Grid } from "react-flexbox-grid";
import { Input } from "../../form/input";
import Label from "../../form/label";
import { useForm } from "react-hook-form";
import { SpaceH } from "../../space";
import { ButtonSecondary } from "../../button";
import Submit from "../../form/submit";
import * as styled from "../styled";
import BillingForm from "../billing_info";
import { Select } from "../../form/select";
import { Body, Typo3, Typo4 } from "../../typographie";

const Success = ({ setIsOpen }) => {
  return (
    <>
      <Grid>
        <Row>
          <Col xs={12}>
            <ModalTitle center>Thank you! Your subscription is confirmed.</ModalTitle>
          </Col>
        </Row>
        <SpaceH of={30} />
        <Row center="xs">
          <Col xs={10}>
            <Typo4>You're on your way to creating the best experience possible for your attendees!</Typo4>
            <SpaceH of={20} />
            <Body>
              Register to our{" "}
              <a style={{ color: "#00CC88" }} href="https://academy.swapcard.com/">
                Academy Center
              </a>{" "}
              to learn how to become a Swapcard expert.
            </Body>
            <SpaceH of={20} />
            <ButtonSecondary onClick={() => window.location.reload()}>Close</ButtonSecondary>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Success;
