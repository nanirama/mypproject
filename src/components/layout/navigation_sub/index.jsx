import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavbarLanguage from "./nav-dropdown";
import NavbarNotifications from "./notifications-dropdown";
import Link from "../../utils/link";
// import { LinkInternal } from "../../utils/link";
import Route from "../../../localization";
// import { exportLocale } from "../../../localization";
import MixpanelHelper from "../../utils/segment";
import { media } from "../../utils/style-utils";
import tp from "../../../localization/tracking.json";
import { getUser } from "../../../HOC/auth";
// import bellIcon from "../../../assets/images/notification-bell.svg";
// import { DropdownArrow, DropdownItem, DropdownLink, DropdownTitleItem, NewLabel } from "../navigation/styled";
// import NavbarDropdown from "./nav-dropdown";
// import NavbarItem from "./nav-item";

const NavigationSubWrapper = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e9ec;
  background-color: #f5f8fa;
  border-bottom: 1px solid #cbd6e2;
  padding: 15px 80px;
  font-size: 0.9rem;
  color: rgb(51, 71, 91);
  ${media.giant`display:flex;`}
`;

const LeftSide = styled.div`
  display: flex;
  position: relative;
  z-index: 9000;
`;

const RightSide = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const ItemLeft = styled(Link)`
  padding: 0 20px 0 0;
  display: block;
  border-right: 2px solid #cbd6e2;
  position: relative;
  z-index: 9999 !important;
  &:last-child {
    padding-left: 20px;
    border-right: none;
  }
`;

// const ItemRight = styled.div``;

// const Icon = styled.span`
//   margin-right: 8px;
// `;
// const IconArrow = styled.span`
//   margin-left: 8px;
// `;

const ButtonSmall = styled(Link)`
  padding: 10px 20px;
  display: block;
  /* box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px; */
  background: ${(props) => props.theme.color.secondary};
  color: #fff;
  border: none;
  border-radius: 50px;
  /* margin-left: 20px; */
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

const LoginAs = styled.span`
  color: ${(props) => props.theme.color.body};
`;

const SeeMyCredits = styled(Link)`
  color: ${(props) => props.theme.color.secondary};
  margin-right: 15px;
  text-decoration: underline;
`;

const ButtonSmallInverted = styled(ButtonSmall)`
  color: ${(props) => props.theme.color.secondary};
  background: #fff;
  margin-left: 10px;
  border: 1px solid ${(props) => props.theme.color.secondary};
`;

export default ({ ...props }) => {
  const isClient = typeof window !== "undefined";
  const [notificationActive, setNotificationActive] = useState(false);
  const [hasEvents, setHasEvents] = useState(false);

  useEffect(() => {
    if (isClient) {
      if (window.localStorage.getItem("package")) {
        setNotificationActive(true);
      }
    }
  }, [isClient]);

  useEffect(() => {
    const fetch = async () => {
      const userInfo = await getUser();
      // console.log("debug", userInfo);
      if (userInfo && userInfo.me?.events?.edges && userInfo.me?.events?.edges.length > 0) {
        const isAdmin = userInfo.me.events.edges.find((e) => e.node.userRole === "ADMIN");
        if (isAdmin) setHasEvents(true);
      }
    };
    fetch();
  }, []);

  return (
    <NavigationSubWrapper>
      <LeftSide>
        <ItemLeft>
          <NavbarLanguage t={props.t} route={props.route} />
        </ItemLeft>
        <ItemLeft to={Route[props.lang]["about/contact"]}>{props.t.contact}</ItemLeft>
      </LeftSide>
      <RightSide>
        {hasEvents && <SeeMyCredits to="https://www.swapcard.com/billing/organization">See My Credits</SeeMyCredits>}
        <LoginAs>{props.t.login_as}</LoginAs>
        <MixpanelHelper
          analytics-location={tp["button_location"]["navbar"]}
          analytics-category={tp["button_value"]["login_attendee"]}
          analytics-label={props.t.attendees_login}
        >
          <ButtonSmallInverted to="https://login.swapcard.com/">{props.t.attendees_login}</ButtonSmallInverted>
        </MixpanelHelper>
        <MixpanelHelper
          analytics-location={tp["button_location"]["navbar"]}
          analytics-category={tp["button_value"]["login_organizer"]}
          analytics-label={props.t.organizer_login}
        >
          <ButtonSmallInverted to="https://studio.swapcard.com/join">{props.t.organizer_login}</ButtonSmallInverted>
        </MixpanelHelper>
        {notificationActive && <NavbarNotifications t={props.t} active={notificationActive} lang={props.lang} />}
      </RightSide>
    </NavigationSubWrapper>
  );
};
