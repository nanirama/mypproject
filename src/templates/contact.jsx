import React from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import Hero from "../components/section/hero";
import ContactForm from "../components/templates/contact/form";
import ContactSidebar from "../components/templates/contact/sidebar";
import Layout from "../components/layout";
import { MixpanelConsumer } from "react-mixpanel";

export default ({ ...props }) => (
  <Layout dataNavigation={props.data.translation} pageContext={props.pageContext}></Layout>
);

export const query = graphql`
  query getDocumentContact2($id: String!, $lang: String!) {
    prismicContact(id: { eq: $id }) {
      data {
        hubspot_id
        bodyMain {
          __typename
          ... on PrismicContactBodyMainHero {
            slice_type
            primary {
              hero_title {
                text
              }
              hero_sub_title {
                text
              }
              layouts
              structure_layouts
              cta_type_1
            }
          }
          ... on PrismicContactBodyMainSwapcardOffices {
            slice_type
            primary {
              where {
                text
              }
              office_phone {
                text
              }
              office_email {
                text
              }
              office_address {
                text
              }
            }
          }
        }
      }
    }

    translation: prismicTranslate(lang: { eq: $lang }) {
      ...genericData
    }
  }
`;
