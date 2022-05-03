import styled from "styled-components";
// import { media } from "../../utils/style-utils";
import { Grid } from "react-flexbox-grid";

export const FeatureItem = styled.div`
  color: ${props => props.theme.color.body};
  margin-bottom: 20px;
`;

export const Icon = styled.span`
  margin-right: 9px;
  color: #4caf50;
  background: #c8e6c9;
  font-size: 18px;
  border-radius: 90px;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const StripeGrid = styled(Grid)`
  max-width: 930px;
`;

export const Package = styled.div`
  background: #de0125;
  color: #fff;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0px 4.5px 6.5px 0 rgba(181, 197, 213, 0.4);
  padding: 20px;
  min-height: 375px;
  justify-content: center;
  /* height: 400px; */
`;

export const PriceWrapper = styled.div`
  display: flex;
`;
export const Price = styled.div`
  font-size: 70px;
  line-height: 1;
`;
export const Currency = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

export const Name = styled.div`
  font-size: 40px;
  text-align: center;
  margin: 30px 0;
`;

export const Arrow = styled.div`
  position: absolute;
  display: inline-block;
  left: 0;
  top: 40px;
  height: 0;
  width: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid white;
`;

/* Form */

export const FormWrapper = styled.div`
  text-align: left;
  width: 100%;
  padding: 0 20px;
`;

export const Info = styled.p`
  color: ${props => props.theme.color.body};
  font-size: 0.9rem;
`;
