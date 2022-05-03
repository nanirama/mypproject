import React, { Component } from "react";
import Route from "../../../../localization";
import onClickOutside from "react-onclickoutside";
import { LanguagesSelector, LanguagesDropdown, Icon } from "./styled";
import Link from "../../../utils/link";
import FlagFrance from "../../../../assets/images/Flags/FR.svg";
import FlagUS from "../../../../assets/images/Flags/US.svg";
import FlagIT from "../../../../assets/images/Flags/IT.svg";

class LanguagesSwitcher extends Component {
  constructor(props) {
    super(props);
    this.showLanguesSwitcher = this.showLanguesSwitcher.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      hover: false
    };
  }

  showLanguesSwitcher = e => {
    e.preventDefault();
    this.setState(prevState => ({
      hover: !prevState.hover
    }));
  };

  closeModal = e => {
    this.setState({
      hover: false
    });
  };

  handleClickOutside = evt => {
    this.setState({
      hover: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ position: "relative" }}>
          <LanguagesSelector onClick={this.showLanguesSwitcher}>
            <Icon className="icons8-world-map" />
            {this.props.lang === "en-us" && <span>English</span>}
            {this.props.lang === "fr-fr" && <span>Français</span>}
            {this.props.lang === "it-it" && <span>Italiano</span>}
          </LanguagesSelector>
          {this.state.hover && (
            <LanguagesDropdown>
              <li>
                <Link onClick={this.closeModal} to={Route["fr-fr"][this.props.route]}>
                  <img alt="" src={FlagFrance} />
                  <span className="lang">Français</span>
                </Link>
              </li>
              <li>
                <Link onClick={this.closeModal} to={Route["en-us"][this.props.route]}>
                  <img alt="" src={FlagUS} />
                  <span className="lang">English</span>
                </Link>
              </li>
              <li>
                <Link onClick={this.closeModal} to={Route["it-it"][this.props.route]}>
                  <img alt="" src={FlagIT} />
                  <span className="lang">Italiano</span>
                </Link>
              </li>
            </LanguagesDropdown>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default onClickOutside(LanguagesSwitcher);
