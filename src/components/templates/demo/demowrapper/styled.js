import styled from "styled-components";
import { Col } from "react-flexbox-grid";
import { media } from "../../../utils/style-utils";

export const StyledDemoContainer = styled.div`
  //display:flex;
`;

export const LeftSidebar = styled.div`
  // width:76rem;
  //padding:80px 40px 0 50px;
  padding: 20px 20px 0 0;
`;

/* Droite */
export const RightSidebar = styled.div`
  position: relative;
  margin: 20px 0 0 0;
  background: ${props => props.theme.color.primary};
  min-height: 840px;
  height: auto;
  padding: 40px;
  border-radius: 3px;
  input,
  select,
  textarea {
    margin-bottom: 5px;
  }
`;

export const ColDemo = styled(Col)`
  order: ${props => props.order};
  ${media.tablet`
        order:0;
    `};
`;

export const Logo = styled.img`
  width: 180px;
  margin: 15px 0;
`;
