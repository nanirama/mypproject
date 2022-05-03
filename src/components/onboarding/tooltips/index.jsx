import React, { Component } from "react";
import { TooltipsWrapper, TooltipsChildren, TooltipsBlock } from "./styled";
import { Cookies } from "react-cookie";

export default class Tooltips extends Component {
  constructor(props) {
    super();
    this.state = {
      showTooltip: false
    };
    this.cookies = new Cookies();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.cookies.get(this.props.keyCookie) !== "true") {
      this.setState({ showTooltip: true });
    }
  }

  handleClick = e => {
    this.cookies.set(this.props.keyCookie, "true", {
      path: "/",
      expires: new Date(Date.now() + 3600 * 24 * 365)
    });
    this.setState({ showTooltip: false });
  };

  render() {
    return (
      <>
        {this.props.actived && this.state.showTooltip ? (
          <TooltipsWrapper onClick={e => this.handleClick()}>
            <TooltipsBlock>{this.props.text}</TooltipsBlock>
            <TooltipsChildren>{this.props.children}</TooltipsChildren>
          </TooltipsWrapper>
        ) : (
          <>{this.props.children}</>
        )}
      </>
    );
  }
}
