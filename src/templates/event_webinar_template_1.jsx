import React from "react";
import { graphql } from "gatsby";

import EventIndex from "../components/events";

import Layout from "../components/layout";

export default ({ ...props }) => {
  const previewData = typeof window !== "undefined" && window.__PRISMIC_PREVIEW_DATA__;
  const dataInitial = previewData ? previewData.prismicTemplate1 : props.data.PageData;
  const { PageData } = props.data;

  const metaData = PageData.data.body.filter((item) => {
    return item.slice_type === "meta";
  });
  const SpeakersList = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "speakers_list";
  });

  const Blogos = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "brand_logos";
  });

  const image = metaData[0].primary.meta_card.fixed.src;
  return (
    <Layout dataNavigation={props.data.translation} pageContext={props.pageContext} seoImage={image}>
      <EventIndex data={PageData} logos={Blogos[0].items} SpeakersList={SpeakersList[0].items} />
    </Layout>
  );
};
export const query = graphql`
  query getEventWebinerTemplate($id: String!, $lang: String!) {
    PageData: prismicEventWebinarTemplate1(id: { eq: $id }) {
      ...EventWebinar
      data {
        body {
          ... on PrismicEventWebinarTemplate1BodyMeta {
            slice_type
            id
            primary {
              meta_card {
                fixed(width: 1200) {
                  src
                }
              }
            }
          }
        }
        webinar_name
        webinar_description {
          raw
          html
        }
        hubspot_form_id
      }
    }
    translation: prismicTranslate(lang: { eq: $lang }) {
      ...genericData
    }
  }
`;
