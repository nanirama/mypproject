import React, { Component } from "react";
import { StyledCheckbox, Wrapper, CheckboxText } from "./styled";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };
  render() {
    return (
      <Wrapper>
        <label for="checkbox">
          <CheckboxText dangerouslySetInnerHTML={{ __html: `${this.props.textLabel}` }} />
          <StyledCheckbox
            onChange={this.props.onChange}
            defaultChecked={this.state.isChecked ? "checked" : ""}
            required={this.props.required}
            type="checkbox"
          />
        </label>
        <br style={{ clear: "both", margin: "0", padding: "0" }} />
      </Wrapper>
    );
  }
}
