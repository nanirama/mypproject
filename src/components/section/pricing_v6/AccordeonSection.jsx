import React, { useState, useEffect } from "react";

import { AccordeonWrapper, H2, P, Icon, AccordeonValue, AccordeonValueWrapper } from "./styled";

const AccordeonItem = ({ title, values, active, updateAccordeon }) => {
  const [hidden, setHidden] = useState(title !== active);

  console.log(title !== active);

  const handleClick = (e) => {
    e.persist();
    updateAccordeon(e.target.id);
  };

  useEffect(() => {
    setHidden(title !== active);
  });

  const renderDescription = () => {
    return values.map((value, i) => (
      <AccordeonValueWrapper hidden={hidden} key={i}>
        <Icon color="#00cc88" className="icons8-checked" />
        <P mb={24}>{value}</P>
      </AccordeonValueWrapper>
    ));
  };

  return (
    <AccordeonValue onClick={handleClick.bind(title)}>
      <div>
        <H2 align="left" fs={16} id={title} mb={16}>
          {title}
        </H2>
        <Icon className={hidden ? "icons8-collapse-arrow" : "icons8-drop-down-arrow"} />
      </div>
      {renderDescription()}
    </AccordeonValue>
  );
};

const Accordeon = ({ active, updateAccordeon, items }) => {
  const data = [
    {
      title: "Scheduleeee",
      values: [
        "Schedule multilingual & custom fields for easy filtering",
        "Schedule multilingual & custom fields for easy filtering",
        "Add and edit multiple sessions via Excel file or manually",
      ],
    },
    {
      title: "Schedule2",
      values: [
        "Schedule multilingual & custom fields for easy filtering",
        "Schedule multilingual & custom fields for easy filtering",
        "Add and edit multiple sessions via Excel file or manually",
      ],
    },
  ];
  const renderItems = () => {
    return data.map((item, i) => (
      <AccordeonItem
        key={i}
        updateAccordeon={updateAccordeon}
        active={active}
        title={item.title}
        values={item.values}
      />
    ));
  };

  return (
    <AccordeonWrapper>
      <H2 mb={32} fs={30} align="left">
        Swapcard features included on every plan
      </H2>
      {renderItems()}
    </AccordeonWrapper>
  );
};

export default Accordeon;
