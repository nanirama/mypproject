import React from "react";
import { SpaceH } from "../../../../space";
import { Typo4 } from "../../../../typographie";
import ProgressBar from "../../../../progress_bar";
import { ButtonSecondary } from "../../../../button";

export default props => {
  return (
    <>
      <Typo4>{props.title}</Typo4>
      <SpaceH of={24} />
      <ProgressBar progress={props.progress} />
      <SpaceH of={28} />
      <ButtonSecondary onClick={onClickContinueButton}>
        {nullChoice ? t.skip_button_label.text : t.continue_button_label.text}
      </ButtonSecondary>
    </>
  );
};
