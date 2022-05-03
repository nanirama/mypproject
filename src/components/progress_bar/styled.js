import styled from "styled-components";
import { theme } from "../layout/_config";
import { hex2rgba } from "../utils/hex2rgba";

export const Block = styled.div`
  display: flex;
`;

export const Element = styled.div`
  background-color: ${hex2rgba(theme.color.secondary, 0.1)};
  height: 8px;
  width: 45px;
  margin-right: 4px;
`;

export const ElementActive = styled.div`
  background-color: ${props => props.theme.color.secondary};
  height: 8px;
  width: 45px;
  margin-right: 4px;
`;

export const LeftElement = styled.div`
  background-color: ${props => props.theme.color.secondary};
  border-radius: 4px 0px 0px 4px;
  height: 8px;
  width: 45px;
  margin-right: 4px;
`;

export const RightElement = styled.div`
  background-color: ${hex2rgba(theme.color.secondary, 0.1)};
  border-radius: 0px 4px 4px 0px;
  height: 8px;
  width: 45px;
`;

export const RightElementActive = styled.div`
  background-color: ${props => props.theme.color.secondary};
  border-radius: 0px 4px 4px 0px;
  height: 8px;
  width: 45px;
`;
