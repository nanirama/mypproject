import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { PrismicRichText } from "@prismicio/react";

import { Grid, Row, Col } from "react-flexbox-grid";
import Brand_logos from "../section/brand_logos";
import Hubspot_form_index from "../section/hubspot_form_index";
import ContactFooter from "./contactFooter";

import { SpaceH } from "../space";

import Logo1 from "../../assets/images/swapcard-logo.png";

import { ContactPage, Container, ContactBanner, ContactForm, HubSpotFormOuter } from "./styled";

const IndexPage = ({ data, dataNavigation, pageContext }) => {
  const { items, primary } = data;
  const { title, description, hubspot_form_id } = primary;
  // const hubspotId = "6e3049a6-5e69-4eec-951f-629d5264f17d";

  const hubspotId = process.env.NODE_ENV === "development" ? hubspot_form_id : hubspot_form_id;

  //Form

  useEffect(() => {
    console.log("Chili Piper Loaded");
    const cpTenantDomain = "swapcard"; // replace with your subdomain
    const cpRouterName = "request-demo-router"; // replace with the router's name
    if (typeof window !== "undefined") {
      window.addEventListener("message", (event) => {
        if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmit") {
          const lead = event.data.data.reduce((obj, { name, value }) => Object.assign(obj, { [name]: value }), {});
          console.log("=> Data from Hubspot");
          console.log(lead);
          console.log("=> Data sent to Chili");
          const payloadChili = {
            firstname: lead.firstname,
            lastname: lead.lastname,
            email: lead.email,
            phone: lead.phone,
            mailingcountry: lead.where_are_you_located_ || "",
            title: lead.jobtitle || "",
            of_attendees__c: lead.number_of_attendees || "",
            own_event_or_client_event__c:
              lead.is_this_your_own_event_or_are_you_organizing_this_event_on_behalf_of_a_client_ || "",
            organization_type__c: lead["0-2/what_is_your_organization_type_"] || "",
            would_like_to_partner_with_us__c: lead.would_you_like_to_partner_with_us_ || "",
            employee_range__c: lead.numemployees || "",
            event_type__c: lead["0-2/what_type_of_event_are_you_planning_"] || "",
            reseller_software_to__c: lead.are_you_reselling_event_software_to_your_clients___ || "",
            of_events_year__c: lead.how_many_events_do_you_organize_in_a_year_ || "",
          };
          console.log(payloadChili);
          ChiliPiper.submit(cpTenantDomain, cpRouterName, {
            map: true,
            lead: payloadChili,
          });
        }
      });
    }
  }, []);

  return (
    <>
      <ContactPage>
        <ContactBanner>
          <Container>
            <a href="/">
              <img className="logo" src={Logo1} />
            </a>
            <h2 style={{ textAlign: "center" }}>{title}</h2>
            <PrismicRichText
              field={description.raw}
              components={{
                listItem: ({ children }) => (
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M10.6611 16.4667L17.6278 9.5"
                        stroke="#00CB87"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.7593 9.3596H16.8188"
                        stroke="#00CB87"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.6611 2.53333L17.6278 9.49999"
                        stroke="#00CB87"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {children}
                  </li>
                ),
              }}
            />
          </Container>
        </ContactBanner>

        <Container>
          <ContactForm>
            <Hubspot_form_index portalId="3004554" formId={hubspotId} />
          </ContactForm>
        </Container>
        <Brand_logos data={items} heading="Leading brands trust Swapcard" />

        <ContactFooter t={dataNavigation} lang={pageContext.lang} />
      </ContactPage>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  fragment ContactV2Form on PrismicContactTemplate1 {
    data {
      bodyMain {
        ... on PrismicContactTemplate1BodyMainContactV2Form {
          __typename
          slice_type
          primary {
            title
            description {
              text
              raw
              html
            }
            sub_title
            back_homepage
            hubspot_form_id
            trusted_by
          }
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
