import React, { useEffect } from "react";
import { ModalTitle } from "./index";
import { Col, Row, Grid } from "react-flexbox-grid";
import { Input } from "../../form/input";
import Label from "../../form/label";
import { SpaceH } from "../../space";
import { ButtonSecondary } from "../../button";
import styled from "styled-components";
import prices from "../upgrade_plan/prices.json";
import { Typo3, Typo4 } from "../../typographie";
import { showPriceStrRaw } from "../utils";
import { analyticsTrack } from "../../utils/segment";
import tp from "../../../localization/tracking.json";

const Price = styled.div`
  font-size: 1.2rem;
  /* color: ${(props) => props.theme.color.body}; */
  font-weight: bold;
`;

const PlanDetail = styled.div`
  font-size: 1rem;
  /* font-weight: bold; */
`;

const FeatureIncluded = styled.div`
  margin-bottom: 5px;
  color: ${(props) => props.theme.color.body};
`;

const Notice = styled.div`
  color: ${(props) => props.theme.color.body};
  line-height: 1.2rem;
`;

const Plan = ({ setStep, currency, cycle }) => {
  useEffect(() => {
    analyticsTrack(tp.events.plan_upgrade_modal_visited, {
      view: "1_validate_your_plan",
    });
  }, []);

  return (
    <>
      <Grid>
        <Row>
          <Col xs={12}>
            <ModalTitle center>Validate Your Plan</ModalTitle>
          </Col>
        </Row>
        <SpaceH of={30} />
        <Row>
          <Col xs={12}>
            <PlanDetail>Meetup Plan Monthly</PlanDetail>
            {/* {cycle === "monthly" && <PlanDetail>Meetup Plan Monthly</PlanDetail>} */}
            {cycle === "annually" && <PlanDetail>Meetup Plan Annually</PlanDetail>}
            <SpaceH of={5} />
            <Price>{showPriceStrRaw(currency, prices["meetup"]["monthly"]["price"][currency])}/month</Price>

            <SpaceH of={20} />

            <Typo4>What is included:</Typo4>
            <SpaceH of={10} />
            {cycle === "monthly" && (
              <>
                <FeatureIncluded>100 attendees / month</FeatureIncluded>
                <FeatureIncluded>5 exhibitors / month</FeatureIncluded>
                <FeatureIncluded>All features needed to run your events</FeatureIncluded>
              </>
            )}
            {cycle === "annually" && (
              <>
                <FeatureIncluded>300 attendees every 3 month</FeatureIncluded>
                <FeatureIncluded>5 exhibitors / month</FeatureIncluded>
                <FeatureIncluded>All features needed to run your events</FeatureIncluded>
              </>
            )}
            <SpaceH of={20} />
            <Notice>
              Each month you will receive 100 attendees and 5 exhibitors. If you haven't consumed all your credits by
              the following month, they will be added to the new one until you reach 500 people. If you are already at
              500 stacked credits, you won't receive new credits and will still pay for the subscription.
              <br />
              <br />
              If you consume more credits than you have you will be billed an overage.
              {currency && showPriceStrRaw(currency, prices["meetup"]["monthly"]["overage"][currency]["people"])}
              /people -
              {currency && showPriceStrRaw(currency, prices["meetup"]["monthly"]["overage"][currency]["exhibitors"])}
              /exhibitors
              <br />
              <br />
              Have a question? Please reach out to: support@swapcard.com
            </Notice>
          </Col>
        </Row>
        <SpaceH of={30} />
        <Row end="xs">
          <Col xs={12}>
            <ButtonSecondary onClick={() => setStep(1)}>Next</ButtonSecondary>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Plan;
