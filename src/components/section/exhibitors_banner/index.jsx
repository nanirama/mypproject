import React, { useState, useEffect, useRef } from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import { getUser } from "../../../HOC/auth";
import { media } from "../../utils/style-utils";
import Link from "../../utils/link";
import Route from "../../../localization";
import useOutsideClick from "@rooks/use-outside-click";
import { analyticsTrack } from "../../utils/segment";
import tp from "../../../localization/tracking.json";

const Banner = styled.div`
  width: 100%;
  max-width: 800px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50000;
  display: none;
  ${media.tablet`
  display:block;
  margin: 20px auto 0 auto;
  `}
  background: ${(props) => props.theme.color.secondary};
  color: #fff;
  padding: 20px 20px 25px 20px;
  border-radius: 9px;
  box-shadow: 0 2px 16px ${(props) => props.theme.color.secondary};
`;

const Question = styled.div`
  padding-right: 40px;
  line-height: 24px;
`;

const DemoRequest = styled.div`
  display: inline-block;
  text-align: left;
  font-weight: bold;
  margin-top: 10px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &:after {
    content: " ";
    width: 100%;
    height: 2px;
    background-color: #fff;
    position: absolute;
    bottom: -10px;
    left: 0;
  }
  color: #fff;
`;

const Close = styled.div`
  position: absolute;
  right: 20px;
  color: #fff;
  top: 20px;
  fill: #fff;
  &:hover {
    cursor: pointer;
  }
`;

export const ExhibitorsBanner = ({ lang, route }) => {
  const pRef = useRef();

  const [isHide, setAsHide] = useState(true);

  const [userName, setUserName] = useState("");
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    if (!window.localStorage.getItem("exhibitors_banner_hide")) {
      setAsHide(false);
    }
  });

  useEffect(() => {
    async function user() {
      const userInfo = await getUser();

      if (userInfo && userInfo.exibitiors && userInfo.exibitiors.nodes && userInfo.exibitiors.nodes.length > 0) {
        const name = userInfo.exibitiors.nodes[0].name;
        const isAdmin = userInfo.me.events.edges.find((e) => e.node.userRole === "ADMIN");

        if (!isAdmin) {
          console.log("Exhibitors Banner");
          setUserName(userInfo.me.user.firstName);
          setCompanyName(name);
          if (!window.localStorage.getItem("exhibitors_banner_hide")) {
            analyticsTrack(tp.events.experiment_viewed, {
              [tp.properties.experiment_name]: "Referral Exhibitors Banner V2",
              [tp.properties.experiment_id]: 2,
            });
          }
        }
      }
    }
    user();
  }, []);

  const hideBanner = () => {
    setAsHide(true);
    window.localStorage.setItem("exhibitors_banner_hide", true);
  };

  const goToDemo = () => {
    hideBanner();
    navigate(Route["en-us"]["demo"] + "?ref=exhibitors");
  };

  function outsidePClick() {
    hideBanner();
  }

  useOutsideClick(pRef, outsidePClick);

  return (
    <>
      {!isHide && userName && route != "gulfood" && companyName && lang == "en-us" && (
        <Banner ref={pRef}>
          <Question>
            Hey <b>{userName}</b> 👋, Are virtual or hybrid events a part of your 2021 strategy at <b>{companyName}</b>?
          </Question>
          <DemoRequest onClick={goToDemo}>👉 Request your demo here</DemoRequest>
          <Close onClick={hideBanner}>
            <svg
              className="interface-icon o__standard o__standard__close o__by-text"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M9.41425 8.00025L13.7072 3.70725C14.0982 3.31625 14.0982 2.68425 13.7072 2.29325C13.3162 1.90225 12.6843 1.90225 12.2933 2.29325L8.00025 6.58625L3.70725 2.29325C3.31625 1.90225 2.68425 1.90225 2.29325 2.29325C1.90225 2.68425 1.90225 3.31625 2.29325 3.70725L6.58625 8.00025L2.29325 12.2933C1.90225 12.6843 1.90225 13.3162 2.29325 13.7072C2.48825 13.9022 2.74425 14.0002 3.00025 14.0002C3.25625 14.0002 3.51225 13.9022 3.70725 13.7072L8.00025 9.41425L12.2933 13.7072C12.4883 13.9022 12.7442 14.0002 13.0002 14.0002C13.2562 14.0002 13.5122 13.9022 13.7072 13.7072C14.0982 13.3162 14.0982 12.6843 13.7072 12.2933L9.41425 8.00025Z"></path>
            </svg>
          </Close>
        </Banner>
      )}
    </>
  );
};

export default ExhibitorsBanner;
