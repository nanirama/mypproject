import React, { Component } from "react";
import { HeroWrapperInput, HeroSubmit, HeroInput } from "../styled";
import { MixpanelConsumer } from "react-mixpanel";
// import { analyticsTrack, analyticsRegister } from "../../../utils/segment";

export default class FormFree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  handleSubmit = mixpanel => e => {
    e.preventDefault();

    if (this.state.email !== null) {
      document.location.href = "https://calendly.com/swapcardwebinars/confex/?email=" + this.state.email;
    }
  };

  render() {
    return (
      <MixpanelConsumer>
        {mixpanel => (
          <form onSubmit={this.handleSubmit(mixpanel)}>
            <HeroWrapperInput required="required">
              <HeroInput
                theme="gray"
                required
                name="email"
                type="email"
                placeholder="Enter your email to schedule a meeting"
                onChange={this.handleChange}
              />

              <HeroSubmit type="submit">Meet Us at Expo! Expo!</HeroSubmit>
            </HeroWrapperInput>
          </form>
        )}
      </MixpanelConsumer>
    );
  }
}
