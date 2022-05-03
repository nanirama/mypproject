import styled from "styled-components";
import { Body } from "../typographie";
import { media } from "../utils/style-utils";

export const Wrapper = styled.div`
  width: 100%;
  ${media.tablet`width: 900px;`}
  max-height: 490px;
`;

export const ModalWrapper = styled.div`
  .Modal {
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    padding: 0;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    border: 1px solid #fff;
    box-shadow: 0 32px 68px rgb(0 0 0 / 30%);
  }

  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rebeccapurple;
  }
`;

export const About = styled(Body)`
  /* max-height: 200px; */
  p {
    /* margin: 10px 0; */
  }
`;

export const Tab = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid #d6d6d6;
`;
export const TabList = styled.ul`
  display: flex;
  list-style-type: none;
  /* justify-content: space-around; */
  align-items: center;
  flex-wrap: wrap;
`;
export const TabListItem = styled.li`
  margin: 0px;
  line-height: 1.36;
  /* font-size: 14px; */
  font-weight: 600;
  white-space: nowrap;
  transition: all 150ms ease 0s;
  cursor: pointer;
  text-align: center;
  position: relative;
  width: 33.33%;
  padding: 25px 0;
  color: ${(props) => (props.active ? props.theme.color.secondary : "")};
  &:before {
    content: "";
    transition: all 150ms ease 0s;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: ${(props) => (props.active ? props.theme.color.secondary : "")};
    border-radius: 2px 2px 0px 0px;
  }
  &:hover {
    color: ${(props) => props.theme.color.secondary};
  }
`;

export const ButtonWrapper = styled.div`
  display: grid;
  row-gap: 10px;
  ${media.tablet`
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
  `}
`;

export const CustomButton = styled.button``;

export const CookiesDetailsWrapper = styled.div`
  margin-bottom: 40px;
  /* margin-top: 20px; */
`;

export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const SwitchWrapper = styled.span`
  position: relative;
  height: 34px;
  width: 40px;
  /* margin: 8px; */
  margin-left: auto;
`;

export const SwitchLabel = styled.label`
  position: absolute;
  left: 0;
  bottom: 3px;
  width: 50px;
  height: 24px;
  border-radius: 20px;
  background: rgb(144, 144, 144);
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 2px 1px 1px 2px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const Switch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 35px;
  width: 50px;
  height: 24px;
  margin: 0;
  &:checked + ${SwitchLabel} {
    background: rgb(0, 204, 136);
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-top: 2px;
      margin-left: 27px;
      transition: 0.2s;
    }
  }
`;

export const CategoryContent = styled.div`
  margin-bottom: 20px;
`;
