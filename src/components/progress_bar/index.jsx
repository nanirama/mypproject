import React from "react";
import { Block, Element, ElementActive, LeftElement, RightElement, RightElementActive } from "./styled";

export const ProgressBar = ({ progress }) => {
  return (
    <Block>
      <LeftElement />
      {progress > 1 ? <ElementActive /> : <Element />}
      {progress > 2 ? <ElementActive /> : <Element />}
      {progress === 4 ? <RightElementActive /> : <RightElement />}
    </Block>
  );
};

export default ProgressBar;
