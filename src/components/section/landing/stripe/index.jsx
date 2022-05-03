import React, { useState } from "react";
import { graphql } from "gatsby";
import { Row, Col } from "react-flexbox-grid";
import { Typo5 } from "../../../typographie";
import * as Styled from "./styled";
import { SpaceH } from "../../../space";
// import Countdown from "../../countdown";
import withLocation from "../../../../HOC/location";
import StripeButton from "../../../form/stripe";
import { Input } from "../../../form/input";
import Label from "../../../form/label";
import { ButtonWhite } from "../../../button";
import MixpanelHelper from "../../../utils/segment";

const LandingStripe = ({ ...props }) => {
  const [formStep, setformStep] = useState(1);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const randomUserId = `_custom${Math.random().toString(36).substr(2, 9)}`;

  const clientReferenceId = props.search.swapcard_user_id ? props.search.swapcard_user_id : randomUserId;

  return (
    <>
      <Styled.StripeGrid>
        <Row middle="xs">
          <Col md={6} xs={12}>
            {props.data.items.map((item, key) => (
              <Styled.FeatureItem key={key}>
                <Styled.Icon className="icons8-checked" /> {item.feature}
              </Styled.FeatureItem>
            ))}
          </Col>
          <Col md={6} xs={12}>
            <div id="quote"></div>
            <Styled.Package>
              <Styled.Arrow />
              {formStep === 1 && (
                <>
                  <Styled.PriceWrapper>
                    <Styled.Price>1000</Styled.Price>
                    <Styled.Currency>AED</Styled.Currency>
                  </Styled.PriceWrapper>
                  <span>(inclusive of vat)</span>
                  <Styled.Name>For all your team members</Styled.Name>
                  <MixpanelHelper
                    analytics-location="Food cluster landing"
                    analytics-category="Start form checkout gulfood"
                    analytics-label="ORDER YOUR LEAD CAPTURE TOOL"
                  >
                    <ButtonWhite onClick={(e) => setformStep(2)}>ORDER YOUR LEAD CAPTURE TOOL</ButtonWhite>
                  </MixpanelHelper>
                </>
              )}
              {formStep === 2 && (
                <Styled.FormWrapper>
                  <span>
                    Please enter the same information you provided for registration below to order your lead capture
                    tool
                  </span>
                  <SpaceH of={16} />
                  <Label color={"#FFF"} required>
                    Your work email
                  </Label>
                  <Input
                    name="email"
                    type="email"
                    theme="white"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />

                  <Label color={"#FFF"} required>
                    Your name
                  </Label>
                  <Input name="name" theme="white" onChange={(e) => setName(e.target.value)} value={name} />
                  <Label color={"#FFF"} required>
                    Company name
                  </Label>
                  <Input
                    name="companyName"
                    required
                    theme="white"
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                  />
                  <SpaceH of={24} />
                  <StripeButton
                    disabled={true}
                    sku={process.env.STRIPE_FOOD_CLUSTER_SKU}
                    successUrl={"https://www.swapcard.com/gulfood/success?email=" + email + ""}
                    cancelUrl={"https://www.swapcard.com/gulfood-app/?cancel"}
                    clientReferenceId={clientReferenceId}
                    submitValue={"Proceed to checkout"}
                    customField={{ name, email, company, createdAt: new Date() }}
                  />
                </Styled.FormWrapper>
              )}
            </Styled.Package>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <SpaceH of={16} />
            <Styled.Info>
              Once you click on “Order your Lead Capture tool”, you will be re-directed to the payment page. This is a
              totally secured page with SSL and 3D credit card verification. Once the payment is completed, you will
              receive your payment receipt by email. Your team members will get access as soon as the mobile app goes
              live. If you choose to pay while at the show and not as early as the app goes live, please allow for 30
              minutes after you have received your payment confirmation to get access to this premium feature available
              to all your team members.
            </Styled.Info>
          </Col>
        </Row>
        {/* <Row center="xs">
          <Col xs={12}>
            <SpaceH of={32} />
            <Typo2>
              Already <b>372</b> exhibitors have purchased their lead capture tool. What are you waiting for?
            </Typo2>
            <SpaceH of={32} />
          </Col>
        </Row> */}
        <SpaceH of={16} />
        <Row>
          <Col xs={12}>
            <Typo5 center>
              Have a question?
              <br />
              Email us at support@swapcard.com
            </Typo5>
          </Col>
        </Row>
      </Styled.StripeGrid>
    </>
  );
};

export default withLocation(LandingStripe);

export const query = graphql`
  fragment landingStripeFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainStripe {
          slice_type
          primary {
            stripe_key
          }
          items {
            feature
          }
        }
      }
    }
  }
`;
