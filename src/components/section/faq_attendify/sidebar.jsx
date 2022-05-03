import React, { Component } from "react";
import styled from "styled-components";
import { media } from "../../utils/style-utils";

export const QuestionsTabs = styled.div`
  display: none;
  ${media.tablet`
    display:block;
  `}
  width: 90%;
  position: -webkit-sticky;
  position: sticky;
  top: 130px;
`;
export const QuestionTabsItem = styled.div`
  transition: padding-left 0.3s;
  padding: 10px;
  border-radius: 3px;
  font-size: ${(props) => props.theme.fontSize.typo5};
  &:hover {
    padding: 10px 10px 10px 20px;
  }
  &.active {
    color: #fff;
    /* padding: 10px 10px 10px 20px; */
    background: ${(props) => props.theme.color.secondary};
  }
  &:hover {
    cursor: pointer;
  }
`;

// export default ({ activeElement, data }) => (
export default class SidebarQuestions extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (scrollElement) => (e) => {
    if (typeof window !== "undefined") {
      const offsetDoc = document.getElementById(scrollElement + "_top");

      if (window.scrollY > offsetDoc.offsetTop) {
        window.scroll({
          top: offsetDoc.offsetTop - 150,
          left: 0,
          behavior: "smooth",
        });
      } else {
        //Down
        window.scroll({
          top: offsetDoc.offsetTop - 100,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };

  render() {
    return (
      <QuestionsTabs>
        {this.props.data.map((item, index) => (
          <React.Fragment key={index}>
            <QuestionTabsItem
              id={item.group_id}
              onClick={this.handleClick(item.group_id)}
              className={this.props.activeElement === item.group_id ? "active" : ""}
            >
              {item.title.text}
            </QuestionTabsItem>
          </React.Fragment>
        ))}
      </QuestionsTabs>
    );
  }
}
