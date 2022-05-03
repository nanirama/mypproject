import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Typo1 } from "../components/typographie";
import GitexTech from "../assets/images/GITEX.svg";
import GFS from "../assets/images/GFS.svg";
import withLocation from "../HOC/location";
import Link from "../components/utils/link";
import { media } from "../components/utils/style-utils";

const pageContext = {
  lang: "en-us",
  meta_description: "Register for GITEX Technology Week and for GITEX Future Stars",
  meta_title: "Gitex Login",
  route: "gitex-login",
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
    padding: 80px 0;
  `}
`;

const EventCard = styled.div`
  border: 1px solid #d9d9d9;
  display: block;
  text-align: center;
  padding: 10px;
  width: 365px;
  ${media.desktop`
    margin-bottom:0;
  `};
  margin-bottom: 20px;
`;

const EventCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  align-items: center;
  ${media.desktop`
    flex-direction:row;
    margin-bottom:0;
  `};
`;

const EventCardItemLink = styled.div`
  display: block;
  font-weight: 600;
  font-size: 20px;
  color: ${props => props.theme.color.primary};
  &:hover {
    text-decoration: underline;
  }
`;

export const Success = ({ ...props }) => {
  return (
    <Layout dataNavigation={props.data.translation} pageContext={pageContext}>
      <Wrapper>
        <Typo1 center>Register for GITEX Technology Week and for GITEX Future Stars</Typo1>
        <EventCardWrapper>
          <div>
            <EventCard>
              <Link to="https://cloudme02.infosalons.biz/Reg/GITEX19DU">
                <img alt="Gitex" src={GitexTech} />

                <EventCardItemLink>Register to Gitex Technology Week</EventCardItemLink>
              </Link>
            </EventCard>
          </div>
          <div>
            <EventCard>
              <Link to="https://cloudme02.infosalons.biz/Reg/GFS19DU">
                <img alt="GFS" src={GFS} />

                <EventCardItemLink>Register to GITEX Future Stars</EventCardItemLink>
              </Link>
            </EventCard>
          </div>
        </EventCardWrapper>
      </Wrapper>
    </Layout>
  );
};

export default withLocation(Success);

export const query = graphql`
  query GitexLogin {
    translation: prismicTranslate {
      ...genericData
    }
  }
`;
