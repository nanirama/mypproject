import React, { Component } from "react";
import HubspotForm from "react-hubspot-form";
import { HubspotStyle } from "./styled";
import { Cookies } from "react-cookie";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.cookies = new Cookies();
  }

  componentDidMount() {
    // if (typeof window !== "undefined") {
    //   window.location = Route[this.props.lang]["about/contact/sales/v2"];
    //   window.addEventListener("message", event => {
    //     if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmit") {
    //       const firstName = getFormValue(document.getElementsByName("firstname"));
    //       const lastName = getFormValue(document.getElementsByName("lastname"));
    //       const email = getFormValue(document.getElementsByName("email"));
    //       const eventType = getFormValue(document.getElementsByName("type_of_event"));
    //       const eventName = getFormValue(document.getElementsByName("event_name"));
    //       const exhibitors = getFormValue(document.getElementsByName("how_many_exhibitors_do_you_have_"));
    //       const isAgency = getFormValue(document.getElementsByName("are_you_an_agency_"));
    //       analyticsIdentify(email);
    //       const properties = {
    //         "Contact Request - Event name": eventName,
    //         "Contact Request - Type of event": eventType,
    //         "Contact Request - # Attendees": nbAttendees,
    //         "Contact Request - # Exhibitors": nbExhibitors,
    //         "Contact Request - Language": this.props.lang,
    //         "Contact Request - Agency": isAgency,
    //         "Contact Requested": true
    //       };
    //       const peopleTracking = {
    //         email: email,
    //         firstName,
    //         lastName,
    //         phone: phone,
    //         ...properties
    //       };
    //       analyticsPeopleSet({
    //         email,
    //         firstName,
    //         lastName,
    //         phone: phone,
    //         ...properties
    //       });
    //       analyticsRegister({
    //         "Contact Requested": true
    //       });
    //     }
    //   });
    // }
  }

  render() {
    const hubspot =
      process.env.NODE_ENV === "development" ? "b2497d15-1b29-41c5-8c25-771f4a6d2203" : this.props.data.hubspot_id;

    return (
      <React.Fragment>
        <HubspotStyle>
          <HubspotForm portalId="3004554" formId={hubspot} css="yes" onReady={(form) => console.log(form)} />
        </HubspotStyle>
      </React.Fragment>
    );
  }
}
