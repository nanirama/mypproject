import styled from "styled-components";
import { Col } from "react-flexbox-grid";
import { media } from "../../utils/style-utils";

export const StyledArticle = styled.div``;

export const Items = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-basis: auto; /* default value */
  flex-grow: 1;
  margin-top: 0px;
  ${media.tablet`
    align-items: center;
    margin:30px 0 0 0;
    flex-direction:row;
  `};
`;

export const IconImg = styled.div`
  ${media.tablet`
    display:flex;
  `}
  background: #fff;
  border-radius: 50px;
  align-items: center;
  /* flex: auto; */

  justify-content: center;
  /* padding:15px; */
  width: ${(props) => (props.size ? "90px" : "50px")};
  height: ${(props) => (props.size ? "90px" : "50px")};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.06), 0 7px 13px 0 rgba(0, 0, 0, 0.06);
  display: none;
`;

export const StyledArticleDivider = styled.div`
  width: 30px;
  display: none;
  height: 3px;
  background: ${(props) => props.theme.color.primary};
  ${media.tablet`
        width:70px;
        height: 4px;
        display:block;
        margin:${(props) => (props.center ? `0 auto` : "0")};
    `};
`;

export const StyledImageHero = styled.img`
  width: ${(props) => (props.maxWidth ? props.maxWidth : 500)}px !important;
`;

export const ColOrderArticle = styled(Col)`
  ${media.tablet`
    order: ${(props) => props.order};
  `};
`;

export const ArticleListItem = styled.div`
  color: ${(props) => props.theme.color.body};
  margin-bottom: 20px;
`;

export const Icon = styled.span`
  margin-right: 9px;
  color: ${(props) => props.theme.color.secondary};
  /* color: #fff;
  font-size: 16px;
  background: ${(props) => props.theme.color.secondary};
  border-radius: 90px;
  padding: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center; */
`;

export const VideoWrapper = styled.div`
  ${media.tablet`
 margin-left:${(props) => (props.odd ? "-50px" : "0")}
 width: 120%;
 `}
  filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'brightness\'><feColorMatrix type=\'matrix\' values=\'1.2 0 0 0 0 0 1.2 0 0 0 0 0 1.2 0 0 0 0 0 1.2 0\'/></filter></svg>#brightness"); /* Firefox 3.5+ */
  -webkit-filter: brightness(108.5%); /* Chrome 19+ & Safari 6+ */
`;
