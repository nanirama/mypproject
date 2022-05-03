import styled from "styled-components";
import { Body } from "../../typographie";

export const ImageZoom = styled.div``;

export const ImageZoomItem = styled.div`
  max-width: ${props => props.zoom}% !important;
  margin-left: ${props => props.offsetItem}px;
`;

export const StyledTabs = styled.div`
  .react-tabs__tab-list {
  }

  .react-tabs__tab {
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 2px;
    border-left: 5px solid rgba(18, 52, 86, 0.02);
    &:hover {
      background: rgba(18, 52, 86, 0.02);
      border-left: 5px solid ${props => props.theme.color.secondary};
      cursor: pointer;
    }
    h4 {
    }
  }

  .react-tabs__tab--selected {
    border-radius: 2px;
    background: rgba(18, 52, 86, 0.04);
    border-left: 5px solid ${props => props.theme.color.secondary};
  }

  .react-tabs__tab--selected h5 {
    font-weight: 700;
  }

  .react-tabs__tab-panel {
    /* min-height: 620px; */
    opacity: 0;
    display: none;
  }

  .react-tabs__tab-panel--selected {
    opacity: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const ItemsMobile = styled.div`
  margin-bottom: 40px;
`;

export const Subtitle = styled(Body)`
  color: ${props => props.theme.color.primary};
`;
