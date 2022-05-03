import styled from "styled-components";
import { media } from "../../utils/style-utils";
import { ButtonPrimary, ButtonSecondary } from "../../button";
import Link from "../../utils/link";
import { Col } from "react-flexbox-grid";

/* Navbar */
export const Navbar = styled.div`
  /* position: fixed; */
  background: ${(props) => (props.menu_color ? props.menu_color : "#FFF")};
  position: absolute;
  padding: 0 20px;
  /* ${media.tablet`padding: 0 40px;`}; */
  /* ${media.desktop`padding: 0 40px;`}; */
  /* ${media.giant`padding: 0 80px;`}; */
  /* top: 50px; */
  width: 100%;
  z-index: 4000;
  transition: box-shadow 0.15s ease-out, background-color 0.15s ease-out, opacity 0.15s linear;
  &.fixed {
    background: #fff;
    top: 0;
    position: fixed;
    border-bottom: 1px solid #eee;
  }

  &.hide {
    /* display: none; */
  }

  &.show {
    /* display: block; */
  }
`;

export const LogoDesktop = styled.img`
  width: 180px;
  //display: none;
  padding: 15px 0;
  ${media.giant`display: block; padding:0;`};
`;

export const LogoMobile = styled.img`
  width: 40px;
  padding: 16px 0;
  display: block;
  ${media.giant` display: none; `};
`;

export const LoginMobile = styled.div`
  display: block;
  @media (min-width: 1180px) {
    display: none;
  }
  position: absolute;
  right: 0;
  letter-spacing: 0.2px;
  text-transform: uppercase;

  & a {
    font-size: 14px !important;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  margin: 8px auto 0 auto;
  ${media.giant` margin:0 auto 0 auto; `};
  align-items: center;
  position: relative;
  max-width: 1164px;
`;

export const NavbarMobileOpen = styled.div`
  display: block;
  left: 60px;
  font-weight: 600;
  font-size: 1.2rem;
  position: absolute;
  z-index: 10;
  ${media.giant` display: none; `};
  &:hover {
    cursor: pointer;
  }
`;

export const NavbarMobileClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-weight: 600;
  font-size: 1.2rem;
  z-index: 99999;
  &:hover {
    cursor: pointer;
  }
`;

//Contain links at the right
export const NavbarTopNav = styled.ul`
  opacity: 0;
  display: none;
  width: 100%;
  align-items: center;
  ${media.giant`   display: flex;  opacity:1;`} transition: opacity .3s ease;
  &.active {
    padding: 40px 15px 15px 15px;
    width: 100%;
    left: 0;
    right: 0;
    z-index: 20;
    overflow: scroll;
    background: #fff;
    top: 0;
    bottom: 0;
    display: block;
    position: fixed;
    height: 100%;
    opacity: 1;
  }
`;

export const NavbarItem = styled(Link)`
  position: relative;
  color: ${(props) => props.theme.color.primary};
  font-weight: 400;
  display: flex;
  margin-bottom: 20px;
  padding: 0;
  width: 100%;
  font-size: 20px;
  text-decoration: ${(props) => (props.u ? "underline" : "")};
  ${media.giant`
    //padding:30px 40px 30px 0px; 
    padding:30px 20px;
    border:none; 
    width:auto; 
    margin:0;
    font-size:16px;
  `};
  padding: 1em 0;
  //transition: 0.2s color;
  border-bottom: 1px solid #e3e3e5;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.secondary_button};
  }
`;

//Dropdown
export const NavbarDropdown = styled.div`
  :before {
    content: " ";
    border-radius: 4px 0 0 0;
    background: #fff;
    left: 50%;
    box-shadow: -3px -3px 5px rgba(82, 95, 127, 0.04);
    z-index: 5;
    top: -6px;
    margin: 0 0 0 -6px;
    width: 12px;
    height: 12px;
    transform: rotate(45deg);
    position: absolute;
  }
  display: none;
  transition: all 0.2s;
  ${media.giant`
        display:initial;
        top: 60px;
        min-width: ${(props) => props.widthDropdown};
        z-index:10;
        /* line-height:1.3; */
        background-color: #FFF;
        border-radius:3px;
        position: absolute;
        margin:0;
        left:50%;
        transform: translateX(-50%);
        color: #FFF;
        color:${(props) => props.theme.color.primary};
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.10), 0 5px 20px 0 rgba(0,0,0,.10);
        /* padding:30px 40px; */
        padding:${(props) => (props.padding ? props.padding + "px" : "30px 40px;")};
        visibility: hidden;
        opacity:0;
        z-index:999!important;
    `}
  &.active {
    z-index: 999 !important;
    display: block;
    visibility: visible;
    opacity: 1;
    /* ${media.giant`transform : translate(0, 5px);`}; */
  }
  &:hover {
    color: ${(props) => props.theme.color.secondary_button};
  }
`;

export const DropdownTitleItem = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.primary};
  font-size: 1rem;
  display: flex;
  &:hover {
    color: ${(props) => props.theme.color.secondary_button};
    cursor: pointer;
  }
`;

export const DropdownItem = styled.div`
  display: block;
  padding: 5px 0 20px 0;
  color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.body};
  text-decoration: none;
  font-size: 0.9rem;
  span {
    display: block;
    font-size: 14px;
    color: ${(props) => props.theme.color.body};
  }
  img {
    max-height: 30px;
    margin-right: 10px;
    width: auto;
  }
`;

export const DropdownLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  z-index: 10;
  &:hover > ${DropdownItem}, &:hover > ${DropdownTitleItem}, &:hover > img {
    color: ${(props) => props.theme.color.secondary_button};
    fill: ${(props) => props.theme.color.secondary_button};
    cursor: pointer;
  }
  span {
    font-size: 13px;
    margin-left: 5px;
  }
`;

export const ColBorder = styled(Col)`
  position: relative;
  ${media.giant`
  :after {
    content:' ';
    background:#eee;
    width:1px;
    height:100%;
    position:absolute;
    right:80px;
    top:0;
  }
  `};
`;

export const Navbar_Action = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonMobile = styled.div`
  margin-top: 20px;
  display: block;
  ${media.giant`
      display:none;
  `};
`;

export const ButtonCTA = styled(ButtonPrimary)`
  // display:inline;
`;

export const ButtonLogin = styled(ButtonSecondary)`
  //  display:inline;
  margin-top: 15px;
  ${media.giant`
      display:none;
  `};
`;

export const Dropdown_Arrow = styled.img`
  height: 12px;
  margin-left: 10px;
  fill: red;
`;

export const NavbarAction = styled.div`
  ${media.giant`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  `};

  @media (min-width: 1600px) {
    flex: 1;
  }
`;

export const NavbarCenter = styled.div`
  ${media.giant`
  display: flex;
  align-items: center;
  `};
`;

export const LogoFlex = styled.div`
  @media (min-width: 1180px) {
    flex: 1;
  }
  display: flex;
  &.active {
    display: none;
  }
`;

export const NavbarIcon = styled.i`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export const DropdownArrow = styled.i`
  margin-left: 5px;
  margin-top: 3px;
  font-size: 16px;
  display: flex;
  justify-content: center;
`;

export const NewLabel = styled.div`
  color: #fff;
  background: ${(props) => props.theme.color.success};
  padding: 1px 10px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.2px;
  border-radius: 20px;
  margin-left: 10px;
`;
