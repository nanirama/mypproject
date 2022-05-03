import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Body, Typo2 } from "../../components/typographie";
import { SpaceH } from "../../components/space";
import withLocation from "../../HOC/location";
import Link from "../../components/utils/link";
import { media } from "../../components/utils/style-utils";

const pageContext = {
  lang: "en-us",
  meta_description:
    "This webinar is about showing you around the Gulfood Events webapp, the exhibitor area, explaining you how the lead capture works and to answer your questions.",
  meta_title: "Register for one of our upcoming webinars - Gulfood Events",
  route: "gulfood-webinar",
  showNavigation: "contentOnly"
};

const Wrapper = styled.div`
  /* margin: 100px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  /* padding: 100px; */
  padding: 20px 0;
  ${media.desktop`
    padding: 20px 0;
  `}
`;

export const EventCard = styled.div`
  border: 1px solid #d9d9d9;
  display: block;
  text-align: center;
  margin-bottom: 20px;
  padding: 20px;
  width: 340px;
`;

export const EventCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* justify-content: space-between; */
  max-width: 800px;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  align-items: center;
  ${media.desktop`
    /* flex-direction:row; */
    margin-bottom:0;
  `};
`;

export const EventCardItemLink = styled(Link)`
  display: block;
  font-weight: 400;
  /* text-transform: uppercase; */
  font-size: 20px;
  line-height: 30px;
  color: ${props => props.theme.color.primary};
  &:hover {
    text-decoration: underline;
  }
`;

export const Book = styled(Link)`
  margin-top: 10px;
  display: block;
  font-size: 20px;
  color: ${props => props.theme.color.secondary};
  font-weight: bold;
`;

const Logo = styled.img`
  /* margin-left: 50px;
  margin-top: 50px; */
  /* margin-top: 40px; */
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background: #000;
  margin: 10px 0 0 0;
`;

export const Success = ({ ...props }) => {
  return (
    <Layout dataNavigation={props.data.translation} pageContext={pageContext}>
      <Wrapper>
        <Logo
          className="img-responsive"
          src="https://images.prismic.io/showcase-dev/6bf765b3-d337-469a-a782-55054613402f_logo_2.svg?auto=compress,format"
        />
        <SpaceH of={36} />
        <Line />
        <SpaceH of={24} />
        <Typo2 center>Register for one of our upcoming webinars</Typo2>
        <SpaceH of={8} />
        <Body center>
          This webinar is about showing you around the Gulfood Events webapp, the exhibitor area, explaining you how the
          lead capture works and to answer your questions.
        </Body>
        <EventCardWrapper>
          <div>
            <EventCard>
              <EventCardItemLink to="https://swapcard.zohoshowtime.com/sessions/gulfood-exhibitor-webinar-1">
                February 04, Tuesday
                <br />
                2:00 PM - 02:45 PM Asia/Dubai
              </EventCardItemLink>
              <Book to="https://swapcard.zohoshowtime.com/sessions/gulfood-exhibitor-webinar-1">
                Book your slot now
              </Book>
            </EventCard>
          </div>
        </EventCardWrapper>
      </Wrapper>
    </Layout>
  );
};

export default withLocation(Success);

export const query = graphql`
  query GulfoodWebinar {
    translation: prismicTranslate {
      ...genericData
    }
  }
`;
