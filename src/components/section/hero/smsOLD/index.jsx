import React, { Component } from "react";
// import { HeroWrapperInput, HeroSubmit, HeroInput } from "../styled";
// import { exportLocale } from "../../../../localization";
// import { MixpanelConsumer } from "react-mixpanel";
import faker from "faker";
import { analyticsIdentify, analyticsPeopleSet } from "../../../utils/segment";

export default class SMSForm extends Component {
  constructor(props) {
    super(props);
    this.state = { phone: "", formSend: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (typeof document !== "undefined") {
      const script = document.createElement("script");

      const scriptText = document.createTextNode(
        `if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        location.replace("https://itunes.apple.com/fr/app/swapcard/id879488719?mt=8");
        } else if (/Android/i.test(navigator.userAgent)) {
            location.replace("https://play.google.com/store/apps/details?id=com.swapcard.apps.android&hl=fr");
        }
      `
      );

      script.appendChild(scriptText);
      document.head.appendChild(script);
    }
  }

  handleSubmit = (mixpanel) => (e) => {
    e.preventDefault();

    if (this.state.phone !== "") {
      analyticsPeopleSet(mixpanel, ["sms"], {
        phone: this.state.phone,
        name: faker.name.findName(),
        email: faker.internet.email(),
        lang: this.props.lang,
      });

      this.setState({ formSend: true });

      this.setState({ phone: "" });
    }
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        {/* <MixpanelConsumer>
          {mixpanel => (
            <form onSubmit={this.handleSubmit(mixpanel)}>
              <HeroWrapperInput required="required">
                <HeroInput
                  theme="gray"
                  name="phone"
                  placeholder={exportLocale(this.props.lang).download_app.phone}
                  onChange={this.handleChange}
                  value={this.state.phone}
                />

                <HeroSubmit type="submit">
                  {this.state.formSend
                    ? exportLocale(this.props.lang).download_app.button_sent
                    : exportLocale(this.props.lang).download_app.button}
                </HeroSubmit>
              </HeroWrapperInput>
            </form>
          )}
        </MixpanelConsumer> */}
      </React.Fragment>
    );
  }
}
