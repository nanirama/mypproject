import React from "react";
import styled from "styled-components";

const CheckMark = (props) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 48 48" {...props}>
      <path
        d="M42.354 10c-.415.013-.81.187-1.099.485L16.811 34.929 6.75 24.87a1.599 1.599 0 10-2.26 2.26l11.19 11.19a1.599 1.599 0 002.26 0l25.575-25.575A1.599 1.599 0 0042.354 10z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const squareSize = "20px";

export const Check = styled(CheckMark)`
  font-size: 16px;
  position: absolute;
  left: 1px;
  top: 1px;
  color: white;
`;

export const CheckMarkContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${squareSize};
  width: ${squareSize};
  border: solid 1px grey;
  border-radius: 3px;
  background-color: white;
  box-sizing: border-box;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 1;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled ~ ${CheckMarkContainer} {
    opacity: 0.5;
  }

  &:checked ~ ${CheckMarkContainer} {
    background-color: #00cc88;
    border-color: transparent;
  }
`;

export const Wrapper = styled.div`
  display: block;
  position: relative;
  height: ${squareSize};
  width: ${squareSize};
`;
