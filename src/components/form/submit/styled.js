import styled from "styled-components";

export const StyledSubmit = styled.button`
  color: #fff;
  opacity: ${(props) => (props.disabled ? "0.8" : "1")};
  letter-spacing: 1px;
  background: ${(props) => props.theme.color.secondary};
  /* padding: 18px 35px; */
  transition: 0.3s all;
  /* box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px; */
  font-weight: 600;
  padding: 8px 25px;
  border-radius: 8px;
  border: none;
  display: inline-block;
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
  font-size: 0.9rem;
  :hover {
    /* box-shadow: ${(props) => (!props.disabled ? "rgba(0, 0, 0, 0.8) 0px 1px 3px 0px" : "")}; */
    cursor: pointer;
  }
`;

export const StyledLoader = styled.span`
  opacity: ${(props) => (props.isLoading ? "1" : "0")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 150ms ease 0s;
`;
