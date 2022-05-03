import styled from "styled-components";
import ContactBg from "../../assets/images/contact-hero-bg.png";
import ContactBgMobile from "../../assets/images/contact-hero-bg-m.png";

import MobileBg from "../../assets/images/footer_mobile-bg.jpg";
import Bg from "../../assets/images/footer-bg.jpg";

export const ContactPage = styled.div`
  background-color: #fafafa;
  width: 100%;
  float: left;
`;
export const Container = styled.div`
  max-width: 1014px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const ContactBanner = styled.div`
  background-image: url(${ContactBg});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 0 150px 0;

  @media screen and (max-width: 767px) {
    background-image: url(${ContactBgMobile});
    background-position: center right;
    padding: 40px 0 130px 0;
  }

  .logo {
    width: 160px;
    margin: 0 auto 40px auto;
    display: flex;
  }

  h2 {
    color: #fff;
    font-weight: 700;
    font-size: 50px;
    line-height: 57px;
    margin-bottom: 30px;
    @media screen and (max-width: 767px) {
      font-size: 26px;
      line-height: 32px;
    }
  }

  ul li {
    font-weight: 300;
    font-size: 18px;
    line-height: 37px;
    color: #fff;
    margin-bottom: 15px;
    padding-left: 35px;
    position: relative;

    svg {
      position: absolute;
      top: 10px;
      left: 0;
    }

    @media screen and (max-width: 767px) {
      font-size: 17px;
      line-height: 20px;
      svg {
        top: 2px;
      }
    }
  }
`;

export const ContactForm = styled.div`
padding:10px;
background-color: #fff;
margin-top: -100px;
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
width:100%:float:left;
border: 1px solid rgb(238, 238, 238);
box-shadow: rgba(181, 197, 213, 0.4) 0px 4.5px 6.5px 0px;

`;
export const LogosBlk = styled.div`
  padding: 60px 0;
  background-color: #fafafa;
  @media screen and (max-width: 767px) {
    padding: 50px 0;
  }
  h2 {
    font-size: 32px;
    line-height: 42px;
    font-weight: 700;
    text-align: center;
    color: #262f3d;
    margin-bottom: 30px;
    @media screen and (max-width: 600px) {
      font-size: 26px;
      line-height: 32px;
    }
  }
  .box {
    border-right: 1px solid #e4e7f2;
    border-bottom: 1px solid #e4e7f2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box:nth-child(4),
  .box:last-child {
    border-right: none;
  }
  .box:nth-child(5),
  .box:nth-child(6),
  .box:nth-child(7),
  .box:nth-child(8) {
    border-bottom: none;
  }

  @media screen and (max-width: 767px) {
    .box:nth-child(5),
    .box:nth-child(6) {
      border-bottom: 1px solid #e4e7f2;
    }
    .box:nth-child(2),
    .box:nth-child(6) {
      border-right: none;
    }
  }
`;
export const BrandContainer = styled.div`
  max-width: 770px;
  margin: 0 auto;
  padding: 0 10px;
  @media screen and (max-width: 991px) {
    max-width: 90%;
  }
`;
export const BrandLogo = styled.div`
  padding: 20px;
  width: 140px;
`;

export const BottomBlk = styled.div`
  padding: 60px 0 0px 0;
  background-image: url(${Bg});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 767px) {
    background-image: url(${MobileBg});
    padding: 40px 0 0 0;
  }
`;
export const BootomContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 10px;
`;
export const FooterTop = styled.div`
  h2 {
    font-size: 32px;
    line-height: 42px;
    font-weight: 700;
    text-align: center;
    color: #fff;
    margin-top: 10px;
    @media screen and (max-width: 991px) {
      br {
        display: none;
      }
      margin: 0 0 25px 0;
    }
    @media screen and (max-width: 600px) {
      font-size: 26px;
      line-height: 32px;
    }
  }
`;
export const BadgeImage = styled.div`
  display: flex;
  img {
    width: 135px;
    @media screen and (min-width: 992px) and (max-width: 1130px) {
      width: 110px;
    }
    @media screen and (max-width: 445px) {
      width: 100px;
    }
    @media screen and (max-width: 339px) {
      width: 80px;
    }
  }

  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const FooterBottom = styled.div`
  border-top: 0.5px solid rgba(250, 250, 250, 0.75);
  padding: 15px 0 20px 0;
  margin-top: 25px;
  display: flex;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
  p {
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.8);
    margin-right: 30px;
    @media screen and (min-width: 992px) and (max-width: 1035px) {
      margin-right: 20px;
    }
    @media screen and (max-width: 991px) {
      margin-bottom: 20px;
      margin-right: 0px;
    }
  }
  ul {
    margin: 0;
    paddib: 0;
  }
  ul > li {
    list-style: none;
    float: left;
    margin-right: 30px;
    @media screen and (min-width: 992px) and (max-width: 1035px) {
      margin-right: 20px;
    }
    @media screen and (max-width: 991px) {
      margin-right: 0px;
      margin-bottom: 8px;
      width: 50%;
    }
  }
  ul > li > a {
    font-size: 14px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.8);
    @media screen and (max-width: 329px) {
      font-size: 13px;
    }
  }
`;
