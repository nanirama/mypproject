import React, { Component } from "react";
import styled from "styled-components";
import { Body } from "../../typographie";

export const QuestionsWrapper = styled.div`
  border-bottom: 1px solid #dfe3ea;
  padding-bottom: 10px;
`;

export const QuestionItemTitle = styled.div`
  padding: 20px 0 10px 0;
  position: relative;
  display: flex;
  font-size: ${props => props.theme.fontSize.typo5};
  span {
    padding-right: 50px;
    display: block;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const QuestionItemPicto = styled.div`
  background: #dfe3ea;
  position: absolute;
  line-height: 1;
  right: 5px;
  margin-left: auto;
  width: 30px;
  height: 30px;
  line-height: 25px;
  text-align: center;
  border-radius: 100px;
  color: #fff;
  font-size: 1.5rem;

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
      openAnswer: false
    };
  }

  toggleAnswer = e => {
    this.setState(prevStat => ({
      openAnswer: !prevStat.openAnswer
    }));
  };

  render() {
    return (
      <QuestionsWrapper>
        <QuestionItemTitle onClick={this.toggleAnswer}>
          <span itemprop="name">{this.props.data.title.text}</span>
          <QuestionItemPicto>{this.state.openAnswer ? "-" : "+"}</QuestionItemPicto>
        </QuestionItemTitle>
        {this.state.openAnswer && (
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">
              <QuestionItemAnswer
                dangerouslySetInnerHTML={{
                  __html: this.props.data.answer.html
                }}
              />
            </div>
          </div>
        )}
      </QuestionsWrapper>
    );
  }
}
