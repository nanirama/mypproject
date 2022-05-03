import React, { Component } from "react";
import { withTheme } from "styled-components";
import Link from "../../utils/link";
import {
  Navbar,
  NavbarContainer,
  NavbarMobileOpen,
  NavbarMobileClose,
  LogoDesktop,
  LogoMobile,
  NavbarTopNav,
  NewLabel,
  DropdownItem,
  DropdownTitleItem,
  NavbarAction,
  NavbarCenter,
  LogoFlex,
  DropdownArrow,
  DropdownLink,
  LoginMobile,
} from "./styled";
import NavbarDropdown from "./nav-dropdown";
import NavbarItem from "./nav-item";
import logo from "../../../assets/images/Logo/LogoFINAL.svg";
import LogoMobileSVG from "../../../assets/images/Logo/picto_official_RVB2.svg";
import { ButtonSecondary } from "../../button/index";
import Route from "../../../localization";
import MixpanelHelper from "../../utils/segment";
import tp from "../../../localization/tracking.json";
import { exportLocale } from "../../../localization";
import { LinkInternal } from "../../utils/link";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      navBarFixed: false,
      navBarShow: true,
    };

    this.handleClick = this.handleClick.bind(this);
    // this.showChatbot = this.showChatbot.bind(this);
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", (event) => {
        if (window.scrollY >= 70) {
          this.setState({
            navBarFixed: true,
          });
        } else {
          this.setState({
            navBarFixed: false,
          });
        }
      });
    }
  }

  // showChatbot() {
  //   if (typeof window !== "undefined") {
  //     window.$crisp.push([
  //       "do",
  //       "message:send",
  //       ["text", "Hello Crisp! I would like to schedule a demo"]
  //     ]);
  //   }
  // }

  handleClick() {
    const newOpen = !this.state.open;

    this.setState({
      open: newOpen,
    });

    this.props.callbackShowAttendeesBar({ showAttendeesBar: !newOpen });

    if (this.state.open) {
      // document.body.style.overflowY = "hidden";
    } else {
      // document.body.style.overflowY = "auto";
    }
  }

  render() {
    let lang = "/";
    if (this.props.lang === "fr-fr") {
      lang = "/fr/";
    }

    if (this.props.lang === "it-it") {
      lang = "/it/";
    }

    return (
      <React.Fragment>
        <Navbar
          id="navBarScroll"
          menu_color={this.props.menu_color}
          className={`${this.state.navBarFixed ? "fixed" : ""} ${this.state.navBarShow ? "show" : "hide"}`}
        >
          <NavbarContainer>
            <Link to={lang}>
              <LogoMobile src={LogoMobileSVG} />
            </Link>

            {!this.state.open && <NavbarMobileOpen onClick={this.handleClick}>Menu</NavbarMobileOpen>}

            <LoginMobile>
              <MixpanelHelper
                analytics-location={tp["button_location"]["navbar"]}
                analytics-category={tp["button_value"]["login_attendee"]}
                analytics-label={this.props.t.login}
              >
                <ButtonSecondary to="https://login.swapcard.com">{this.props.t.login}</ButtonSecondary>
              </MixpanelHelper>
            </LoginMobile>

            <NavbarTopNav className={`${this.state.open ? "active" : ""}`}>
              <LogoFlex className={`${this.state.open ? "active" : ""}`}>
                <Link to={lang}>
                  <LogoDesktop src={logo} />
                </Link>
              </LogoFlex>

              <NavbarCenter>
                {this.props.t.body1.map((menu, index) => (
                  <React.Fragment key={index}>
                    {menu.primary.navigation_main_link == null ? (
                      <NavbarDropdown title={menu.primary.navigation.text} widthDropdown="450px">
                        {menu.items.map((nav, index) => (
                          <DropdownLink
                            key={index}
                            to={LinkInternal(nav.navigation_link_v2, nav.navigation_link, this.props.lang)}
                          >
                            <DropdownTitleItem>
                              {nav.navigation_item}
                              {nav.new === "Yes" && <NewLabel>{exportLocale(this.props.lang).menu.new}</NewLabel>}
                              <DropdownArrow className="icons8-right-pointing-arrow" />
                            </DropdownTitleItem>
                            <DropdownItem>{nav.navigation_subtitle}</DropdownItem>
                          </DropdownLink>
                        ))}
                      </NavbarDropdown>
                    ) : (
                      <NavbarItem to={menu.primary.navigation_main_link}>{menu.primary.navigation.text}</NavbarItem>
                    )}
                  </React.Fragment>
                ))}
                <>
                  <NavbarItem u={true} to="https://studio.swapcard.com">
                    Signup
                  </NavbarItem>
                </>
                {this.state.open && <NavbarMobileClose onClick={this.handleClick}>Close</NavbarMobileClose>}
              </NavbarCenter>

              <NavbarAction>
                <div className="showMobile">
                  <NavbarDropdown title={this.props.t.login} widthDropdown="350px">
                    <MixpanelHelper
                      analytics-location={tp["button_location"]["navbar"]}
                      analytics-category={tp["button_value"]["login_attendee"]}
                      analytics-label={this.props.t.login_attendees_exhibitors_title}
                    >
                      <DropdownLink to={"https://login.swapcard.com/"}>
                        <DropdownTitleItem>
                          {this.props.t.login_attendees_exhibitors_title}
                          <DropdownArrow className="icons8-right-pointing-arrow" />
                        </DropdownTitleItem>
                        <DropdownItem>{this.props.t.login_attendees_exhibitors_body}</DropdownItem>
                      </DropdownLink>
                    </MixpanelHelper>

                    <MixpanelHelper
                      analytics-location={tp["button_location"]["navbar"]}
                      analytics-category={tp["button_value"]["login_organizer"]}
                      analytics-label={this.props.t.login_organizers_title}
                    >
                      <DropdownLink to="https://studio.swapcard.com/join">
                        <DropdownTitleItem>
                          {this.props.t.login_organizers_title}
                          <DropdownArrow className="icons8-right-pointing-arrow" />
                        </DropdownTitleItem>
                        <DropdownItem>{this.props.t.login_organizers_body}</DropdownItem>
                      </DropdownLink>
                    </MixpanelHelper>
                  </NavbarDropdown>
                </div>
                <div className="hideMobile">
                  {this.props.lang !== "it-it" && (
                    <MixpanelHelper
                      analytics-location={tp["button_location"]["navbar"]}
                      analytics-category={tp["button_value"]["demo_request"]}
                      analytics-label={this.props.t.cta}
                    >
                      <ButtonSecondary to={Route[this.props.lang]["about/contact/sales/v2"]}>
                        {this.props.t.cta}
                      </ButtonSecondary>
                    </MixpanelHelper>
                  )}
                  {this.props.lang === "it-it" && (
                    <MixpanelHelper
                      analytics-location={tp["button_location"]["navbar"]}
                      analytics-category={tp["button_value"]["demo_request"]}
                      analytics-label={this.props.t.cta}
                    >
                      <ButtonSecondary to={Route[this.props.lang]["about/contact/sales/v2"]}>
                        {this.props.t.cta}
                      </ButtonSecondary>
                    </MixpanelHelper>
                  )}
                </div>
                <div className="showMobile">
                  <NavbarDropdown title={this.props.t.lang_current} widthDropdown="100px" padding={20}>
                    <DropdownLink to={Route[this.props.t.lang_1_route][this.props.route]}>
                      <DropdownTitleItem>
                        {this.props.t.lang_1}
                        <DropdownArrow className="icons8-right-pointing-arrow" />
                      </DropdownTitleItem>
                    </DropdownLink>

                    <DropdownLink to={Route[this.props.t.lang_2_route][this.props.route]}>
                      <DropdownTitleItem style={{ marginTop: "10px" }}>
                        {this.props.t.lang_2}
                        <DropdownArrow className="icons8-right-pointing-arrow" />
                      </DropdownTitleItem>
                    </DropdownLink>
                  </NavbarDropdown>
                </div>
              </NavbarAction>
            </NavbarTopNav>
          </NavbarContainer>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default withTheme(Navigation);
