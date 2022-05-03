import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledPhone = styled.div`
  background-image: url(${props => props.bg});
  background-size: contain;
  background-repeat: no-repeat;
  width: calc(883px / 3);
  height: calc(1774px / 3);
  margin-top: 20px;
  z-index: 2;
  position: relative;
`;

export const IphoneContent = styled.div`
  width: 256px;
  height: 555px;
  position: absolute;
  top: 37px;
  z-index: 1;
  left: 19px;
`;
