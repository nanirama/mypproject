import styled from "styled-components";

import BgMobile from "../../assets/images/home/hero-bg-mob.png";

import Bg from "../../assets/images/home/bg.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Container = styled.div`
  max-width: 970px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const TitleLarge = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  color: #262f3d;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 15px;
  }
`;

// export const BlueText = styled.div`
// background: #F4FEFF;
// border: 2px solid #2190CF;
// border-radius: 19px;
// padding:15px 25px;
// position:relative;
// @media screen and (max-width: 479px) {
//     width:100%;
// }

// p{
//     color: #2190cf;
//     font-size: 16px;
// line-height: 20px;
// font-weight:400;
// b{
//     margin-top:8px;
//     display: inline-block;
// }
// }
// svg{
//     width: 25px;
//     height: 25px;
//     position: absolute;
//     bottom: 18px;
//     right: 12px;
// }
// `

export const ReviewsText = styled.div`
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    margin-top: 25px;
  }
  & > div {
    border-radius: 19px;
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .simg {
      width: 30px;
      height: 30px;
      position: absolute;
      bottom: 15px;
      right: -8px;
    }
    .svg {
      background: #26ade4;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      padding: 5px;
      position: absolute;
      bottom: 18px;
      right: 12px;
    }
    @media screen and (max-width: 480px) {
      img {
        width: 41px;
      }
      padding: 15px;
    }
  }
  & > .gray {
    background: #f7f8ff;
    border: 2px solid #adb8d4;
  }
  & > .purple {
    background: #f9f7ff;
    border: 2px solid #8060e0;
    p {
      color: #8060e0;
    }
    .svg {
      background: #8060e0;
    }
  }
  & > .lightblue {
    background: #f7feff;
    border: 2px solid #2190cf;
    p {
      color: #26ade4;
    }
    .svg {
      background: #26ade4;
    }
  }

  & > .blue {
    background: #f4feff;
    border: 2px solid #2190cf;
    p {
      color: #2190cf;
    }
    .svg {
      background: #2190cf;
    }
  }

  img {
    margin-right: 25px;
  }
  p {
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    color: #637491;
    b {
      margin-top: 8px;
      display: inline-block;
    }

    @media screen and (max-width: 480px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export const BannerImage = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    .hero-img {
      display: block;
    }
    .hero-mob-img {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    .hero-mob-img {
      display: block;
    }
    .hero-img {
      display: none;
    }
  }
`;

export const BannerText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 767px) {
    justify-content: start;
    align-items: start;
    text-align: center;
    top: 40px;
    .container {
      width: 100%;
    }
  }

  a.linksecondary {
    display: inline-block;
    font-weight: 600;
    border-radius: 8px;
    padding: 18px 35px;
    line-height: 20px;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    background: #00cc88;
    border: 2px solid #00cc88;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s all;
    &:hover {
      background-color: #fff;
      color: #00cc88;
      svg path {
        stroke: #00cc88;
      }
    }
    @media screen and (max-width: 767px) {
      padding: 12px 15px;
    }
  }
`;

export const Banner = styled.div`
  // padding: 180px 30px 40px 30px;
  // background-image: url(${(props) => props.bgImg});

  background-image: url(${Bg});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  // height: 680px;

  .btn:hover {
    svg path {
      stroke: #00cc88;
    }
  }

  @media screen and (max-width: 991px) {
    .container {
      width: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    // background-image: url(${(props) => props.BgMobile});
    // height: 567px;
    // padding: 60px 15px 40px 15px;

    background-image: url(${BgMobile});

    .btn {
      font-size: 15px;
      padding: 14px 16px !important;
    }
  }

  a.linksecondary {
    display: inline-block;
    max-width: 300px;
    font-weight: 600;
    border-radius: 8px;
    padding: 18px 35px;
    line-height: 20px;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    background: #00cc88;
    border: 2px solid #00cc88;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s all;
    &:hover {
      background-color: #fff;
      color: #00cc88;
      svg path {
        stroke: #00cc88;
      }
    }
    @media screen and (max-width: 767px) {
      padding: 12px 15px;
      max-width: 100%;
      font-size: 14px;
    }
  }
  .w-100 {
    width: 100%;
  }
  .banner_text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 991px) {
      padding-top: 50px;
      align-items: center;
      text-align: center;
    }
  }

  @media screen and (min-width: 768px) {
    .show {
      display: block;
    }
    .hide {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    .hide {
      display: block;
    }
    .show {
      display: none;
    }
  }
`;
export const Heading = styled.h2`
  font-weight: 700;
  font-size: 49px;
  line-height: 54px;
  color: #fff;
  margin-bottom: 40px;
  @media screen and (min-width: 1200px) {
    padding-right: 0px;
  }
  @media screen and (max-width: 991px) {
    font-size: 40px;
    line-height: 44px;
    padding-right: 0px;
  }
  @media screen and (max-width: 767px) {
    font-size: 26px;
    line-height: 34px;
    margin-bottom: 25px;
  }
`;
export const SubHeading = styled.h3`
  font-size: 36px;
  line-height: 39px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 39px;
    margin-bottom: 0px;
  }
