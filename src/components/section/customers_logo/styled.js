import styled from "styled-components";
import { media } from "../../utils/style-utils";

export const CustomersLogoAnimated = styled.div`
  position: relative;
  overflow: hidden;
`;

export const CustomersLogo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: ${(props) => (props.isCentered === false ? "initial" : "0 auto")};
  align-items: center;
  /* height: ${(props) => (props.crop === "Yes" ? "170px" : "100%")}; */
  overflow: hidden;
  min-height: ${(props) => 2 * props.rowHeight}px;
  ${media.tablet`
    min-height: ${(props) => props.rowHeight}px;
    height:100%;
  `}
`;

export const Scroll = styled.div`
  display: flex;
  width: 1324px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  ${media.tablet`
  margin: 10px 25px 10px 25px;
  `}
  text-align: center;
  img {
    max-width: 120px;
    ${media.tablet`
      max-width:${(props) => (props.logoWidth !== null ? `${props.logoWidth}px` : "120px")};
    `}
    max-height: 90px;
    width: auto;
    height: auto;
  }
`;
