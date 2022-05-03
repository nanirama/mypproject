import styled from "styled-components";
import { media } from "../utils/style-utils";

export const StyledCookie = styled.div`
  position: fixed;
  display: flex;
  z-index: 10000;
  flex-direction: column;
  width: 100%;
  background: #252e39;
  border-radius: 5px;
  bottom: 0;
  font-size: 0.8rem;
  padding: 20px;
  color: #fff;
  ${media.tablet`
        bottom:20px;
        width:400px;
        left:20px;
    `} a {
    color: #fff;
  }
`;

export const StyledButton = styled.button`
  background: ${props => props.theme.color.secondary};
  padding: 10px 20px;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
  display: inline-block;
  border: none;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;
