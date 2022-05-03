import React, { Component } from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";

export default class HTMLField extends Component {
  componentDidMount() {
    // const script = document.createElement("script");
    // script.src = "https://www.eventbrite.com.au/static/widgets/eb_widgets.js";
    // script.async = true;
    // document.body.appendChild(script);
  }

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Row center="xs">
            <Col md={12}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${this.props.data.primary.html_text_field}`,
                }}
              />
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  fragment htmlFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainHtmlField {
          slice_type
          primary {
            html_text_field
          }
        }
      }
    }
  }
`;
