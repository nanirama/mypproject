import React, { useState } from "react";

import { AccordeonNavContainer, P, H2, AccordeonNavWrapper } from "./styled";

const nav = [
  {
    title: "Schedule",
  },
  {
    title: "Schedule2",
  },
];

const AccordeonNav = ({ active, updateAccordeon }) => {
  const handleClick = (e) => {
    updateAccordeon(e.target.id);
    console.log(e.target.id);
    const y = document.querySelector(`h2#${e.target.id}`).offsetTop + window.pageYOffset - 160;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const renderNav = () => {
    return nav.map((item, i) => (
      <P
        key={i}
        onClick={handleClick}
        id={`${item.title}`}
        padding="5px 0 5px 13px"
        color="#686868"
        active={active === item.title}
        ml={-1}
      >
        {item.title}
      </P>
    ));
  };

  return (
    <AccordeonNavWrapper>
      <H2 align="left" mb={8} fs={20}>
        Features
      </H2>
      <AccordeonNavContainer>{renderNav()}</AccordeonNavContainer>
    </AccordeonNavWrapper>
  );
};

export default AccordeonNav;
