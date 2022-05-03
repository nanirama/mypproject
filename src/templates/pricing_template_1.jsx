import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
export default ({ ...props }) => {
  //   const previewData = typeof window !== "undefined" && window.__PRISMIC_PREVIEW_DATA__;
  //   const dataInitial = previewData ? previewData.prismicTemplate1 : props.data.PageData;
  //   const { PageData } = props.data;

  //const image = metaData[0].primary.meta_card.fixed.src;

  return (
    <h2>Pricing</h2>
    // <Layout dataNavigation={props.data.translation} pageContext={props.pageContext}>
    //   {dataInitial.data.bodyMain.map((slice, index) => (
    //     <React.Fragment key={index}>
    //       {slice.slice_type === "contact_v2_form" && (
    //         <ContactIndex data={slice} dataNavigation={props.data.translation} pageContext={props.pageContext} />
    //       )}
    //     </React.Fragment>
    //   ))}
    // </Layout>
  );
};
// export const query = graphql`
//   query getContactTemplate($id: String!, $lang: String!) {
//     PageData: prismicContactTemplate1(id: { eq: $id }) {
//       ...ContactV2Form
//       id
//       data {
//         body {
//           ... on PrismicContactTemplate1BodyMeta {
//             slice_type
//             id
//             primary {
//               meta_card {
//                 fixed(width: 1200) {
//                   src
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     translation: prismicTranslate(lang: { eq: $lang }) {
//       ...genericData
//     }
//   }
// `;
