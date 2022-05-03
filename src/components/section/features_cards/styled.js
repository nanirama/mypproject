import styled, { css } from "styled-components";
import { media } from "../../utils/style-utils";

export const Wrapper = styled.div`
  padding: 150px 0 50px 0;
`;

export const FeaturesListTitle = styled.div`
  ${media.tablet`
  display:none;
  `};
  font-size: 28px;
  margin-left: 8px;
  margin-bottom: 20px;
`;

export const Question = styled.span`
  font-size: 0.9rem;
  margin-left: 10px;
  color: ${(props) => props.theme.color.body};
  &:hover {
    cursor: pointer;
  }
  /* text-decoration: underline; */
  /* background: red;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  padding: 4px;
  display: block; */
`;

export const TooltipContent = styled.div`
  max-width: 290px;
  font-size: 0.8rem;
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

export const TableWrapper = styled.table`
  max-width: 1280px;
  width: 100%;

  overflow-x: auto;

  ${media.phone`
    tr {
      display: none;
    }

    tr:first-child {
      display: flex;
    }
  `}

  ${media.tablet`
    tr {
      display: flex;
    }
  `}
`;

export const Table = styled.tbody`
  border-radius: 16px;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;

  ${media.phone`
    box-shadow: unset;
  `}

  ${media.tablet`  
    box-shadow: 0 0 0 1px rgb(224, 224, 224);
    
    tr:last-child td:first-child {
      border-bottom-left-radius: 16px;
    }

    tr:last-child td:last-child {
      border-bottom-right-radius: 16px;
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
  display: flex;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};

  &:last-child {
    border-right: 0;
  }

  ${media.phone`
    width: 100%;
  `}

  ${media.tablet`
    width: ${(props) => (props.width ? props.width : 20)}%;
  `}
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 25px 16px 25px;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  /* border: ${(props) => (props.border ? "1px solid rgb(0, 204, 136)!important" : "none")}; */
  /* background-color: ${(props) => (props.border ? props.theme.color.secondary : "")}; */
  color: ${(props) => (props.border ? props.theme.color.secondary : "")};

  ${(props) =>
    props.border &&
    css`
      h2,
      p {
        color: ${(props) => props.theme.color.secondary};
      }
    `}

  //&:hover {
  //  background-color: rgb(0, 204, 136);
  //
  //  button {
  //    padding: 14px 0;
  //    border: 0;
  //    color: rgb(38, 47, 61);
  //  }
  //}

  ${media.phone`
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgb(224, 224, 224);
    margin: 0 16px 24px 16px;
  `}

  ${media.tablet`
    border-radius: unset;
    border: 0;
    margin: 0;
  `}
`;

export const AnnualWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 34px;
  padding-left: 25px;
  background-color: rgb(250, 250, 250);
  p {
    color: rgb(38, 47, 61);
  }
`;

export const Image = styled.img`
  max-width: 24px;
  max-height: 24px;
  margin-right: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Icon = styled.img`
  margin-right: 16px;
  // ${(props) => (props.color ? `color: ${props.color};` : null)}
  height: 24px;
  width: 24px;
`;

export const Tt = styled.tr`
  width: 100%;
  background-color: rgb(250, 250, 250);
  display: flex;
  padding: 16px;
  align-items: center;
`;

export const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  ${(props) => (props.mt ? `margin-top: ${props.mt}px` : null)}
  ${(props) => (props.mb ? `margin-bottom: ${props.mb}px` : null)}
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

export const P = styled.p`
  color: ${(props) => (props.color ? props.color : "rgb(38, 47, 61)")};
  font-size: ${(props) => (props.fs ? props.fs : 16)}px;
  font-weight: normal;
  text-align: ${(props) => (props.align ? props.align : "left")};
  ${(props) => (props.mt ? `margin-top: ${props.mt}px;` : null)}
  ${(props) => (props.mb ? `margin-bottom: ${props.mb}px;` : null)}
  ${(props) => (props.width ? `width: ${props.width}px;` : null)}
  ${(props) => (props.ph ? `padding: ${props.ph}px 0;` : null)}
  ${(props) => (props.ml ? `margin-left: ${props.ml}px` : null)}
  ${(props) => (props.padding ? `padding: ${props.padding}` : null)}
  ${(props) => (props.lh ? `line-height: ${props.lh}` : null)}
  ${(props) =>
    props.active &&
    `
    font-weight: 600;
    color: #262f3d;
    border-left: 2px solid #00cc88;
    padding: 5px 0 5px 12px;
  `}
`;

export const A = styled.a`
  display: block;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : "#00cc88")};
  text-decoration: none;
  margin-left: ${(props) => (props.ml ? props.ml : 8)}px;
  text-align: ${(props) => (props.align ? props.align : "left")};
  padding: ${(props) => (props.padding ? props.padding : 0)};
  cursor: pointer;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: flex-end;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  position: relative;
  margin-left: 8px;
  color: ${(props) => props.theme.color.secondary};
  a {
    font-size: 16px;
    /* color: ${(props) => (props.color ? props.color : props.theme.color.secondary)}; */
    color: ${(props) => props.theme.color.secondary};
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Label = styled.span`
  color: rgb(38, 47, 61);
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  text-align: center;
  padding: 4px;
  background-color: rgb(132, 224, 245);
`;

export const Button = styled.button`
  border-radius: 8px;
  width: 100%;
  color: rgb(93, 118, 139);
  text-transform: uppercase;
  margin: 16px 0;
  padding: 12px 0;
  font-size: 16px;
  ${(props) => (props.mw ? `max-width: ${props.mw}` : null)};
  color: ${(props) => (props.withPrice ? "rgb(93, 118, 139)" : "rgb(38, 47, 61)")};
  font-weight: bold;
  ${(props) => (props.withPrice ? "border: 2px solid rgb(93, 118, 139)" : "border: 2px solid rgb(132, 224, 245)")};
  background-color: ${(props) => (props.withPrice ? "rgb(255, 255, 255)" : "rgb(132, 224, 245)")};
`;

export const CustomizeLink = styled.span`
  color: rgb(93, 118, 139);
  font-size: 16px;
  text-align: center;
`;

export const CheckBoxWrapper = styled.form`
  position: relative;
  height: 14px;
  width: 30px;
  margin-top: 3px;
  margin-right: 7px;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 14px;
  border-radius: 8px;
  background: rgb(144, 144, 144);
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 1px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 30px;
  height: 14px;
  margin: 0;
  &:checked + ${CheckBoxLabel} {
    background: rgb(0, 204, 136);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin-left: 17px;
      transition: 0.2s;
    }
  }
