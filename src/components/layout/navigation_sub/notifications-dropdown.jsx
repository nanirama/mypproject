import React, { useState } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import Link from "../../utils/link";
import Route from "../../../localization";
import bellIcon from "../../../assets/images/notification-bell.svg";
import { Typo3 } from "../../typographie";
import TrackingNaming from "../../../localization/tracking.json";
import MixpanelHelper from "../../utils/segment";

const Navbar = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
const NavbarDropdown = styled.div`
  :before {
    content: " ";
    border-radius: 4px 0 0 0;
    background: #fff;
    left: 92%;
    box-shadow: -3px -3px 5px rgba(82, 95, 127, 0.04);
    z-index: 5;
    top: -6px;
    margin: 0 0 0 -6px;
    width: 12px;
    height: 12px;
    transform: rotate(45deg);
    position: absolute;
  }
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  margin: 0;
  left: -300%;
  width: 400px;
  transform: translateX(-50%);
  color: ${(props) => props.theme.color.primary};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  z-index: 9999;
  top: 40px;
  padding: 10px;
`;

const NotificationsBlock = styled.div`
  position: relative;
  margin-left: 20px;
`;

const NotficationIcon = styled.div`
  position: relative;
  height: 25px;
  width: 25px;
  cursor: ${(props) => props.active && "pointer"};
  background-color: ${(props) => (props.active ? "#00CC88" : "grey")};
  -webkit-mask-image: url(${bellIcon});
  mask-image: url(${bellIcon});
  mask-size: contain;
`;

const Title = styled(Typo3)`
  color: #00cc88;
  margin-left: 10px;
  margin-top: 5px;
`;

const NotificationTitle = styled.p`
  margin-bottom: 6px;
  font-size: 18px;
`;

const NotificationText = styled.div`
  p {
    /* color: #777788; */
    display: inline;
    font-size: 16px;
    line-height: 20px;
  }
  a {
    display: inline;
    font-size: 14px;
    text-decoration: underline;
  }
`;

const NotificationsNumber = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  font-size: 10px;
  color: #fff;
  line-height: 10px;
  text-align: center;
  background: red;
  position: absolute;
  right: -4px;
  top: -3px;
  padding-top: 1px;
`;

const NotificationItem = styled.div`
  /* padding: 10px 0; */
  /* padding-left: 10px; */
  /* padding-right: 40px; */
  margin-top: 10px;
  padding: 10px;
  list-style: none;
  display: flex;
  flex-flow: column;
  border-radius: 5px;
  a {
    display: flex;
  }
  &:hover {
    cursor: pointer;
    background: rgba(38, 47, 61, 0.05);
  }
`;

const clickOutsideConfig = {
  handleClickOutside: () => Notifications.handleClickOutside,
};

const Notifications = ({ t, route, active, lang }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  Notifications.handleClickOutside = () => setIsDropdownOpen(false);
  return (
    <>
      <div style={{ position: "relative" }}>
        <MixpanelHelper
          analytics-location="Navbar"
          // analytics-category={TrackingNaming["Notifications menu opened"]}
          analytics-label="Notifications menu opened"
          analytics-badge={active}
        >
          <Navbar onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <NotificationsBlock>
              <NotficationIcon active={active} />
              {active && <NotificationsNumber>1</NotificationsNumber>}
            </NotificationsBlock>
          </Navbar>
        </MixpanelHelper>

        {isDropdownOpen && active && (
          <div>
            <NavbarDropdown>
              <Title>{t.notifications_title}</Title>
              <MixpanelHelper
                analytics-location="Navbar"
                // analytics-category={TrackingNaming["Notifications menu opened"]}
                analytics-label="Click continue pricing configuration"
              >
                <Link to={Route[lang]["pricing/build-plan"]}>
                  <NotificationItem>
                    <NotificationTitle>{t.notification_plan_building_header}</NotificationTitle>
                    <NotificationText>
                      <p>
                        {t.notification_plan_building_subheader} {t.notification_plan_building_link}
                      </p>
                    </NotificationText>
                  </NotificationItem>
                </Link>
              </MixpanelHelper>
            </NavbarDropdown>
          </div>
        )}
      </div>
    </>
  );
};
Notifications.prototype = {};

export default onClickOutside(Notifications, clickOutsideConfig);
