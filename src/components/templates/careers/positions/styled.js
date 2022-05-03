import styled from "styled-components";
import { Body, Typo2 } from "../../../typographie";

export const ImageIntro = styled.img`
  max-width: 300px;
`;

export const JobsCategoryTitle = styled(Typo2)`
  color: ${props => props.theme.color.secondary};
`;

export const JobsCategoryBody = styled(Body)`
  padding-right: 80px;
  padding-top: 15px;
`;

export const JobsLisiting = styled.ul`
  color: ${props => props.theme.color.body};
`;

export const JobsLisitingItem = styled.li`
  margin-bottom: 25px;
  a {
    color: ${props => props.theme.color.body};
    &:hover {
      font-weight: 600;
    }
  }
`;

export const StyledTabs = styled.div`
  .react-tabs {
    //display: flex;
    margin-top: ${props => props.theme.spacing[6]};
  }

  .react-tabs__tab {
    //width: 200px;
    font-weight: 600;
    margin-bottom: 20px;
    font-size: ${props => props.theme.fontSize.typo4};
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }

  .react-tabs__tab--selected {
    &:after {
      content: " ";
      position: absolute;
      width: 0;
      height: 0;
      left: -12px;
      top: 4px;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-left: 7px solid ${props => props.theme.color.secondary};
    }
  }

  .react-tabs__tab-panel {
  }
`;

export const JobsCategoryPicture = styled.div`
  width: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
  height: 500px;
`;
