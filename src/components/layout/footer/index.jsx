import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Row, Col } from "react-flexbox-grid";
import Divider from "../../utils/divider";
import { Padding } from "styled-components-spacing";
import { SocialIcon } from "react-social-icons";
import { GridLarge } from "../../utils/grid";
import Image from "gatsby-image";

// import AppStore from "../../../assets/images/Apple_store_EN.svg";
// import PlayStore from "../../../assets/images/Play_store_EN.svg";
import GDPR from "../../../assets/images/GDPR.svg";
import Heavent from "../../../assets/images/heavent-award.svg";

import {
  StyledFooter,
  FooterHeading,
  FooterList,
  FooterItem,
  FooterLink,
  FooterBottom,
  FooterBottomItem,
  FooterBottomLeft,
  FooterBottomRight,
  // ButtonStore,
  // ButtonWrapper,
  CertificationWrapper,
  CertificationImage,
} from "./styled";
import LanguagesSwitcher from "./languages_switch";
import Route from "../../../localization";
import { LinkInternal } from "../../utils/link";

export default class Footer extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query footer {
            europe: file(relativePath: { regex: "/europe.jpg/" }) {
              childImageSharp {
                fixed(width: 120) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
            uni: file(relativePath: { regex: "/uni.jpg/" }) {
              childImageSharp {
                fixed(width: 170) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
            iaee: file(relativePath: { regex: "/iaee.png/" }) {
              childImageSharp {
                fixed(width: 170) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
        `}
        render={(data) => (
          <React.Fragment>
            <StyledFooter>
              <GridLarge>
                <Row>
                  {this.props.t.body2.map((footer, index) => (
                    <React.Fragment key={index}>
                      <Col md xs={6}>
                        <FooterHeading>{footer.primary.title_footer}</FooterHeading>
                        <FooterList>
                          {footer.items.map((item, index) => (
                            <FooterItem key={index}>
                              <FooterLink to={LinkInternal(item.link_slug_v2, item.link_slug, this.props.lang)}>
                                {item.link_anchor}
                              </FooterLink>
                            </FooterItem>
                          ))}
                        </FooterList>
                      </Col>
                    </React.Fragment>
                  ))}
                </Row>
                <Row middle="xs" center="xs" start="md">
                  <Col xs={12} md={1}>
                    <LanguagesSwitcher route={this.props.route} lang={this.props.lang} />
                  </Col>
                  {/* <Col xs={12} md={11}>
                    <ButtonWrapper>
                      <a href="https://itunes.apple.com/fr/app/swapcard/id879488719?mt=8">
                        <ButtonStore src={AppStore} />
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=com.swapcard.apps.android">
                        <ButtonStore src={PlayStore} />
                      </a>
                    </ButtonWrapper>
                  </Col> */}
                </Row>

                <Row>
                  <Col xs={12}>
                    <CertificationWrapper>
                      <CertificationImage>
                        <Image fixed={data.europe.childImageSharp.fixed} alt="" style={{ margin: "0 50px" }} />
                      </CertificationImage>
                      <CertificationImage>
                        <img alt="" src={GDPR} style={{ margin: "0 50px" }} />
                      </CertificationImage>
                      <CertificationImage>
                        <Image fixed={data.iaee.childImageSharp.fixed} alt="" style={{ margin: "0 50px" }} />
                      </CertificationImage>
                      <CertificationImage>
                        <img alt="" src={Heavent} style={{ margin: "0 50px", height: "120px" }} />
                      </CertificationImage>
                    </CertificationWrapper>
                  </Col>
                </Row>

                <Row middle="xs">
                  <Col xs={12}>
                    <Padding top={4} bottom={4}>
                      <Divider />
                    </Padding>
                  </Col>
                  <Col xs={12}>
                    <FooterBottom>
                      <FooterBottomLeft>
                        <FooterBottomItem>© 2021 Swapcard</FooterBottomItem>
                        <FooterBottomItem to={Route[this.props.lang]["legal/terms_of_use"]}>
                          {this.props.t.legal_terms_of_use}
                        </FooterBottomItem>
                        <FooterBottomItem to={Route[this.props.lang]["legal/privacy_policy"]}>
                          {this.props.t.legal_privacy_policy}
                        </FooterBottomItem>
                        <FooterBottomItem to={Route[this.props.lang]["legal/cookie"]}>
                          {this.props.t.legal_cookie}
                        </FooterBottomItem>
                        <FooterBottomItem to={Route[this.props.lang]["legal/organizer"]}>
                          {this.props.lang === "fr-fr" ? (
                            <span>Conditions d'utilisation organisateur</span>
                          ) : (
                            <span>Terms of use organizer</span>
                          )}
                        </FooterBottomItem>
                        <FooterBottomItem to={Route[this.props.lang]["legal-legal-terms"]}>
                          {this.props.lang === "fr-fr" ? <span>Mentions légales</span> : <span>Legal Terms</span>}
                        </FooterBottomItem>
                        <FooterBottomItem onClick={() => this.props.setOpenCookieModal(true)}>
                          Manage Cookie
                        </FooterBottomItem>
                        <FooterBottomItem to={"/security"}>
                          <span>Security</span>
                        </FooterBottomItem>
                        {/* <FooterBottomItem to={Route[this.props.lang]["legal/gdpr"]}>
                      {this.props.t.legal_gdpr}
                    </FooterBottomItem> */}
                      </FooterBottomLeft>

                      <FooterBottomRight>
                        <SocialIcon url="http://facebook.com/swapcard" />
                        <SocialIcon url="http://twitter.com/swapcard" />
                        <SocialIcon url="https://www.youtube.com/swapcard" />
                        <SocialIcon url="http://linkedin.com/company/swapcard" />
                        <SocialIcon url="http://instagram.com/swapcard" />
                      </FooterBottomRight>
                    </FooterBottom>
                  </Col>
                </Row>
              </GridLarge>
            </StyledFooter>
          </React.Fragment>
        )}
      />
    );
  }
}
