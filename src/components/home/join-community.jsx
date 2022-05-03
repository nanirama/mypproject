import React, { Component } from "react";
import Image from "gatsby-image";
import { graphql, Link } from "gatsby";
import { Row, Col } from "react-flexbox-grid";
import { GridLarge } from "../utils/grid";
import { ButtonSecondary } from "../button/index";
import EvolveImg from "../../assets/images/home/evolve-logo.png";

import { JoinBlk, Title, JoinText } from "./styled";

const JoinCommunity = ({ data }) => {
  const checkLinkHandler = (string) => {
    if (/(http(s?)):\/\//i.test(string)) {
      return true;
    } else {
      return false;
    }
  };
  const { heading, description, image, button_text, button_link } = data.primary;
  return (
    <>
      <JoinBlk>
        <GridLarge>
          <Row middle="xs">
            <Col md={3}>
              <Image fluid={image.fluid} />
            </Col>
            <Col md={9}>
              <JoinText>
                <Title style={{ color: "#fff" }}>{heading.text}</Title>
                <div className="joinspan" dangerouslySetInnerHTML={{ __html: description.html }}></div>
                {checkLinkHandler(button_link) ? (
                  <a className="linksecondary" href={button_link}>
                    {button_text}
                  </a>
                ) : (
                  <Link to={`/${button_link}/`} className="linksecondary">
                    {button_text}
                  </Link>
                )}
              </JoinText>
            </Col>
          </Row>
        </GridLarge>
      </JoinBlk>
    </>
  );
};

export default JoinCommunity;

export const query = graphql`
  fragment swapcardInAction on PrismicHomeTemplate1 {
    data {
      bodyMain {
        ... on PrismicHomeTemplate1BodyMainSwapcardInAction {
          id
          slice_type
          primary {
            heading {
              text
              html
            }
            description {
              text
              html
            }
            image {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }
            button_text
            button_link
          }
        }
      }
    }
  }
`;
