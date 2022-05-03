import React, { Component } from "react";
import styled from "styled-components";
import { Input } from "../input";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.i`
  position: absolute;
  color: #d5d2d9;
  right: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    };
    this.showPassword = this.showPassword.bind(this);
  }

  showPassword() {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Input
            name="password"
            {...this.props}
            type={this.state.showPassword ? "text" : "password"}
          />
          {this.state.showPassword && (
            <Icon onClick={this.showPassword} className="icons8-invisible" />
          )}
          {!this.state.showPassword && (
            <Icon onClick={this.showPassword} className="icons8-visible" />
          )}
        </Wrapper>
      </React.Fragment>
    );
  }
}
