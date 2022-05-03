import React from "react";
import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
import {
  Banner,
  Container,
  BannerContent,
  BannerText,
  MobileImg,
  DesktopImg,
  WebinarImg,
  Grid,
  WebinarText,
  Tag,
  FormBlk,
} from "./styled";
import Brand_logos from "../section/brand_logos";
import SpeakersBlk from "../section/speakers";
import Hubspot_form_index from "../section/hubspot_form_index";
import WebinarDesktopImage from "../../assets/images/webinar-desktop-new.png";
import WebinarMobileImage from "../../assets/images/webinar-banner-mobile.png";

const IndexPage = ({ data, logos, SpeakersList }) => {
  const { webinar_name, webinar_description, hubspot_form_id } = data.data;

  const hubspotId = process.env.NODE_ENV === "development" ? hubspot_form_id : hubspot_form_id;

  return (
    <>
      <Banner>
        <DesktopImg>
          <img src={WebinarDesktopImage} />
        </DesktopImg>
        <MobileImg>
          <img src={WebinarMobileImage} />
        </MobileImg>

        <Container>
          <BannerContent>
            <BannerText>
              <h2>Event Solution Webinars</h2>
              <p>
                Become an expert on Swapcard and learn best practices for hosting <br />
                virtual and hybrid experiences with our Swapcard webinars.
              </p>
              <div></div>
            </BannerText>
            {/* <WebinarImg>
              <img src={WebinarImage} />
            </WebinarImg> */}
          </BannerContent>
        </Container>
      </Banner>

      <Container>
        <Grid>
          <WebinarText>
            <Tag>{webinar_name}</Tag>

            <PrismicRichText
              field={webinar_description.raw}
              components={{
                heading3: ({ children }) => <h3>{children}</h3>,
                paragraph: ({ children }) => <p>{children}</p>,
                listItem: ({ children }) => <li>{children}</li>,
              }}
            />

            {SpeakersList && SpeakersList.length > 0 && <SpeakersBlk data={SpeakersList} heading="Speakers" />}
          </WebinarText>

          <FormBlk>
            <h3>Register today!</h3>
            <Hubspot_form_index portalId="3004554" formId={hubspotId} />
          </FormBlk>
        </Grid>
      </Container>

      <Brand_logos data={logos} heading="+4000 leading companies, conferences & exhibitions trust us!" />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  fragment EventWebinar on PrismicEventWebinarTemplate1 {
    data {
      bodyMain {
        ... on PrismicEventWebinarTemplate1BodyMainSpeakersList {
          id
          items {
            speaker_name
            speaker_designation
            speaker_image {
              fixed(width: 110, height: 110) {
                ...GatsbyPrismicImageFixed_noBase64
                src
              }
            }
          }
          slice_type
        }
        ... on PrismicEventWebinarTemplate1BodyMainBrandLogos {
          id
          slice_type
          items {
            logo {
              fluid(maxWidth: 120, maxHeight: 64) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
              url
            }
          }
        }
      }
    }
  }
`;
