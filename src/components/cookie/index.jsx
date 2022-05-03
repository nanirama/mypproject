import React, { Component } from "react";
import { StyledCookie, StyledButton } from "./styled";
import { Cookies } from "react-cookie";
import Link from "../utils/link";
import Route from "../../localization";

export default class Cookie extends Component {
  constructor(props) {
    super(props);
    this.hideCookie = this.hideCookie.bind(this);
    this.cookies = new Cookies();
    this.state = {
      showCookie: false,
    };
  }

  componentDidMount() {
    if (this.cookies.get("acceptCookies") !== "true") {
      this.setState({ showCookie: true });
    }
  }

  hideCookie = (e) => {
    e.preventDefault();
    this.cookies.set("acceptCookies", "true", {
      path: "/",
      expires: new Date(Date.now() + 1000000000000),
    });
    this.setState({ showCookie: false });
  };

  render() {
    const { t, lang } = this.props;
    if (!this.state.showCookie) {
      return null;
    } else {
      return (
        <React.Fragment>
          <StyledCookie>
            {t.cookie_banner}
            <Link to={Route[lang]["legal/cookie"]}>{t.cookie_banner_cta}</Link>

            <StyledButton onClick={this.hideCookie}>{t.cookie_cta_success}</StyledButton>
          </StyledCookie>
        </React.Fragment>
      );
    }
  }
}
