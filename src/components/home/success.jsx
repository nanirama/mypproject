import React from "react";
import { graphql, Link } from "gatsby";
import {
  SuccessBlock,
  TitleLarge,
  SuccessItem,
  SImage,
  RightText,
  SpanItems,
  Span,
  ButtonOuter,
  SpanItemsOuter,
} from "./styled";
import { Row, Col } from "react-flexbox-grid";
import { GridLarge } from "../utils/grid";
import Slider from "react-slick";

const SuccessSection = ({ data, tags }) => {
  const checkLinkHandler = (string) => {
    if (/(http(s?)):\/\//i.test(string)) {
      return true;
    } else {
      return false;
    }
  };
  const { primary, items } = data;
  const { heading, button_text, button_link } = primary;
  const settings = {
    centerMode: true,
    infinite: true,
    rows: 1,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 5000,
    variableWidth: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <SuccessBlock>
        <GridLarge style={{ padding: "0 13px" }}>
          <TitleLarge style={{ color: "#fff" }}>{heading.text}</TitleLarge>
          <Row>
            {items &&
              items.map((item, index) => {
                return (
                  <Col md={6} key={index}>
                    <SuccessItem>
                      <SImage>
                        <img src={item.image.fixed.src} alt="" />
                      </SImage>
                      <RightText>
                        <h4>{item.block_heading}</h4>
                        <p>{item.description}</p>
                        {checkLinkHandler(item.link) ? (
                          <a href={`${item.link}`} target="_blank">
                            Learn more{" "}
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.6611 16.4667L17.6278 9.5"
                                stroke="#00CB87"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M1.75954 9.35954H16.8191"
                                stroke="#00CB87"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M10.6611 2.53333L17.6278 9.49999"
                                stroke="#00CB87"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
                        ) : (
                          <Link to={`/${item.link}`}>
                            Learn more{" "}
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.6611 16.4667L17.6278 9.5"
                                stroke="#00CB87"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M1.75954 9.35954H16.8191"
                                stroke="#00CB87"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M10.6611 2.53333L17.6278 9.49999"
                                stroke="#00CB87"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </Link>
                        )}
                      </RightText>
                    </SuccessItem>
                  </Col>
                );
              })}
          </Row>
        </GridLarge>
        <SpanItemsOuter>
          <SpanItems>
            <Slider {...settings}>
              {tags.items &&
                tags.items.map((tag, index) => (
                  <div key={index}>
                    {" "}
                    <Span>
                      <b>+</b> {tag.tag_name}
                    </Span>
                  </div>
                ))}
            </Slider>
          </SpanItems>
          <SpanItems>
            <Slider {...settings}>
              {tags.items &&
                tags.items.reverse().map((tag, index) => (
                  <div key={index}>
                    {" "}
                    <Span>
                      <b>+</b> {tag.tag_name}
                    </Span>
                  </div>
                ))}
            </Slider>
          </SpanItems>
        </SpanItemsOuter>

        <ButtonOuter>
          <Link className="linksecondary" to={`/${button_link}`}>
            {button_text}
          </Link>
        </ButtonOuter>
      </SuccessBlock>
    </>
  );
};
export default SuccessSection;

export const query = graphql`
  fragment eventSuccess on PrismicHomeTemplate1 {
    data {
      bodyMain {
        ... on PrismicHomeTemplate1BodyMainEventSuccessTags {
          id
          slice_type
          items {
            tag_name
          }
        }
        ... on PrismicHomeTemplate1BodyMainEventSuccessSection {
          id
          slice_type
          primary {
            heading {
              text
              html
            }
            button_text
            button_link
          }
          items {
            block_heading
            description
            link
            image {
              fixed(width: 92) {
                src
              }
            }
          }
        }
      }
    }
  }
`;
