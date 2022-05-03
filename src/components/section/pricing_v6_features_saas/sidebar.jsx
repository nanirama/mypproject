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
  /* border-left: 1px solid gray; */
`;
export const QuestionTabsItem = styled.div`
  transition: padding-left 0.3s;
  display: flex;
  font-size: 15px;
  align-items: center;

  padding: 12px 0 12px 16px;
  border-left: 2px solid rgb(224, 224, 224);
  line-height: 1.4;
  transition: border-color 0.5s ease;

  &:hover {
    cursor: pointer;
    border-left: 2px solid ${(props) => props.theme.color.secondary};
    transition: border-color 0.5s ease;
  }

  &:active {
    border-left: 2px solid ${(props) => props.theme.color.secondary};
  }

  // &::before {
  //   content: "";
  //   display: block;
  //   height: 40px;
  //   background: rgb(224, 224, 224);
  //   width: 2px;
  //   margin-right: 16px;
  //   &:hover {
  //     background: ${(props) => props.theme.color.secondary};
  //   }
  // }

  // &:hover::before {
  //   background: ${(props) => props.theme.color.secondary};
  // }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 15px;
`;

// export default ({ activeElement, data }) => (
export default class SidebarQuestions extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (scrollElement) => (e) => {
    if (typeof window !== "undefined") {
      const offsetDoc = document.getElementById(scrollElement + "_top").getBoundingClientRect();
      console.log(offsetDoc);

      if (window.scrollY > offsetDoc.top) {
        window.scroll({
          top: window.scrollY + offsetDoc.top - 150,
          left: 0,
          behavior: "smooth",
        });
      } else {
        //Down
        window.scroll({
          top: window.scrollY + offsetDoc.top - 100,
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
              onClick={this.handleClick(item.group_key)}
              className={this.props.activeElement === item.group_key ? "active" : ""}
            >
              {item.title_saas_feature}
            </QuestionTabsItem>
          </React.Fragment>
        ))}
      </QuestionsTabs>
    );
  }
}
