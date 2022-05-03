import styled from "styled-components";
import { media } from "../../utils/style-utils";
import Link from "../../utils/link";

export const StyledFooter = styled.div`
  margin: 50px 0 20px 0;
  width: 100%;
  float: left;
  padding: 10px;
  ${media.tablet`
    padding:0;
  `};
`;

export const FooterHeading = styled.div`
  a {
    text-decoration: none;
    display: block;
    color: ${(props) => props.theme.color.primary};
  }
  font-weight: 600;
  font-size: 1.2rem;
  ${media.tablet`
    margin-bottom:30px;
  `};
`;

export const FooterItem = styled.li``;

export const FooterList = styled.ul`
  margin: 20px 0 40px 0;
  ${media.tablet`
   margintop: 40px 0 0 0;
  `};
`;

export const FooterLink = styled(Link)`
  color: #666;
  margin: 15px 0;
  display: block;
  text-decoration: none;
  &:hover {
    font-weight: 600;
    color: ${(props) => props.theme.color.primary};
    cursor: pointer;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  ${media.tablet`
    flex-direction:row;
    justify-content:space-between;
  `};
`;

export const FooterBottomItem = styled(Link)`
  margin: 3px 0;
  padding: 0 10px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.color.body};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.primary};
    cursor: pointer;
  }
`;

export const FooterBottomLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FooterBottomRight = styled.div`
  margin-top: 10px;
  ${media.tablet`
    margin:0;
  `};
  a {
    margin-left: 10px;
    height: 35px !important;
    width: 35px !important;
    transition: 0.2s transform;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export const ButtonStore = styled.img`
  width: 130px;
  margin-left: 20px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  ${media.tablet`
    margin:0;
  `};
`;

export const CertificationWrapper = styled.div`
  border-top: 1px solid #eee;
  width: 100%;
  height: 100%;
  padding: 20px 0 0px 0;
  margin: 30px 0 0 0;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${media.tablet`
    flex-direction:row;
  `}
`;

export const CertificationImage = styled.div`
  margin: 20px 0;
  ${media.tablet`
    margin:0;
  `}
`;
