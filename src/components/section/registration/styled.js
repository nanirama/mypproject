import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { media } from "../../utils/style-utils";

export const HeaderBlock = styled(Row)`
  // width: 60px;
  height: 690px;
  background-color: #262f3d;
`;

export const BannerBlock = styled(Row)`
  background-color: #00cc88;
  p {
    margin: 40px 80px;
    color: white;
    font-size: 20px;
    text-align: center;
  }
`;

export const ClientLogotypesBlock = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const ModulesBlock = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const ClientLogotypesLogos = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  img {
    width: 200px;
    height: 80px;
    border: 1px solid grey;
    margin: 10px;
  }
`;

export const TableWrapper = styled.table`
  max-width: 1080px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  overflow-x: auto;

  tr {
    display: none;
  }

  tr:first-child {
    display: flex;
  }

  ${media.tablet`
    margin-top: 40px;
    tr {
      display: flex;
    }
  `}
`;

export const Table = styled.tbody`
  /* border-radius: 16px; */
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;

  ${media.phone`
    box-shadow: unset;
  `}

  ${media.tablet`  
    /* box-shadow: 0 0 0 1px rgb(224, 224, 224); */
    box-shadow: 0 0 0 1px rgb(224 224 224);
    
    tr:last-child td:first-child {
      /* border-bottom-left-radius: 16px; */
    }

    tr:last-child td:last-child {
      /* border-bottom-right-radius: 16px; */
    }

    tr:last-child {
      border-bottom: 0;
    }
  `}
`;

export const Tr = styled.tr`
  width: 100%;
  display: flex;
  overflow: hidden;
  display: flex;
  ${(props) => (props.height ? `height: ${props.height}px;` : null)}

  ${media.phone`
    border: 0;
    flex-direction: column;
  `}

  ${media.tablet`
    border-bottom: 1px solid rgb(224, 224, 224);
    flex-direction: row;
  `}
`;

export const Td = styled.td`
  border-right: 1px solid rgb(224, 224, 224);
  display: ${(props) => (props.mobileHide ? "none" : "flex")};
  ${media.tablet`
    display:flex;
  `}
  flex-flow: column;
  padding: 20px 30px;
  align-items: ${(props) => props.align || "center"};
  /* justify-content: ${(props) => props.justify || "center"}; */

  &:last-child {
    border-right: 0;
  }
  background-color: ${(props) => (props.color === "green" ? "#00cc88" : "#fff")};

  ${media.phone`
    width: 100%;
  `}

  ${media.tablet`
    width: ${(props) => (props.width ? props.width : 34)}%;
  `}
`;

export const PlanHeaderName = styled.p`
  width: 272px;
  // height: 60px;
  color: rgb(38, 47, 61);
  font-size: 24px;
  font-weight: 900;
`;

export const PlanDesc = styled.div`
  ${media.tablet`
  line-height: 1.3rem;
  `}
`;

export const PlanRow = styled.div`
  display: flex;
  width: 100%;
  img {
    margin-right: 10px;
  }
  margin-bottom: 10px;
  justify-content: ${(props) => (props.center ? "center" : "left")};
  /* min-height: ${(props) => (props.height ? `${props.height}px` : "none")}; */
`;

export const Tt = styled.tr`
  width: 100%;
  background-color: rgb(250, 250, 250);
  display: flex;
  padding: 16px;
  align-items: center;
`;

export const H2 = styled.h2`
  color: rgb(38, 47, 61);
  font-size: ${(props) => (props.fs ? props.fs : 24)}px;
  font-weight: 900;
  text-align: ${(props) => (props.align ? props.align : "center")};
  ${(props) => (props.mt ? `margin-top: ${props.mt}px;` : null)}
  ${(props) => (props.mr ? `margin-right: ${props.mr}px;` : null)}
  ${(props) => (props.mb ? `margin-bottom: ${props.mb}px;` : null)}
`;

export const Icon = styled.img`
  margin-right: 16px;
  height: 24px;
  width: 24px;
`;
