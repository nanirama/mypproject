import React, { Component, useState, useRef, useEffect } from "react";
import listIcon from "../../../assets/icons/icon_actions_select_check_mark.svg";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const StyledUl = styled.ul`
  list-style-image: url(${listIcon});
  margin-left: 18px;
  color: ${(props) => props.theme.color.body};
`;

export const StyledLi = styled.li`
  margin: 15px 0;
  line-height: 25px;

  a {
    color: rgb(0, 204, 136);
    text-decoration: underline dotted 1px;
  }

  ul {
    list-style-image: none;
  }
`;

export const Content = styled.p`
  margin: 15px 0 0;
`;

export const MarkdownContent = ({ children }) => {
  // Example:
  // const md = `
  // - We have declared our DPO to the French CNIL
  // - You can find our Privacy Policy here: [https://www.swapcard.com/privacy-policy](https://www.swapcard.com/privacy-policy)
  // - You can find our standard DPA with our list of sub-processors here
  //   AWS - for data hosting
  //   Mailgun - for email management
  //   Vonage - for 1-to-1 and many-to-many audio and video calls
  // - All Swapcard platform data is hosted in:
  //   AWS Ireland datacenter (main data hosting and data processing)
  //   Mailgun also in EU (for emails only)
  // `
  return (
    <ReactMarkdown
      components={{
        // Use h2s instead of h1s
        h1: "h2",
        p: ({ node, ...props }) => <Content bold={"600"} {...props} />,
        ul: ({ node, ...props }) => <StyledUl {...props} />,
        li: ({ node, ...props }) => <StyledLi {...props} />,
      }}
    >
      {/* {md} */}
      {children}
    </ReactMarkdown>
  );
};
