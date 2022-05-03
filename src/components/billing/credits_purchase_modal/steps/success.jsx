import React from "react";
import { ModalTitle } from "./index";
import { Col, Row, Grid } from "react-flexbox-grid";
import { useForm } from "react-hook-form";
import { SpaceH } from "../../../space";
import { ButtonSecondary } from "../../../button";
import { Body, Typo3, Typo4 } from "../../../typographie";

const Success = ({ setIsOpen }) => {
  return (
    <>
      <Grid>
        <Row>
          <Col xs={12}>
            <ModalTitle center>Thank you! Your payment is confirmed.</ModalTitle>
          </Col>
        </Row>
        <SpaceH of={30} />
        <Row center="xs">
          <Col xs={10}>
            <Typo4>Your credits has been added to your account and are valid until the 5 March.</Typo4>
            <SpaceH of={20} />
            <Body>You can purchase more credits at any time.</Body>
            <SpaceH of={20} />
            <ButtonSecondary onClick={() => setIsOpen(false)}>Close</ButtonSecondary>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Success;
