import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { FeaturesList, Item, TabsWrapper, ImageZoom } from "./styled";
// import "../../picto";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Typo4, Body } from "../../typographie";
import { Margin } from "styled-components-spacing";
import { ColMiddle } from "../../utils/grid";
import Icon2 from "../../icon";
import { graphql } from "gatsby";
import { GridLarge } from "../../utils/grid";

export default ({ ...props }) => (
  <React.Fragment>
    <GridLarge>
      <TabsWrapper>
        <Tabs forceRenderTabPanel>
          <Row center="xs" middle="xs">
            <ColMiddle lg={7} xs={12}>
              <TabList>
                <FeaturesList>
                  {props.data.items.map((item, index) => (
                    <Tab key={index}>
                      <Item>
                        <Icon2 className={item.picto_class} />
                        <Margin top={{ xs: "4", md: "2" }} bottom={{ xs: "3", md: "2" }}>
                          <Typo4 bold>{item.title.text}</Typo4>
                        </Margin>
                        <Body>{item.subtitle.text}</Body>
                      </Item>
                    </Tab>
                  ))}
                </FeaturesList>
              </TabList>
            </ColMiddle>
            <Col lg={4} mdOffset={1} xs={12}>
              <div className="hideMobile">
                {props.data.items.map((item, index) => (
                  <TabPanel key={index}>
                    <ImageZoom zoom={item.zoom_image} src={item.screenshots.url} />
                  </TabPanel>
                ))}
              </div>
            </Col>
          </Row>
        </Tabs>
      </TabsWrapper>
    </GridLarge>
  </React.Fragment>
);

export const query = graphql`
  fragment featuresOverviewPicto on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainFeaturesOverviewScreenshots {
          slice_type
          items {
            title {
              text
            }
            subtitle {
              text
            }
            picto_class
            zoom_image
            screenshots {
              url
            }
          }
        }
      }
    }
  }
`;
