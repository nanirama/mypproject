import styled, { css } from "styled-components";
import Link from "../utils/link";
// import "../picto";

const defaultButton = styled(Link)`
  border-radius: 8px;
  border: none;
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  padding: 8px 25px;
  font-size: 1rem;
  /* box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px; */
  font-weight: 600;
  letter-spacing: 1px;
  transition: 0.3s all;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 1px 3px 0px;
  }
`;

export const BadgeLabel = styled.div`
  background-color: rgb(0, 204, 136);
  border-radius: 2px;
  display: flex;
  width: fit-content;
  position: absolute;
  p {
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 4px 6px;
    color: #fff !important;
  }
`;

export const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: rgba(0, 168, 107, 0.08);
  }
  &.active {
    background-color: rgba(0, 168, 107, 0.08);
  }
  &.active p,
  &:hover p {
    color: rgb(38, 47, 61);
  }
`;

export const ButtonLabel = styled.p`
  color: rgb(119, 119, 136);
  font-weight: bold;
  align-self: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const StyledButtonPrimary = styled(defaultButton)`
  background: ${(props) => props.theme.color.primary};
  padding: ${(props) => (props.size === "big" ? "15px 30px" : "8px 25px")};
  &:hover {
    color: #fff;
    background: ${(props) =>
      props.hoverColor === "primary" ? props.theme.color.primary : props.theme.color.secondary};
    border: 2px solid #fff;
    box-shadow: none;
  }
`;

export const StyleButtonCustom = styled(defaultButton)`
  background: ${(props) => props.bg};
  color: ${(props) => props.textColor};
`;

//Green
export const StyledButtonSecondary = styled(defaultButton)`
  color: #fff;
  text-align: center;
  background: ${(props) =>
    props.color ? (props.color === "blue" ? "#84e0f5" : props.color) : props.theme.color.secondary_button};
  border: 2px solid ${(props) => props.theme.color.secondary_button};
  padding: ${(props) => (props.size === "big" ? "15px 30px" : "8px 25px")};
  a {
    color: #fff;
  }
  &:hover {
    color: ${(props) => props.theme.color.secondary_button};
    background: #fff;
    border: 2px solid ${(props) => props.theme.color.secondary_button};
    box-shadow: none;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: initial;
      opacity: 0.5;
    `}
`;

//Green Experinece AI Button
export const StyledButtonAI = styled(defaultButton)`
  color: #fff;
  background: ${(props) =>
    props.color ? (props.color === "blue" ? "#84e0f5" : props.color) : props.theme.color.secondary_button};
  border: 2px solid ${(props) => props.theme.color.secondary_button};
  padding: ${(props) => (props.size === "big" ? "15px 30px" : "11.5px 25px")};
  a {
    color: #fff;
  }
  &:hover {
    color: ${(props) => props.theme.color.secondary_button};
    background: #fff;
    border: 2px solid ${(props) => props.theme.color.secondary_button};
    box-shadow: none;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: initial;
      opacity: 0.5;
    `}
`;

//Blue
export const StyledButtonBlue = styled(defaultButton)`
  color: #fff;
  background: #84e0f5;
  border: 2px solid #84e0f5;
  padding: ${(props) => (props.size === "big" ? "15px 30px" : "8px 25px")};
  a {
    color: #fff;
  }
  &:hover {
    color: #84e0f5;
    background: #fff;
    border: 2px solid #84e0f5;
    box-shadow: none;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: initial;
      opacity: 0.5;
    `}
`;

export const StyledButtonWhite = styled(defaultButton)`
  background: #fff;
  text-align: center;
  color: ${(props) => props.theme.color.primary};
  padding: ${(props) => (props.size === "big" ? "15px 30px" : "8px 25px")};
  border: 2px solid #fff;
  &:hover {
    color: #fff;
    background: ${(props) =>
      props.hoverColor === "primary" ? props.theme.color.primary : props.theme.color.secondary};
    border: 2px solid #fff;
    box-shadow: none;
  }
`;

export const StyledButtonBorderPrimary = styled(defaultButton)`
  /* background: #fff; */
  /* color: ${(props) => props.theme.color.primary}; */
  color: ${(props) => props.theme.color.primary};
  border: 2px solid ${(props) => props.theme.color.primary};
  padding: ${(props) => (props.size === "big" ? "15px 30px" : "8px 25px")};
  box-shadow: none;
  /* padding: 7px 25px 9px; */
  &:hover {
    color: #fff;
    background: ${(props) => props.theme.color.primary};
    box-shadow: none;
  }
`;

export const StyledButtonBorderGrey = styled(defaultButton)`
  color: ${(props) => props.theme.color.grey};
  border: 2px solid ${(props) => props.theme.color.grey};
  padding: ${(props) => (props.size === "big" ? "15px 30px" : "8px 25px")};
  box-shadow: none;
  padding: 7px 25px 9px;
  &:hover {
    color: #fff;
    background: ${(props) => props.theme.color.grey};
    box-shadow: none;
  }
`;

export const StyledButtonBorderSecondary = styled(defaultButton)`
  /* background: #fff; */
  text-align: center;
  /* color: ${(props) => props.theme.color.primary}; */
  color: ${(props) => props.theme.color.secondary};
  padding: ${(props) => (props.size === "big" ? "15px 30px" : "8px 25px")};
  border: 2px solid ${(props) => props.theme.color.secondary};
  box-shadow: none;
  &:hover {
    color: #fff;
    background: ${(props) => props.theme.color.secondary};
    box-shadow: none;
  }
`;

export const StyledButtonBlank = styled(Link)`
  color: ${(props) => (props.color ? props.color : props.theme.color.link)};
  font-size: 1.1rem;
  text-decoration: none;
  position: relative;
  transition: 0.3s all;
  cursor: pointer;
  display: block;
  &:hover {
    transform: translateX(10px);
  }
`;
