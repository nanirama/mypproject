import styled from "styled-components";
import { media } from "../../../utils/style-utils";
import { ButtonSecondary } from "../../../button";

export const BackgroundHero = styled.div`
  background: ${props => props.theme.color.primary};
  ${media.tablet`
  background-image: url(${props => props.bg});
  `};
  //background-size: cover;
  background-position: center;
  height: 520px;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
  :before {
    content: " ";
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 520px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  margin-top: 20px;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  /* */
`;

export const StyledHero = styled.div`
  margin: 76px 0 0 0;
  position: relative;
  z-index: 20;
`;

export const LogoPlus = styled.span`
  margin: 10px 0;
  display: block;
  ${media.tablet`
  font-size: 1.5rem;
  `};
  font-weight: 300;
  text-transform: uppercase;
  font-weight: 400;
  color: #fff;
`;

export const ButtonDownload = styled(ButtonSecondary).attrs({
  target: "_BLANK"
})`
  margin: 10px 0;
  :hover {
    box-shadow: 0px 2px 4.5px 0 rgba(88, 181, 112, 0.4);
  }
`;
