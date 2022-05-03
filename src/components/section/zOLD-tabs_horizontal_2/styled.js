import styled from "styled-components";
import { media } from "../../utils/style-utils";
import { Body } from "../../typographie";

export const Icon = styled.i`
  width: 60px;
  height: 60px;
  display: block;
  background: #fff;
  color: #8798a9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const Subtitle = styled(Body)`
  color: ${props => props.theme.color.primary};
`;

export const StyledTabs = styled.div`
  .react-tabs__tab-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .react-tabs__tab {
    margin: 30px;
    ${media.tablet`
    margin: 0 50px;
    `} text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    color: #8798a9;
    font-weight: 800;
    &:hover {
      cursor: pointer;
    }
  }

  .react-tabs__tab--selected ${Icon} {
    color: #fff;
    background: ${props => props.theme.color.primary};
  }

  .react-tabs__tab--selected {
    color: ${props => props.theme.color.primary};
  }

  .react-tabs__tab-panel {
    margin-top: 50px;

    /* border: 2px solid red; */
  }
`;
