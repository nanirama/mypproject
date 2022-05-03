import React from "react";
import styled from "styled-components";

export const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 160px;
  height: 160px;
`;

export default ({ avatar }) => <StyledAvatar src={avatar} />;
