import React, { Component } from "react";
import styled from "styled-components";
import { Typo2 } from "../../typographie";
import QuestionsItems from "./questions_items";

export const QuestionsWrapper = styled.div``;

export const QuestionsList = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
  width: 100%;
`;

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.refTop = React.createRef();
    this.refBottom = React.createRef();
    this.oldScroll = 0;
  }

  componentDidMount() {
    const offsetBottom = this.refBottom.current.offsetTop;
    const offsetTop = this.refTop.current.offsetTop;

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", event => {
        if (this.oldScroll > window.scrollY) {
          //GOING UP
          // - 100 because of navbar fixed
          if (window.scrollY < offsetTop - 130) {
            this.props.callback({
              [this.props.group]: false
            });
          }
        } else {
          //Going DOWN
          if (window.scrollY > offsetBottom - 130) {
            this.props.callback({
              [this.props.group]: true
            });
          } else {
            this.props.callback({
              [this.props.group]: false
            });
          }
        }
        this.oldScroll = window.scrollY;
      });
    }
  }

  render() {
    const questionsList = this.props.data.filter(item => item.is_title_ === "No");

    const questionsTitle = this.props.data.filter(item => item.is_title_ === "Yes");

    return (
      <React.Fragment>
        <div id={this.props.group + "_top"} ref={this.refTop} />
        <QuestionsWrapper>
          <Typo2>
            {typeof questionsTitle !== "undefined" && typeof questionsTitle[0] !== "undefined"
              ? questionsTitle[0].title.text
              : "ERROR"}
          </Typo2>

          <QuestionsList>
            {questionsList.map(item => (
              <QuestionsItems data={item} />
            ))}
          </QuestionsList>
        </QuestionsWrapper>
        <div ref={this.refBottom} />
      </React.Fragment>
    );
  }
}
