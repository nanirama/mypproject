import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo3, Body } from "../../../typographie";
import { Input } from "../../../form/input/index";
import { SpaceH } from "../../../space";
import Submit from "../../../form/submit";
import * as styled from "../styled";
import * as styledGlobal from "../../styled";

const Summary = ({ setStep, people, exhibitors }) => {
  const onSubmit = () => {
    setStep(2);
  };

  return (
    <Grid>
      <Row center="xs">
        <Col xs={12}>
          <Typo3 bold>
            <styledGlobal.BackArrow onClick={() => setStep(1)} className="icons8-left-arrow" />
            Purchase additional credits
          </Typo3>
        </Col>
      </Row>
      <SpaceH of={40} />

      <Row>
        <Col xs={8}>People</Col>
        <Col xs={4}>
          <span style={{ float: "right" }}>$120 X {people}</span>
        </Col>
      </Row>
      <SpaceH of={20} />
      {exhibitors > 0 && (
        <>
          <Row>
            <Col xs={8}>Exhibitors</Col>
            <Col xs={4}>
              <span style={{ float: "right" }}>$120 X {exhibitors}</span>
            </Col>
          </Row>
          <SpaceH of={20} />
        </>
      )}
      <styled.DividerPayment />
      <SpaceH of={10} />

      <Row>
        <Col xs={8}>Credit Card</Col>
        <Col xs={4}>
          <span style={{ float: "right" }}>VISA - 3432</span>
        </Col>
      </Row>
      <SpaceH of={10} />
      <Row>
        <Col xs={8}>TVA</Col>
        <Col xs={4}>
          <span style={{ float: "right" }}>3,89€</span>
        </Col>
      </Row>
      <SpaceH of={10} />
      <Row>
        <Col xs={8}>
          <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>TOTAL</span>
        </Col>
        <Col xs={4}>
          <span style={{ fontWeight: "bold", fontSize: "1.1rem", float: "right" }}>7,689$</span>
        </Col>
      </Row>

      <SpaceH of={15} />

      <Row middle="xs">
        <Col xs={1}>
          <input
            type="checkbox"
            id="cgu"
            name="cgu"
            style={{ "-webkit-appearance": "checkbox", "-moz-appearance": "checkbox" }}
          ></input>
        </Col>
        <Col xs={11}>
          <label for="cgu">
            I have read and accepted <a href="">Terms and Conditions</a> and <a href="">Privacy Policy</a>
          </label>
        </Col>
      </Row>

      <SpaceH of={15} />

      <Row end="xs">
        <Col xs={12}>
          <Submit value="Pay" onClick={onSubmit} />
        </Col>
      </Row>
    </Grid>
  );
};

export default Summary;
