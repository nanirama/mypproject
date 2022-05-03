import styled, { css } from "styled-components";

export const LogosBlk = styled.div`
  padding: 60px 0;
  background-color: #fafafa;
  @media screen and (max-width: 767px) {
    padding: 30px 0;
  }
`;
export const BrandContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 10px;
  @media screen and (max-width: 991px) {
    max-width: 90%;
  }
  .logos-container {
    max-width: 770px;
    margin: 0 auto;
  }
  h2 {
    width: 100%;
    font-size: 32px;
    line-height: 42px;
    font-weight: 700;
    text-align: center;
    color: #262f3d;
    margin-bottom: 30px;
    @media screen and (max-width: 600px) {
      font-size: 26px;
      line-height: 32px;
    }
  }
  .box {
    border-right: 1px solid #e4e7f2;
    border-bottom: 1px solid #e4e7f2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box:nth-child(4),
  .box:last-child {
    border-right: none;
  }
  .box:nth-child(5),
  .box:nth-child(6),
  .box:nth-child(7),
  .box:nth-child(8) {
    border-bottom: none;
  }

  @media screen and (max-width: 767px) {
    .box:nth-child(5),
    .box:nth-child(6) {
      border-bottom: 1px solid #e4e7f2;
    }
    .box:nth-child(2),
    .box:nth-child(6) {
      border-right: none;
    }
  }
`;
export const BrandLogo = styled.div`
  padding: 20px;
  width: 140px;
`;
