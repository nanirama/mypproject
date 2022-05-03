import React, { Component } from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import Sidebar from "./sidebar";
import Questions from "./questions";
import lodash from "lodash";
import { ColHideMobile } from "../../utils/grid";

export default class FaqAttendify extends Component {
  constructor(props) {
    super(props);
    this.oldElement = "";
    this.state = {};
  }

  callbackFromQuestions = (dataFromChild) => {
    this.setState(dataFromChild);
  };

  render() {
    const sidebar = this.props.data.items.filter((item) => item.is_title_ === "Yes");
    //From all questions get all not visible blocks
    const visibleElementList = lodash.pickBy(this.state, (v) => !v);

    //Get the first element that is not visible
    let visibleElement = Object.keys(visibleElementList)[0];

    if (Object.keys(visibleElementList).length === 0) {
      visibleElement = Object.keys(this.state)[Object.keys(this.state).length - 1];
    }

    if (
      typeof window !== "undefined" &&
      this.oldElement !== visibleElement &&
      window.location.hash !== "#undefined" &&
      typeof visibleElement !== "undefined"
    ) {
      // window.history.replaceState(null, null, "#" + visibleElement);
    }

    this.oldElement = visibleElement;

    const groupedById = lodash.groupBy(this.props.data.items, "group_id");

    return (
      <Grid>
        <Row>
          <ColHideMobile md={3}>
            <Sidebar activeElement={visibleElement} data={sidebar} />
          </ColHideMobile>
          <Col lg={8} xs={12}>
            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              {Object.keys(groupedById).map((item, key) => (
                <Questions key={key} callback={this.callbackFromQuestions} group={item} data={groupedById[item]} />
              ))}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export const query = graphql`
  fragment faqAttendifyFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainFaqAttendify {
          slice_type
          items {
            is_title_
            group_id
            title {
              text
            }
            answer {
              html
            }
          }
        }
      }
    }
  }
`;
