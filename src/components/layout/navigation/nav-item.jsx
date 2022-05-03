import React from "react";
import { NavbarItem } from "./styled";

export default ({ to, u, children, className }) => (
  <NavbarItem to={to} u={u} className={className}>
    {children}
  </NavbarItem>
);
