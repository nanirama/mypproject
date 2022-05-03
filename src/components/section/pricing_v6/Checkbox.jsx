import React from "react";

import { CheckBox, CheckBoxWrapper, CheckBoxLabel } from "./styled";

const Checkbox = ({ id, annually, setAnnually, key }) => {
  return (
    <CheckBoxWrapper>
      <CheckBox id={id} key={key} onChange={setAnnually} checked={annually} type="checkbox" />
      <CheckBoxLabel htmlFor={id} />
    </CheckBoxWrapper>
  );
};

export default Checkbox;
