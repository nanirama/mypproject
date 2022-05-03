import styled from "styled-components";
import { media } from "../../utils/style-utils";
import Icon2 from "../../icon";

export const FeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  ${media.tablet`
    margin:0;
    justify-content: space-around;
  `};
`;

export const ImageZoom = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;

  ${media.tablet`
    max-width:${props => props.zoom}% !important;
  `};
`;

export const Item = styled.div`
  width: 190px;
  ${media.tablet`
    width:300px;
  `} flex: 1;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

// export const Icon = styled.div`
//   font-size: ${props => props.theme.pictoSize.picto1};
//   width: 60px;
//   height: 60px;
//   border-radius: 50px;
//   box-shadow: ${props => props.theme.shadow.primary};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   &:hover {
//     /* font-size: 30px; */
//   }
// `;

export const Screenshots = styled.div``;

export const TabsWrapper = styled.div`
  .react-tabs__tab-panel {
    min-height: 620px;
    opacity: 0;
    display: none;
    margin-top: 50px;
  }

  .react-tabs__tab-panel--selected {
    opacity: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .react-tabs__tab {
    margin-bottom: 50px;
  }

  .react-tabs__tab:nth-last-child(-n + 2) {
    ${media.tablet`
    margin: 0;
    `};
  }

  .react-tabs__tab--selected > ${Item} {
    opacity: 1;
  }

  .react-tabs__tab--selected ${Icon2} {
    background: ${props => props.theme.color.primary};
    width: 60px;
    height: 60px;
    border-radius: 50px;
    box-shadow: ${props => props.theme.shadow.primary};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
