import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import IconCheckedSrc from "../../assets/images/icons8-checked.svg";
import { Typo1, Body, Typo3, Typo5 } from "../../components/typographie";
import { SpaceH } from "../../components/space";
import withLocation from "../../HOC/location";

import { ButtonSecondary } from "../../components/button";

const pageContext = {
  lang: "en-us",
  meta_description: "Your team members will get access as soon as the mobile app goes live",
  meta_title: "Gulfood Events – Success",
  route: "gulfood-success",
  showNavigation: "contentOnly",
};

const Wrapper = styled.div`
  margin: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  max-width: 750px;
  margin: 0 auto;
  padding: 10px;
`;
const Logo = styled.img`
  /* margin-left: 50px;
  margin-top: 50px; */
  margin-top: 40px;
  max-height: 100px;
`;
const IconChecked = styled.img`
  width: 50px;
  margin-right: 10px;
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background: #000;
  margin: 10px 0 20px 0;
`;

export const Success = ({ ...props }) => {
  return (
    <Layout dataNavigation={props.data.translation} pageContext={pageContext}>
      <Wrapper>
        <Logo
          className="img-responsive"
          src="https://images.prismic.io/showcase-dev/670c7d93-578b-45ae-9bce-2d4ad7629e3a_Confex_Logo_2021_Black.png?auto=compress,format"
        />
        <SpaceH of={36} />
        <Line />
        <SpaceH of={12} />
        {/* <ButtonSecondary
          color="#de0125"
          to="https://cdn-api.swapcard.com/public/files/6a33c38146614819aea41aeceef7e3c8.pptx"
        >
          Download the exhibitor guide
        </ButtonSecondary> */}
        <SpaceH of={12} />
        <Typo1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconChecked src={IconCheckedSrc} />
            Thank you
          </div>
        </Typo1>
        <SpaceH of={12} />
        <Body>
          We have sent a message to your email containing your order confirmation and receipt. If the email hasn’t
          arrived within two minutes of your order, please check your spam folder to see if our message was accidentally
          routed there.
        </Body>
        <SpaceH of={12} />
        <Body>
          Your team members will receive access as soon as the mobile app goes live. If you choose to pay during the
          show rather than prior to the event going live, please allow 30 minutes from the time we have received your
          payment confirmation to access this premium feature. Once the 30 minutes have passed, this premium feature
          will then be available to your entire team.
        </Body>

        <SpaceH of={30} />
        {/* <Typo3>Webinars</Typo3>
        <SpaceH of={6} />
        <Body center>
          This webinar is about showing you around the Gulfood Events webapp, the exhibitor area, explaining you how the
          lead capture works and to answer your questions.
        </Body> */}
        {/* <EventCardWrapper>
          <div>
            <EventCard>
              <EventCardItemLink to="https://swapcard.zohoshowtime.com/sessions/gulfood-exhibitor-webinar">
                January 27, Monday
                <br />
                14:00 AM - 14:50 AM Asia/Dubai
              </EventCardItemLink>
              <Book to="https://swapcard.zohoshowtime.com/sessions/gulfood-exhibitor-webinar">Book your slot now</Book>
            </EventCard>
          </div>
          <div>
            <EventCard>
              <EventCardItemLink to="https://swapcard.zohoshowtime.com/sessions/gulfood-exhibitor-webinar-1">
                February 04, Tuesday
                <br />
                14:00 AM - 14:45 AM Asia/Dubai
              </EventCardItemLink>
              <Book to="https://swapcard.zohoshowtime.com/sessions/gulfood-exhibitor-webinar-1">
                Book your slot now
              </Book>
            </EventCard>
          </div>
        </EventCardWrapper> */}

        <SpaceH of={12} />
        <Typo5 center>
          Have a question?
          <br />
          Email us at support@swapcard.com
        </Typo5>
        <SpaceH of={12} />
      </Wrapper>
    </Layout>
  );
};

export default withLocation(Success);

export const query = graphql`
  query ConfexSu {
    translation: prismicTranslate {
      ...genericData
    }
  }
`;
