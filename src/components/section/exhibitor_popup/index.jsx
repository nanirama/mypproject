import React, { useState, useEffect, useRef } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { getUser } from "../../../HOC/auth";
import { media } from "../../utils/style-utils";
import useOutsideClick from "@rooks/use-outside-click";
import { analyticsTrack } from "../../utils/segment";
import tp from "../../../localization/tracking.json";
import { ButtonSecondary } from "../../button";
import { Grid, Col, Row } from "react-flexbox-grid";
import { useCookies } from "react-cookie";
import axios from "axios";
import CustomersLogo from "../../section/customers_logo";

const Popup = styled.div`
  width: ${(props) => (props.isMaximized ? "1120px" : "400px")};
  position: fixed;
  top: ${(props) => (props.isMaximized ? "15vh" : "auto")};
  right: ${(props) => (props.isMaximized ? "0" : "auto")};
  bottom: ${(props) => (props.isMaximized ? "25vh" : "8px")};
  left: ${(props) => (props.isMaximized ? "0" : "8px")};
  min-height: ${(props) => (props.isMaximized ? "480px" : "auto")};
  z-index: 50000;
  display: block;
  margin: 20px auto 0 auto;
  overflow: hidden;
  background-color: ${(props) => (props.isMaximized ? "#fff" : "rgba(255,255,255,0.9)")};
  border-radius: 9px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  max-width: 94vw;
`;

const PopupBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 16px;
  ${media.tablet`
    padding: 40px 20px;
  `}
`;

const PopupImage = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  height: 100%;
  min-height: 20vh;
`;

const Greeting = styled.div`
  padding-right: 24px;
  ${media.tablet`
    font-size: ${(props) => (props.isMaximized ? "3em" : "2em")};
    margin-bottom: 16px;
  `}
  font-size: ${(props) => (props.isMaximized ? "2em" : "1.5em")};
  margin-bottom: 8px;
`;

const Question = styled.div`
  padding-right: 24px;
  ${media.tablet`
    font-size: 1.3em;
    margin-bottom: 24px;
  `}
  font-size: 1.1em;
  margin-bottom: 14px;
`;

const Close = styled.div`
  position: absolute;
  margin: 16px;
  ${media.tablet`
    margin: 20px;
  `}
  right: 0;
  top: 0;
  fill: #ccc;
  &:hover {
    cursor: pointer;
    fill: #aaa;
  }
`;

const HiddenOnMobile = styled.div`
  display: none;
  ${media.tablet`
    display: block;
  `}
`;

const LogoContainer = styled.div`
  color: #777;
  width: 100%;
  padding: 16px 0;
  margin-top: 16px;
`;

const LogoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  ${media.tablet`
    margin-left: -25px;
  `}
`;

const Logo = styled.div`
  margin: 10px;
  ${media.tablet`
    margin: 10px 25px;
  `}
`;

const SuccessMessage = styled.div`
  background-color: #ddf9ee;
  color: ${(props) => props.theme.color.secondary};
  border-radius: 5px;
  padding: 14px;
  margin-bottom: 12px;
`;

const DetailsBox = styled.div`
  color: ${(props) => props.theme.color.primary};
  border-radius: 5px;
  margin-bottom: 12px;
`;

const SwitchWrapper = styled.span`
  position: relative;
  height: 14px;
  width: 30px;
  margin: 8px;
`;

const SwitchLabel = styled.label`
  position: absolute;
  left: 0;
  bottom: 3px;
  width: 30px;
  height: 14px;
  border-radius: 8px;
  background: rgb(144, 144, 144);
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 1px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const Switch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 30px;
  height: 14px;
  margin: 0;
  &:checked + ${SwitchLabel} {
    background: rgb(0, 204, 136);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin-left: 17px;
      transition: 0.2s;
    }
  }
