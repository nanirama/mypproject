import React from "react";
import { StyledPhone, IphoneContent, Wrapper } from "./styled";
import iPhonePng from "../../../../assets/images/iPhoneX.png";

export default ({ screen }) => (
  <React.Fragment>
    <Wrapper>
      <StyledPhone bg={iPhonePng} />
      <IphoneContent>
        <img src={screen} alt="" className="img-responsive" />
      </IphoneContent>
    </Wrapper>
  </React.Fragment>
);
