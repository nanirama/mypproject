import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { media } from "../utils/style-utils";

const newPadding = {
  "Before Hero": {
    Tablet: {
      top: 60,
      bottom: 80
    },
    Mobile: {
      top: 80,
      bottom: 40
    }
  },
  "Block to block": {
    Tablet: {
      top: 60,
      bottom: 60
    },
    Mobile: {
      top: 50,
      bottom: 30
    }
  },
  "Title to block": {
    Tablet: {
      top: 10,
      bottom: 50
    },
    Mobile: {
      top: 10,
      bottom: 30
    }
  },
  Small: {
    Tablet: {
      top: 15,
      bottom: 15
    },
    Mobile: {
      top: 10,
      bottom: 10
    }
  },
  "Small 2": {
    Tablet: {
      top: 30,
      bottom: 30
    },
    Mobile: {
      top: 20,
      bottom: 20
    }
  }
};

const padding = {
  Default: {
    size: 80
  },
  Medium: {
    size: 40
  },
  Size60: {
    size: 60
  },
  Size40: {
    size: 40
  },
  Size30: {
    size: 30
  },
  Small: {
    size: 20
  },
  None: {
    size: 0
  }
};

export const Space = styled.div`
  padding-top: ${props => padding[props.top].size}px;
  padding-bottom: ${props => padding[props.bottom].size}px;
`;

export const SpaceNewTop = styled.div`
  background-color: ${props => (props.bg === "Yes" ? "#f9fafc" : "")};
  height: ${props => newPadding[props.bloc].Mobile.top}px;
  ${media.tablet`
    height: ${props => newPadding[props.bloc].Tablet.top}px;
  `};
`;
export const SpaceNewBottom = styled.div`
  background-color: ${props => (props.bg === "Yes" ? "#f9fafc" : "")};
  height: ${props => newPadding[props.bloc].Mobile.bottom}px;
  ${media.tablet`
    height: ${props => newPadding[props.bloc].Tablet.bottom}px;
  `};
`;

export default ({ ...props }) => (
  <React.Fragment>
    <SpaceNewTop
      bg={props.data.primary.background_odd_top}
      bloc={props.data.primary.space ? props.data.primary.space : "Block to block"}
    />
    <SpaceNewBottom
      bg={props.data.primary.background_odd_bottom}
      bloc={props.data.primary.space ? props.data.primary.space : "Block to block"}
    />
    {/* {props.data.primary.space == null ? (
      <Space top={props.data.primary.top} bottom={props.data.primary.bottom} />
    ) : (
      <SpaceNew bloc={props.data.primary.space} />
    )} */}
  </React.Fragment>
);

export const SpaceH = styled.div`
  height: ${props => props.of}px;
`;

export const query = graphql`
  fragment space on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainSpace {
          slice_type
          primary {
            background_odd_top
            background_odd_bottom
            space
          }
        }
      }
    }
  }

  fragment spaceT2 on PrismicTemplate2 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate2BodyMainSpace {
          slice_type
          primary {
            background_odd_top
            background_odd_bottom
            space
          }
        }
      }
    }
  }
`;
