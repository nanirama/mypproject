import React, { useState } from "react";
import styled from "styled-components";
// import onClickOutside from "react-onclickoutside";
import Link from "../../utils/link";
import Route from "../../../localization";

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
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  margin: 0;
  left: 50%;
  transform: translateX(-50%);
  color: ${(props) => props.theme.color.primary};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 9999;
  top: 40px;
  padding: 10px;
  li {
    /* padding: 15px 30px; */
    padding: 10px 0;
    padding-left: 10px;
    padding-right: 40px;
    list-style: none;
    margin: 0;
    display: flex;

    a {
      display: flex;
    }
  }
`;
const Icon = styled.span`
  margin-right: 10px;
`;
const IconArrow = styled.span`
  margin-left: 5px;
`;

const DropdownArrow = styled.span`
  margin-left: 5px;
`;

const Language = ({ t, route }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Language.handleClickOutside = () => setIsDropdownOpen(false);

  return (
    <>
      <div style={{ position: "relative" }}>
        <Navbar onClick={(e) => setIsDropdownOpen(!isDropdownOpen)}>
          <Icon className="icons8-world-map" />
          {t.lang_current}
          <IconArrow className="icons8-drop-down-arrow" />
        </Navbar>
        {isDropdownOpen && (
          <div>
            <NavbarDropdown>
              <li>
                <Link to={Route[t.lang_1_route][route]}>
                  {t.lang_1} <DropdownArrow className="icons8-right-pointing-arrow" />
                </Link>
              </li>
              <li>
                <Link to={Route[t.lang_2_route][route]}>
                  {t.lang_2} <DropdownArrow className="icons8-right-pointing-arrow" />
                </Link>
              </li>
              {Route[t.lang_3_route][route] && (
                <li>
                  <Link to={Route[t.lang_3_route][route]}>
                    {t.lang_3} <DropdownArrow className="icons8-right-pointing-arrow" />
                  </Link>
                </li>
              )}
            </NavbarDropdown>
          </div>
        )}
      </div>
    </>
  );
};

// const clickOutsideConfig = {
//   handleClickOutside: () => Language.handleClickOutside
// };

export default Language;
