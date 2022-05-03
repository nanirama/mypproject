import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Typo1, Body } from "../../components/typographie";
import { SpaceH } from "../../components/space";

const pageContext = {
  lang: "en-us",
  meta_description: "An error occured. Please contact support@swapcard.com",
  meta_title: "Gulfood - Error",
  route: "gulfood-error",
  showNavigation: "contentOnly"
};

const Wrapper = styled.div`
  margin: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  max-width: 700px;
  margin: 0 auto;
  padding: 10px;
`;
const Logo = styled.img`
  /* margin-left: 50px;
  margin-top: 50px; */
  margin-top: 40px;
`;

export default ({ ...props }) => {
  return (
    <Layout dataNavigation={props.data.translation} pageContext={pageContext}>
      <Wrapper>
        <Logo
          className="img-responsive"
          src="https://showcase-dev.cdn.prismic.io/showcase-dev%2F21aa1ca1-b793-459c-b00c-e160ddf8d343_logo_3.svg"
        />

        <SpaceH of={36} />
        <Typo1>An error occurred</Typo1>
        <SpaceH of={12} />
        <Body>An error occured, please contact support@swapcard.com</Body>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query GulfoodError {
    translation: prismicTranslate {
      ...genericData
    }
  }
`;
