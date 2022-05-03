import styled from "styled-components";
import { media } from "../utils/style-utils";
import Link from "../utils/link";

export const StyledCookie = styled.div`
  position: fixed;
  display: flex;
  z-index: 10000;
  flex-direction: column;
  width: 100%;
  background: #252e39;
  border-radius: 5px;
  bottom: 0;
  padding: 20px;
  color: #fff;
  ${media.tablet`
        bottom:180px;
        width:500px;
        left:20px;
    `} a {
    color: #fff;
  }
`;

export const StyledButton = styled.button`
  background: ${(props) => props.theme.color.secondary};
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

export const Title = styled.div`
  font-size: 1.1rem;
`;
export const Text = styled.div`
  font-size: 0.9rem;
`;

export const Bye = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  transition: transform 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: rotate(180deg);
  }
`;
