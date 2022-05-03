import styled from "styled-components";
import { Col, Row } from "react-flexbox-grid";
import { media } from "../../../../utils/style-utils";

export const ArrowRight = styled.img`
  margin: 1px 0 0 12px;
`;

export const ButtonBlock = styled.div`
  a {
    text-align: center;
  }
  height: 62px;
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    height: 82px;
  }
`;

export const ExhibitorServicesBlock = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 520px;
  @media screen and (min-width: 880px) and (max-width: 991px) {
    margin-right: 12px;
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    margin-right: 18px;
  }
  @media screen and (min-width: 1200px) {
    margin-right: 34px;
  }
`;

export const ExhibitorFeature = styled.p`
  color: rgb(119, 119, 136);
  font-size: 1rem;
  text-align: center;
`;

export const FeaturesLinkBlock = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  a {
    color: ${(props) => props.theme.color.secondary};
    letter-spacing: 0.5px;
    font-weight: 700;
    font-size: 0.9rem;
  }
  margin: 20px 0;
  @media screen and (min-width: 768px) {
    margin: 0;
    top: -40px;
  }
`;

export const TrialPackageBlock = styled.div`
  border: 1px solid #e5e5e5;
  background-color: rgb(38, 47, 61);
  border-radius: 4px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 24px;
`;

export const TrialPackageLabel = styled.p`
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
`;

export const TrialPackageTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  padding: 12px 0;
  text-align: center;
`;

export const TrialPackageSubtitle = styled.p`
  /* font-size: 16px; */
  padding: 0 30px;
  line-height: 1.3;
  color: #fff;
  text-align: center;
`;

export const TrialPackageComment = styled.p`
  font-size: 14px;
  color: #fff;
  text-align: center;
`;

export const Packages = styled(Row)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  ${media.tablet`
     margin: 0;
  `};
`;

export const PackageImageBlock = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 20px;
  img {
    max-height: 68px;
  }
`;

export const PackageFeature = styled.p`
  margin-top: 16px;
  color: rgb(119, 119, 136);
  font-size: 1rem;
  text-align: center;
`;

export const PackageFeaturesTitle = styled.p`
  margin-top: 24px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.color.secondary};
  text-align: center;
  font-weight: bold;
`;

export const PaidPackageBlock = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 600px;
  ${media.tablet`
    min-height: 610px;
  `};
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 880px) and (max-width: 991px) {
    margin-left: 12px;
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    margin-left: 18px;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 34px;
  }
`;

export const PaidPackageSubtitle2 = styled.div`
  color: ${(props) => props.theme.color.secondary};
  font-size: 1.2rem;
  font-weight: bold;
  position: relative;
  text-align: center;
`;

export const PlusSignBlock = styled.div`
  height: 52px;
  width: 30px;
  position: relative;
  background: white;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    top: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-top: 118px;
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    margin-top: 128px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 130px;
  }
`;

export const PlusCirle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding-right: 17px;
  padding-left: 17px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12),
    0px 1px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const CenterBlock = styled(Row)`
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.color.secondary};
  border-radius: 4px;
  padding: 24px;
  margin-left: 0;
  margin-right: 0;
  @media screen and (max-width: 992px) {
    padding: 10px;
    margin: 0;
  }
`;

export const SeparatorBlock = styled(Col)`
  background-image: linear-gradient(${(props) => props.theme.color.secondary} 50%, rgba(255, 255, 255, 0) 50%);
  background-position: center;
  background-size: 1px 20px;
  background-repeat: repeat-y;
  position: relative;
  top: -40px;
  display: flex;
  justify-content: center;
`;

export const TitleBlock = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.phone`
     margin: 0px 16px;
  `};
`;

export const BetweenDepending = styled.div`
  color: rgb(119, 119, 136);
  font-size: 0.9rem;
  text-align: center;
  /* margin: 5px 0 20px 0; */
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 18px 0;
  height: 40px;
  ${media.desktop`
      width: 100%;
  `}
`;

/* V2 */

export const PackageTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: rgb(38, 47, 61);
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  height: 52px;
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    height: 90px;
  }
`;

export const Pricing = styled.div`
  color: rgb(86, 86, 116);
  font-size: 1.4rem;
  font-weight: normal;
`;

export const FreeTrialLink = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: normal;
  text-decoration: underline;
  margin-top: 10px;
`;
