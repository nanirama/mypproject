import React, { Component } from "react";
import HubspotForm from "../../../form/hubspot";
import { graphql } from "gatsby";
import styled from "styled-components";

export const FormWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const Questions = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: ${props => props.theme.fontSize.typo4};
`;

export default class LandingForm extends Component {
  // componentDidMount() {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("message", event => {
  //       if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmit") {
  //         const firstname = document.getElementsByName("firstname")[0].value;
  //         const lastname = document.getElementsByName("lastname")[0].value;
  //         const email = document.getElementsByName("email")[0].value;
  //       }
  //     });
  //   }
  // }

  render() {
    const primary = this.props.data.primary;
    return (
      <div style={{ backgroundColor: primary.background_odd === "Yes" ? "rgb(249, 250, 252)" : null }}>
        <FormWrapper>
          <HubspotForm
            centerSubmit={true}
            hubspot_id={this.props.data.primary.hubspot_id}
            hubspot_dev_id={this.props.data.primary.hubspot_dev_id}
          />
        </FormWrapper>
        {/* {this.props.data.primary.questions.text !== "" && (
          <Questions>{this.props.data.primary.questions.text}</Questions>
        )} */}
      </div>
    );
  }
}

export const query = graphql`
  fragment landingFormFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainFormQuoteExhibitors {
          slice_type
          primary {
            background_odd
            hubspot_id
            hubspot_dev_id
            questions {
              text
            }
          }
        }
      }
    }
  }
`;
