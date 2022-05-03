import styled from "styled-components";
import Link from "../utils/link";
import { media } from "../utils/style-utils.js";

export const Typo1 = styled.h1`
  font-size: 1.7rem;
  ${media.tablet`
    font-size:${(props) => props.theme.fontSize.typo1};
  `};
  font-weight: 700;
  letter-spacing: 0;
  color: ${(props) => (props.color ? props.color : props.theme.color.primary)};
  text-align: ${(props) => (props.center ? "center" : "")};
`;

export const Typo2 = styled.h2`
  font-size: 1.3rem;
  text-decoration: none;
  display: block;
  color: ${(props) => (props.color ? props.color : props.theme.color.primary)};
  font-weight: 600;
  ${media.tablet`
    font-weight: ${(props) => (props.bold ? props.bold : "600")}; 
    font-size:${(props) => props.theme.fontSize && props.theme.fontSize.typo2};
  `};
  text-align: ${(props) => (props.center ? "center" : props.left ? "left" : "")};
`;
export const Typo7 = styled.h2`
  font-size: 1.25rem;
  text-decoration: none;
  display: block;
  color: ${(props) => (props.color ? props.color : props.theme.color.primary)};
  font-weight: 600;
  ${media.tablet`
    font-weight: ${(props) => (props.bold ? props.bold : "600")}; 
    font-size:${(props) => props.theme.fontSize && props.theme.fontSize.typo2};
  `};
  text-align: ${(props) => (props.center ? "center" : props.left ? "left" : "")};
`;

export const Typo3 = styled.h3`
  color: ${(props) => (props.color ? props.color : props.theme.color.primary)};
  font-size: ${(props) => props.theme.fontSize.typo3};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  text-align: ${(props) => (props.center ? "center" : "")};
`;

export const Typo4 = styled.h4`
  color: ${(props) => (props.color ? props.color : props.theme.color.primary)};
  font-size: ${(props) => props.theme.fontSize.typo4};
  text-align: ${(props) => (props.center ? "center" : props.textAlign ? props.textAlign : "none")};
  font-weight: ${(props) => (props.bold ? props.bold : "400")};
  &:hover {
    cursor: ${(props) => (props.hover ? "pointer" : "")};
  }
`;

export const Typo5 = styled.h5`
  color: ${(props) => (props.color ? props.color : props.theme.color.primary)};
  font-size: ${(props) => props.theme.fontSize.typo5};
  text-align: ${(props) => (props.center ? "center" : props.textAlign ? props.textAlign : "none")};
  /* font-weight: ${(props) => (props.bold ? "600" : "400")}; */
`;

export const Body = styled.div`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.theme.fontSize.body};
  color: "#505050";
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : props.theme.lineHeight.body)};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => (props.center ? "center" : "none")};

  em {
    font-style: italic;
  }

  strong {
    font-weight: 800;
  }

  p {
    margin: 10px 0;
  }

  ol,
  ul {
    list-style: initial;
    padding: 10px 0 10px 30px;
  }
  li {
    margin: 5px 0;
  }
`;

export const BodySmall = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: ${(props) => props.theme.color && props.theme.color.body};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => (props.center ? "center" : "none")};
`;

export const Small = styled.div`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.color.body};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  /* text-align: ${(props) => (props.center ? "center" : "left")}; */
  margin: 0 0 5px 0;
`;

export const StyledLink = styled(Link)`
    color:${(props) => props.theme.color.body}
    &:hover {
      text-decoration:underline;
    }
`;

export const GrayLink = styled(Link)`
  color: ${(props) => props.theme.color.link};
  text-transform: uppercase;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
