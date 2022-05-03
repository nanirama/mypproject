import styled from "styled-components";
import { Grid, Col, Row } from "react-flexbox-grid";
import { theme } from "../../layout/_config";
import { hex2rgba } from "../../utils/hex2rgba";

export const Description = styled.p`
  /* color: rgb(119, 119, 136);
  font-size: 14px; */
  line-height: 1.2rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.color.body};
`;

export const Title = styled.p`
  color: ${(props) => props.theme.color.secondary};
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  margin-top: 5px;
  margin-bottom: 10px;
  letter-spacing: 0.1px;
`;

export const Block = styled(Grid)`
  width: 100%;
  min-height: 100px;
  display: flex;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
  padding: 16px;
  margin-bottom: 16px;
  &.active,
  &:hover {
    cursor: pointer;
    background-color: ${hex2rgba(theme.color.secondary, 0.08)};
    cursor: pointer;
  }
  &.active ${Title}, &:hover ${Title}, &.active ${Description}, &:hover ${Description} {
    /* color: rgb(38, 47, 61); */
  }
  &.active ${Subtitle}, &:hover ${Subtitle} {
    /* color: ${(props) => props.theme.color.secondary}; */
  }
`;

export const CheckboxBlock = styled.div`
  display: grid;
  justify-content: end;
`;

export const LeftColumn = styled(Col)`
  align-self: center;
`;

export const CenterColumn = styled(Col)`
  display: flex;
  flex-direction: column;
`;

export const RightColumn = styled(Col)`
  align-self: center;
`;

export const TopRow = styled.div`
  /* display: flex;
  flex-flow: column; */
  /* margin-bottom: 8px; */
`;

export const StyledRow = styled(Row)`
  justify-content: space-between;
  width: 100%;
`;
