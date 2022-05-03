import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import { Row, Col } from "react-flexbox-grid";
import { GridLarge } from "../utils/grid";
import { EventsBlk, TitleLarge, EventItem, EventText } from "./styled";

const Events = ({ data }) => {
  const { items, primary } = data;
  return (
    <>
      <EventsBlk>
        <GridLarge>
          <TitleLarge style={{ textAlign: "center" }}>{primary.heading.text}</TitleLarge>
          <Row>
            {items &&
              items.map((item, index) => {
                return (
                  <Col className="itembox" md={4} key={index}>
                    <EventItem eventBgcolor={item.color}>
                      <span>&nbsp;</span>
                      <Image fluid={item.image.fluid} />
                      {/* <img src={item.image.fluid.src} /> */}
                      <EventText>
                        <h4>{item.article_title.text}</h4>
                        <p>{item.description}</p>
                        <Link className="buttonlink" to={`/${item.button_link}`}>
                          {item.button_text}
                        </Link>
                      </EventText>
                    </EventItem>
                  </Col>
                );
              })}
          </Row>
        </GridLarge>
      </EventsBlk>
    </>
  );
};

export default Events;

export const query = graphql`
  fragment createSmartEvents on PrismicHomeTemplate1 {
    data {
      bodyMain {
        ... on PrismicHomeTemplate1BodyMainCreateSmartEventsSection {
          id
          slice_type
          primary {
            heading {
              text
              html
            }
          }
          items {
            article_title {
              text
              html
            }
            button_link
            button_text
            color
            description
            image {
              fluid(maxWidth: 500) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }
          }
        }
      }
    }
  }
`;
