// import React from "react";
// import { Discovery, Bloc, BlocImage } from "./styled";
// import { Typo2, Body } from "../../typographie";
// import { Margin } from "styled-components-spacing";
// import { ButtonWhite } from "../../button";
// import { exportLocale } from "../../../localization";
// import { graphql } from "gatsby";
// import TrackingNaming from "../../../localization/tracking.json";
// import MixpanelHelper from "../../utils/segment";

// export default ({ lang, ...props }) => (
//   <React.Fragment>
//     <Discovery>
//       {props.data.items.map((item, index) => (
//         <React.Fragment key={index}>
//           <Bloc bg={item.background}>
//             <Margin bottom={3}>
//               <Typo2 color="white">{item.title.text}</Typo2>
//             </Margin>

//             <Body color="white">{item.subtitle.text}</Body>

//             <BlocImage>
//               <img alt="" src={item.picture.url} className="img-responsive" />
//             </BlocImage>
//             <Margin top={4}>
//               {item.cta === "Demo" && (
//                 <MixpanelHelper
//                   analytics-location="Discovery"
//                   analytics-category={TrackingNaming["Request demo"]}
//                   analytics-label={exportLocale(lang).getInTouch.Request_demo.button}
//                 >
//                   <ButtonWhite inverted="true" to={exportLocale(lang).getInTouch.Request_demo.to}>
//                     {exportLocale(lang).getInTouch.Request_demo.button}
//                   </ButtonWhite>
//                 </MixpanelHelper>
//               )}
//               {item.cta === "Webinars" && (
//                 <MixpanelHelper
//                   analytics-location="Discovery"
//                   analytics-category={TrackingNaming["Webinar"]}
//                   analytics-label={exportLocale(lang).getInTouch.Webinars.button}
//                 >
//                   <ButtonWhite inverted="true" target="_blank" to={exportLocale(lang).getInTouch.Webinars.to}>
//                     {exportLocale(lang).getInTouch.Webinars.button}
//                   </ButtonWhite>
//                 </MixpanelHelper>
//               )}
//             </Margin>
//           </Bloc>
//         </React.Fragment>
//       ))}
//     </Discovery>
//   </React.Fragment>
// );

// export const query = graphql`
//   fragment discoveryFragment on PrismicTemplate1 {
//     data {
//       bodyMain {
//         __typename
//         ... on PrismicTemplate1BodyMainDiscovery {
//           slice_type
//           items {
//             title {
//               text
//             }
//             picture {
//               url
//             }

//             picture {
//               fluid(maxWidth: 600) {
//                 ...GatsbyPrismicImageFluid_noBase64
//               }
//             }

//             subtitle {
//               text
//             }
//             background
//             cta
//           }
//         }
//       }
//     }
//   }
// `;
