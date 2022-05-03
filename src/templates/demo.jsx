import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import DemoWrapper from "../components/templates/demo/demowrapper";

export default ({ ...props }) => (
  <React.Fragment>
    <Layout dataNavigation={props.data.translation} pageContext={props.pageContext}>
      <DemoWrapper img={props.macbook} lang={props.pageContext.lang} data={props.data.prismicDemo.data} />
    </Layout>
  </React.Fragment>
);

export const query = graphql`
  query getDocumentDemo($id: String!, $lang: String!) {
    prismicDemo(id: { eq: $id }) {
      data {
        link_logo
        title_mobile {
          text
        }
        hero_title {
          text
        }
        sub_title {
          text
        }
        you_will_learn_how_to {
          text
          html
        }
        customers_logo {
          logo {
            url
          }
        }

        mac {
          fluid(maxWidth: 600) {
            ...GatsbyPrismicImageFluid_noBase64
          }
        }

        form_id
        social_proof
      }
    }

    translation: prismicTranslate(lang: { eq: $lang }) {
      ...genericData
    }
  }
`;
