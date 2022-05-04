import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import PriceTableItem from "./PriceTableItem";
import Brand_logos from "../section/brand_logos";
import { CurrencySwitcher } from "../section/pricing_v6/common";
import Hubspot_form_index from "../section/hubspot_form_index";
import {
  PricePage,
  Container,
  TitleLarge,
  SmallText,
  Links,
  Grid,
  ContactForm,
  CurrencyWrapper,
  Section,
  Title,
} from "./styled";

const PriceTable = ({ ...props }) => {
  const t = props.data.primary;
  const logos = props.logos;
  const {
    conversion_note,
    button_text,
    start_conversion_heading,
    pricing_table_heading,
    bill_period_text,
    hubspot_form_heading,
    hubspot_form_id,
    leading_companies_heading,
  } = props.allData.data;
  const defaultCurrency = props.lang === "fr-fr" ? "eur" : "usd";
  const [currency, setCurrency] = useState(defaultCurrency);
  const items = props.data;
  useEffect(() => {}, [currency]);
  const hubspotId = process.env.NODE_ENV === "development" ? hubspot_form_id : hubspot_form_id;
  // const hubspotId = "6e3049a6-5e69-4eec-951f-629d5264f17d";

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

  const checkLinkHandler = (string) => {
    if (/(http(s?)):\/\//i.test(string)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <PricePage>
      <Container>
        <TitleLarge>{pricing_table_heading}</TitleLarge>
        <CurrencyWrapper>
          <CurrencySwitcher active={currency} onClick={(e) => setCurrency(e.target.id)} />
        </CurrencyWrapper>
        <SmallText>{bill_period_text}</SmallText>
        <Grid>
          {items && items.map((item, index) => <PriceTableItem key={index} data={item} currency={currency} />)}
        </Grid>

        <ContactForm>
          <h2>{hubspot_form_heading}</h2>
          <Hubspot_form_index portalId="3004554" formId={hubspotId} />
        </ContactForm>
      </Container>

      <Brand_logos data={logos} heading={leading_companies_heading} />
      <Section>
        <Container>
          <Title>{start_conversion_heading}</Title>
          <Link className="buttonlink bg-blue" to={`/`}>
            {button_text}
          </Link>
          <p>{conversion_note.text}</p>
        </Container>
      </Section>
    </PricePage>
  );
};

export default PriceTable;

export const query = graphql`
  fragment PriceTable on PrismicPriceTemplate1 {
    data {
      pricing_table_heading
      bill_period_text
      hubspot_form_heading
      hubspot_form_id
      leading_companies_heading
      start_conversion_heading
      conversion_note {
        text
      }
      button_text
      bodyMain {
        ... on PrismicPriceTemplate1BodyMainBrandLogos {
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
        ... on PrismicPriceTemplate1BodyMainPricingSaasV2 {
          id
          slice_type
          primary {
            plan_title {
              text
              html
            }
            plan_description
            plan_details
            color
            button_text
            button_link1
            plan_type
            price_note
            price_starting_at_text
            price_in_eur
            price_in_usd
            price_in_gbp
            price_in_sgd
            price_in_cad
            price_in_aud
            price_in_aed
          }
        }
      }
    }
  }
`;