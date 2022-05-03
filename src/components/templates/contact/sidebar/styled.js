import styled from "styled-components";
import { media } from "../../../utils/style-utils";

export const Icon = styled.i``;

export const StyledSidebar = styled.div`
  ${media.tablet`
        margin-left:50px;
    `};
`;

export const Location = styled.h3`
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

export const ContactInfo = styled.div`
  margin-bottom: 10px;
  display: flex;
  font-size: 1rem;
  color: ${props => props.theme.color.body};
  span {
    margin-right: 10px;
    display: block;
  }
`;
