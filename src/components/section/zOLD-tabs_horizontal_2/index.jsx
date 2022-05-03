import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { StyledTabs } from "./styled";
// import "../../picto";
import { Typo4 } from "../../typographie";
import Icon from "../../icon";

export default ({ ...props }) => (
  <React.Fragment>
    <Grid>
      <StyledTabs>
        <Tabs>
          <TabList>
            {props.data.items.map((item, index) => (
              <Tab key={index}>
                <Icon className={item.picto_class} />
                <Typo4 bold>{item.title.text} </Typo4>
              </Tab>
            ))}
          </TabList>

          <Row>
            <Col md={12} xs={12}>
              {props.data.items.map((item, index) => (
                <TabPanel key={index}>
                  <img src={item.screenshots.url} alt="" className="img-responsive" />
                </TabPanel>
              ))}
            </Col>
          </Row>
        </Tabs>
      </StyledTabs>
    </Grid>
  </React.Fragment>
);