`;

const SwitchButton = ({ onChange, checked, id }) => {
  return (
    <SwitchWrapper>
      <Switch id={id} onChange={onChange} checked={checked} type="checkbox" />
      <SwitchLabel htmlFor={id} />
    </SwitchWrapper>
  );
};

export const ExhibitorPopup = ({ lang, route }) => {
  const pRef = useRef();

  const [isMinimized, setMinimized] = useState(false);
  const [isHidden, setHidden] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies([
    "exhibitor_popup_minimized",
    "exhibitor_popup_hidden",
    "exhibitor_popup_submitted",
    "acceptCookies",
  ]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [primaryEmail, setPrimaryEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [isEventOrganizer, setEventOrganizer] = useState(false);

  const logoData = {
    slice_type: "customers_logo",
    primary: {
      animated: "No",
      crop: "No",
      logo_width: null,
    },
    items: [
      {
        target: "exhibitors",
        logo: {
          fluid: {
            aspectRatio: 2.5,
            src:
              "https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=361%2C0%2C1503%2C601&w=200",
            srcSet:
              "https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=361%2C0%2C1503%2C601&w=50&h=20 50w, https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=361%2C0%2C1503%2C601&w=100&h=40 100w, https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=361%2C0%2C1503%2C601&w=200&h=80 200w, https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=361%2C0%2C1503%2C601&w=300&h=120 300w, https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=361%2C0%2C1503%2C601&w=400&h=160 400w",
            sizes: "",
          },
          thumbnails: {
            big: {
              fluid: {
                aspectRatio: 1,
                src:
                  "https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=813%2C0%2C601%2C601&w=200",
                srcSet:
                  "https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=813%2C0%2C601%2C601&w=50&h=50 50w, https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=813%2C0%2C601%2C601&w=100&h=100 100w, https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=813%2C0%2C601%2C601&w=200&h=200 200w, https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=813%2C0%2C601%2C601&w=300&h=300 300w, https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=813%2C0%2C601%2C601&w=400&h=400 400w",
                sizes: "",
              },
              url:
                "https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=813%2C0%2C601%2C601&w=40000&h=40000",
            },
            auto: {
              fluid: {
                aspectRatio: 3.703826955074875,
                src:
                  "https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&w=300",
                srcSet:
                  "https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&w=75&h=20 75w, https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&w=150&h=40 150w, https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&w=300&h=81 300w, https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&w=450&h=121 450w, https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&w=600&h=162 600w",
                sizes: "",
              },
              url:
                "https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat",
            },
          },
          url:
            "https://images.prismic.io/showcase-dev/d06e90f2-643f-4d6f-ada5-26c87d36d9c0_MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png?auto=compress%2Cformat&rect=361%2C0%2C1503%2C601&w=200&h=80",
        },
      },
      {
        target: "exhibitors",
        logo: {
          fluid: {
            aspectRatio: 2.5,
            src:
              "https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C640&w=200",
            srcSet:
              "https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C640&w=50&h=20 50w, https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C640&w=100&h=40 100w, https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C640&w=200&h=80 200w, https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C640&w=300&h=120 300w, https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C640&w=400&h=160 400w",
            sizes: "",
          },
          thumbnails: {
            big: {
              fluid: {
                aspectRatio: 1,
                src:
                  "https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=480%2C0%2C640%2C640&w=200",
                srcSet:
                  "https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=480%2C0%2C640%2C640&w=50&h=50 50w, https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=480%2C0%2C640%2C640&w=100&h=100 100w, https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=480%2C0%2C640%2C640&w=200&h=200 200w, https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=480%2C0%2C640%2C640&w=300&h=300 300w, https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=480%2C0%2C640%2C640&w=400&h=400 400w",
                sizes: "",
              },
              url:
                "https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=480%2C0%2C640%2C640&w=40000&h=40000",
            },
            auto: {
              fluid: {
                aspectRatio: 2.5,
                src:
                  "https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&w=300",
                srcSet:
                  "https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&w=75&h=30 75w, https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&w=150&h=60 150w, https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&w=300&h=120 300w, https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&w=450&h=180 450w, https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&w=600&h=240 600w",
                sizes: "",
              },
              url:
                "https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat",
            },
          },
          url:
            "https://images.prismic.io/showcase-dev/2b865ff6-e8b9-4d87-a3a8-8d2dfdf9393c_1600px-IBM_logo.svg.png?auto=compress%2Cformat&rect=0%2C0%2C1600%2C640&w=200&h=80",
        },
      },
    ],
  };
  const [isSubmitSuccessful, setSubmitSuccessful] = useState(false);

  useEffect(() => {
    if (cookies["exhibitor_popup_hidden"] || cookies["exhibitor_popup_submitted"]) {
      setHidden(true);
    }
    if (window.sessionStorage.getItem("exhibitor_popup_minimized")) {
      console.log(window.sessionStorage.getItem("exhibitor_popup_minimized"));
      setMinimized(true);
    }
  }, []);

  useEffect(() => {
    async function user() {
      const userInfo = await getUser();

      if (userInfo && userInfo.exibitiors && userInfo.exibitiors.nodes && userInfo.exibitiors.nodes.length > 0) {
        const cmpName = userInfo.exibitiors.nodes[0].name;
        const isAdmin = userInfo.me.events.edges.find(
          (e) => e.node.userRole === "ADMIN" || e.node.userRole === "ORGANIZATION_MEMBER"
        );
        const domainBlackList = [
          "informa.com",
          "clarionevents.com",
          "dmgevents.com",
          "mci-group.com",
          "dwtc.com",
          "firenzefiera.it",
          "mm-india.in",
          "infopro-digital.com",
          "messe-muenchen.de",
          "messe.ch",
          "reedexpo.fr",
          "oecd.org",
          "fieramilano.it",
          "messe.de",
          "fairtrade-messe.de",
          "terrapinn.com",
          "reedexpo.com.sg",
          "hyve.group",
          "easyfairs.com",
          "reedexpo.com",
          "comexposium.com",
          "md-india.com",
          "clariongaming.com",
          "gl-events.com",
          "messe-berlin.de",
          "reedmidem.com",
          "hopscotch.fr",
          "fierabolzano.it",
          "pt.ibm.com",
          "neonyt.berlin",
          "us.ibm.com",
          "reedexpo.co.uk",
          "ifema.es",
        ];

        if (!isAdmin && !domainBlackList.some((e) => userInfo.me.user.primaryEmail.toLowerCase().includes(e))) {
          console.log("Exhibitor Popup");
          setFirstName(userInfo.me.user.firstName);
          setLastName(userInfo.me.user.lastName);
          setCompanyName(cmpName);
          setPrimaryEmail(userInfo.me.user.primaryEmail);
          setPhoneNumber(userInfo.me.user.phoneNumbers[0]?.number);
          setJobTitle(userInfo.me.user.jobTitle);
          if (!cookies["exhibitor_popup_hidden"] && !cookies["exhibitor_popup_submitted"]) {
            analyticsTrack(tp.events.experiment_viewed, {
              [tp.properties.experiment_name]: "Referral Exhibitors Popup V1",
              [tp.properties.experiment_id]: 2,
            });
          }
        }
      }
    }
    user();
  }, []);

  useEffect(() => {
    if (isMinimized) {
      window.sessionStorage.setItem("exhibitor_popup_minimized", true);
      if (cookies["exhibitor_popup_submitted"]) {
        setHidden(true);
      }
      if (!document.cookie.includes("acceptCookies=true")) {
        setHidden(true);
      }
    }
  }, [isMinimized]);

  const minimizePopup = () => {
    setMinimized(true);
  };

  const hidePopup = () => {
    setHidden(true);
    setCookie("exhibitor_popup_hidden", true, { maxAge: 60 * 60 * 6 });
  };

  const handleCheckEventOrganizer = () => {
    setEventOrganizer((s) => !s);
  };

  function outsidePClick(e) {
    if (!e.target.parentElement.className.includes("StyledCookie")) {
      minimizePopup();
    }
  }

  useOutsideClick(pRef, outsidePClick);

  const handleSubmit = async () => {
    try {
      setSubmitSuccessful(true);
      const res = await axios({
        url: "https://hooks.zapier.com/hooks/catch/10583990/b25xa4d/",
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: { firstName, lastName, primaryEmail, phoneNumber, jobTitle, companyName, isEventOrganizer },
      });
      setCookie("exhibitor_popup_submitted", true, { maxAge: 60 * 60 * 24 * 7 });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!isHidden && firstName && route != "gulfood" && companyName && lang == "en-us" && (
        <Popup ref={pRef} isMaximized={!isMinimized}>
          <Row style={{ height: "100%" }}>
            {!isMinimized && (
              <Col md={6}>
                <PopupImage src="https://images.prismic.io/showcase-dev/097407ae-8573-48bf-81ae-bc407fe98397_1-1-1170x780.jpg" />
              </Col>
            )}
            <Col md={!isMinimized ? 6 : 12}>
              <PopupBody>
                <Greeting isMaximized={!isMinimized}>
                  <HiddenOnMobile>
                    👋
                    <br />
                  </HiddenOnMobile>
                  Hello, <b>{firstName}</b>!
                </Greeting>
                <Question>
                  Are virtual or hybrid events a part of your 2021 strategy at <b>{companyName}</b>?
                </Question>
                {isSubmitSuccessful ? (
                  <>
                    <SuccessMessage>
                      Great! One of our experts will get in touch with you to learn more about your events.
                    </SuccessMessage>
                    <ButtonSecondary onClick={hidePopup}>Close</ButtonSecondary>
                  </>
                ) : (
                  <>
                    <DetailsBox>
                      Does your company organize events?
                      <SwitchButton
                        checked={isEventOrganizer}
                        onChange={handleCheckEventOrganizer}
                        id="eventOrganizerSwitch"
                      />
                    </DetailsBox>
                    <ButtonSecondary onClick={handleSubmit}>Yes, I am interested!</ButtonSecondary>
                    <HiddenOnMobile>
                      {!isMinimized && (
                        <LogoContainer>
                          TRUSTED BY
                          <LogoRow>
                            <CustomersLogo data={logoData} isCentered={false} />
                            <Logo>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 600 92"
                                style={{ width: 144, margin: "auto 0", height: "100%" }}
                              >
                                <g fill="#034ea2" transform="matrix(2.0134 0 0 2.0134 -2.01 -1.85)">
                                  <path d="M20.78 32.93c.41 1.03.28 2.35.08 3.15-.35 1.42-1.31 2.87-4.15 2.87-2.66 0-4.28-1.54-4.28-3.86v-4.13H1v3.28c0 9.5 7.47 12.37 15.48 12.37 7.7 0 14.04-2.62 15.05-9.73.52-3.68.14-6.09-.04-6.98-1.8-8.92-17.96-11.58-19.17-16.57a5.46 5.46 0 0 1-.04-2.24c.3-1.37 1.23-2.86 3.89-2.86 2.5 0 3.95 1.54 3.95 3.86v2.64h10.63v-3C30.75 2.45 22.42 1 16.4 1 8.82 1 2.63 3.51 1.5 10.46c-.3 1.9-.35 3.6.1 5.74 1.85 8.7 16.98 11.22 19.18 16.73" />
                                  <path d="M46.6 2.36l-7.9 42.59h11.51L56.04 6.3h.24l5.67 38.65H73.4l-7.85-42.6zM110.95 2.36l-5.25 32.56h-.25l-5.24-32.56H82.84l-.94 42.59h10.66l.26-38.29h.24l7.11 38.29h10.81l7.12-38.28h.23l.27 38.28h10.65l-.94-42.6z" />
                                  <path
                                    transform="translate(138.47 -.08)"
                                    d="M20.78 32.93c.41 1.03.28 2.35.08 3.15-.35 1.42-1.31 2.87-4.15 2.87-2.66 0-4.28-1.54-4.28-3.86v-4.13H1v3.28c0 9.5 7.47 12.37 15.48 12.37 7.7 0 14.04-2.62 15.05-9.73.52-3.68.14-6.09-.04-6.98-1.8-8.92-17.96-11.58-19.17-16.57a5.46 5.46 0 0 1-.04-2.24c.3-1.37 1.23-2.86 3.89-2.86 2.5 0 3.95 1.54 3.95 3.86v2.64h10.63v-3C30.75 2.45 22.42 1 16.4 1 8.82 1 2.63 3.51 1.5 10.46c-.3 1.9-.35 3.6.1 5.74 1.85 8.7 16.98 11.22 19.18 16.73"
                                  />
                                  <path d="M195 38.57c2.96 0 3.87-2.04 4.08-3.08.09-.46.1-1.08.1-1.63V2.36h10.78v30.53a37 37 0 0 1-.1 2.8c-.75 7.95-7.03 10.53-14.86 10.53-7.84 0-14.12-2.58-14.87-10.53-.03-.42-.11-2.02-.1-2.8V2.35h10.78v31.5c-.01.56.01 1.18.1 1.64.2 1.04 1.12 3.08 4.09 3.08M247.08 2.36l.58 33.43h-.23l-9.8-33.43h-15.8V44.5h10.47l-.58-34.59h.23l10.51 34.59h15.17V2.36zM283.83 38.13c3.08 0 4.16-1.95 4.35-3.1.09-.47.1-1.07.1-1.6v-6.2h-4.37v-6.2H299v11.42c0 .8-.02 1.38-.15 2.8-.7 7.76-7.43 10.53-14.98 10.53-7.55 0-14.27-2.77-14.98-10.53-.12-1.42-.15-2-.15-2.8V14.53c0-.76.1-2.1.18-2.8.95-7.97 7.4-10.53 14.95-10.53 7.55 0 14.17 2.54 14.95 10.52.14 1.36.1 2.8.1 2.8v1.43h-10.74v-2.39s0-1-.13-1.62c-.2-.94-1-3.1-4.26-3.1-3.1 0-4.01 2.05-4.24 3.1-.13.56-.18 1.32-.18 2.01v19.47c0 .54.02 1.14.1 1.62.2 1.14 1.28 3.09 4.36 3.09" />
                                </g>
                              </svg>
                            </Logo>
                          </LogoRow>
                        </LogoContainer>
                      )}
                    </HiddenOnMobile>
                  </>
                )}
                <Close onClick={!isMinimized ? minimizePopup : hidePopup}>
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
              </PopupBody>
            </Col>
          </Row>
        </Popup>
      )}
    </>
  );
};

export default ExhibitorPopup;

export const query = graphql`
  fragment exhibitorPopupFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainCustomersLogo {
          slice_type
          primary {
            animated
            crop
            logo_width
          }
          items {
            target
            logo {
              fluid(maxWidth: 200) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
              thumbnails {
                big {
                  fluid(maxWidth: 200) {
                    ...GatsbyPrismicImageFluid_noBase64
                    src
                  }
                  url
                }
              }
              thumbnails {
                auto {
                  fluid(maxWidth: 300) {
                    ...GatsbyPrismicImageFluid_noBase64
                    src
                  }
                  url
                }
              }
              url
            }
          }
        }
      }
    }
  }
`;
