import React from "react";
import { StyledSubmit, StyledLoader } from "./styled";
import Loader from "../../loader";

export default ({ ...props }) => (
  <StyledSubmit {...props} type="submit">
    <StyledLoader isLoading={props.isLoading}>
      <Loader />
      <Loader />
      <Loader />
    </StyledLoader>
    <span style={{ opacity: props.isLoading ? "0" : "1" }}>{props.value}</span>
  </StyledSubmit>
);
