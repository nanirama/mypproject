import React, { Component } from "react";
import { StyledCookie, StyledButton, Title, Text, Bye } from "./styled";
import { Cookies } from "react-cookie";
import { navigate } from "gatsby";
import Link from "../utils/link";
import { SpaceH } from "../space";
import Route from "../../localization";

export default class Corona extends Component {
  constructor(props) {
    super(props);
    this.hideCookie = this.hideCookie.bind(this);
    this.redirect = this.redirect.bind(this);
    this.cookies = new Cookies();
    this.state = {
      showCorona: false
    };
  }

  componentDidMount() {
    if (this.cookies.get("acceptCorona") !== "true") {
      this.setState({ showCorona: true });
    }
  }

  hideCookie = e => {
    e.preventDefault();
    this.cookies.set("acceptCorona", "true", {
      path: "/",
      expires: new Date(Date.now() + 1000000000000)
    });
    this.setState({ showCorona: false });
  };

  redirect = e => {
    e.preventDefault();
    this.cookies.set("acceptCorona", "true", {
      path: "/",
      expires: new Date(Date.now() + 1000000000000)
    });
    this.setState({ showCorona: false });
    // navigate(Route[this.props.lang]["about/contact/sales/v2"]);
    if (this.props.lang === "fr-fr") {
      window.location.href = "https://info.swapcard.com/fr/evenement-virtuel?ref=small_corner_popup";
    } else {
      window.location.href = "https://info.swapcard.com/virtual-events?ref=small_corner_popup";
    }
  };

  render() {
    if (this.props.lang === "fr-fr" || this.props.lang === "en-us") {
      const { t, lang } = this.props;
      if (!this.state.showCorona) {
        return null;
      } else {
        return (
          <React.Fragment>
            <StyledCookie>
              <Bye onClick={this.hideCookie}>
                <i className="icons8-close-button"></i>
              </Bye>
              <Title>{t.corona_title}</Title>
              <SpaceH of={8} />
              <Text
                dangerouslySetInnerHTML={{
                  __html: `${t.corona_texts}`
                }}
              />
              <SpaceH of={8} />
              <div>
                <StyledButton onClick={this.redirect}>{t.corona_cta}</StyledButton>
              </div>
            </StyledCookie>
          </React.Fragment>
        );
      }
    } else {
      return null;
    }
  }
}
