import React, { useState, useEffect } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo3, Body } from "../../../typographie";
import { Input } from "../../../form/input/index";
import { SpaceH } from "../../../space";
import Submit from "../../../form/submit";

const Quantity = ({ setStep, setPeople, setExhibitors, people }) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (people > 0) setDisabled(false);
  }, [people]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (people > 0) setStep(2);
  };

  return (
    <Grid>
      <Row center="xs">
        <Col xs={12}>
          <Typo3 bold>Purchase additional credits</Typo3>
        </Col>
      </Row>
      <form onSubmit={onSubmit}>
        <SpaceH of={40} />
        <Row>
          <Col xs={8}>People</Col>
          <Col xs={4}>
            <Input onChange={(e) => setPeople(e.target.value)} value={people} required name="people" type="number" />
          </Col>
        </Row>
        <SpaceH of={20} />
        <Row>
          <Col xs={8}>Exhibitors (optionnal)</Col>
          <Col xs={4}>
            <Input onChange={(e) => setExhibitors(e.target.value)} required={true} name="exhibitors" type="number" />
          </Col>
        </Row>
        <SpaceH of={20} />
        <Row end="xs">
          <Col xs={12}>
            <Submit value="Next" disabled={disabled} />
          </Col>
        </Row>
      </form>
      <SpaceH of={20} />
      <Row>
        <Col xs={12}>
          <Body>
            Additionnal credits have a validity of 3 months. They are added above your subscription. A credit is an
            imported attendee during a billing period. Learn more about credits
          </Body>
        </Col>
      </Row>
    </Grid>
  );
};

export default Quantity;
