import styled from "styled-components";
import { media } from "../../utils/style-utils";

export const Wrapper = styled.div`
  padding: 150px 0 50px 0;
  background: #fafafa;
`;

export const PackageWrapper = styled.div`
  background: #fff;
  padding: 40px 20px;
  width: 100%;
  box-shadow: rgba(181, 197, 213, 0.4) 0px 4.5px 6.5px 0px;
  text-align: center;
  border-radius: 3px;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 26px;
  margin-bottom: 15px;
`;
export const SubTitle = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
  /* margin: 20px 0; */
  margin-bottom: 30px;
`;

export const Plus = styled.div`
  margin: 40px auto;
  ${media.tablet`
    transform: translate(-50%);
    margin: 110px auto;
  `}
  min-width: 52px;
  min-height: 52px;
  width: 52px;
  height: 52px;
  background-color: white;
  border-radius: 50%;
  color: rgb(96, 172, 69);
  font-size: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 3px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const Price = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.color.secondary};
  font-size: 23px;
  margin-bottom: 30px;
`;
export const GreenTitle = styled.div`
  color: ${(props) => props.theme.color.secondary};
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 13px;
`;
export const LineText = styled.div`
  margin-bottom: 20px;
  color: ${(props) => props.theme.color.body};
`;
export const FeaturesList = styled.div`
  li {
    margin-bottom: 20px;
    text-decoration: ${(props) => (props.strike ? "line-through" : "")};
    opacity: 0.5;
  }
`;
export const SeeAllFeatures = styled.div`
  /* margin-top: 20px; */
  text-decoration: underline;
`;

export const PremiumWrapper = styled.div``;
export const PremiumSep = styled.div`
  background: none;
  ${media.tablet`
  background-image: linear-gradient(rgb(96, 172, 69) 50%, rgba(255, 255, 255, 0) 50%);
  background-size: 1px 20px;
  `}
`;

export const PremiumParents = styled.div`
  display: grid;
  grid-template-columns: 100%;
  ${media.tablet`
    grid-template-columns: 50% 1px 50%;
  `}
`;
