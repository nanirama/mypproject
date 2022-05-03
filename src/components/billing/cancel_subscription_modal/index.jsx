import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-flexbox-grid";
import Modal from "react-modal";
import styled from "styled-components";
import { SpaceH } from "../../space";
import { ButtonSecondary } from "../../button";
import { AuthContext } from "../../../context/auth";
import { cancelSubscription } from "./query/subscription";
import { getSubscription } from "../query/subscription";
import { toast } from "react-toastify";
import { Typo3 } from "../../typographie";

import { analyticsTrack } from "../../utils/segment";
import tp from "../../../localization/tracking.json";

const Wrapper = styled.div`
  padding: 10px 0;
  max-width: 500px;
  width: 100%;
`;

const Cancel = ({ organizationId }) => {
  const { accessToken } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [subscription, setSubscription] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      setSubscription(await getSubscription(accessToken, organizationId));
    };
    fetch();
  }, [accessToken]);

  const cancelSubscriptionButton = async () => {
    if (accessToken && subscription && subscription.id) {
      const cancel = await cancelSubscription(accessToken, subscription.id);
      if (cancel && cancel?.cancelOrganizationSubscription?.errors.length > 0) {
        toast.error(cancel.cancelOrganizationSubscription.errors[0].message);
        return;
      }
      analyticsTrack(tp.events.organization_plan_canceled);
      setStep(2);
    } else {
      toast.error("An error occured. Please contact support. Error #SUB_CANCEL_1");
    }
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {subscription && subscription.status !== "canceled" && subscription.product.productName === "MEETUP_MONTHLY" && (
        <>
          <Row>
            <Col xs={12}>
              <Typo3 bold>Subscription</Typo3>
            </Col>
          </Row>
          <SpaceH of={20} />
          <Row>
            <Col xs={12}>
              <>
                <ButtonSecondary onClick={() => setIsOpen(!isOpen)}>Cancel my subscription</ButtonSecondary>
                <ModalPurchase
                  isOpen={isOpen}
                  step={step}
                  cancelSubscriptionButton={cancelSubscriptionButton}
                  setIsOpen={setIsOpen}
                  closeModal={closeModal}
                />
              </>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

const ModalPurchase = ({ isOpen, setIsOpen, closeModal, cancelSubscriptionButton, step }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      contentLabel=""
    >
      <Wrapper>
        {step === 1 && (
          <>
            <Row>
              <p>
                Your subscription will be canceled at the end of your billing cycle. You will be charged for your
                overage at the end of this billing period. You can restart your subscription at the end of your billing
                cycle.
              </p>
            </Row>
            <SpaceH of={20} />
            <Row center="xs">
              <p>Contact robin@swapcard.com to cancel your plan</p>
              {/* <ButtonSecondary onClick={cancelSubscriptionButton}>Confirm my cancel</ButtonSecondary> */}
            </Row>
          </>
        )}
        {step === 2 && (
          <>
            <Row>
              <p>Your subscription has been canceled.</p>
            </Row>
            <SpaceH of={20} />
            <Row center="xs">
              <ButtonSecondary onClick={closeModal}>Close</ButtonSecondary>
            </Row>
          </>
        )}
      </Wrapper>
    </Modal>
  );
};

export default Cancel;
