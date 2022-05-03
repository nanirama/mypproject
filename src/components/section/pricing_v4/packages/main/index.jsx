import React, { useState } from "react";
import { graphql } from "gatsby";
import { Col, Grid, Row } from "react-flexbox-grid";
import * as styled from "./styled";
import Link from "../../../../utils/link";
import { Typo2 } from "../../../../typographie";
import { CurrencySwitcher } from "../../configuration/common";
import { ButtonSecondary, ButtonBorderSecondary } from "../../../../button";
import Route, { exportLocale } from "../../../../../localization";
import { SpaceH } from "../../../../space";
import MixpanelHelper from "../../../../utils/segment";

const Main = ({ data, lang }) => {
  const t = data.primary;
  const defaultCurrency = lang === "fr-fr" ? "eur" : "usd";
  const [currency, setCurrency] = useState(defaultCurrency);

  const TrialPackage = () => {
    return (
      <styled.TrialPackageBlock>
        <styled.TrialPackageLabel>{t.trial_package_label}</styled.TrialPackageLabel>
        <styled.TrialPackageTitle>{t.trial_package_title}</styled.TrialPackageTitle>
        <styled.TrialPackageSubtitle>{t.trial_package_subtitle}</styled.TrialPackageSubtitle>
        <SpaceH of={26} />
        <MixpanelHelper
          analytics-location={"Pricing V4"}
          analytics-category={"Free trial"}
          analytics-label={t.trial_package_button}
        >
          <ButtonSecondary to={exportLocale(lang).pricing.getStarted.to + "?ref=free_trial"}>
            {t.trial_package_button}
          </ButtonSecondary>
        </MixpanelHelper>
        <SpaceH of={10} />

        <styled.TrialPackageComment>{t.trial_package_comment}</styled.TrialPackageComment>
      </styled.TrialPackageBlock>
    );
  };

  const PaidPackage = () => {
    return (
      <Col xs={12} md={5}>
        <styled.PaidPackageBlock>
          <styled.PackageImageBlock>
            <img src={t.plan_image.url} alt={t.plan_image.alt} />
          </styled.PackageImageBlock>
          <styled.PackageTitle dangerouslySetInnerHTML={{ __html: t.plan_title.text }} />
          <styled.PricingWrapper>
            <styled.PaidPackageSubtitle2>
              {currency === "usd" && t.between_price_range_usd}
              {currency === "eur" && t.between_price_range_eur}
              {currency === "aed" && t.between_price_range_aed}
              {currency === "cad" && t.between_price_range_cad}
              <span style={{ fontSize: "1rem" }}>{t.between_per_attendees}</span>
            </styled.PaidPackageSubtitle2>
            <styled.BetweenDepending>{t.between_depending_on_your_volume}</styled.BetweenDepending>
          </styled.PricingWrapper>

          {lang !== "it-it" && (
            <styled.ButtonBlock>
              <MixpanelHelper
                analytics-location={"Pricing V4"}
                analytics-category={"Build A Plan"}
                analytics-label={t.plan_button.text}
              >
                <ButtonSecondary to={Route[lang]["pricing/build-plan"]}>{t.plan_button.text}</ButtonSecondary>
              </MixpanelHelper>
              <Link to={exportLocale(lang).pricing.getStarted.to + "?ref=free_trial"}>
                <styled.FreeTrialLink>{t.start_free_trial_link.text}</styled.FreeTrialLink>
              </Link>
            </styled.ButtonBlock>
          )}
          {lang === "it-it" && (
            <styled.ButtonBlock>
              <MixpanelHelper
                analytics-location={"Pricing V4"}
                analytics-category={"Contact Us"}
                analytics-label={t.plan_button.text}
              >
                <ButtonSecondary to={Route[lang]["about/contact/sales/v2"]}>Contattaci</ButtonSecondary>
              </MixpanelHelper>
              <Link to={exportLocale(lang).pricing.getStarted.to + "?ref=free_trial"}>
                <styled.FreeTrialLink>{t.start_free_trial_link.text}</styled.FreeTrialLink>
              </Link>
            </styled.ButtonBlock>
          )}

          <styled.PackageFeaturesTitle>{t.plan_features_title.text}</styled.PackageFeaturesTitle>
          <styled.PackageFeature>{t.plan_feature_1.text}</styled.PackageFeature>
          <styled.PackageFeature>{t.plan_feature_2.text}</styled.PackageFeature>
          <styled.PackageFeature>{t.plan_feature_3.text}</styled.PackageFeature>
          <styled.PackageFeature>{t.plan_feature_4.text}</styled.PackageFeature>
          <styled.PackageFeature>{t.plan_feature_5.text}</styled.PackageFeature>
          <styled.PackageFeature>{t.plan_feature_6.text}</styled.PackageFeature>
          <styled.PackageFeature>{t.plan_feature_7.text}</styled.PackageFeature>
          <styled.PackageFeature>{t.plan_feature_8.text}</styled.PackageFeature>
          <styled.PackageFeature>{t.plan_feature_9.text}</styled.PackageFeature>
          <styled.PackageFeature>{t.plan_feature_10.text}</styled.PackageFeature>
          <styled.PackageFeature>{t.plan_feature_11.text}</styled.PackageFeature>
          <styled.PackageFeature>{t.plan_feature_12.text}</styled.PackageFeature>
        </styled.PaidPackageBlock>
      </Col>
    );
  };

  const Separator = () => {
    return (
      <styled.SeparatorBlock md={2}>
        <styled.PlusSignBlock>
          <Link to={Route[lang]["pricing/features"]}>
            <styled.PlusCirle>
              <img src={t.plus_image.url} alt={t.plus_image.alt} />
            </styled.PlusCirle>
          </Link>
        </styled.PlusSignBlock>
      </styled.SeparatorBlock>
    );
  };

  const ExhibitorServices = () => {
    return (
      <Col xs={12} md={5}>
        <styled.ExhibitorServicesBlock>
          <styled.PackageImageBlock>
            <img src={t.services_image.url} alt={t.services_image.alt} />
          </styled.PackageImageBlock>
          <styled.PackageTitle>{t.services_title.text}</styled.PackageTitle>
          <styled.PricingWrapper>
            <styled.Pricing>{t.services_subtitle.text}</styled.Pricing>
          </styled.PricingWrapper>
          {lang !== "it-it" && (
            <styled.ButtonBlock>
              <MixpanelHelper
                analytics-location={"Pricing V4"}
                analytics-category={"Build A Plan"}
                analytics-label={t.plan_button.text}
              >
                <ButtonBorderSecondary to={Route[lang]["pricing/build-plan"]}>
                  {t.plan_button.text}
                </ButtonBorderSecondary>
              </MixpanelHelper>
            </styled.ButtonBlock>
          )}

          {lang === "it-it" && (
            <styled.ButtonBlock>
              <MixpanelHelper
                analytics-location={"Pricing V4"}
                analytics-category={"Contact Us"}
                analytics-label={t.plan_button.text}
              >
                <ButtonBorderSecondary to={Route[lang]["about/contact/sales/v2"]}>Contattaci</ButtonBorderSecondary>
              </MixpanelHelper>
            </styled.ButtonBlock>
          )}

          <styled.PackageFeaturesTitle>{t.services_feature_1.text}</styled.PackageFeaturesTitle>
          <styled.ExhibitorFeature>
            {currency === "usd" && t.exhibitors_price_1_usd}
            {currency === "aed" && t.exhibitors_price_1_aed}
            {currency === "eur" && t.exhibitors_price_1_eur}
            {currency === "cad" && t.exhibitors_price_1_cad}
          </styled.ExhibitorFeature>
          <styled.PackageFeaturesTitle>{t.services_feature_2.text}</styled.PackageFeaturesTitle>
          <styled.ExhibitorFeature>
            {currency === "usd" && t.exhibitors_price_2_usd}
            {currency === "aed" && t.exhibitors_price_2_aed}
            {currency === "eur" && t.exhibitors_price_2_eur}
            {currency === "cad" && t.exhibitors_price_2_cad}
          </styled.ExhibitorFeature>
        </styled.ExhibitorServicesBlock>
      </Col>
    );
  };

  return (
    <React.Fragment>
      <Grid>
        <Row center="xs">
          <styled.TitleBlock>
            <Typo2>{t.pricing_header}</Typo2>
          </styled.TitleBlock>
        </Row>
        <SpaceH of={20} />

        <Row center={"xs"}>
          <Col xs={12}>
            <CurrencySwitcher active={currency} onClick={(e) => setCurrency(e.target.id)} />
          </Col>
        </Row>
        <SpaceH of={48} />
        <styled.Packages>
          <Col xs={12} lg={9}>
            <styled.CenterBlock>
              <PaidPackage />
              <Separator />
              <ExhibitorServices />
            </styled.CenterBlock>
            <styled.FeaturesLinkBlock>
              <MixpanelHelper
                analytics-location={"Pricing V4"}
                analytics-category={"See all features"}
                analytics-label={t.all_features_label.text}
              >
                <Link to={Route[lang]["pricing/features"]}>{t.all_features_label.text.toUpperCase()}</Link>
                <styled.ArrowRight src={t.arrow_icon.url} alt={t.arrow_icon.alt} />
              </MixpanelHelper>
            </styled.FeaturesLinkBlock>
          </Col>
        </styled.Packages>
        {(lang === "fr-fr" || lang === "en-us") && (
          <styled.Packages>
            <Col xs={12} lg={8}>
              <TrialPackage />
            </Col>
          </styled.Packages>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Main;

export const query = graphql`
  fragment pricingPackages4 on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainPricingV4 {
          slice_type
          primary {
            pricing_header
            between
            between_price_range_usd
            between_price_range_cad
            between_price_range_eur
            between_price_range_aed
            between_per_attendees
            between_depending_on_your_volume

            exhibitors_price_1_usd
            exhibitors_price_1_aed
            exhibitors_price_1_eur
            exhibitors_price_1_cad

            exhibitors_price_2_usd
            exhibitors_price_2_aed
            exhibitors_price_2_eur
            exhibitors_price_2_cad

            exhibitors_price_3_usd
            exhibitors_price_3_aed
            exhibitors_price_3_eur
            exhibitors_price_3_cad

            services_title {
              text
            }
            free_plan_image {
              url
              alt
            }
            free_plan_title {
              text
            }
            free_plan_subtitle {
              text
            }
            button_get_started {
              text
            }
            free_plan_features_title {
              text
            }
            free_plan_feature_1 {
              text
            }
            free_plan_feature_2 {
              text
            }
            free_plan_feature_3 {
              text
            }
            free_plan_feature_4 {
              text
            }
            free_plan_feature_5 {
              text
            }
            free_plan_feature_6 {
              text
            }
            plan_image {
              url
              alt
            }
            plan_title {
              text
            }
            starting_at_label {
              text
            }
            attendee_label {
              text
            }
            exhibitor_label {
              text
            }
            plan_button {
              text
            }
            start_free_trial_link {
              text
            }
            plan_features_title {
              text
            }
            plan_feature_1 {
              text
            }
            plan_feature_2 {
              text
            }
            plan_feature_3 {
              text
            }
            plan_feature_4 {
              text
            }
            plan_feature_5 {
              text
            }
            plan_feature_6 {
              text
            }
            plan_feature_7 {
              text
            }
            plan_feature_8 {
              text
            }
            plan_feature_9 {
              text
            }
            plan_feature_10 {
              text
            }
            plan_feature_11 {
              text
            }
            plan_feature_12 {
              text
            }
            services_image {
              url
              alt
            }
            services_title {
              text
            }
            services_subtitle {
              text
            }
            services_feature_1 {
              text
            }
            services_feature_2 {
              text
            }
            services_feature_3 {
              text
            }
            plus_image {
              url
              alt
            }
            all_features_label {
              text
            }
            arrow_icon {
              url
              alt
            }

            trial_package_label
            trial_package_title
            trial_package_subtitle
            trial_package_button
            trial_package_comment
          }
        }
      }
    }
  }
`;
