import styled from "styled-components";
import { media } from "../../../../utils/style-utils";

export const Features = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #e0e6ed;
  box-shadow: 0 2px 4px rgba(73, 85, 103, 0.04);
  border-radius: 5px;
  margin-top: 50px;
  overflow: hidden;
  flex: 1;
  display: flex;

  flex-direction: column;

  ${media.tablet`
      /* flex-direction:row; */
  `}
`;

export const ListWrapper = styled.div`
  flex: 100%;
  padding: 20px 30px;
  text-align: left;
`;

export const FeatureGroupTitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${(props) => props.theme.color.secondary};
`;

export const FeatureItem = styled.div`
  font-size: 1rem;
  margin-bottom: 13px;
  color: ${(props) => props.theme.color.body};
`;

export const SocialProof = styled.div`
  background: ${(props) => props.theme.color.primary};

  flex: 100%;
  height: inherit;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  padding: 20px;
`;

export const SocialProofPicture = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;

  width: 260px;
  height: 90px;

  border-radius: 90px;
  background-repeat: no-repeat;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(238, 238, 238);
  border-image: initial;
`;

export const SocialProofQuote = styled.div`
  margin: 15px 30px;
  text-align: left;
  color:#FFF;
  /* color: ${(props) => props.theme.color.body}; */
`;

export const SocialProofEventLogo = styled.img`
  /* padding: 0 30px; */
  max-width: 130px;
`;

export const FAQTitle = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  padding: 0 20px;
`;
export const FAQAnswer = styled.div`
  margin-top: 15px;
  padding: 0 20px;
  line-height: 1.3rem;
  color: ${(props) => props.theme.color.body};
  /* color:#637381; */
  a {
    text-decoration: underline;
    color: ${(props) => props.theme.color.primary};
  }
`;

export const Picto = styled.i`
  margin-right: 10px;
`;

export const MoreInfo = styled.div`
  margin-top: 10px;
  a {
    text-decoration: underline;
  }
`;

export const FeatureListRow = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
`;

export const FeatureListItem = styled.div`
  /* align-self: flex-start; */
  /* margin: 0 20px 0 0; */
  width: 290px;
  margin-bottom: 30px;
  margin-right: 10px;
`;
