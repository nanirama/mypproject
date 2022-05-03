import React from "react";
import { Label } from "./styled";

export default ({ children, className, ...props }) => (
  <React.Fragment>
    <Label {...props} className={className}>
      {children} {props.required && <sup>*</sup>}
    </Label>
  </React.Fragment>
);
