import styled from "styled-components";
import { media } from "../../utils/style-utils";

export const StyledNavigation = styled.div`
  border-top: 1px solid rgba(7, 96, 115, 0.2);
  border-bottom: 1px solid rgba(7, 96, 115, 0.2);

  width: 100%;
  display: flex;
  align-items: center;
`;

export const StyledNavigationList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  flex-direction: column;
  ${media.tablet`
        flex-direction:row;
    `};
`;

export const StyledNavigationItem = styled.li`
  display: block;
  margin: 10px 0;
  font-size: ${props => props.theme.fontSize.typo4};
  font-weight: 600;
  ${media.tablet`
        margin:0;
        padding:30px 0;
    `} &:hover {
    color: ${props => props.theme.color.secondary};
    cursor: pointer;
  }
`;
