import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

import { media } from "../../utils/style-utils";

export const OffsetTop = styled.div`
  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
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

export const StepsWrapper = styled.div`
  margin-top: 141px;

  ${media.phone`
    padding: 0px 16px;
  `}

  ${media.tablet`
    padding: 0;
  `};
`;

export const P = styled.p`
  color: rgb(93, 118, 139);
  font-size: ${(props) => (props.fs ? props.fs : 12)}px;
  font-weight: ${(props) => (props.fw ? props.fw : 400)};
  text-transform: ${(props) => (props.transform ? props.transform : "initial")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  color: ${(props) => (props.color ? props.color : "#505050")};
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
`;

export const H2 = styled.h2`
  font-size: ${(props) => (props.fs ? props.fs : 16)}px;
  font-weight: bold;
  text-align: ${(props) => (props.align ? props.align : "center")};
  color: ${(props) => (props.color ? props.color : "#505050")};
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
`;

export const Divider = styled.div`
  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
  height: ${(props) => (props.height ? props.height : 1)}px;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
`;

export const PlanCardWrapper = styled.div`
  max-width: 640px;
  width: 100%;
  background-color: #fafafa;
  padding: 26px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  margin: 24px 0 32px 0;
`;

export const PriceDate = styled.span`
  color: #262f3d;
  font-size: 14px;
`;

export const ServiceCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  img {
    max-width: 148px;
    max-height: 68px;
    background-color: red;
  }

  div {
    height: 100%;
    margin: 0 16px;
  }
`;

export const CustomCol = styled(Col)`
  ${media.phone`
    margin-bottom: 30px;
  `}

  ${media.tablet`
    margin-bottom: 0px;
  `}
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  ${media.phone`
    width: 100%;
    padding: 0;
  `}

  ${media.tablet`
    max-width: calc(100% - 370px);
  `}
`;
