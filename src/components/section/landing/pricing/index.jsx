import React from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import { media } from "../../../utils/style-utils";

export const PackageWrapper = styled.div`
  max-width: 880px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  ${media.tablet`
    flex-direction:row;
  `}
`;
export const PackageItem = styled.div`
  padding: 20px 10px;
  flex: 1;
  margin: 20px;
  border: 1px solid ${props => props.theme.color.border};
  text-align: center;
`;

export const PackageTitle = styled.div`
  font-size: ${props => props.theme.fontSize.typo4};
  font-weight: bold;
  ${media.tablet`
    /* height: 50px; */
  `}
`;

export const PackagePrice = styled.div`
  margin-top: 10px;
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.color.secondary};
`;

export const PackageWrapperPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PackageCurrency = styled.div`
  /* margin-top: 10px; */
  margin: 0 5px;
  font-size: ${props => props.theme.fontSize.typo4};
  color: ${props => props.theme.color.secondary};
`;

export const FeatureListWrapper = styled.div``;
export const FeatureListTitle = styled.div`
  text-align: center;
  margin: 20px 0;
  font-size: ${props => props.theme.fontSize.typo4};
  font-weight: bold;
`;
export const FeatureItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FeatureItem = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  /* width: 285px; */
  margin-bottom: 20px;
  span {
    color: ${props => props.theme.color.body};
  }
  i {
    margin-right: 10px;
    color: ${props => props.theme.color.secondary};
  }
`;

export default ({ ...props }) => (
  <React.Fragment>
    <Grid>
      <Row>
        <Col xs={12}>
          <PackageWrapper>
            {props.data.items.map(item => (
              <PackageItem>
                <PackageTitle>{item.package_name}</PackageTitle>
                <PackageWrapperPrice>
                  {props.lang === "en-us" && <PackageCurrency>{item.package_currency}</PackageCurrency>}
                  <PackagePrice>{item.package_price}</PackagePrice>
                  {props.lang === "fr-fr" && <PackageCurrency>{item.package_currency}</PackageCurrency>}
                </PackageWrapperPrice>
              </PackageItem>
            ))}
          </PackageWrapper>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FeatureListWrapper>
            <FeatureListTitle>{props.data.primary.feature_title}</FeatureListTitle>
            <FeatureItemWrapper>
              <FeatureItem>
                <i className="icons8-ok" /> {props.data.primary.feature_1}
              </FeatureItem>
              <FeatureItem>
                <i className="icons8-ok" /> {props.data.primary.feature_2}
              </FeatureItem>
              <FeatureItem>
                <i className="icons8-ok" /> {props.data.primary.feature_3}
              </FeatureItem>
              <FeatureItem>
                <i className="icons8-ok" /> {props.data.primary.feature_4}
              </FeatureItem>
              <FeatureItem>
                <i className="icons8-ok" /> {props.data.primary.feature_5}
              </FeatureItem>
              <FeatureItem>
                <i className="icons8-ok" /> {props.data.primary.feature_6}
              </FeatureItem>
            </FeatureItemWrapper>
          </FeatureListWrapper>
        </Col>
      </Row>
    </Grid>
  </React.Fragment>
);

export const query = graphql`
  fragment landingPricingFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainLandingPricing {
          slice_type
          primary {
            feature_title
            feature_1
            feature_2
            feature_3
            feature_4
            feature_5
            feature_6
          }
          items {
            package_name
            package_price
            package_currency
          }
        }
      }
    }
  }
`;
