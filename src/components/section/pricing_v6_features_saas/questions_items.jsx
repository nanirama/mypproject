import React, { Component } from "react";
import styled from "styled-components";
import { Body } from "../../typographie";
import { MarkdownContent } from "./styled";

export const QuestionsWrapper = styled.div`
  /* border-bottom: 1px solid #dfe3ea; */
  padding-bottom: 10px;
`;

export const QuestionItemTitle = styled.div`
  padding: 12px 0 10px 0;
  position: relative;
  display: flex;
  /* font-weight: bold; */
  font-size: 1.1rem;
  color: ${(props) => props.theme.color.primary};
  span {
    padding-right: 50px;
    display: block;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const QuestionItemPicto = styled.div`
  /* background: #dfe3ea; */
  position: absolute;
  line-height: 1;
  right: 5px;
  margin-left: auto;
  width: 30px;
  height: 30px;
  line-height: 25px;
  text-align: center;
  transform: ${(props) => (props.open ? "rotate(180deg);" : "")};
  /* border-radius: 100px; */
  /* color: #fff; */
  font-size: 1rem;

  &::selection {
    background: none;
  }
`;

export const QuestionItemAnswer = styled(Body)`
  margin-top: 5px;
  width: 95%;

  strong {
    font-weight: 800;
  }

  p {
    margin: 10px 0;
  }

  ol,
  ul {
    list-style: initial;
    padding: 10px 0 10px 30px;
  }

  em {
    font-style: italic;
  }
`;

export default class QuestionsItems extends Component {
  constructor(props) {
    super(props);
    // this.toggleAnswer = this.toggleAnswer.bind(this);
    this.state = {
      openAnswer: false,
    };
  }

  toggleAnswer = (e) => {
    this.setState((prevStat) => ({
      openAnswer: !prevStat.openAnswer,
    }));
  };

  render() {
    // TODO Remove after pricing content has been fixed
    const content = this.props.data.content.replaceAll("[-]", "-");

    return (
      <QuestionsWrapper>
        <QuestionItemTitle onClick={this.toggleAnswer}>
          <span itemprop="name">{this.props.data.title_saas_feature}</span>
          {/* <QuestionItemPicto>{this.state.openAnswer ? "-" : "+"}</QuestionItemPicto> */}
          <QuestionItemPicto onItemPicto open={this.state.openAnswer}>
            <i className="icons8-drop-down-arrow" />
          </QuestionItemPicto>
        </QuestionItemTitle>
        {this.state.openAnswer && (
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <MarkdownContent>{content}</MarkdownContent>
          </div>
        )}
      </QuestionsWrapper>
    );
  }
}
