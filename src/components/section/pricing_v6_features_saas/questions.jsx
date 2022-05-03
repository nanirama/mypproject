import React, { Component, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Typo2, Typo4, Body } from "../../typographie";
import QuestionsItems from "./questions_items";
import { MarkdownContent } from "./styled";

export const QuestionsWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const QuestionsList = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
`;

export const QuestionItemPicto = styled.div`
  /* background: #dfe3ea; */
  position: absolute;
  line-height: 1;
  right: 5px;
  margin-left: auto;
  top: 0;
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

const Questions = ({ ...props }) => {
  const [refTop] = useRef(null);
  const [refBottom] = useRef(null);

  const [oldScroll, setOldScroll] = useState(0);

  const [openCategory, setOpenCategory] = useState(false);

  useEffect(() => {
    const offsetBottom = refBottom && refBottom.current && refBottom.current.offsetTop;
    const offsetTop = refTop && refTop.current && refTop.current.offsetTop;

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", (event) => {
        if (oldScroll > window.scrollY) {
          //GOING UP
          // - 100 because of navbar fixed
          if (window.scrollY < offsetTop - 130) {
            props.callback({
              [props.group]: false,
            });
          }
        } else {
          //Going DOWN
          if (window.scrollY > offsetBottom - 130) {
            props.callback({
              [props.group]: true,
            });
          } else {
            props.callback({
              [props.group]: false,
            });
          }
        }
        setOldScroll(window.scrollY);
      });
    }
  }, [refTop, refBottom]);

  const questionsList = props.data.filter((item) => !item.is_title);

  const questionsTitle = props.data.filter((item) => item.is_title);
  const titleContent = questionsTitle[0] ? questionsTitle[0].content : null;

  return (
    <React.Fragment>
      <div id={props.group + "_top"} />
      <QuestionsWrapper>
        <Typo4 bold={"600"} color={""} hover onClick={() => setOpenCategory(!openCategory)}>
          {typeof questionsTitle !== "undefined" && typeof questionsTitle[0] !== "undefined"
            ? questionsTitle[0].title_saas_feature
            : "ERROR"}
          <QuestionItemPicto onItemPicto open={openCategory}>
            <i className="icons8-drop-down-arrow" />
          </QuestionItemPicto>
        </Typo4>
        <div>
          {openCategory && titleContent && <MarkdownContent>{titleContent}</MarkdownContent>}
          {openCategory && (
            <QuestionsList>
              {questionsList.map((item) => (
                <QuestionsItems data={item} />
              ))}
            </QuestionsList>
          )}
        </div>
      </QuestionsWrapper>
      <div ref={refBottom} />
    </React.Fragment>
  );
};

export default Questions;
