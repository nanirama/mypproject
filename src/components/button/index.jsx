import React from "react";
import {
  BadgeLabel,
  Block,
  ButtonLabel,
  StyledButtonPrimary,
  StyledButtonSecondary,
  StyledButtonAI,
  StyledButtonBlue,
  StyledButtonWhite,
  StyledButtonBlank,
  StyledButtonBorderSecondary,
  StyledButtonBorderPrimary,
  StyleButtonCustom,
  StyledButtonBorderGrey,
} from "./styled";
import Link from "../utils/link";

export const ButtonPrimary = ({ children, className, to, ...props }) => (
  <StyledButtonPrimary className={className} {...props} to={to}>
    {children}
  </StyledButtonPrimary>
);
export const ButtonSecondary = ({ children, className, to, ...props }) => (
  // size="big" or none
  <StyledButtonSecondary disabled={props.disabled} to={to} size={props.size} className={className} {...props}>
    {children}
  </StyledButtonSecondary>
);
export const ButtonAI = ({ children, className, to, ...props }) => (
  // size="big" or none
  <StyledButtonAI disabled={props.disabled} to={to} size={props.size} className={className} {...props}>
    {children}
  </StyledButtonAI>
);

export const ButtonBlue = ({ children, className, to, ...props }) => (
  // size="big" or none
  <StyledButtonBlue disabled={props.disabled} to={to} size={props.size} className={className} {...props}>
    {children}
  </StyledButtonBlue>
);

export const ButtonWhite = ({ children, className, to, ...props }) => (
  <StyledButtonWhite className={className} to={to} {...props}>
    {children}
  </StyledButtonWhite>
);

export const ButtonBorderPrimary = ({ children, className, to, ...props }) => (
  <StyledButtonBorderPrimary className={className} to={to} {...props}>
    {children}
  </StyledButtonBorderPrimary>
);

export const ButtonBorderGrey = ({ children, className, to, ...props }) => (
  <StyledButtonBorderGrey className={className} to={to} {...props}>
    {children}
  </StyledButtonBorderGrey>
);

export const ButtonCustom = ({ children, className, to, ...props }) => (
  <StyleButtonCustom className={className} to={to} {...props}>
    {children}
  </StyleButtonCustom>
);

export const ButtonBorderSecondary = ({ children, className, to, ...props }) => (
  <StyledButtonBorderSecondary className={className} to={to} {...props}>
    {children}
  </StyledButtonBorderSecondary>
);

export const ButtonBlank = ({ children, ...props }) => <StyledButtonBlank {...props}>{children}</StyledButtonBlank>;

export const ButtonWithPopup = ({ id, label, onClick, active, badgeLabel, popupText }) => {
  if (badgeLabel) badgeLabel = badgeLabel.toUpperCase();
  return (
    <Block className={active ? "active" : ""}>
      {badgeLabel && (
        <BadgeLabel>
          <p>{badgeLabel}</p>
        </BadgeLabel>
      )}
      <ButtonLabel>
        <Link onClick={(e) => console.log("button", e)}>{label}</Link>
      </ButtonLabel>
    </Block>
  );
};