`;

export const CurrencyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const CardSectionBlock = styled.div`
  display: flex;
  flex-flow: row;
  flex-direction: column;

  ${media.tablet`
    flex-direction:row;`};

  justify-content: space-between;
  width: 100%;
`;

export const Border = styled.div`
  display: none;
  ${media.tablet`
    display:block;
  `};
  display: block ruby;
  overflow: hidden;
  width: 10px;
  height: 80px;
  position: relative;
  top: 36px;

  &:after {
    content: "";
    display: block;
    margin-left: -10px;
    width: 10px;
    border-radius: 12px / 55px;
    box-shadow: 0 0 1px grey;
  }
  &:before {
    content: "";
    display: block;
    margin-left: 10px;
    width: 10px;
    height: 100%;
    border-radius: 12px / 55px;
    box-shadow: 0 0 1px grey;
  }
`;

export const CardContainerGrey = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  /* padding: 0 24px; */
  /* margin-bottom:35px; */
  flex-flow: row;

  width: 100%;
  max-width: unset;
  /* margin: 0 16px 24px 16px; */

  ${media.tablet`
    /* padding:0; */
    /* margin: unset; */
    max-width: ${(props) => (props.mw ? props.mw : 325)}px;
    width: ${(props) => (props.mw ? props.mw : 100)}%;  
    margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  `}
`;

export const CardContainer = styled.div`
  border-radius: 16px;
  border: 1px solid rgb(224, 224, 224);
  display: flex;
  flex-direction: column;
  background: #fff;
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin: 20px;
  width: 100%;
  /* max-width: unset; */
  /* margin: 0 16px 24px 16px; */

  ${media.tablet`
    margin: unset;
    max-width: ${(props) => (props.mw ? props.mw : 325)}px;
    width: ${(props) => (props.mw ? props.mw : 100)}%;  
    margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  `}
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: 64px;
`;

export const CustomizeBtn = styled.button`
  background: rgb(0, 204, 136);
  border-radius: ${(props) => (props.r ? props.r : 8)}px;
  border: 0;
  ${(props) => (props.center ? "margin: 0 auto;" : null)};
  height: ${(props) => (props.height ? props.height : 55)}px;
  width: ${(props) => (props.width ? props.width : 251)}px;
  color: rgb(255, 255, 255);
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  ${(props) => (props.mt ? `margin-top: ${props.mt}px` : null)};
  ${(props) => (props.mw ? `max-width: ${props.mw}px` : null)};
`;

export const ProgressWrapper = styled.div`
  margin-top: 16px;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  height: 8px;
`;

export const ProgressSegment = styled.div`
  height: 100%;
  width: 100%;
  margin-right: 4px;
  background: ${(props) => (props.filled ? "rgb(0, 204, 136)" : "rgba(0, 204, 136, 0.1)")};

  &:last-child {
    margin-right: 0;
  }
`;

export const RangeWrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 2px;
`;

export const RangeProgress = styled.div`
  height: 0px;
  border-radius: 2px;
  border-top: 4px dashed ${(props) => props.color};
`;

export const InputRange = styled.input.attrs(() => ({
  type: "range",
}))`
  width: 100%;
  height: 14px;
  margin-top: -5px;
  z-index: 1;
  background-color: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #00cc88;
  }
`;

export const InputNumber = styled.input.attrs(() => ({
  type: "number",
}))`
  border: 1px solid rgb(224, 224, 224);
  width: 72px;
  height: 32px;
  color: #686868;
  font-weight: 400px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  padding-left: 10px;

  &:focus {
    color: black;
    font-weight: 600;
  }
`;

export const RangeContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 570px;
`;

export const AccordeonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 630px;
  margin: 0 auto;

  ${media.phone`
    padding: 16px;
  `}

  ${media.tablet`
    padding: 0;
  `}
`;

export const AccordeonValue = styled.div`
  display: flex;
  flex-direction: column;

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const AccordeonValueWrapper = styled.div`
  height: ${(props) => (props.hidden ? 0 : "auto")};
  transition: max-height 1s ease;
  max-height: auto;
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const AccordeonNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e0e0e0;
  height: fit-content;
  max-width: 270px;
`;

export const AccordeonNavWrapper = styled.div`
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;

  ${media.phone`
    display: none;
  `}

  ${media.tablet`
    display: flex;
  `}
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
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
