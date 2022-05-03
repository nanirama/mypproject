import styled from "styled-components";
import { Col, Grid } from "react-flexbox-grid";
import { media } from "./style-utils";

export const GridLarge = styled(Grid)`
  @media only screen and (min-width: 1600px) {
    /* width: 1540px; */
  }
`;

export const ColHideMobile = styled(Col)`
  display: none;
  align-items: flex-start;
  ${media.tablet`
  display: flex;
  `}
`;

export const ColEnd = styled(Col)`
  display: flex;
  justify-content: flex-end;
`;

export const ColFlex = styled(Col)`
  display: flex;
`;

export const ColMiddle = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ColOrder = styled(Col)`
  order: ${props => props.order};
`;

export const GridMedium = styled(Grid)`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
`;
