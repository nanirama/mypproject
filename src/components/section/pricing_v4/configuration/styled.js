import styled from "styled-components";
import { media } from "../../../utils/style-utils";
import { Input } from "../../../form/input";
import { hex2rgba } from "../../../utils/hex2rgba";
import { Typo3, Typo4, Typo5 } from "../../../typographie";
import { theme } from "../../../layout/_config";
import { Row, Col } from "react-flexbox-grid";

export const ErrorEventFormat = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  /* color: ${(props) => props.theme.color.error}; */
`;

export const Helper = styled.i`
  margin-left: 5px;
  /* color: rgba(0, 17, 102, 0.16); */
  font-size: 1rem;
`;

export const TooltipContent = styled.div`
  max-width: 290px;
  font-size: 0.8rem;
  text-align: left;
  line-height: 1rem;
  width: 100%;
  p {
    margin: 10px 0;
  }
  ul {
    list-style: circle;
    padding-left: 20px;
    margin-bottom: 10px;
  }
  li {
  }
  a {
    text-decoration: underline;
    color: #fff;
    font-weight: bold;
  }
`;

export const ColRelative = styled(Col)`
  position: relative;
`;
export const ArrowIcon = styled.img`
  fill: #678098;
  width: 20px;
  margin: 8px 16px 0 0;
  cursor: pointer;
`;

export const CheckboxBlock = styled.div`
  display: grid;
  justify-content: end;
`;

export const Contactlink = styled.div`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1px;
  color: #678098;
  font-weight: 600;
  text-transform: uppercase;
`;

export const CurrencyLabel = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 600;
  &.active {
    color: ${(props) => props.theme.color.secondary};
  }
  cursor: pointer;
`;

export const CurrencySign = styled.p`
  margin: 0 1px;
`;

export const CurrencySwitcherBlock = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;

export const HLine = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #e5e5e5;
  margin: 1em -8px 1em 0;
  padding: 0;
  width: 100%;
`;

export const HLine2 = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #e5e5e5;
  padding: 0;
  margin-top: 14px;
  width: 100%;
`;

export const HLine3 = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #e5e5e5;
  padding: 0;
  margin-top: 36px;
  margin-bottom: 24px;
  width: 100%;
`;

export const LeftColumn = styled(Col)`
  ${media.phone`
     padding: 0px 16px;
  `};
  @media only screen and (min-width: 767px) {
    padding-right: 40px;
  }
`;

export const PackageDescription = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.color.body};
`;

export const PackageOptionImage = styled.img`
  max-height: 60px;
`;

export const PackageOptionTitle = styled.p`
  color: rgb(86, 86, 116);
  text-align: center;
  font-size: 0.9rem;
  margin-top: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-height: 36px; */
  margin-bottom: 35px;
  ${media.tablet`
    margin-bottom: ${(props) => (props.firstLine ? "30px" : "0")};
  `}
`;

export const PackageTitle = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color.secondary};
`;

export const PackageSubtitle = styled.p`
  font-size: 1rem;
  margin-top: 5px;
  margin-bottom: 10px;
  letter-spacing: 0.1px;
`;

export const Package = styled.div`
  border: 1px solid rgb(229, 229, 229);
  border-radius: 3px;
  padding: 32px;

  &.active {
    /* padding: 16px 32px 0 32px; */
  }
  &.active,
  &:hover {
    cursor: pointer;
    background-color: ${hex2rgba(theme.color.secondary, 0.08)};
  }
  &.active ${PackageTitle}, &:hover ${PackageTitle} {
    /* color: rgb(38, 47, 61); */
  }
  &.active ${PackageSubtitle}, &:hover ${PackageSubtitle} {
    /* color: ${(props) => props.theme.color.secondary}; */
    /* margin-bottom: 8px; */
  }
  &.active ${PackageDescription}, &:hover ${PackageDescription} {
    /* color: rgb(38, 47, 61); */
  }
