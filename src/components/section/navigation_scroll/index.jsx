import React, { Component } from "react";
import smoothScroll from "smoothscroll";
import { graphql } from "gatsby";
import {
  StyledNavigation,
  StyledNavigationList,
  StyledNavigationItem
} from "./styled";

export default class NavigationCustomers extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    smoothScroll(document.querySelector("." + e));
  };

  render() {
    return (
      <React.Fragment>
        <StyledNavigation>
          <StyledNavigationList>
            {this.props.data.items.map((nav, index) => (
              <React.Fragment key={index}>
                <StyledNavigationItem
                  key={nav.scroll_id}
                  onClick={e => this.handleClick(nav.scroll_id)}
                >
                  {nav.title.text}
                </StyledNavigationItem>
              </React.Fragment>
            ))}
          </StyledNavigationList>
        </StyledNavigation>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  fragment navigationScrollFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainNavigationScroll {
          slice_type
          items {
            title {
              text
            }
            scroll_id
          }
        }
      }
    }
  }
`;
