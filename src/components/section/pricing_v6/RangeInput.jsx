import React, { useState } from "react";

import { InputRange, RangeProgress, RangeWrapper, InputNumber, RangeContainer } from "./styled";

const RangeInput = ({ max = 750 }) => {
  const [value, setValue] = useState(0);

  return (
    <RangeContainer>
      <RangeWrapper style={{ position: "relative" }}>
        <RangeWrapper style={{ position: "absolute" }}>
          <RangeProgress style={{ width: `${value}%` }} color="rgb(0, 204, 136)" />
          <RangeProgress style={{ width: `${100 - value}%` }} color="rgba(0, 204, 136, 0.1)" />
        </RangeWrapper>
        <InputRange
          type="range"
          min="1"
          max={100}
          step="1"
          onChange={({ target }) => setValue(target.value)}
        ></InputRange>
      </RangeWrapper>
      <InputNumber value={700} />
    </RangeContainer>
  );
};

export default RangeInput;
