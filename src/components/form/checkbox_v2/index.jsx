import * as React from "react";
import { Wrapper, Circle } from "./styled";

const change = (onChange, value, disabled, loading) => e => {
  e.preventDefault();
  e.stopPropagation();
  if (!disabled && !loading) {
    onChange(!value);
  }
};

const ToggleButtonUI = ({ disabled, checked, onChange, loading, bgColor, buttonColor }) => (
  <Wrapper
    disabled={disabled}
    bgColor={bgColor}
    loading={loading}
    onClick={change(onChange, checked, disabled, loading)}
    checked={checked}
  >
    <Circle disabled={disabled} buttonColor={buttonColor} checked={checked} loading={loading} />
  </Wrapper>
);

export default ToggleButtonUI;
