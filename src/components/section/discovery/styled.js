import styled from "styled-components";
import { media } from "../../utils/style-utils";

export const Discovery = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${media.tablet`
    flex-direction:row;
  `};
`;

export const Bloc = styled.div`
  background: ${props => (props.bg === "Blue" ? props.theme.color.primary : props.theme.color.secondary)};
  flex: 1;
  padding: 20px;
  ${media.tablet`
    padding: 80px;
  `} text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BlocImage = styled.div`
  max-height: 400px;
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
