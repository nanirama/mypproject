import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import { Row, Col } from "react-flexbox-grid";
import { GridLarge } from "../utils/grid";

import WebinarImg from "../../assets/images/home/headerbg1.png";
import ScheduleImg from "../../assets/images/home/headerbg2.png";
import SignupImg from "../../assets/images/home/headerbg3.png";

import { GuideBlk, Title, GuideItem, LinkText, GuideText } from "./styled";

const Guide = ({ data }) => {
  const { items, primary } = data;
  const checkLinkHandler = (string) => {
    if (/(http(s?)):\/\//i.test(string)) {
      return true;
    } else {
      return false;
    }
  };
  const HEXtoRGB = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };
  return (
    <>
      <GuideBlk>
        <GridLarge>
          <Title style={{ textAlign: "center" }}>{primary.heading.text}</Title>
          <Row>
            {items &&
              items.map((item, index) => {
                return (
                  <Col md={4} key={index}>
                    <GuideItem>
                      <LinkText
                        guideColorR={HEXtoRGB(item.color).r}
                        guideColorG={HEXtoRGB(item.color).g}
                        guideColorB={HEXtoRGB(item.color).b}
                      >
                        <img src={item.image.fluid.src} alt="" />
                        {checkLinkHandler(item.link) ? (
                          <a href={item.link} target="_blank">
                            <span>
                              {item.article_title.text}{" "}
                              <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.7834 18.2L19.4834 10.5"
                                  stroke="white"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M1.94472 10.3443H18.5895"
                                  stroke="white"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.7834 2.7998L19.4834 10.4998"
                                  stroke="white"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                          </a>
                        ) : (
                          <Link to={`/${item.link}/`}>
                            <span>
                              {item.article_title.text}{" "}
                              <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.7834 18.2L19.4834 10.5"
                                  stroke="white"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M1.94472 10.3443H18.5895"
                                  stroke="white"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11.7834 2.7998L19.4834 10.4998"
                                  stroke="white"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                          </Link>
                        )}
                      </LinkText>
                      <GuideText>{item.idesc.text}</GuideText>
                    </GuideItem>
                  </Col>
                );
              })}
          </Row>
        </GridLarge>
      </GuideBlk>
    </>
  );
};

export default Guide;

export const query = graphql`
  fragment guideYou on PrismicHomeTemplate1 {
    data {
      bodyMain {
        ... on PrismicHomeTemplate1BodyMainGuideYouSection {
          id
          slice_type
          primary {
            heading {
              text
              html
            }
          }
          items {
            color
            link
            article_title {
              text
              html
            }
            idesc: description {
              text
              html
            }
            image {
              fluid(maxWidth: 400) {
                src
              }
            }
          }
        }
      }
    }
  }
`;
