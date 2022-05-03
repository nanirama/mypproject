import React, { Component } from "react";
import HubspotForm from "react-hubspot-form";
import { Cookies } from "react-cookie";
import { HubspotStyle } from "./styled";

export default class FormDemo extends Component {
  constructor(props) {
    super(props);
    this.cookies = new Cookies();
  }

  async componentDidMount() {
    // if (typeof window !== "undefined") {
    //   window.addEventListener("message", event => {
    //     if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmit") {
    //       const firstName = getFormValue(document.getElementsByName("firstname"));
    //       const lastName = getFormValue(document.getElementsByName("lastname"));
    //       const email = getFormValue(document.getElementsByName("email"));
    //       const phone = getFormValue(document.getElementsByName("phone"));
    //       const eventType = getFormValue(document.getElementsByName("type_of_event"));
    //       const eventName = getFormValue(document.getElementsByName("event_name"));
    //       const nbAttendees = getFormValue(document.getElementsByName("number_of_attendees"));
    //       const nbExhibitors = getFormValue(document.getElementsByName("how_many_exhibitors_do_you_have_"));
    //       const isAgency = getFormValue(document.getElementsByName("are_you_an_agency_"));
    //       analyticsIdentify(email);
    //       const properties = {
    //         "Demo Request - Event name": eventName,
    //         "Demo Request - Type of event": eventType,
    //         "Demo Request - # Attendees": nbAttendees,
    //         "Demo Request - # Exhibitors": nbExhibitors,
    //         "Demo Request - Agency": isAgency,
    //         "Demo Request - Language": this.props.lang,
    //         "Demo Requested": true
    //       };
    //       const peopleTracking = {
    //         email: email,
    //         firstName,
    //         lastName,
    //         phone: phone,
    //         ...properties
    //       };
    //       analyticsPeopleSet(peopleTracking);
    //       analyticsRegister({
    //         "Demo Requested": true
    //       });
    //     }
    //   });
    // }
  }

  render() {
    const hubspot =
      process.env.NODE_ENV === "development" ? "0f594600-f601-4037-a210-10e6e312da18" : this.props.t.form_id;

    return (
      <HubspotStyle>
        <HubspotForm portalId="3004554" formId={hubspot} css={false} />
      </HubspotStyle>
    );
  }
}
