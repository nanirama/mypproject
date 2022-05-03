import React, { useState } from "react";
import { graphql } from "gatsby";
import { Col, Grid, Row } from "react-flexbox-grid";
import * as styled from "./styled";
import { Typo2 } from "../../typographie";
import { SpaceH } from "../../space";
import Link from "../../utils/link";
import Route, { exportLocale } from "../../../localization";
import MixpanelHelper, { MixpanelHelperV2 } from "../../utils/segment";
import { ButtonSecondary, ButtonBorderSecondary, ButtonBorderPrimary } from "../../button";
import { CurrencySwitcher } from "../pricing_v4/configuration/common";

const pricesByCurrency = {
  free: {
    eur: "0€",
    aed: "0AED",
    cad: "$0",
    usd: "$0",
  },
  premium: {
    eur: "6€",
    aed: "26AED",
    cad: "$9.4",
    usd: "$7",
  },
  lead_capture: {
    eur: "90€",
    aed: "360AED",
    cad: "$135",
    usd: "$110",
  },
  cms: {
    eur: "100€",
    aed: "400AED",
    cad: "$150",
    usd: "$120",
  },
};

const Pricing = ({ ...props }) => {
  const [currency, setCurrency] = useState("usd");

  const t = props.data.primary;
  return (
    <styled.Wrapper>
      <Grid>
        <Row center="xs">
          <Col md={7}>
            <Typo2>{t.main_title}</Typo2>
          </Col>
        </Row>
        <SpaceH of={60} />
        <Row>
          <Col xs={12}>
            <CurrencySwitcher active={currency} onClick={(e) => setCurrency(e.target.id)} />
          </Col>
        </Row>
        <SpaceH of={20} />
        <Row>
          <Packages lang={props.lang} t={props.data.primary} currency={currency} />
        </Row>
      </Grid>
    </styled.Wrapper>
  );
};

const Packages = ({ t, currency, lang }) => (
  <>
    <Col md={4}>
      <styled.PackageWrapper>
        <styled.Title>{t.free_plan_title_v2}</styled.Title>
        <styled.SubTitle>{t.free_sub_title}</styled.SubTitle>
        <styled.Price>{pricesByCurrency["free"][currency]}</styled.Price>
        <styled.ButtonWrapper>
          <MixpanelHelper analytics-name="Pricing Free Button Clicked">
            <ButtonBorderPrimary to="https://studio.swapcard.com">{t.free_plan_cta}</ButtonBorderPrimary>
          </MixpanelHelper>
        </styled.ButtonWrapper>
        <styled.GreenTitle>{t.get_access_to_all_feature}</styled.GreenTitle>
        <styled.LineText>{t.free_plan_limit}</styled.LineText>
        <styled.GreenTitle>{t.additional_options}</styled.GreenTitle>
        <styled.FeaturesList
          strike={true}
          dangerouslySetInnerHTML={{
            __html: t.options.html,
          }}
        />

        <SpaceH of={20} />
        {/* <styled.SeeAllFeatures>
          <Link to={Route[lang]["pricing/features"]}>{t.sell_all_features}</Link>
        </styled.SeeAllFeatures> */}
      </styled.PackageWrapper>
    </Col>
    <Col md={8}>
      <styled.PackageWrapper>
        <styled.PremiumParents>
          <styled.PremiumWrapper>
            <styled.Title>{t.premium_title}</styled.Title>
            <styled.SubTitle>{t.premium_sub_title}</styled.SubTitle>
            <styled.Price>
              {pricesByCurrency["premium"][currency]}
              <span style={{ fontSize: "19px" }}>&nbsp;{t.premium_price}</span>
            </styled.Price>
            <styled.ButtonWrapper>
              <MixpanelHelper analytics-name="Pricing Build Plan Clicked">
                <ButtonSecondary to={Route[lang]["pricing/build-plan"]}>{t.premium_cta}</ButtonSecondary>
              </MixpanelHelper>
            </styled.ButtonWrapper>
            <styled.GreenTitle>{t.get_access_to_all_feature}</styled.GreenTitle>
            <styled.LineText>{t.premium_limits}</styled.LineText>
            <styled.GreenTitle>{t.additional_options}</styled.GreenTitle>
            <styled.FeaturesList
              dangerouslySetInnerHTML={{
                __html: t.options.html,
              }}
            />
          </styled.PremiumWrapper>
          <styled.PremiumSep>
            <Link to={Route[lang]["pricing/features"]}>
              <styled.Plus>
                <img src="https://prismic-io.s3.amazonaws.com/showcase-dev/f798b347-1ea2-4c90-bf7f-7c20011e5f5c_plus_icon.svg?auto=format%2Ccompress&fit=max&q=50" />
              </styled.Plus>
            </Link>
          </styled.PremiumSep>
          <styled.PremiumWrapper>
            <styled.Title>{t.exhibitors_title}</styled.Title>
            <styled.SubTitle>{t.exhibitors_sub_title}</styled.SubTitle>
            <styled.Price>{t.exhibitors_option}</styled.Price>
            <styled.ButtonWrapper>
              <MixpanelHelper analytics-name="Pricing Build Plan Clicked">
                <ButtonBorderSecondary to={Route[lang]["pricing/build-plan"]}>{t.premium_cta}</ButtonBorderSecondary>
              </MixpanelHelper>
            </styled.ButtonWrapper>
            <styled.GreenTitle>{t.exhibitors_center}</styled.GreenTitle>
            <styled.LineText>
              {pricesByCurrency["cms"][currency]}
              {t.exhibitors_center_price}
            </styled.LineText>
            <SpaceH of={5} />
            <styled.GreenTitle>{t.exhibitors_lead_capture}</styled.GreenTitle>
            <styled.LineText>
              {pricesByCurrency["lead_capture"][currency]}
              {t.exhibitors_lead_capture_price}
            </styled.LineText>
          </styled.PremiumWrapper>
        </styled.PremiumParents>
        <SpaceH of={5} />
        <styled.SeeAllFeatures>
          <Link to={Route[lang]["pricing/features"]}>{t.sell_all_features}</Link>
        </styled.SeeAllFeatures>
      </styled.PackageWrapper>
    </Col>
  </>
);

export default Pricing;

export const query = graphql`
  fragment pricingPackages5 on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMain44PricingFreePlan {
          slice_type
          primary {
            main_title
            free_plan_title_v2: free_plan_title
            free_sub_title
            free_plan_price
            free_plan_currency
            free_plan_cta
            get_access_to_all_feature
            free_plan_limit
            additional_options
            sell_all_features
            options {
              html
            }

            premium_title
            premium_sub_title
            premium_price
            premium_limits
            premium_cta

            exhibitors_title
            exhibitors_sub_title

            exhibitors_option

            exhibitors_center
            exhibitors_center_price

            exhibitors_lead_capture
            exhibitors_lead_capture_price
          }
        }
      }
    }
  }
`;
