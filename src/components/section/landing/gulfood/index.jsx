import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Body, Typo1, Typo2, Typo3, Typo4 } from "../../../typographie";
import { SpaceH } from "../../../space";
import axios from "axios";
import styled from "styled-components";
import { ColMiddle } from "../../../utils/grid";
import { ButtonWhite, ButtonCustom } from "../../../button";
import { getUserAndToken, getExhibitorByEventId } from "../../../../HOC/auth";
import StripeButton from "../../../form/stripe";
import { media } from "../../../utils/style-utils";

import { v4 as uuidv4 } from "uuid";

import { Input } from "../../../form/input";
import Label from "../../../form/label";
import { navigate } from "@reach/router";

const Logo = styled.img`
  max-width: 380px;
`;

const FormContainer = styled.div`
  // background: #095d73;
  background: rgb(217, 63, 53);
  /* height: 500px; */
  width: 450px;
  box-shadow: 0px 4.5px 6.5px 0 rgba(181, 197, 213, 0.4);
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  padding: 40px 10px;
  margin-top: 30px;
  ${media.tablet`
  margin:0;
  `}/* min-height: 480px; */
`;

const PriceContainer = styled.div`
  display: flex;
  text-align: center;
`;
const Price = styled.div`
  font-size: 70px;
  line-height: 1;
`;
const Currency = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

const FeaturesList = styled.div`
  margin-bottom: 15px;
`;

const ColInput = styled.div`
  display: flex;
`;

const NotRightCompany = styled.div`
  color: #fff;
  font-size: 14px;
`;

const id = uuidv4();

export default ({ ...props }) => {
  const [userId, setUserId] = useState(id);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [step, setStep] = useState(1);
  const t = props.data.primary;

  useEffect(() => {
    async function fetchUser() {
      const data = await getUserAndToken();
      if (data && data.userData.me) {
        const me = data.userData.me.user;
        setUserId(me._id);
        setEmail(me.primaryEmail);
        setFirstname(me.firstName);
        setLastname(me.lastName);
      }
    }

    fetchUser();
  }, []);

  const moveStep = (step) => {
    setStep(step);
  };

  const redirect = () => {
    axios("https://hooks.zapier.com/hooks/catch/678062/ovumehx/", {
      method: "post",
      data: {
        email,
        firstName,
        lastName,
        companyName,
        userId,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then((res) => navigate("https://www.swapcard.com/confex/success"));
  };

  return (
    <div id="tool">
      <Grid>
        <SpaceH of={60} />
        <Row middle="xs">
          <Col lg={6}>
            <Logo
              src="https://images.prismic.io/showcase-dev/6a570478-0e55-467a-9a83-8caa9c19d6c0_Gulfood+Logo+%2B+Date+Hor-1.png?auto=compress,format"
              alt="Gulfood connexions"
            />
            <SpaceH of={12} />
            <Typo1>Did you know that over thousands of visitors will be attending Gulfood Connexions?</Typo1>
            <SpaceH of={12} />
            <Body>
              With so many you’ll want to easily and efficiently capture leads. Well, now you can with our lead capture
              tool in our Gulfood Connexions Events App! Collect leads for your global team, contextualize them and
              follow your sales performance, for 1000 AED.
            </Body>
          </Col>
          <ColMiddle lg={6}>
            <FormContainer>
              {step === 1 && (
                <>
                  <Typo3 color="#fff" center>
                    Gulfood Connexions
                  </Typo3>
                  <SpaceH of={40} />
                  <PriceContainer>
                    <Price>1000</Price>
                    <Currency>AED</Currency>
                  </PriceContainer>
                  <SpaceH of={40} />
                  <FeaturesList>
                    <span class="icons8-checked" /> Unlimited meeting and connecting request
                  </FeaturesList>
                  <FeaturesList>
                    <span class="icons8-checked" /> One license for all your team members
                  </FeaturesList>
                  <FeaturesList>
                    <span class="icons8-checked" /> Instantly export files to Excel
                  </FeaturesList>
                  <FeaturesList>
                    <span class="icons8-checked" /> Available on Web, iOS and Android
                  </FeaturesList>
                  <SpaceH of={20} />
                  <ButtonCustom bg={"#FFF"} textColor={"#333"} onClick={() => moveStep(2)}>
                    Order Your Lead capture tool
                  </ButtonCustom>
                </>
              )}

              {step === 2 && (
                <>
                  {/* {!userId && (
                    <>
                      <Typo3 color="#fff" center>
                        DWTC Lead Capture
                      </Typo3>
                      <div style={{ padding: "0 20px", textAlign: "center" }}>
                        <SpaceH of={40} />
                        <Typo4 color="#FFF">You need to be logged in to purchase the DWTC Lead Capture</Typo4>
                        <SpaceH of={20} />
                        <ButtonWhite to="https://gulfood.app.swapcard.com">Log into the platform</ButtonWhite>
                        <SpaceH of={20} />
                        <Body color="#FFF">Need Help? Email support@swapcard.com</Body>
                      </div>
                    </>
                  )} */}

                  {/* {!companyName && userId && (
                    <>
                      <Typo3 color="#fff" center>
                        DWTC Lead Capture
                      </Typo3>
                      <div style={{ padding: "0 20px", textAlign: "center" }}>
                        <SpaceH of={40} />
                        <Body color="#FFF">
                          You are not attending the Gulfood event or you are not part of an exhibitor.
                          <br />
                          <br />
                          Contact support@swapcard.com
                        </Body>
                      </div>
                    </>
                  )} */}

                  {/* {userId && companyName && ( */}
                  <>
                    <Typo3 color="#fff" center>
                      Enter your information
                    </Typo3>
                    <SpaceH of={30} />
                    <div style={{ width: "100%", padding: "0 20px" }}>
                      <Label color={"#FFF"} required>
                        Email
                      </Label>
                      <Input theme="white" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      <SpaceH of={20} />
                      <ColInput>
                        <div style={{ paddingRight: "10px" }}>
                          <Label color={"#FFF"}>First Name</Label>
                          <Input theme="white" value={firstName} onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div>
                          <Label color={"#FFF"} required>
                            Last Name
                          </Label>
                          <Input theme="white" value={lastName} onChange={(e) => setLastname(e.target.value)} />
                        </div>
                      </ColInput>
                      <SpaceH of={20} />
                      <Label color={"#FFF"} required>
                        Exhibiting Company
                      </Label>

                      <Input theme="white" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

                      <SpaceH of={20} />
                      {/*<ButtonCustom bg={"#FFF"} textColor={"#333"} onClick={() => redirect()}>*/}
                      {/*  Send my request*/}
                      {/*</ButtonCustom>*/}
                      <StripeButton
                        disabled={true}
                        successUrl={"https://www.swapcard.com/gulfood/success?email=" + email}
                        cancelUrl={"https://www.swapcard.com/gulfood-app/?cancel"}
                        clientReferenceId={userId}
                        submitValue={"Proceed to checkout"}
                        customField={{ email, firstName, lastName, companyName, userId }}
                      />
                    </div>
                  </>
                  {/* )} */}
                </>
              )}
            </FormContainer>
          </ColMiddle>
        </Row>
      </Grid>
    </div>
  );
};

export const query = graphql`
  fragment paymentGulfood on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMain55HeroPayment {
          slice_type
          primary {
            hero_title {
              text
            }
          }
        }
      }
    }
  }
`;
