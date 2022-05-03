import React, { Component } from "react";
import { NavbarDropdown, NavbarItem, NavbarIcon } from "./styled";
import onClickOutside from "react-onclickoutside";

class NavDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen
    }));
  }

  handleClickOutside = evt => {
    this.setState({
      isDropdownOpen: false
    });
  };

  render() {
    return (
      <div style={{ position: "relative" }}>
        <NavbarItem onClick={e => this.handleClick()}>
          {this.props.title}
          <NavbarIcon className="icons8-drop-down-arrow" />
        </NavbarItem>
        <NavbarDropdown
          padding={this.props.padding}
          widthDropdown={this.props.widthDropdown}
          className={`${this.state.isDropdownOpen ? "active" : ""}`}
        >
          {this.props.children}
        </NavbarDropdown>
      </div>
    );
  }
}

export default onClickOutside(NavDropdown);
