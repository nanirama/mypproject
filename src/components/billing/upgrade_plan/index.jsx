import React, { useState, useEffect, useContext } from "react";
import * as styled from "./styled";
import { SpaceH } from "../../space";
import { ButtonSecondary, ButtonPrimary, ButtonWhite, ButtonBorderPrimary } from "../../button";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Typo3 } from "../../typographie";
import Modal from "react-modal";
import prices from "./prices.json";
import { getSubscription } from "../query/subscription";
import SubscriptionModal from "../subscription_modal";
import { AuthContext } from "../../../context/auth";
import { getOrganizationBillingInfo } from "../billing_info/query/organization";
import { showPriceStrRaw } from "../utils";

const Upgrade = ({ organizationId, orgaName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subscription, setSubscription] = useState(false);
  const [billing, setBilling] = useState(false);

  const { accessToken } = useContext(AuthContext);

  const [currency, setCurrency] = useState("USD");
  const [cycle, setCycle] = useState("monthly");

  useEffect(() => {
    const fetchBillingInfo = async () => {
      if (accessToken) {
        setSubscription(await getSubscription(accessToken, organizationId));
        const billingLoad = await getOrganizationBillingInfo(accessToken, organizationId);
        if (billingLoad) {
          setBilling(billingLoad.Billing_organization.billing);
          if (billingLoad.Billing_organization?.billing?.currency)
            setCurrency(billingLoad.Billing_organization.billing.currency);
        }
      }
    };
    fetchBillingInfo();
  }, [accessToken]);

  const closeModal = () => setIsOpen(!isOpen);

  return (
    <Grid>
      <Row>
        <Col xs={12} lg={8}>
          <Row>
            <Col xs={8}>
              <styled.CurrencyWrapper>
                <styled.Currency onClick={() => setCurrency("EUR")} active={currency === "EUR"}>
                  EUR
                </styled.Currency>
                <styled.Currency onClick={() => setCurrency("USD")} active={currency === "USD"}>
                  USD
                </styled.Currency>
                <styled.Currency onClick={() => setCurrency("AED")} active={currency === "AED"}>
                  AED
                </styled.Currency>

                <styled.Currency onClick={() => setCurrency("CAD")} active={currency === "CAD"}>
                  CAD
                </styled.Currency>
              </styled.CurrencyWrapper>
            </Col>
            <Col xs={4}>
              <styled.CurrencyWrapper end={true}>
                {/* <styled.Currency onClick={() => setCycle("monthly")} active={cycle === "monthly"}>
                  Monthly
                </styled.Currency> */}
                {/* <styled.Currency onClick={() => setCycle("annually")} active={cycle === "annually"}>
                  Annually
                </styled.Currency> */}
              </styled.CurrencyWrapper>
            </Col>
          </Row>
        </Col>
      </Row>
      <SpaceH of={10} />
      <Row>
        <Col lg={8} xs={12}>
          <styled.PlansWrapper>
            <styled.PlansDetail>
              <styled.PlanTitle>
                <styled.PlanIcon src="https://showcase-dev.cdn.prismic.io/showcase-dev/3881684e-291a-4e1a-a451-fdb50ba8b8be_icon_eventIcon_meeting.svg" />
                <Typo3 bold>Meetup</Typo3>
              </styled.PlanTitle>
              <SpaceH of={15} />
              <styled.PlanDescription>
                Small & recurring events. Grow, engage & connect your audience online & onsite.
              </styled.PlanDescription>
              <SpaceH of={15} />
              <styled.PlanStartingAt>Starting At</styled.PlanStartingAt>
              <styled.PlanPrice>
                {showPriceStrRaw(currency, prices["meetup"]["monthly"]["price"][currency])}/month
              </styled.PlanPrice>
              <SpaceH of={15} />

              {subscription &&
                (subscription.product.productName === "FREE_PLAN" ||
                  subscription.product.productName === "CUSTOM_PLAN") && (
                  <ButtonSecondary onClick={() => setIsOpen(true)}>Upgrade My Plan</ButtonSecondary>
                )}
              {subscription && subscription.product.productName === "MEETUP_MONTHLY" && subscription.status === "paid" && (
                <ButtonBorderPrimary
                  to={organizationId && "/billing/invoice/?id=" + organizationId + "&name=" + orgaName}
                  style={{ width: "100%", textAlign: "center" }}
                >
                  Cancel
                </ButtonBorderPrimary>
              )}
            </styled.PlansDetail>
            <styled.PlansDetail>
              <styled.PlanTitle>
                <styled.PlanIcon src="https://showcase-dev.cdn.prismic.io/showcase-dev/d052d361-352d-47ba-a62d-a614093f520e_event_icon.svg" />
                <Typo3 bold>Event</Typo3>
              </styled.PlanTitle>
              <SpaceH of={15} />
              <styled.PlanDescription>
                For large & complex events. Engage your audience and deliver qualified leads to your exhibitors and
                sponsors.
              </styled.PlanDescription>
              <SpaceH of={15} />
              <styled.PlanStartingAt>Starting At</styled.PlanStartingAt>
              <styled.PlanPrice>Let's talk</styled.PlanPrice>
              <SpaceH of={15} />
              <div>
                <ButtonSecondary style={{ width: "100%", textAlign: "center" }} to="/contact-us/">
                  Contact Us
                </ButtonSecondary>
              </div>
            </styled.PlansDetail>
            <styled.PlansDetail last={true}>
              <styled.PlanTitle>
                <styled.PlanIcon src="https://showcase-dev.cdn.prismic.io/showcase-dev/a657582c-c7f1-41a9-ab1f-3da50afce506_icon_eventIcon_people.svg" />
                <Typo3 bold>Community</Typo3>
              </styled.PlanTitle>
              <SpaceH of={15} />
              <styled.PlanDescription>
                For a never-ending event that turns into a community of attendees, buyers and sellers.
              </styled.PlanDescription>
              <SpaceH of={15} />
              <styled.PlanStartingAt>Starting At</styled.PlanStartingAt>
              <styled.PlanPrice>Let's talk</styled.PlanPrice>
              <SpaceH of={15} />
              <div>
                <ButtonSecondary style={{ width: "100%", textAlign: "center" }} to="/contact-us/">
                  Contact Us
                </ButtonSecondary>
              </div>
            </styled.PlansDetail>
          </styled.PlansWrapper>
        </Col>
      </Row>
      <ModalSubscription
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        closeModal={closeModal}
        cycle={cycle}
        currency={currency}
        setCurrency={setCurrency}
      />
    </Grid>
  );
};

const ModalSubscription = ({ setIsOpen, isOpen, closeModal, currency, cycle, setCurrency }) => {
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
        overlay: { zIndex: 1000 },
      }}
      contentLabel=""
    >
      <SubscriptionModal setIsOpen={setIsOpen} currency={currency} cycle={cycle} setCurrency={setCurrency} />
    </Modal>
  );
};

export default Upgrade;
