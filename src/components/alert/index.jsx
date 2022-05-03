import React, { Component } from "react";
import { StyledAlert } from "./styled";

export const AlertSuccess = ({ message }) => (
  <React.Fragment>
    <StyledAlert theme="success">{message}</StyledAlert>
  </React.Fragment>
);

export const AlertInfo = ({ children }) => <StyledAlert theme="info">{children}</StyledAlert>;

export const AlertError = ({ message }) => (
  <React.Fragment>
    <StyledAlert style="error">{message}</StyledAlert>
  </React.Fragment>
);

export const AlertWarning = ({ message }) => (
  <React.Fragment>
    <StyledAlert style="warning">{message}</StyledAlert>
  </React.Fragment>
);
