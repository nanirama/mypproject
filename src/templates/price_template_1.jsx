import React from "react";
import { graphql } from "gatsby";
import PriceTable from "../components/price/priceTable";

import Layout from "../components/layout";
export default ({ ...props }) => {
  const previewData = typeof window !== "undefined" && window.__PRISMIC_PREVIEW_DATA__;
  const dataInitial = previewData ? previewData.prismicTemplate1 : props.data.PageData;
  const { PageData } = props.data;

  //const image = metaData[0].primary.meta_card.fixed.src;

  const PriceTableContent = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "pricing_saas_v2";
  });

  const Blogos = PageData.data.bodyMain.filter((item) => {
    return item.slice_type === "brand_logos";
  });

  // console.log('Blogos',Blogos[0].items)

  return (
    <Layout dataNavigation={props.data.translation} pageContext={props.pageContext}>
      <PriceTable
        allData={PageData}
        data={PriceTableContent}
        route={props.pageContext.route}
        lang={props.pageContext.lang}
        logos={Blogos[0].items}
      />
    </Layout>
  );
};
export const query = graphql`
  query getPriceTemplate($id: String!, $lang: String!) {
    PageData: prismicPriceTemplate1(id: { eq: $id }) {
      ...PriceTable
      id
      data {
        body {
          ... on PrismicPriceTemplate1BodyMeta {
            id
            slice_type
            primary {
              meta_card {
                fixed(width: 1200) {
                  src
                }
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
