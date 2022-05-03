import styled, { css } from "styled-components";
import { media } from "../../utils/style-utils";
import { StyledInput } from "../../form/input/styled";
import { StyledSubmit } from "../../form/submit/styled";
import Link from "../../utils/link";

export const HeroContainer = styled.div`
  /* margin: 140px 0 0 0; */
  /* z-index: 5; */
  position: relative;
  text-align: left !important;
`;

export const TuiHero = styled.div`
  background-color: #262f3d;
  padding: 100px 0 40px 0;
  ${media.tablet`
    padding: 80px 0;
    margin-top: 80px;
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.tablet`
    justify-content:${(props) => (props.buttonAlign ? props.buttonAlign : "flex-start")};
  `};
`;

export const HeroContainerTitle = styled.div`
  margin: 140px 0 0 0;
`;

export const HeroPolicy = styled.div``;

export const HeroButton = styled.div`
  margin: 30px 0;
  button {
    margin: 0 20px 0 0;
  }
`;

export const HeroWrapperInput = styled.div`
  flex-wrap: wrap;
  width: 100%;
  ${media.tablet`
  flex-wrap:none;
  `} display: flex;
`;

export const HeroInput = styled(StyledInput)`
  text-align: center;
  width: 100%;
  height: 43px;
  ${media.tablet`
    text-align:left;
    width:60%;
    border-right:none;
    border-top-right-radius:0;
    border-bottom-right-radius:0;
  `};
`;

export const HeroSubmit = styled(StyledSubmit)`
  border-radius: 10px;
  box-shadow: none !important;
  text-align: center;
  height: 43px;
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  padding: 0;
  &:hover {
    background: #3ca257;
    color: #fff;
  }
  ${media.tablet`
    width:180px;
    margin:0;
    border-top-left-radius:0;
    border-bottom-left-radius:0;
  `};
`;

export const TypingWrapper = styled.span`
  ${media.tablet`
     display:inline-block;
    `} height:37px;
  display: block;
`;

export const FrenchPreprend = styled.div`
  display: block;
`;

export const StyledTyping = styled.span`
  color: ${(props) => props.theme.color.secondary};
  font-style: italic;
`;

/* Hero BG */

export const HeroBackground = styled.div`
  background-image: url(${(props) => props.bg});
  background-repeat: none;
  background-size: cover;
  background-position: center;
  height: 300px;
  padding-top: 30px;
  ${media.giant`
  height: 500px;
  `} position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 76px 0 0 0; */
  ${media.giant`
  /* padding:0; */
  padding:0;
  margin: 76px 0 0 0;
  `}
  :after {
    content: " ";
    background: #000;
    height: 70%;
    ${media.giant`
    height: 100%;
    `}
    z-index: 10;
    width: 100%;
    position: absolute;
    opacity: 0.5;
  }
`;
export const HeroBackgroundTitle = styled.h1`
  position: relative;
  font-weight: 800;
  font-size: 1.8rem;
  text-align: center;
  padding: 20px;
  ${media.tablet`
  font-size: 3rem;
  `} color: #fff;
  z-index: 20;
`;

export const BackgroundBlue = styled.div`
  background: ${(props) => props.theme.color.primary};
  height: 600px;
  width: 100%;
  transform: skewY(-5deg);
  overflow: hidden;
  transform-origin: 0;
  position: absolute;
  z-index: 2;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const DownloadButton = styled.div`
  display: flex;
  justify-content: center;
  ${media.tablet`
    justify-content:flex-start;
  `} img {
    margin-top: 10px;
    height: 60px;
    max-width: 150px;
    margin-right: 15px;
  }
`;

export const HeroContainerDownload = styled.div`
  z-index: 10;
  position: relative;
  padding-top: 80px;
`;

export const HeroImage = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  width: 100%;
  height: 100%;
`;
export const HeroImageWrapper = styled(Link)`
  max-width: 480px;
  width: 100%;
  display: block;
  transition: 0.3s all;
  height: 550px;
  border: 10px solid ${(props) => (props.color ? props.color : props.theme.color.secondary)};
  border-radius: 3px;
  box-shadow: ${(props) => props.theme.shadow.secondary};
  &:hover {
    cursor: pointer;
    box-shadow: 0 20px 32px rgba(0, 0, 0, 0.2);
  }
`;

export const VideoHideImg = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: block;
  }
`;

export const VideoHover = styled.div`
  margin-top: 30px;
  position: relative;
  &:hover {
    cursor: ${(props) => (props.hasVideo ? "pointer" : "normal")};
  }

  ${(props) =>
    props.hasVideo &&
    css`}
  &:after {
    width: 90px;
    height: 90px;
    border-radius: 500px;
    background: ${(props) => props.theme.color.primary};
    opacity: 0.8;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.1s all;
    content: " ";
    cursor: pointer;
  }
  &:before {
    z-index: 5;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 18px 0 18px 25px;
    border-color: transparent transparent transparent #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: " ";
  }
  &:hover:after {
    /* border-radius: 0; */
    width: 120px;
    height: 120px;
    opacity: 0.7;
  }
  `}
`;
