import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogoWhiteWhite from "../../assets/images/Logo/logo-swapcard-blanc-blanc.svg";
import AvolioSwapcard from "../../assets/images/REvolve-Banner-Logo.png";

import Bg from "../../assets/images/banner-design-72px-Transparent.png";
import { media } from "../utils/style-utils";

import Link from "../utils/link";

const Background = styled.div`
  background-size: cover;
  /* background-position: 50px; */
  background-repeat: no-repeat;
  /* background: rgb(241, 95, 52); */
  background-image: linear-gradient(90deg, rgba(241, 95, 52, 1) 0%, rgba(225, 70, 123, 1) 100%);
  ${media.tablet`
  background-image: url(${(props) =>
    props.bg}), linear-gradient(90deg, rgba(241, 95, 52, 1) 0%, rgba(225, 70, 123, 1) 100%);
  `}

  /* background-color: ${(props) => props.theme.color.primary}; */
  height: 50px;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.tablet`justify-content:center;`};
  padding: 10px 20px;
`;

export const DropdownArrow = styled.i`
  margin-left: 5px;
  margin-top: 3px;
  font-size: 16px;
  display: flex;
  justify-content: center;
`;

const LogoWhite = styled.img`
  width: 100px;
  ${media.tablet`width:120px;`};
`;

const Logo = styled.div`
  margin-right: 20px;
`;

const MainMessage = styled.div`
  margin-right: 20px;
  display: none;
  ${media.tablet`display:block;`}
`;

const LearnMore = styled(Link)`
  display: flex;
  color: #fff;
  opacity: 0.9;
  font-size: 0.9rem;
  transition: 0.2s;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: translateX(10px);
  }
`;

export default () => (
  <Background bg={Bg}>
    <Logo>
      <LogoWhite src={AvolioSwapcard} />
    </Logo>
    <MainMessage>Join the Evolve Community. REvolve on-demand is now available.</MainMessage>
    <LearnMore target="_blank" to="https://www.theevolve.community/events">
      {/* <span style={{ textDecoration: "underline" }}>Learn More</span> */}
      Find Out More
      <DropdownArrow className="icons8-right-pointing-arrow" />
    </LearnMore>
  </Background>
);
