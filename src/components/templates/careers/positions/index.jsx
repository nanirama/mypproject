import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Body, Typo2 } from "../../../typographie";
import Section from "../../../utils/section";
import {
  StyledTabs,
  JobsCategoryTitle,
  JobsCategoryPicture,
  JobsCategoryBody,
  JobsLisiting,
  JobsLisitingItem
} from "./styled";
import { Margin } from "styled-components-spacing";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "../../../utils/link";

export default ({ data }) => (
  <React.Fragment>
    <Section gradient>
      <Grid>
        <Row center="xs">
          <Col md={6}>
            <Typo2>{data.position_title.text}</Typo2>
            <Margin top={3}>
              <Body>{data.position_sub_title.text}</Body>
            </Margin>
          </Col>
        </Row>
        <Row>
          <StyledTabs>
            <Tabs>
              <Grid>
                <Row>
                  <Col md={2} xs={12}>
                    <TabList>
                      {data.bodyJobs.map((item, index) => (
                        <Tab key={index}>{item.primary.category.text}</Tab>
                      ))}
                    </TabList>
                  </Col>
                  <Col xs={12} md={10}>
                    {data.bodyJobs.map((item, index) => (
                      <TabPanel key={index}>
                        <Row>
                          <Col md={6} xs={12}>
                            <JobsCategoryTitle>
                              {item.primary.category.text}
                            </JobsCategoryTitle>

                            <JobsCategoryBody
                              dangerouslySetInnerHTML={{
                                __html: `
                                    ${item.primary.category_description.html}
                                `
                              }}
                            />

                            <Margin top={4} bottom={3}>
                              <Body>{item.primary.meet}</Body>
                            </Margin>
                            <JobsLisiting>
                              {item.items.map((jobs, index) => (
                                <JobsLisitingItem key={index}>
                                  <Link to="http://careers.swapcard.com/">
                                    {jobs.job_anchor_link}
                                  </Link>
                                </JobsLisitingItem>
                              ))}
                            </JobsLisiting>
                          </Col>
                          <Col md={6} xs={12}>
                            <JobsCategoryPicture
                              bg={
                                item.primary.category_picture.localFile
                                  .childImageSharp.fluid.src
                              }
                            />
                          </Col>
                        </Row>
                      </TabPanel>
                    ))}
                  </Col>
                </Row>
              </Grid>
            </Tabs>
          </StyledTabs>
        </Row>
      </Grid>
    </Section>
  </React.Fragment>
);
