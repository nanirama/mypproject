import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { ColOrder } from "../../utils/grid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { graphql } from "gatsby";
// import Img from "../../image";
import Img from "gatsby-image";
import { StyledTabs, ItemsMobile } from "./styled";
import { Typo4, Body, Typo5 } from "../../typographie";
import { Margin } from "styled-components-spacing";
import { GridLarge } from "../../utils/grid";

export default ({ ...props }) => {
  let propsOrderCol1 = {};
  let propsOrderCol2 = {};

  if (props.data.primary.position === "Left") {
    propsOrderCol1 = {
      order: 2,
      md: 6,
      xs: 12,
      mdOffset: 1,
      imgoffset: "0"
    };

    propsOrderCol2 = {
      order: 1,
      md: 5,
      xs: 12
    };
  }

  if (props.data.primary.position === "Right") {
    propsOrderCol2 = {
      order: 2,
      md: 5,
      mdOffset: 1,
      xs: 12
    };

    propsOrderCol1 = {
      order: 1,
      md: 6,
      xs: 12
    };
  }

  return (
    <div
      style={{
        backgroundColor: "#fff"
      }}
    >
      <GridLarge>
        <div className="hideMobile">
          <StyledTabs>
            <Tabs>
              <Row middle="xs">
                <ColOrder {...propsOrderCol1}>
                  <TabList>
                    {props.data.items.map((item, index) => (
                      <Tab key={index}>
                        <Typo5>{item.title.text}</Typo5>
                        <Margin top={2}>
                          <Body>{item.subtitle.text}</Body>
                        </Margin>
                      </Tab>
                    ))}
                  </TabList>
                </ColOrder>

                <ColOrder {...propsOrderCol2} style={{ height: "580px", display: "flex" }}>
                  {props.data.items.map((item, index) => (
                    <TabPanel key={index}>
                      {/* <ImageZoomItem
                          zoom={item.zoom_image1}
                          offsetItem={item.offset_image1}
                        > */}
                      {/* <SwapImage
                        svg={item.screenshots.url}
                        className="img-responsive"
                        style={{ width: "500px" }}
                        fluidImage={item.screenshots.localFile.childImageSharp}
                      /> */}
                      {/* </ImageZoomItem> */}

                      <Img
                        style={{
                          minWidth: ((item.zoom_image1 ? item.zoom_image1 : 100) / 100) * 480 + "px",
                          marginLeft: item.offset_image1 + "px"
                        }}
                        fluid={item.screenshots.fluid}
                      />
                      {/* <img
                        className="img-responsive"
                        style={{
                          minWidth: ((item.zoom_image1 ? item.zoom_image1 : 100) / 100) * 480 + "px",
                          marginLeft: item.offset_image1 + "px"
                        }}
                        src={item.screenshots.fluid.src}
                      /> */}
                    </TabPanel>
                  ))}
                </ColOrder>
              </Row>
            </Tabs>
          </StyledTabs>
        </div>

        <Row>
          <div className="showMobile" style={{ width: "100%" }}>
            <Col md={4} xs={12} style={{ textAlign: "center" }}>
              {props.data.items.map((item, index) => (
                <ItemsMobile key={index}>
                  <Typo4>{item.title.text}</Typo4>

                  {/* <Margin top={2} bottom={3}>
                    <Body>{item.subtitle.text}</Body>
                  </Margin> */}
                  {/* 
                  <Img
                    className="img-responsive"
                    style={{ margin: "10px auto 0 auto" }}
                    fluid={item.screenshots.fluid}
                  /> */}
                  <img
                    className="img-responsive"
                    style={{ margin: "10px auto 0 auto" }}
                    src={item.screenshots.fluid.src}
                  />
                </ItemsMobile>
              ))}
            </Col>
          </div>
        </Row>
      </GridLarge>
    </div>
  );
};

export const query = graphql`
  fragment tabsVerticalFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainVerticalTabsBigTexts {
          slice_type
          primary {
            position
            offset_image
            zoom_height
          }
          items {
            offset_image1
            zoom_image1
            title {
              text
            }
            subtitle {
              text
            }
            screenshots {
              url
            }

            screenshots {
              fluid(maxWidth: 1300) {
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