`;
export const ProductionBlk = styled.div`
  padding-top: 60px;
  @media screen and (max-width: 900px) {
    padding-top: 0px;
  }
`;

export const ContentBlock = styled.div`
  padding: 60px 0 60px 0;
  @media screen and (max-width: 991px) {
    padding: 35px 15px;
  }
  @media screen and (min-width: 768px) {
    .sm-reverse {
      flex-direction: row-reverse !important;
    }
  }
  .richparagraph p {
    font-size: 24px;
    line-height: 32px;
    color: #425168;
    font-weight: 300;
    @media screen and (max-width: 850px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: 24px;
  line-height: 32px;
  color: #425168;
  font-weight: 400;

  @media screen and (max-width: 850px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

// export const GrayText = styled.div`
// background: #F7F8FF;
// border: 2px solid #ADB8D4;
// border-radius: 19px;
// padding:15px 25px;
// display:flex;
// justify-content:space-between;
// align-items:center;
// img{
//     margin-right:25px;
// }
// p{
//     font-size: 16px;
//     line-height: 22px;
//     font-weight:400;
//     color: #637491;
//     b{
//         margin-top:8px;
//         display: inline-block;
//     }
// }
// `
// export const PurpleText = styled.div`
// background: #F9F7FF;
// border: 2px solid #8060E0;
// border-radius: 19px;
// padding:15px 25px;
// position:relative;

// @media screen and (max-width: 479px) {
//     width:100%;
// }
// p{
//     color: #8060E0;
//     font-size: 16px;
//     line-height: 22px;
//     font-weight:400;
//     b{
//         margin-top:8px;
//         display: inline-block;
//     }
// }
// svg{
//     background: #8060E0;
//     width: 25px;
//     height: 25px;
//     border-radius: 50%;
//     padding: 5px;
//     position: absolute;
//     bottom: 18px;
//     right: 22px;
// }
// `
export const EngageText = styled.div`
  @media screen and (min-width: 992px) {
    padding-left: 10%;
  }
`;
export const LightBlueText = styled.div`
  background: #f7feff;
  border: 2px solid #2190cf;
  border-radius: 19px;
  padding: 15px 25px;
  position: relative;
  @media screen and (max-width: 479px) {
    width: 100%;
  }

  p {
    color: #26ade4;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    b {
      margin-top: 8px;
      display: inline-block;
    }
  }
  svg {
    background: #26ade4;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 5px;
    position: absolute;
    bottom: 18px;
    right: 12px;
  }
`;
export const ImageBlock = styled.div`
  position: relative;

  @media screen and (min-width: 900px) {
    &:before {
      content: "";
      position: absolute;
      left: -30px;
      top: 30px;
      width: 235px;
      height: 410px;
      border-top: 4px dashed #c8d1e9;
      border-right: 4px dashed #c8d1e9;
      z-index: 10;
    }
  }

  @media screen and (max-width: 767px) {
    width: 270px;
    margin: 0 auto;
  }
`;
export const ImageBlock2 = styled.div`
  position: relative;

  @media screen and (max-width: 767px) {
    width: 270px;
    margin: 0 auto;
  }

  @media screen and (min-width: 900px) {
    &:before {
      content: "";
      position: absolute;
      left: 120px;
      top: -35px;
      width: 360px;
      height: 390px;
      border-top: 4px dashed #c8d1e9;
      border-left: 4px dashed #c8d1e9;
      border-top-left-radius: 30%;
      z-index: 10;
    }
    margin-top: 60px;
  }
`;
export const Image1 = styled.div`
  padding-left: 13%;
  z-index: 20;
  position: relative;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    padding-left: 0%;
    img {
      width: 182px;
    }
    margin-top: 25px;
  }
`;
export const Image2 = styled.div`
  position: absolute;
  top: 13%;
  right: -2%;
  z-index: 30;
  @media (min-width: 768px) and (max-width: 899px) {
    top: 5%;
    right: -5%;
  }
  @media screen and (max-width: 767px) {
    img {
      width: 124px;
    }
  }
`;
export const Image3 = styled.div`
  padding-left: 8%;
  z-index: 20;
  position: relative;
  @media (min-width: 768px) and (max-width: 991px) {
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 767px) {
    padding-left: 0%;
    margin-top: 25px;
    img {
      width: 100%;
    }
  }
`;
export const InfoBlock = styled.div`
  background: #ffffff;
  box-shadow: -2.87px 7.15px 14.9779px rgba(52, 64, 83, 0.1);
  border-radius: 11.4118px;
  padding: 12px;
  position: absolute;
  left: 0px;
  bottom: -35px;
  z-index: 30;
  .btn:hover {
    svg path {
      stroke: #00cc88;
    }
  }
`;
export const InfoText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10px;
  p {
    font-size: 12px;
    line-height: 18px;
    color: #686868;
    padding-left: 15px;
    b {
      color: #262f3d;
    }
    span {
      color: #8060e0;
    }
  }
`;
export const ImageBlock3 = styled.div`
  position: relative;
  @media screen and (min-width: 900px) {
    &:before {
      content: "";
      position: absolute;
      left: 0%;
      top: 40px;
      width: 235px;
      height: 330px;
      border-top: 4px dashed #c8d1e9;
      border-right: 4px dashed #c8d1e9;
      z-index: 10;
    }
  }
  @media screen and (max-width: 767px) {
    width: 270px;
    margin: 0 auto;
  }
`;
export const Image4 = styled.div`
  padding-left: 10%;
  z-index: 20;
  position: relative;
  img {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    img {
      width: 100%;
    }
    padding-left: 0%;
  }
  @media screen and (max-width: 767px) {
    padding-left: 0%;
    img {
      width: 100%;
    }
    margin-top: 25px;
  }
`;
export const Image5 = styled.div`
  position: absolute;
  right: -60px;
  top: 90px;
  z-index: 30;
  @media (min-width: 768px) and (max-width: 991px) {
    right: -15px;
    top: 60px;
  }
  @media screen and (max-width: 767px) {
    img {
      width: 62px;
    }
    right: -35px;
    top: 60px;
  }
`;
export const Image6 = styled.div`
  position: absolute;
  right: -60px;
  bottom: -15px;
  z-index: 30;
  @media (min-width: 768px) and (max-width: 991px) {
    right: -15px;
  }
  @media screen and (max-width: 767px) {
    img {
      width: 62px;
    }
    right: -35px;
    top: 2px;
  }
`;

// SUCCESS BLOCK

export const SuccessBlock = styled.div`
  background: linear-gradient(292.88deg, #344053 1.76%, #262f3d 97.1%);
  padding: 100px 0 80px 0;
  @media screen and (max-width: 991px) {
    .container {
      width: 100%;
    }
  }
  @media screen and (max-width: 991px) {
    padding: 50px 15px;
  }
`;
export const SuccessItem = styled.div`
  padding: 0 25px 0 55px;
  display: flex;
  margin-bottom: 30px;
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 0 0px;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  h4 {
    font-weight: 700;
    font-size: 30px;
    line-height: 47px;
    color: #fff;
    margin-bottom: 10px;
    @media screen and (max-width: 850px) {
      font-size: 24px;
      line-height: 34px;
      margin: 15px 0;
    }
  }
  p {
    font-size: 20px;
    line-height: 26px;
    color: #fff;
    font-weight: 300;
    margin-bottom: 15px;
  }
  a {
    font-weight: 700;
    font-size: 21px;
    line-height: 33px;
    color: #00cc88;
    display: flex;
    align-items: center;
    svg {
      margin: 5px 0 0 10px;
    }
  }
`;
export const SImage = styled.div`
  width: 65px;
  height: 65px;
`;
export const RightText = styled.div`
  padding-left: 30px;
  @media screen and (max-width: 767px) {
    padding-left: 0px;
    padding-top: 20px;
  }
`;
export const ButtonOuter = styled.div`
  width: 100%;
  text-align: center;

  a.linksecondary {
    font-weight: 600;
    border-radius: 8px;
    padding: 15px 60px;
    width: auto;
    display: inline-block;
    line-height: 20px;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    background: #00cc88;
    border: 2px solid #00cc88;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s all;
    &:hover {
      background-color: #fff;
      color: #00cc88;
    }
  }
`;
export const SpanItemsOuter = styled.div`
  margin: 40px 0;
`;
export const SpanItems = styled.div`
  margin: 5px 0;
`;
export const Span = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: rgba(160, 250, 223, 0.63);
  background: #405463;
  border-radius: 42px;
  padding: 10px 15px;
  margin: 0px 8px 14px 0px;
  text-align: center;
  display: flex;
  align-items: center;

  justify-content: center;
  b {
    font-size: 28px;
    font-weight: 400;
    margin-top: -7px;
    padding-right: 4px;
  }
`;

// JOINUS BLOCK

export const JoinBlk = styled.div`
  background-color: #2c3b4d;
  padding: 40px 15px 50px 15px;
  @media screen and (max-width: 991px) {
    .container {
      width: 100%;
    }
  }

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    margin-bottom: 22px;
    span {
      color: #00cc88;
    }
  }
  img {
    margin-top: 10px;
    width: 100%;
    @media screen and (max-width: 767px) {
      width: auto;
      display: flex;
      margin: 0 auto;
    }
  }
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  color: #262f3d;
  margin-bottom: 18px;
`;

export const JoinText = styled.div`
  padding-left: 50px;
  @media screen and (max-width: 767px) {
    padding-left: 0px;
    margin-top: 30px;
    img {
      margin: 0 auto;
      display: flex;
    }
  }
  .joinspan a {
    color: #00cc88;
  }

  a.linksecondary {
    display: inline-block;
    font-weight: 600;
    border-radius: 4px;
    padding: 8px 25px;

    line-height: 24px;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    background: #00cc88;
    border: 2px solid #00cc88;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s all;
    &:hover {
      background-color: #fff;
      color: #00cc88;
    }
  }
`;

// GUIDES SECTION

export const GuideBlk = styled.div`
  background-color: #fafafa;
  padding: 100px 15px;
  @media screen and (max-width: 991px) {
    .container {
      width: 100%;
    }
    padding: 40px 15px;
  }
`;
export const GuideItem = styled.div`
  box-shadow: 0px 10px 18px rgba(145, 159, 190, 0.14), 0px 0px 1px rgba(0, 0, 0, 0.14);
  border-radius: 19px;
  background-color: #fff;
  margin-top: 20px;
`;

export const LinkText = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    position: absolute;
    text-align: center;
    color: #fff;
    font-size: 24px;
    line-height: 37px;
    font-weight: 700;
    background-color: rgba(
      ${(props) => props.guideColorR},
      ${(props) => props.guideColorG},
      ${(props) => props.guideColorB},
      0.7
    );
    height: 100%;
    width: 100%;
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all;

    &:hover {
      background-color: rgba(
        ${(props) => props.guideColorR},
        ${(props) => props.guideColorG},
        ${(props) => props.guideColorB},
        0.5
      );
    }

    span {
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 20px;
    }
  }
  img {
    width: 100%;
  }
`;
export const GuideText = styled.div`
  padding: 20px 50px;
  font-size: 16px;
  line-height: 24px;
  color: #262f3d;
  font-weight: 300;
  text-align: center;
  b {
    color: #00cc88;
  }

  @media screen and (max-width: 991px) {
    padding: 20px;
  }
`;

// BRANDS BLOCK

export const BrandsBlk = styled.div`
  padding: 80px 15px 110px 15px;
  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    color: #425168;
    text-align: center;
  }
  @media screen and (max-width: 991px) {
    padding: 80px 15px 60px 15px;
  }
  @media screen and (max-width: 767px) {
    padding: 50px 15px;
  }
`;

export const BrandItem = styled.div`
  margin-top: 40px;
  border-radius: 14px;
  background-color: #425168;
  position: relative;

  img {
    width: 100%;
  }
  .purple {
    background-color: #8060e0;
  }
  .blue {
    background-color: #3cc8f0;
  }
`;
export const TagBtn = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  background-color: ${(props) => props.tagBg};
  border-radius: 9px;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 0.6px;
  padding: 6px 10px;
  color: #fff;
  text-transform: uppercase;
  width: 80px;
  text-align: center;
`;

export const BrandText = styled.div`
  padding: 20px;
  background: linear-gradient(180deg, #425168 0%, #262f3d 100%);
  -webkit-border-bottom-right-radius: 14px;
  -webkit-border-bottom-left-radius: 14px;
  -moz-border-radius-bottomright: 14px;
  -moz-border-radius-bottomleft: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;
  a.buttonlink {
    display: inline-block;
    text-transform: uppercase;
    font-size: 15px !important;
    color: #fff;
    padding: 6px 12px;
    border: 1px solid #fff;
    border-radius: 8px;
    font-weight: 600;
    box-shadow: none;
    &:hover {
      background-color: #5d768b;
    }
  }
  p {
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    text-align: left;
    font-weight: 400;
    margin-bottom: 22px;
  }
  a {
    font-size: 14px;
    line-height: 18px;
    color: #fff;
    padding: 6px 12px;
    border: 1px solid #fff;
  }
`;

// SERVICE TECHNOLOGY

export const ServiceBlk = styled.div`
  padding: 50px 15px;
`;
export const LeftBlk = styled.div`
  padding-right: 35px;
  margin-top: 60px;
  @media screen and (max-width: 991px) {
    padding-right: 0px;
    margin-top: 0px;
  }
  @media screen and (max-width: 767px) {
    a {
      font-size: 14px !important;
      padding: 8px 12px !important;
    }
  }
  .subtext {
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    color: #425168;
    margin-bottom: 20px;
    @media screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  a.linksecondary {
    display: inline-block;
    font-weight: 400;
    border-radius: 4px;
    padding: 17px 25px;
    width: 100%;
    line-height: 20px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    background: #00cc88;
    border: 2px solid #00cc88;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s all;
    &:hover {
      background-color: #fff;
      color: #00cc88;
    }
  }
`;

export const SubText = styled.div`
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  color: #425168;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const ServiceList = styled.div`
  position: relative;
  margin-left: 35px;
  img {
    z-index: -1;
    width: 90%;
    float: right;
  }
  ul {
    position: absolute;
    right: 45px;
    top: 45px;
    background-color: #f5fdfa;
    border-radius: 42px 0px 74px;
    padding: 60px 40px;
    @media (min-width: 768px) and (max-width: 850px) {
      padding: 20px;
    }

    @media screen and (max-width: 767px) {
      padding: 25px 25px;
      top: 25px;
      right: 25px;
    }
    @media screen and (max-width: 325px) {
      right: 45px;
      padding: 25px 18px;
      width: 85%;
    }
  }
  ul li {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 10px;
    color: #000000;
    @media screen and (max-width: 990px) {
      font-size: 18px;
      line-height: 26px;
    }
    @media screen and (max-width: 325px) {
      font-size: 16px;
    }
  }
  svg {
    margin-right: 12px;
    @media screen and (max-width: 767px) {
      width: 15px;
      margin-right: 8px;
    }
  }
  @media screen and (max-width: 767px) {
    width: 300px;
    margin: 0 auto;
    margin-top: 40px;
  }
`;
// ENTERPRISE BLOCK

export const EnterpriseBlk = styled.div`
  padding: 90px 15px 90px 15px;

  @media screen and (max-width: 991px) {
    padding: 40px 15px;
  }

  @media screen and (min-width: 768px) {
    .sm-reverse {
      flex-direction: row-reverse !important;
    }
  }
`;

export const EnterpriseList = styled.div`
  padding-left: 25px;
  ul {
    margin: 25px 0 45px 0;
  }
  ul li {
    position: relative;
    font-weight: 400;
    font-size: 23px;
    line-height: 32px;
    margin-bottom: 20px;
    color: #425168;
    padding-left: 40px;
    @media screen and (max-width: 991px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
  svg {
    position: absolute;
    left: 0;
    top: 9px;
  }
  a.linksecondary {
    display: inline-block;
    font-weight: 400;
    border-radius: 4px;
    padding: 17px 25px;
    width: 100%;
    line-height: 20px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    background: #00cc88;
    border: 2px solid #00cc88;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s all;
    &:hover {
      background-color: #fff;
      color: #00cc88;
    }
  }

  @media screen and (max-width: 767px) {
    padding-left: 0px;
    a {
      font-size: 14px !important;
      padding: 8px 12px !important;
      margin-bottom: 30px;
    }
  }
`;

export const EnterpriseLeft = styled.div`
  position: relative;
  @media screen and (max-width: 991px) {
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 767px) {
    width: 270px;
    margin: 0 auto;
    margin-top: 30px;
  }
`;

export const SecureImg = styled.div`
  margin-left: -100px;
  @media (min-width: 768px) and (max-width: 991px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 767px) {
    margin-left: 0px;
  }
`;
export const Secure = styled.div`
  position: absolute;
  left: -100px;
  top: 60px;
  color: #008250;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background: linear-gradient(0deg, rgba(0, 204, 136, 0.12), rgba(0, 204, 136, 0.12)), #ffffff;
  border-radius: 60px;
  display: flex;
  padding: 10px 15px;
  img {
    margin-right: 10px;
    width: auto;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    left: 0px;
    top: 30px;
    font-size: 14px;
  }
  @media screen and (max-width: 767px) {
    font-size: 9px;
    left: -50px;
    top: -25px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    img {
      width: 15px;
      height: 20px;
    }
  }
  @media screen and (max-width: 400px) {
    left: -20px;
    top: -20px;
  }
`;

export const Logos = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  @media screen and (max-width: 767px) {
    left: 0;
  }
  @media screen and (max-width: 400px) {
    left: 35px;
  }
`;

export const LogoImg = styled.div`
  width: 113px;
  height: 113px;
  background: #ffffff;
  box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.14);
  border-radius: 19px;
  position: absolute;
  display: grid;
  justify-content: center;
  align-items: center;

  &:nth-child(1) {
    bottom: 80px;
    right: 155px;
  }
  &:nth-child(2) {
    bottom: 80px;
    right: 20px;
  }
  &:nth-child(3) {
    bottom: -55px;
    right: 155px;
  }
  &:nth-child(4) {
    bottom: -55px;
    right: 20px;
  }

  @media screen and (max-width: 767px) {
    width: 73px;
    height: 73px;
    padding: 10px;
    &:nth-child(1) {
      bottom: 80px;
      left: -50px;
    }
    &:nth-child(2) {
      bottom: 80px;
      left: 40px;
    }
    &:nth-child(3) {
      bottom: -10px;
      left: -50px;
    }
    &:nth-child(4) {
      bottom: -10px;
      left: 40px;
    }
  }
`;

// EVENTS BLOCK

export const EventsBlk = styled.div`
  background-color: #fafafa;
  padding: 80px 15px;

  @media screen and (max-width: 991px) {
    .container {
      width: 100%;
    }
    padding: 50px 15px;
  }

  .itembox {
    display: flex;
    justify-content: stretch;
  }
`;
export const EventItem = styled.div`
  margin-top: 20px;
  border-radius: 19px;
  background-color: #fff;
  position: relative;
  box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.14);
  padding: 33px;
  img {
    width: 100%;
    margin-top: 8px;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    content: "";
    height: 8px;
    width: 100%;
    background-color: ${(props) => props.eventBgcolor};
    border-radius: 70px 70px 0px 0px;
  }

  span.bdr2 {
    background-color: #8060e0;
  }
  span.bdr3 {
    background-color: #00ade5;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 20px;
  }
  @media screen and (max-width: 767px) {
    padding: 20px 15px;
  }

  a.buttonlink {
    display: inline-block;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 1px;
    color: rgb(66, 81, 104);
    padding: 13px 40px;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.3s all;
    border: 2px solid rgb(66, 81, 104);
    &:hover {
      background-color: #5d768b;
      color: #fff;
    }
  }
`;

export const EventText = styled.div`
  h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #425168;
    margin: 10px 0;
    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 18px;
      line-height: 28px;
    }
    @media screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
  p {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 1px;
    color: #405463;
    text-align: left;
    font-weight: 400;
    margin-bottom: 25px;

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 16px;
      line-height: 22px;
    }

    @media screen and (max-width: 767px) {
      text-align: center;
      font-size: 16px;
      line-height: 18px;
    }
  }
  a {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 1px;
    color: #425168;
    padding: 13px 40px;
    border: 2px solid #425168;
    @media (min-width: 768px) and (max-width: 991px) {
      width: 100%;
      padding: 12px;
      text-align: center;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const ClientImg = styled.div`
  padding-top: 15px;
  height: 100px;

  img {
    width: auto;
  }

  // .slick-slider{
  //   height:100px;
  // }

  .client-logo {
    height:48px;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    align-content: center !important;
    padding: 0px 10px;
    img {
      
    }
  }
`;

export const AnchorBorderGrey = styled.a`
  display: inline-block;
  text-transform: uppercase;
  font-size: 15px !important;
  color: #fff;
  padding: 6px 12px;
  border: 1px solid #fff;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: none;
  &:hover {
    background-color: #5d768b;
  }
`;
