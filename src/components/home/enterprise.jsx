import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import { PrismicRichText } from "@prismicio/react";
import { Row, Col } from "react-flexbox-grid";

import {
  EnterpriseBlk,
  Container,
  TitleLarge,
  EnterpriseLeft,
  EnterpriseList,
  Secure,
  Logos,
  LogoImg,
  SecureImg,
} from "./styled";

import { ButtonSecondary, StyledAnchorBorderGrey } from "../button/index";

import EnterpriseImg from "../../assets/images/home/enterprise-img.png";
import SecureIcon from "../../assets/images/home/secure.png";
import Google from "../../assets/images/home/google.png";
import Ibm from "../../assets/images/home/ibm.png";
import BlackHat from "../../assets/images/home/blackhat.png";
import Qualys from "../../assets/images/home/qualys.png";

const EnterPrise = ({ data }) => {
  const { items, primary } = data;
  return (
    <>
      <EnterpriseBlk>
        <Container>
          <Row className="sm-reverse">
            <Col md={6}>
              <EnterpriseList>
                <TitleLarge>{primary.heading.text} </TitleLarge>
                <PrismicRichText
                  field={primary.edesc.raw}
                  components={{
                    // heading1: ({ children }) => <Heading>{children}</Heading>,
                    // paragraph: ({ children }) => <Paragrph>{children}</Paragrph>,
                    listItem: ({ children }) => (
                      <li>
                        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M2.0835 8.99984L9.16683 16.0832L23.3335 1.9165"
                            stroke="#00CC88"
                            stroke-width="2.75"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        {children}
                      </li>
                    ),
                  }}
                />
                <Link className="linksecondary" to={`/${primary.button_link}`}>
                  {primary.button_text}
                </Link>
              </EnterpriseList>
            </Col>
            <Col md={6}>
              <EnterpriseLeft>
                <Secure>
                  <img src={SecureIcon} alt="" /> {primary.surpressing_text}
                </Secure>

                <img src={primary.block_image.fluid.src} alt="" />

                <Logos>
                  {items &&
                    items.map((item, index) => (
                      <LogoImg key={index}>
                        <Image fixed={item.sub_logo.fixed} />
                      </LogoImg>
                    ))}
                </Logos>
              </EnterpriseLeft>
            </Col>
          </Row>
        </Container>
      </EnterpriseBlk>
    </>
  );
};

export default EnterPrise;

export const query = graphql`
  fragment enterpriseSection on PrismicHomeTemplate1 {
    data {
      bodyMain {
        ... on PrismicHomeTemplate1BodyMainEnterpriseReadySection {
          id
          slice_type
          primary {
            heading {
              text
              html
            }
            edesc: description {
              text
              raw
              html
            }
            surpressing_text
            button_text
            button_link
            block_image {
              fluid(maxWidth: 432) {
                src
              }
            }
          }
          items {
            sub_logo {
              fixed(width: 51) {
                src
                ...GatsbyPrismicImageFixed_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
