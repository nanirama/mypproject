import styled from "styled-components";
import Link from "../../../utils/link";
import { media } from "../../../utils/style-utils";

export const TotalWrapper = styled.div`
  padding: 10px 20px;
`;

export const NumberInfo = styled.div`
  font-size: 14px;
  margin-top: 10px;
  color: ${(props) => props.theme.color.body};
`;

export const TotalWrapperLoading = styled.div``;

export const Question = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.theme.color.body};
  &:hover {
    cursor: pointer;
  }
  /* text-decoration: underline; */
  /* background: red;
  border-radius: 50px;
  width: 20px;
  height: 20px;
  padding: 4px;
  display: block; */
`;

export const TooltipContent = styled.div`
  max-width: 290px;
  font-size: 0.8rem;
  line-height: 1rem;
  width: 100%;
  p {
    margin: 10px 0;
  }
  ul {
    list-style: circle;
    padding-left: 20px;
    margin-bottom: 10px;
  }
  li {
  }
  a {
    text-decoration: underline;
    color: #fff;
    font-weight: bold;
  }
`;

export const Card = styled.div`
  form {
    width: 30vw;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1), 0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  }

  input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  .result-message {
    line-height: 22px;
    font-size: 16px;
  }

  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }

  .hidden {
    display: none;
  }

  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }

  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  #payment-request-button {
    margin-bottom: 32px;
  }

  /* Buttons and links */
  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }

  button:hover {
    filter: contrast(115%);
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }

  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }

  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }

  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }
`;

export const Logo = styled.img`
  width: 180px;
  margin-top: 50px;
`;

export const Background = styled.div`
  height: 100%;
`;

export const ContactUs = styled(Link)`
  color: ${(props) => props.theme.color.secondary};
  text-decoration: underline;
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.color.error};
  margin-top: 5px;
  font-size: 0.8rem;
`;

export const ContainerCenter = styled.div`
  margin: 0 auto;
  height: auto;
  max-width: 940px;
  width: 100%;
`;

export const RightContainer = styled.div`
  //background: #fff;
  box-shadow: rgba(0, 0, 0, 0.14) 0 1px 3px 0;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  margin-top: 50px;
`;

export const ContainerBorder = styled.div`
  box-shadow: rgba(0, 0, 0, 0.14) 0 1px 3px 0;
  border-radius: 3px;
  margin-top: 50px;
  padding: 30px 20px;
  ${media.tablet`
    margin-bottom: 50px;
    margin-right: 20px;
  `};
`;

export const LeftContainer = styled.div`
  background-color: ${(props) => (props.blocked ? "rgba(255,255,255,0.5)" : "rgb(255, 255, 255)")};
  opacity: ${(props) => props.blocked && 0.5};
  filter: ${(props) => props.blocked && "blur(2px)"};
  -webkit-filter: ${(props) => props.blocked && "blur(2px)"};
  pointer-events: ${(props) => (props.blocked ? "none" : "auto")};
`;

export const OrderGroup = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-top: 30px;
`;

// export const OrderSummary = styled.div`
//   border-width: 1px;
//   border-style: solid;
//   border-color: rgb(229, 229, 229);
//   border-image: initial;
//   border-radius: 4px;
//   padding: 20px;
// `;

export const OrderSummaryHead = styled.div`
  background-color: ${(props) => props.theme.color.secondary};
  color: #fff;
  text-align: center;
  padding: 15px 0;
  font-size: 1.1rem;
`;

export const OrderSummaryLine = styled.div`
  margin: 14px 0;
  display: block;
  span:nth-child(3) {
    float: right;
    color: ${(props) => props.theme.color.body};
    /* font-size:0.9rem */
  }
`;

export const OrderSummarySep = styled.div`
  position: relative;
  display: block;
  padding: 15px 0;
  :before {
    background-color: transparent;
    border-top: 1px dashed #000;
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    top: 50%;
    z-index: 0;
  }
`;

export const SidebarQuestion = styled.div`
  /* font-weight: bold; */
`;
export const SidebarAnswer = styled.div`
  font-size: 0.9rem;
  margin-top: 5px;
  color: ${(props) => props.theme.color.body};
`;

export const OrderTotal = styled.div`
  font-weight: bold;
  /* margin-bottom: 10px; */
  font-size: 1.1rem;
  span:nth-child(2) {
    float: right;
  }
`;

export const OrderTax = styled.div`
  margin-bottom: 10px;
  span:nth-child(2) {
    float: right;
  }
`;

export const CGU = styled.div`
  display: flex;
  font-size: 0.7rem;
  align-items: center;
  position: relative;
`;

export const CGUText = styled.div`
  a {
    color: ${(props) => (props.error ? props.theme.color.error : props.theme.color.primary)};
    text-decoration: underline;
  }
  margin-left: 10px;
  color: ${(props) => (props.error ? props.theme.color.error : props.theme.color.primary)};
`;

export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PopupInvitation = styled.div`
  z-index: 10;
  display: flex;
  position: absolute;
  max-width: 400px;
  width: 100%;
  -moz-box-pack: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.14) 0 1px 3px 0;
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  text-align: center;
  margin-top: 10%;
  align-items: center;
`;
