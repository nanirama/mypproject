import styled from "styled-components";

export const PricePage = styled.div`
  background-color: #fff;
  width: 100%;
  float: left;
  margin-top: 80px;
  border-top: 1px solid #e0e0e0;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 50px auto;
  padding: 0 15px;
`;

export const TitleLarge = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  color: #262f3d;
  margin-bottom: 45px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 15px;
  }
`;
export const Links = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 20px;
  a {
    color: #505050;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    padding: 0 20px;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      color: #00cc88;
    }
    @media screen and (max-width: 500px) {
      padding: 0 8px;
      font-size: 14px;
    }
  }
  .active {
    color: #00cc88;
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  @media screen and (max-width: 839px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  width: 100%;
  border-radius: 19px;

  position: relative;

  padding: 25px;
  border: 1px solid #c8d1e9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    content: "";
    height: 11px;
    width: 100%;

    border-radius: 70px 70px 0px 0px;
    background-color: rgba(
      ${(props) => props.priceColorR},
      ${(props) => props.priceColorG},
      ${(props) => props.priceColorB},
      1
    );
  }

  p {
    color: #425168;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 20px;
  }
  h3 {
    font-weight: 400;
    margin: 15px 0;
    font-size: 40px;
    line-height: 32px;
    color: rgba(${(props) => props.priceColorR}, ${(props) => props.priceColorG}, ${(props) => props.priceColorB}, 1);
  }

  h6 {
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;

    margin: 0;
    color: rgba(${(props) => props.priceColorR}, ${(props) => props.priceColorG}, ${(props) => props.priceColorB}, 1);
  }

  .ideal-text {
    background: #edf1f7;
    padding: 10px 10px;
    color: #52627e;
    font-size: 14px;
    font-weight: 600;
    justify-content: center;
    display: flex;
    height: 66px;
    align-items: center;
    line-height: 20px;
    text-align: center;
    margin-bottom: 20px;
    background-color: rgba(
      ${(props) => props.priceColorR},
      ${(props) => props.priceColorG},
      ${(props) => props.priceColorB},
      0.1
    );
    color: rgba(${(props) => props.priceColorR}, ${(props) => props.priceColorG}, ${(props) => props.priceColorB}, 1);
  }
  button {
    width: 100%;
    display: inline-block;
    font-size: 15px;
    letter-spacing: 1px;
    height: 60px;
    line-height: 50px;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.3s all;
    color: #425168;
    border: 2px solid #425168;
    text-decoration: none;
    text-align: center;
    background-color: #ffffff;
  }
  a.externallink {
    width: 100%;
    display: inline-block;
    font-size: 15px;
    letter-spacing: 1px;
    height: 60px;
    line-height: 50px;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.3s all;
    color: #425168;
    border: 2px solid #425168;
    text-decoration: none;
    text-align: center;
    background-color: #ffffff;
  }
  a.buttonlink {
    width: 100%;
    display: inline-block;
    font-size: 15px;
    height: 60px;
    line-height: 50px;
    letter-spacing: 1px;
    color: rgb(66, 81, 104);
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.3s all;
    color: #fff;
    border: 2px solid transparent;
    text-decoration: none;
    text-align: center;
    background-color: rgba(
      ${(props) => props.priceColorR},
      ${(props) => props.priceColorG},
      ${(props) => props.priceColorB},
      1
    );

    &:hover {
      background-color: rgba(
        ${(props) => props.priceColorR},
        ${(props) => props.priceColorG},
        ${(props) => props.priceColorB},
        0.8
      );
    }
  }

  //.text-violet {
  // color: #7989a9;

  //}
  // .bg-violet {
  //   background-color: #7989a9;
  // }

  // .text-green {
  //   color: #00b474;
  // }
  // .bg-green {
  //   background-color: #00b474;
  // }

  // .text-blue {
  //   color: #2190cf;
  // }
  // .bg-blue {
  //   background-color: #2190cf;
  // }
`;

export const Price = styled.div`
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  color: #344053;
  margin-bottom: 10px;
  p {
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    color: #7989a9;
    line-height: 24px;
    color: #7989a9;
    i {
      font-style: italic;
    }
  }
`;

export const SmallText = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  color: #425168;
`;

export const ContactForm = styled.div`
  max-width: 705px;
  margin: 0 auto;
  padding: 60px 0 0 0;
  h2 {
    text-align: center;
    font-size: 30px;
    line-height: 38px;
    color: #262f3d;
    font-weight: 600;
  }
`;
export const CurrencyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const Section = styled.div`
  background-color: #262f3d;
  padding: 50px 0;
  text-align: center;
  p {
    color: #ffffff !important;
    font-size: 16px;
    line-height: 19px;
    margin: 15px 0 0 0;
  }
  a.buttonlink {
    width: auto;
    display: inline-block;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 1px;
    color: rgb(66, 81, 104);
    padding: 13px 40px;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.3s all;
    color: #fff;
    border: 2px solid transparent;
    text-decoration: none;
    background-color: #00cc88;
    text-align: center;

    &:hover {
      background-color: #5d768b;
    }
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
  color: #fff;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 15px;
  }
`;
