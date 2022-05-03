import React, { Component } from "react";
// import { HeroWrapperInput, HeroSubmit, HeroInput } from "../styled";
import { exportLocale } from "../../../../localization";
// import { MixpanelConsumer } from "react-mixpanel";
import { analyticsTrack, analyticsRegister } from "../../../utils/segment";
import { ButtonSecondary } from "../../../button";

export default class FormEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // if (this.state.email !== null) {
    // const email = this.state.email;

    // analyticsRegister({
    //   "Submited get started form hero?": true,
    // });

    // localStorage.setItem("get-started-email", this.state.email);
    // document.location.href = exportLocale(this.props.lang).signup_url.url;
    document.location.href = "https://studio.swapcard.com/join";
    // }
  };

  render() {
    return (
      <ButtonSecondary onClick={this.handleSubmit}>
        {exportLocale(this.props.lang).hero.StartFree.button}
      </ButtonSecondary>
      // <MixpanelConsumer>
      //   {mixpanel => (
      //     <form onSubmit={this.handleSubmit(mixpanel)}>
      //       <HeroWrapperInput required="required">
      //         <HeroInput
      //           theme="gray"
      //           required
      //           name="email"
      //           type="email"
      //           placeholder={exportLocale(this.props.lang).hero.email_form.placeholder}
      //           onChange={this.handleChange}
      //         />

      //         <HeroSubmit type="submit">{exportLocale(this.props.lang).hero.email_form.submit}</HeroSubmit>
      //       </HeroWrapperInput>
      //     </form>
      //   )}
      // </MixpanelConsumer>
    );
  }
}
