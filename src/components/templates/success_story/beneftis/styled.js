import styled from "styled-components";
import { media } from "../../../utils/style-utils";

export const Icon = styled.i``;

export const Flex = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Picto = styled.img`
  max-width: 70px;
  margin-top: 20px;
  ${media.tablet`
    margin:0;
  `};
`;

export const Title = styled.div`
  margin: 15px 0 15px 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const SubTitle = styled.div`
  color: ${props => props.theme.color.body};
`;
