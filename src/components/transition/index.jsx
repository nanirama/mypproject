import React from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const TransitionEffect = styled.div`
  /* enter */
  &.fade-enter {
    opacity: 0;
    z-index: 1;
  }
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: all 500ms linear;
  }

  /* exit */
  &.fade-exit {
    /* transform: translateY(50%); */
  }
  &.fade-exit.fade-exit-active {
    opacity: 0;
    transition: all 500ms linear;
  }
  &.fade-exit-done {
    opacity: 0;
  }
`;

export default ({ children, ...props }) => (
  <TransitionGroup className="transition">
    <CSSTransition key={props.nextKey} timeout={1000} classNames="fade">
      <TransitionEffect>{children}</TransitionEffect>
    </CSSTransition>
  </TransitionGroup>
);