`;

export const PackageBlock = styled.div`
  /* display: flex;
  flex-flow: column; */
  &:hover {
    cursor: pointer;
  }
`;

export const PackageHeadTop = styled.div`
  /* display: flex;
  flex-flow: column; */
`;

export const AttendeesVolumeGrey = styled.div`
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  background: rgba(86, 86, 116, 0.1);
  border-radius: 5px;
  /* height: 30px; */
  font-size: 18px;
  padding: 10px 20px;
  letter-spacing: 0.1px;
  text-align: center;
  /* font-weight: bold; */
  ${media.tablet`
    float: right;
    margin-left:0;
    margin-right:0;
    /* margin-left: 20px; */
    margin-top: -11px;
  `};
`;

export const PriceInGrey = styled.div`
  display: flex;
  background: rgba(86, 86, 116, 0.1);
  border-radius: 2px;
  /* height: 30px; */
  width: fit-content;
  float: right;
  padding: 3px 11px;
  text-align: right;
  color: ${(props) => props.theme.color.body};
  font-size: 1rem;
`;

export const PriceItem = styled(Typo5)`
  /* color: rgb(119, 119, 136); */
`;

export const PriceItemDescription = styled(Typo5)`
  /* color: rgb(119, 119, 136); */
  margin-left: 10px;
  font-weight: 200;
`;

export const PriceItemsCol = styled(Col)`
  display: inline-flex;
`;

export const PriceRow = styled(Row)`
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PriceTitle = styled(Typo4)`
  color: ${(props) => props.theme.color.secondary};
  font-weight: bold;
`;

export const PriceTotal = styled(Typo4)`
  color: rgb(86, 86, 116);
  font-weight: bold;
  width: fit-content;
  float: right;
`;

export const RigthColumnContainer = styled.div`
  border: 1px solid #e5e5e5;
  /* position: fixed; */
  /* top: 100px; */
  border-radius: 4px;
  padding: 24px;
  margin: 20px 0;
  /* max-width: 378px; */
  width: 100%;
  ${media.tablet`
    margin:0;
    padding-right: 8px;

    &.fixed {
      position: fixed;
      top: 100px;
    }
    &.fixed-bottom {
      position: absolute;
      bottom: 0;
    }
  `};
`;

export const ScaleInput = styled(Input)`
  margin-top: 50px;
  ${media.tablet`
    width:150px;
    float:right;
    margin:-10px 0 0 0;
  `}

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  /* @media only screen and (max-width: 576px) {
    margin-top: 16px;
    float: left;
    width: 100%;
  }
  width: 100px;
  float: right;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  } */
`;

export const SeparatorWithLabel = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin: 32px 0;
  p {
    color: rgb(86, 86, 116);
    font-size: 22px;
    font-weight: bold;
    margin: 0 16px;
  }
`;

export const StyledRow = styled(Row)`
  /* justify-content: space-between; */
`;

export const StyledTypo3 = styled(Typo3)`
  color: ${(props) => props.theme.color.secondary};
  font-weight: 600;
  line-height: 30px;
`;

export const StyledTypo4 = styled(Typo4)`
  font-weight: bold;
`;

export const StyledTypo4Green = styled(Typo4)`
  font-weight: bold;
  color: ${(props) => props.theme.color.secondary};
`;

export const StyledTypo5 = styled(Typo5)`
  color: rgb(119, 119, 136);
`;

export const SubtitleBlock = styled(Col)`
  margin: 0px 16px;
`;

export const TextInGreen = styled.div`
  /* display: flex; */
  background: ${(props) => props.theme.color.secondary};
  border-radius: 5px;
  width: fit-content;
  padding: 6px 10px;
  font-size: 14px;
  text-transform: uppercase;
  text-align: right;
  color: #ffffff;
  margin: 14px auto;
  letter-spacing: 2px;
`;

export const TitleBlock = styled(Col)`
  padding-top: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.phone`
     margin: 0px 16px;
  `};
`;
