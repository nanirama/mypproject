import React from "react";
import NotExist from "../components/templates/404";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const pageContext = {
  lang: "en-us",
  meta_description: "Page not found",
  meta_title: "404 - Swapcard",
  route: "404"
};

export default ({ ...props }) => (
  <Layout dataNavigation={props.data.translation} pageContext={pageContext}>
    <NotExist
      lang="en-us"
      message={props.data.prismic404.data.error.text}
      backToHome={props.data.prismic404.data.back_to_home.text}
    />
  </Layout>
);

export const query = graphql`
  query NotFound {
    prismic404(lang: { eq: "en-us" }) {
      data {
        error {
          text
        }
        back_to_home {
          text
        }
      }
    }
    translation: prismicTranslate {
      ...genericData
    }
  }
`;
