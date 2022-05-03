import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { Col, Grid, Row } from "react-flexbox-grid";

import PriceCard from "./priceCard";
import {
  Wrapper,
  TableWrapper,
  Tr,
  Table,
  Td,
  Tt,
  P,
  H2,
  A,
  Image,
  FeaturesListTitle,
  H1,
  CurrencyWrapper,
  Button,
  CustomizeBtn,
} from "./styled";
import Ticket from "../../../assets/icons/ticket.svg";
import Arrow from "./Arrow";
import TableSection from "./Table";
import { CurrencySwitcher } from "./common";
import CardSection from "./Card";
import AddonsSection from "./AddonsCards";
import ProgressBar from "./../../progress_bar";
import RangeInput from "./RangeInput";
import Accordeon from "./AccordeonSection";
import _ from "lodash";
import AccordeonNav from "./AccordeonNav";
import { ButtonSecondary } from "../../button";
import PricingV6FeaturesSaas from "../pricing_v6_features_saas";
import Route from "../../../localization";
import { SpaceH } from "../../space";
import { Typo2, Typo3, Typo4 } from "../../typographie";

const Pricing = ({ ...props }) => {
  const t = props.data.primary;
  const [accordeonId, setAccordeonId] = useState("Schedule");
  const defaultCurrency = props.lang === "fr-fr" ? "eur" : "usd";
  const [currency, setCurrency] = useState(defaultCurrency);
  const [annuallyChecked, setAnnuallyChecked] = useState([false, false, false, false]);

  const handleChange = (e) => {
    // console.log("e", e);
    setAnnuallyChecked([false, true, true, false]);
  };

  const updateAccordeon = (id) => {
    setAccordeonId(id);
  };
  const { primary, items } = props.data;
  const itemsFeatures = props.allData[1];

  return (
    <div style={{ marginTop: "150px" }}>
      <Grid>
        <Row center="xs">
          <Typo2 center mb={17}>
            {t.title_main}
          </Typo2>
        </Row>
        <Row>
          <CurrencyWrapper>
            <CurrencySwitcher active={currency} onClick={(e) => setCurrency(e.target.id)} />
          </CurrencyWrapper>

          <div style={{ textAlign: "center", margin: "0 auto 10px auto", fontSize: "13px" }}>
            All our prices are billed annually
          </div>

          <TableSection
            t={primary}
            items={items}
            lang={props.lang}
            currency={currency}
            annuallyChecked={annuallyChecked}
            setAnnuallyCheked={handleChange}
            {...props}
          />
        </Row>
      </Grid>
      <SpaceH of={30} />

      <div style={{ background: "rgb(250, 250, 250)" }}>
        <Col xl={12} style={{ paddingBottom: 20, paddingTop: 20 }}>
          <Row center="lg">
            <Row style={{ maxWidth: 1024, width: "100%", margin: 0 }} between="lg" center="md">
              <AddonsSection t={t} />
            </Row>
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default Pricing;

export const query = graphql`
  fragment pricingSaaSFeatures on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainSaasFeatures {
          slice_type
          items {
            content
            group_key
            is_title
            title_saas_feature: title
          }
          slice_label
          id
        }
      }
    }
  }

  fragment pricingPackage6 on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainPricingSaas {
          slice_type
          primary {
            beta
            bill_annualy
            button_signup_free
            contact_us
            customize_your_plan
            lets_talk
            month
            most_common

            offer_all_features

            plan_community_desc
            plan_community_icon
            plan_community_icon_img {
              url
            }

            pay_as_you_go_title
            pay_as_you_go_content

            volume_discount_title
            volume_discount_content

            commit_discount
            commit_discount_content

            plan_community_title
            plan_event_desc
            plan_event_icon
            plan_event_icon_img {
              url
            }
            plan_event_title
            plan_free_desc
            plan_free_icon
            plan_free_icon_img {
              url
            }
            plan_free_title
            plan_meetup_desc
            plan_meetup_icon
            plan_meetup_icon_img {
              url
            }
            plan_meetup_title
            save_15
            starting_at
            title_main
            view_all_swapcard_features
            year

            addon_bloc_title_1
            addon_bloc_title_2
            addon_bloc_title_3
            addon_bloc_title_4

            addon_bloc_content_1
            addon_bloc_content_2
            addon_bloc_content_3
            addon_bloc_content_4

            addon_title
            addon_subtitle
          }
          slice_label
          items {
            table_column_five

            help_box_1
            help_box_2
            help_box_3
            help_box_4
            help_box_5

            table_column_four
            table_column_one
            table_column_three
            table_column_two
            table_title
            table_title_icon
            table_title_icon_img {
              url
            }
            table_title_link
          }
          id
        }
      }
    }
  }
`;
