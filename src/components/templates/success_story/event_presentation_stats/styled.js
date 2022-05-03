import styled from "styled-components";
import { media } from "../../../utils/style-utils";

export const Title = styled.div`
  margin:15px 0;
  ${media.tablet`
    margin: 30px 0;
  `}
  font-size: 1.1rem;
  font-weight: 600;
  //color: ${props => props.theme.color.body};
`;

export const SubTitle = styled.div`
  color: ${props => props.theme.color.body};
  margin-bottom: 40px;
  ${media.tablet`
    margin-bottom: 0;
  `};
`;

export const Picto = styled.img`
  max-height: 70px;
  width: auto;
`;
