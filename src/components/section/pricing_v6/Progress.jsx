import React from "react";

import { CardContainer, H2, CustomizeBtn, ProgressWrapper, ProgressSegment, P } from "./styled";

const ProgressBar = ({ progress = 0 }) => {
  const renderProgress = () => {
    const segments = [];
    for (let i = 0; i < 4; i++) {
      if (i <= progress) {
        segments.push(<ProgressSegment filled />);
      } else {
        segments.push(<ProgressSegment />);
      }
    }

    return segments.map((segment) => segment);
  };

  return (
    <CardContainer style={{ display: "block" }}>
      <H2 fs={24} align="left">
        Great! Your package is almost ready
      </H2>
      <ProgressWrapper>{renderProgress()}</ProgressWrapper>
      <CustomizeBtn r={14} height={28} mw={165} mt={24}>
        Skip this step
      </CustomizeBtn>
      <P color="#5d768b" mt={14} style={{ textTransform: "uppercase", fontWeight: 600 }}>
        Or contact sales
      </P>
    </CardContainer>
  );
};

export default ProgressBar;
