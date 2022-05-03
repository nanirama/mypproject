import styled from "styled-components";
import { media } from "../../../utils/style-utils";

export const Desktop = styled.div`
  display: none;
  ${media.desktop`
    display:block;
  `}
  img {
    max-width: 250px;
    width: 100%;
  }
`;

export const Mobile = styled.div`
  display: block;
  ${media.desktop`
    display:none;
  `}
`;

export const MobileDownload = styled.img`
  ${media.desktop`
  max-width: 130px;
  `}
`;

export const StyledStore = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin-left: 10px;
    margin-right: 10px;
    max-height: 60px;
  }
`;

export const Icon = styled.img`
  max-width: 110px;
  border: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 0px 4.5px 6.5px 0 rgba(181, 197, 213, 0.3);
`;

export const StyledCustomer = styled.h1`
  font-weight: 400;
  margin: 20px 0 20px 0;
  font-size: 1.4rem;
  color: ${props => props.theme.color.body};
`;

export const StyledLinkWebApp = styled.a`
  display: block;
  font-size: 1rem;
  margin-top: 20px;
  color: ${props => props.theme.color.body};
  text-decoration: underline;
`;

export const StyledCodeIntro = styled.div`
  color: ${props => props.theme.color.body};
  font-size: 1.1rem;
`;

export const StyledCode = styled.div`
  font-weight: 800;
  padding: 20px 80px;
  color: ${props => props.color};
  margin: 20px 0 20px 0;
  font-size: 22px;
  border: 3px solid ${props => props.color};
  border-radius: 5px;
`;

export const IconCustom = styled.img`
  max-width: 110px;
  border: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 0px 4.5px 6.5px 0 rgba(181, 197, 213, 0.3);
`;
