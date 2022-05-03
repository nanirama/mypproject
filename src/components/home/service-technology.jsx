import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
import { Row, Col } from "react-flexbox-grid";

import { SpaceH } from "../space";

import { Container, ServiceBlk, LeftBlk, TitleLarge, SubText, ServiceList } from "./styled";

import { ButtonSecondary } from "../button/index";

import ServiceBg from "../../assets/images/home/service-bg.png";
import ClientReviews from "./clientreviews";

const Technology = ({ data }) => {
  const { primary } = data;
  return (
    <>
      <ServiceBlk>
        <Container>
          <Row>
            <Col md={6}>
              <LeftBlk>
                <TitleLarge>{primary.heading.text}</TitleLarge>
                <div className="subtext" dangerouslySetInnerHTML={{ __html: primary.description.html }}></div>
                <SpaceH of={10} />
                <Link className="linksecondary" to={`/${primary.button_link}`}>
                  {primary.button_text}
                </Link>

                <ClientReviews data={primary.client_review.document.data} svg="svg" />
                {/* <BlueText>
                                    <p>We are grateful for all the support we get from Swapcard, from training our teams, through the planning, execution and support.
                                        <br />
                                        <b>- SVP Events Global, Hyatt</b></p>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="12" fill="#2190CF" />
                                        <path d="M9.37145 13.1998C9.37145 12.3793 8.70628 11.7141 7.88574 11.7141C7.0652 11.7141 6.40002 12.3793 6.40002 13.1998V14.6855C6.40002 15.5061 7.0652 16.1713 7.88574 16.1713C8.70628 16.1713 9.37145 15.5061 9.37145 14.6855V13.1998Z" stroke="#F6FEFF" stroke-width="1.37143" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.2858 13.1998C18.2858 12.3793 17.6206 11.7141 16.8 11.7141C15.9795 11.7141 15.3143 12.3793 15.3143 13.1998V14.6855C15.3143 15.5061 15.9795 16.1713 16.8 16.1713C17.6206 16.1713 18.2858 15.5061 18.2858 14.6855V13.1998Z" stroke="#F6FEFF" stroke-width="1.37143" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.40002 13.2V10.9714C6.40002 9.39528 7.02615 7.88369 8.14065 6.76919C9.25515 5.65469 10.7667 5.02856 12.3429 5.02856C13.919 5.02856 15.4306 5.65469 16.5451 6.76919C17.6596 7.88369 18.2857 9.39528 18.2857 10.9714V13.2" stroke="#F6FEFF" stroke-width="1.37143" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.8 16.1714C16.8 16.7624 16.3304 17.3293 15.4946 17.7472C14.6587 18.1652 13.525 18.4 12.3429 18.4" stroke="#F6FEFF" stroke-width="1.37143" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </BlueText> */}
              </LeftBlk>
            </Col>
            <Col md={6}>
              <ServiceList>
                <img src={ServiceBg} alt="" />

                <PrismicRichText
                  field={primary.highlight_points.raw}
                  components={{
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
              </ServiceList>
            </Col>
          </Row>
        </Container>
      </ServiceBlk>
    </>
  );
};

export default Technology;

export const query = graphql`
  fragment serviceTechPartner on PrismicHomeTemplate1 {
    data {
      bodyMain {
        ... on PrismicHomeTemplate1BodyMainYourServiceTechPartner {
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
            highlight_points {
              raw
              text
              html
            }
            button_text
            button_link
            client_review {
              document {
                ... on PrismicClientReviews {
                  ...clientReviews
                }
              }
            }
          }
        }
      }
    }
  }
`;
