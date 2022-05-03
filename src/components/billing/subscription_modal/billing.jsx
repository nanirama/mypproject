import React, { useEffect } from "react";
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
import withLocation from "../../../HOC/location";
import { analyticsTrack } from "../../utils/segment";
import tp from "../../../localization/tracking.json";

const Billing = ({ setCurrency, setStep, ...props }) => {
  useEffect(() => {
    analyticsTrack(tp.events.plan_upgrade_modal_visited, {
      view: "2_billing_address",
    });
  }, []);
  return (
    <>
      <Grid>
        <Row>
          <Col xs={12}>
            <ModalTitle center>
              <styled.BackArrow onClick={() => setStep(0)} className="icons8-left-arrow" />
              Add your billing address
            </ModalTitle>
          </Col>
        </Row>
        <SpaceH of={20} />
        <BillingForm setStep={setStep} orgaId={props.search.id} setCurrencyParent={setCurrency} />
      </Grid>
    </>
  );
};

export default withLocation(Billing);
