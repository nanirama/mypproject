import React from "react";
import { StyledLogoContainer, StyledLogo } from "./styled";
import { Margin } from "styled-components-spacing";
import { Typo4 } from "../../../typographie";

export default ({ t }) => (
  <React.Fragment>
    <Margin top={4} bottom={3}>
      <Typo4 bold center>
        {t.social_proof}
      </Typo4>
    </Margin>
    <StyledLogoContainer>
      {t.customers_logo.map((item, index) => (
        <StyledLogo key={index}>
          <img alt="" src={item.logo.url} />
        </StyledLogo>
      ))}
    </StyledLogoContainer>
  </React.Fragment>
);
