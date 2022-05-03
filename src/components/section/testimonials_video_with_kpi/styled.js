import styled from "styled-components";
import { media } from "../../utils/style-utils";
import Link from "../../utils/link";

export const WrapperQuote = styled.div`
  margin-top: 30px;
  ${media.tablet`
    margin:0 0 0 30px;
    `};
`;

export const LogoQuote = styled.img`
  max-width: 220px;
  height: auto;
`;

export const BodyQuote = styled.div`
  color: ${props => props.theme.color.body};
  margin: 10px 0;
`;

export const NumberWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  text-align: center;
  ${media.tablet`
    margin:0;
    justify-content:flex-start;
    align-items:flex-start;
    flex-direction:row;
  `};
`;

export const NumberContainer = styled.div`
  margin-bottom: 0;
  text-align: center;
  ${media.tablet`
  text-align: left;
    margin-right: 30px;
  `} margin-bottom: 30px;
`;

export const Number = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.theme.color.secondary_button};
  margin-bottom: 10px;
`;

export const NumberLabel = styled.div`
  color: ${props => props.theme.color.body};
`;

export const ReadMore = styled(Link)`
  color: ${props => props.theme.color.secondary};
  margin-top: 30px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  display: flex;
  justify-content: center;
  ${media.tablet`
    justify-content:flex-start;
  `} align-items: center;
  transition: 0.3s all;
  &:hover {
    transform: translate(10px, 0);
  }
`;

export const IconArrow = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  height: 10px;
  margin-left: 10px;
  width: 15px;
  fill: ${props => props.theme.color.secondary};
`;
