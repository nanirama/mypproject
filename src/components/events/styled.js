import styled from "styled-components";

import { media } from "../utils/style-utils";

import BannerBg from "../../assets/images/main-bg.jpg";
import MobileBg from "../../assets/images/mobile-bg.jpg";

export const Logo = styled.img`
  height: 50px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  /* margin: 100px; */
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  max-width: 800px;
  min-height: 500px;
  margin: 0 auto;
  /* padding: 100px; */
  padding: 20px 0;
  //border: 1px solid; // deb
  // ${media.desktop`
  //   padding: 80px 0;
  // `}
`;

export const Label = styled.p`
  color: rgb(153, 153, 153);
  margin-bottom: 10px;
`;

export const Table = styled.table`
  border: 1px solid rgb(242, 242, 242);
  background: #fff;
  width: 100%;
  table-layout: fixed;
  overflow-wrap: break-word;
  tr:nth-child(even) {
    background-color: rgb(229, 229, 229);
  }
  th:nth-child(1) {
    width: 40%;
  }
`;

export const Th = styled.th`
  border-bottom: 1px solid rgb(242, 242, 242);
  color: rgb(153, 153, 153);
  padding: 12px;
  font-weight: bold;
  text-align: left;
`;

export const Td = styled.td`
  //border: 1px solid rgb(242, 242, 242);
  color: rgb(153, 153, 153);
  padding: 12px;
  font-weight: normal;
`;

export const TdFooter = styled.td`
  //border: 1px solid rgb(242, 242, 242);
  color: rgb(153, 153, 153);
  padding: 12px;
  font-weight: bold;
`;

export const StyledTextarea = styled.div``;

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const DesktopImg = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const MobileImg = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Banner = styled.div`
  // display: flex;
  // align-items: center;
  position: relative;

  img {
    width: 100%;
  }
  @media screen and (min-width: 1170px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 1169px) {
    padding-top: 60px;
  }
`;
export const BannerContent = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
export const BannerText = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 1182px) {
    br {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 20px;
    left: 0;
    height: inherit;
    top: 100px;
  }

  p {
    margin: 0;
    font-size: 18px;
    color: #fafafa;
    line-height: 24px;
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }
  h2 {
    font-size: 48px;
    line-height: 58px;
    color: #fafafa;
    font-weight: 700;
    margin-bottom: 20px;
    @media (min-width: 901px) and (max-width: 1065px) {
      font-size: 40px;
    }
    @media screen and (max-width: 900px) {
      font-size: 30px;
      line-height: 40px;
      margin: 40px 0 10px 0;
    }
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 460px) {
    top: 40px;
    h2 {
      font-size: 20px;
      line-height: 26px;
    }
    p {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const WebinarImg = styled.div`
  display: flex;
  justify-content: end;
  @media screen and (max-width: 767px) {
    justify-content: start;
    margin-top: 20px;
  }
  img {
    margin: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 7fr 5fr;
  padding: 50px 0;
  gap: 50px;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const WebinarText = styled.div`
  h3 {
    font-weight: 800;
    font-size: 24px;
    line-height: 32px;
    color: #262f3d;
    margin-bottom: 20px;
  }
  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    color: #425168;
    margin-bottom: 20px;
  }
  li {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #425168;
    margin-bottom: 10px;
    list-style: disc;
    margin-left: 18px;
  }
`;
export const Tag = styled.div`
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 1.69px;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #00cc88;
  border-radius: 50px;
  padding: 5px 14px;
  width: auto;
  display: inline-block;
  margin-bottom: 15px;
`;

export const Speakers = styled.div`
  display: flex;
  gap: 25px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
export const SpeakerInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #637491;
  font-size: 18px;
  line-height: 24px;
  h6 {
    font-size: 18px;
    line-height: 24px;
    margin: 0;
  }
  img {
    margin-bottom: 10px;
  }
`;

export const FormBlk = styled.div`
  div {
    padding: 0px 0 !important;
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
  .submit-btn {
    width: 100%;
    float: left;
    background-color: #56bc76;
    border: 0;
    color: #fff;
    text-transform: uppercase;
    padding: 15px 15px;
    border-radius: 5px;
    margin: 15px 0;
  }
  h3 {
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #262f3d;
    position: relative;
    &:before,
    &:after {
      position: absolute;
      content: "";
      top: 18px;
      left: 0;
      width: 30%;
      height: 2px;
      background-color: #e0e0e0;
      @media (min-width: 768px) and (max-width: 991px) {
        width: 60px;
      }
      @media screen and (max-width: 420px) {
        width: 50px;
      }
    }
    &:after {
      right: 0;
      left: inherit;
    }
  }
  p {
    font-size: 14px;
    span {
      color: #56bc76;
    }
  }

  input,
  select,
  textarea {
    padding: 0.5em;
    color: #333;
    border: 1px solid #e0e0e0;
    background-color: #fff !important;
    height: 45px;
    font-size: 14px;
    padding: 0 15px;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 15px;
  }

  .actions {
    width: 100%;
  }
  input[type="submit"] {
    background-color: #00cc88 !important;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  padding: 0.5em;
  color: #333;
  border: 1px solid #e0e0e0;
  height: 45px;
  font-size: 14px;
  padding: 0 15px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 15px;
`;

export const Select = styled.select`
  width: 100%;
  height: 45px;
  background: #fff;
  color: #999;
  padding: 0 15px;
  font-size: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-bottom: 15px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
