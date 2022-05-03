import React from "react";
import Image from "gatsby-image";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "gatsby";
import Route from "../../localization";
import Bg from "../../assets/images/footer-bg.jpg";
import Badges1 from "../../assets/images/badges-1.png";
import Badges2 from "../../assets/images/badges-2.png";
import Badges3 from "../../assets/images/badges-3.png";
import Badges4 from "../../assets/images/badges-4.png";
import Badges5 from "../../assets/images/badges-5.png";

import MobileBg from "../../assets/images/footer_mobile-bg.jpg";

import { BottomBlk, BootomContainer, BadgeImage, FooterTop, FooterBottom } from "./styled";

const ContactFooter = ({ t, lang }) => {
  return (
    <BottomBlk>
      <BootomContainer>
        <FooterTop>
          <Row>
            <Col lg={5}>
              <h2>
                Top rated in 10+
                <br /> product categories
              </h2>
            </Col>
            <Col lg={7}>
              <BadgeImage>
                <img src={Badges1} alt="" />
                <img src={Badges2} alt="" />
                <img src={Badges3} alt="" />
                <img src={Badges4} alt="" />
                <img src={Badges5} alt="" />
              </BadgeImage>
            </Col>
          </Row>
        </FooterTop>
        <FooterBottom>
          <p>© 2022 Swapcard</p>
          <ul>
            {/* <li>
              <Link to={`${Route[lang]["legal/terms_of_use"]}`}>{t.legal_terms_of_use}</Link>
            </li> */}
            <li>
              <Link to={`/privacy-policy/`}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={`/cookie-policy/`}>Cookies Policy</Link>
            </li>
            <li>
              <Link to={`/`}>Terms of use organizer</Link>
            </li>
            <li>
              <Link to={`/legal-terms`}>Legal Terms</Link>
            </li>
            <li>
              <Link to={`/`}>Manage Cookie </Link>
            </li>
            <li>
              <Link to={`/terms-of-use`}>Security</Link>
            </li>
          </ul>
        </FooterBottom>
      </BootomContainer>
    </BottomBlk>
  );
};

export default ContactFooter;
