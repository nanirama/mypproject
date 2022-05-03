import React from "react";
import styled from "styled-components";
import LogoWhiteWhite from "../../assets/images/Logo/logo-swapcard-blanc-blanc.svg";
import LogoDefaultSVG from "../../assets/images/Logo/LogoFINAL.svg";

export const StyledLogo = styled.img`
  width: 180px;
`;

export const LogoWhite = () => <StyledLogo src={LogoWhiteWhite} />;
export const LogoDefault = () => <StyledLogo src={LogoDefaultSVG} />;
