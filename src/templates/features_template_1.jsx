import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import FeatureCategory from "../components/features/MainCategory";

export default ({ ...props }) => {
  const previewData = typeof window !== "undefined" && window.__PRISMIC_PREVIEW_DATA__;
  const dataInitial = previewData ? previewData.prismicTemplate1 : props.data.PageData;
  const { PageData } = props.data;

  //const image = metaData[0].primary.meta_card.fixed.src;

  return (
    <Layout dataNavigation={props.data.translation} pageContext={props.pageContext}>
      <FeatureCategory data={PageData}/>
    </Layout>
  );
};
export const query = graphql`
  query getFeaturesTemplate($id: String!, $lang: String!) {
    PageData: prismicFeaturesTemplate1(id: { eq: $id }) {  
      ...FeaturesCategories   
      id
      data {
        heading {
          text
          html
        }
        sub_heading {
          text
          html
        }
      }
    }
    translation: prismicTranslate(lang: { eq: $lang }) {
      ...genericData
    }
  }
`;
