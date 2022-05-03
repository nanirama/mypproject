import React from "react";
import Image from "gatsby-image";
import {
  ProductionBlk,
  ContentBlock,
  Container,
  TitleLarge,
  Paragraph,
  ImageBlock,
  Image1,
  Image2,
  EngageText,
  Image3,
  Image4,
  Image5,
  Image6,
  ImageBlock2,
  ImageBlock3,
  InfoBlock,
  InfoText,
} from "./styled";
import { Row, Col } from "react-flexbox-grid";
import { PrismicRichText } from "@prismicio/react";

import AnalyticsImg from "../../assets/images/home/analytics-img.png";
import Skyforce from "../../assets/images/home/skyforce.png";
import Hubspot from "../../assets/images/home/hubspot.png";
import { ButtonSecondary } from "../button/index";
import ClientReviews from "./clientreviews";

const ProductionSection = ({ data }) => {
  const {
    event_production_heading,
    event_production_description,
    event_production_image,
    event_production_image_2,
    event_client_review,
  } = data;
  const { engage_title, engage_description, engage_image, engage_client_reviews } = data;
  const {
    drive_value_heading,
    drive_value_description,
    drive_value_image,
    drive_value_review,
    drive_sub_image_1,
    drive_sub_image_2,
  } = data;
  return (
    <>
      <ProductionBlk>
        <ContentBlock>
          <Container>
            <Row>
              <Col md={6}>
                <TitleLarge>{event_production_heading.text}</TitleLarge>
                {event_production_description && (
                  <div
                    className="richparagraph"
                    dangerouslySetInnerHTML={{ __html: event_production_description.html }}
                  ></div>
                )}

                <ClientReviews data={event_client_review.document.data} />
              </Col>
              <Col md={6}>
                <ImageBlock>
                  <Image1>
                    <Image fluid={event_production_image.fluid} />
                    {/* <img src={event_production_image.fluid.src} alt="" /> */}
                  </Image1>
                  {/* <Image2>
                    <img src={event_production_image_2.fluid.src} alt="" />
                  </Image2> */}
                </ImageBlock>
              </Col>
            </Row>
          </Container>
        </ContentBlock>
        <ContentBlock>
          <Container>
            <Row className="sm-reverse">
              <Col md={6}>
                <EngageText>
                  <TitleLarge>{engage_title.text}</TitleLarge>
                  {/* {engage_description.html} */}
                  <div className="richparagraph" dangerouslySetInnerHTML={{ __html: engage_description.html }}></div>
                  {/* <Paragraph>Our AI drives more networking opportunities, creating <b>more qualified leads</b> for you & your sponsors</Paragraph> */}

                  <ClientReviews data={engage_client_reviews.document.data} svg="svg" />
                  {/* <PurpleText>
                                    <p>Wow, I’m trying to make some pre-event connections...and I gotta say that this event app is the best I’ve ever used.<br />
                                        <b>– Attendee at HLTH, LinkedIn Review</b></p>
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 13L6 11.5C6 10.1193 4.88071 9 3.5 9V9C2.11929 9 1 10.1193 1 11.5L0.999999 17" stroke="#E3DEFF" stroke-width="2" stroke-linecap="round" />
                                        <path d="M14 13L14 11.5C14 10.1193 15.1193 9 16.5 9V9C17.8807 9 19 10.1193 19 11.5L19 17" stroke="#E3DEFF" stroke-width="2" stroke-linecap="round" />
                                        <path d="M1 17L6 17" stroke="#E3DEFF" stroke-width="2" stroke-linecap="round" />
                                        <path d="M19 17L14 17" stroke="#E3DEFF" stroke-width="2" stroke-linecap="round" />
                                        <circle cx="3.5" cy="3.5" r="2.5" stroke="#E3DEFF" stroke-width="2" />
                                        <path d="M11.5547 10.1679C11.0952 9.8616 10.4743 9.98577 10.1679 10.4453C9.8616 10.9048 9.98577 11.5257 10.4453 11.8321L11.5547 10.1679ZM13.4453 13.8321C13.9048 14.1384 14.5257 14.0142 14.8321 13.5547C15.1384 13.0952 15.0142 12.4743 14.5547 12.1679L13.4453 13.8321ZM10.4453 11.8321L13.4453 13.8321L14.5547 12.1679L11.5547 10.1679L10.4453 11.8321Z" fill="#E3DEFF" />
                                        <path d="M6.5547 12.1679C6.09517 11.8616 5.4743 11.9858 5.16795 12.4453C4.8616 12.9048 4.98577 13.5257 5.4453 13.8321L6.5547 12.1679ZM8.4453 15.8321C8.90483 16.1384 9.5257 16.0142 9.83205 15.5547C10.1384 15.0952 10.0142 14.4743 9.5547 14.1679L8.4453 15.8321ZM5.4453 13.8321L8.4453 15.8321L9.5547 14.1679L6.5547 12.1679L5.4453 13.8321Z" fill="#E3DEFF" />
                                        <circle cx="16.5" cy="3.5" r="2.5" stroke="#E3DEFF" stroke-width="2" />
                                    </svg>

                                </PurpleText> */}
                </EngageText>
              </Col>
              <Col md={6}>
                <ImageBlock2>
                  <Image3>
                    <Image fluid={engage_image.fluid} />
                  </Image3>
                  {/* <InfoBlock>
                                    <InfoText>
                                        <img src={MiaImg} alt="" />
                                        <p><b>Mia Masson</b><br />
                                            Head of Content<br />
                                            <span><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.9" d="M3.79005 0.324749C3.88855 0.172387 4.11145 0.172388 4.20995 0.32475L5.31594 2.03552C5.34968 2.0877 5.40163 2.12545 5.46168 2.14141L7.43049 2.66461C7.60584 2.71121 7.67471 2.92319 7.56025 3.06396L6.27498 4.64448C6.23578 4.69269 6.21593 4.75376 6.21931 4.8158L6.33011 6.84994C6.33998 7.0311 6.15965 7.16211 5.99041 7.09674L4.09007 6.36279C4.03211 6.3404 3.96789 6.3404 3.90993 6.36279L2.00959 7.09674C1.84035 7.16211 1.66002 7.0311 1.66989 6.84994L1.78069 4.8158C1.78407 4.75376 1.76422 4.69269 1.72502 4.64448L0.439752 3.06396C0.325285 2.92319 0.394163 2.71121 0.569506 2.66461L2.53832 2.14141C2.59837 2.12545 2.65032 2.0877 2.68406 2.03552L3.79005 0.324749Z" fill="#8060E0" />
                                            </svg>VIP Attendee</span></p>
                                    </InfoText>
                                    <ButtonSecondary className="btn" style={{ borderRadius: "32px", padding: "4px 25px", width: "100%", fontSize: "12px" }}>Connect <svg width="14" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 4L4 6.5L9 1.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></ButtonSecondary>
                                </InfoBlock> */}
                </ImageBlock2>
              </Col>
            </Row>
          </Container>
        </ContentBlock>
        <ContentBlock>
          <Container>
            <Row>
              <Col md={5}>
                <TitleLarge>{drive_value_heading.text}</TitleLarge>
                <div className="richparagraph" dangerouslySetInnerHTML={{ __html: drive_value_description.html }}></div>
                {/* <Paragraph><b>10x your attendee value</b> by engaging them along a curated  journey powered by data</Paragraph> */}

                <ClientReviews data={drive_value_review.document.data} svg="svg" />
                {/* <LightBlueText>
                                <p>We improved our adoption rate from 15% to 75% thanks to Swapcard.<br />
                                    <b>– Kevin H. , Senior Marketing Manager</b></p>
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.48629 1.37179C7.48241 1.09179 7.70867 0.861553 7.99202 0.857114C8.13089 0.855033 8.26472 0.90853 8.36302 1.00548C8.46132 1.10243 8.51571 1.23457 8.51381 1.37179V1.87947H14.679C14.8642 1.87688 15.0366 1.97307 15.13 2.13121C15.2234 2.28935 15.2234 2.48494 15.13 2.64308C15.0366 2.80122 14.8642 2.89742 14.679 2.89483V10.51C14.679 11.071 14.2191 11.5253 13.6514 11.5253H9.65071L10.4926 13.0702C10.8385 13.1526 11.0823 13.4583 11.0826 13.8099C11.0826 14.2305 10.7376 14.5714 10.312 14.5714C9.88637 14.5714 9.54134 14.2305 9.54134 13.8099C9.54155 13.722 9.55716 13.6347 9.5875 13.5521L8.48371 11.5253H7.51639L6.4126 13.5521C6.44293 13.6347 6.45855 13.722 6.45876 13.8099C6.45876 14.2305 6.11373 14.5714 5.68811 14.5714C5.2625 14.5714 4.91747 14.2305 4.91747 13.8099C4.91775 13.4583 5.16159 13.1526 5.50749 13.0702L6.34938 11.5253H2.34866C1.78095 11.5253 1.32113 11.071 1.32113 10.51V2.89483C1.13585 2.89742 0.963508 2.80122 0.870103 2.64308C0.776697 2.48494 0.776697 2.28935 0.870103 2.13121C0.963508 1.97307 1.13585 1.87688 1.32113 1.87947H7.48629V1.37179ZM13.63 2.9143H2.36989V10.2767H13.63V2.9143Z" fill="#F7FEFF" />
                                    <path d="M12.4734 4.56658C12.3729 4.46733 12.2415 4.41785 12.1101 4.41785C11.9787 4.41785 11.8473 4.46733 11.7469 4.56658L9.02754 7.2537L7.8495 6.08961C7.64862 5.89111 7.32389 5.89111 7.12301 6.08961L5.4312 7.76138L4.76692 7.10497C4.56604 6.90646 4.24131 6.90646 4.04043 7.10497C3.83955 7.30347 3.83955 7.62435 4.04043 7.82285L5.06796 8.83821C5.16814 8.9372 5.29968 8.98694 5.4312 8.98694C5.56273 8.98694 5.69427 8.9372 5.79445 8.83821L7.48626 7.16644L8.07528 7.74849L8.6643 8.33053C8.86518 8.52903 9.18991 8.52903 9.39079 8.33053L12.4734 5.28447C12.6743 5.08597 12.6743 4.76508 12.4734 4.56658Z" fill="#F7FEFF" />
                                </svg>
                            </LightBlueText> */}
              </Col>
              <Col md={7}>
                <ImageBlock3>
                  <Image4>
                    <Image fluid={drive_value_image.fluid} />
                  </Image4>
                  {/* <Image5>
                    <img src={Skyforce} alt="" />
                  </Image5>
                  <Image6>
                    <img src={Hubspot} alt="" />
                  </Image6> */}
                </ImageBlock3>
              </Col>
            </Row>
          </Container>
        </ContentBlock>
      </ProductionBlk>
    </>
  );
};

export default ProductionSection;
