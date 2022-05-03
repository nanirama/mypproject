import styled from "styled-components";
import { media } from "../../utils/style-utils.js";

export const StyledArticleDivider = styled.div`
  width: 70px;
  height: 5px;
  background: ${props => props.theme.color.primary};
  ${media.tablet`
         margin:${props => (props.center ? `0 auto` : "0")};
    `} margin:0 auto;
`;

export const StyledProvider = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  :after {
    content: "";
    width: 31.5%;
  }
`;

export const StyledLogoProvider = styled.div`
  img {
    width: 200px;
    max-width: 100%;
  }
`;

export const StyledProviderItem = styled.div`
  border: 1px solid #eee;
  //box-shadow: 0px 6px 8px 0px rgba(45, 35, 66, 0.15);
  border-radius: 0.375em;
  background: #fff;
  ${media.tablet`
    width: 31.5%;
    `} width:100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 30px;
  margin: 0 0 30px 0;
`;
