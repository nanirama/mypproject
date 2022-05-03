import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { graphql } from "gatsby";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

export const StyledTabs = styled.div`
  .react-tabs__tab-list {
    display: flex;
    margin-bottom: 20px;
  }

  .react-tabs__tab {
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    &:hover {
      background: rgba(18, 52, 86, 0.02);
      cursor: pointer;
    }
    h4 {
    }
  }

  .react-tabs__tab--selected {
    border-radius: 2px;
    background: ${props => props.theme.color.success};
    &:hover {
      background: ${props => props.theme.color.success};
    }
    color: #fff;
  }

  .react-tabs__tab--selected h5 {
    font-weight: 700;
  }

  .react-tabs__tab-panel {
    /* min-height: 620px; */
    opacity: 0;
    display: none;
  }

  .react-tabs__tab-panel--selected {
    opacity: 1;
    display: block;
  }
`;

export default ({ ...props }) => (
  <Grid>
    <Row center="xs">
      <Col md={12} xs={12}>
        <StyledTabs>
          <Tabs>
            <TabList>
              {props.data.items.map((item, index) => (
                <Tab key={index}>{item.checkbox_text}</Tab>
              ))}
            </TabList>
            {props.data.items.map((item, index) => (
              <TabPanel key={index}>
                <iframe
                  title={item.source}
                  style={{
                    border: "1px solid #eee",
                    margin: "0",
                    padding: "20px",
                    width: "100%",
                    display: "block",
                    height: "calc(100vh - 100px)",
                    backgroundColor: "#fdfdfd"
                  }}
                  src={item.source}
                />
              </TabPanel>
            ))}
          </Tabs>
        </StyledTabs>
      </Col>
    </Row>
  </Grid>
);

export const query = graphql`
  fragment iframeFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainIframe {
          slice_type
          items {
            checkbox_text
            source
          }
        }
      }
    }
  }
`;
