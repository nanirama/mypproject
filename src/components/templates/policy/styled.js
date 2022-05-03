import styled from "styled-components";

export const StyledPolicy = styled.div`
  color: ${(props) => props.theme.color.body};
  text-align: left;

  h1 {
    margin: 30px 0 20px 0;
    font-weight: 600;
    font-size: 30px;
    color: ${(props) => props.theme.color.primary};
  }

  h2,
  h3 {
    margin: 30px 0 20px 0;
    font-weight: 600;
    font-size: 24px;
  }

  strong {
    font-weight: 600;
  }

  p {
    line-height: 1.2;
    text-align: justify;
    margin-top: 20px;
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    margin: 30px 0;
    list-style-type: disc;
    list-style-position: inside;
    list-style: initial;
    text-align: left;
    display: block;
  }

  li {
    display: list-item;
    text-align: left;
    /* line-height: 1.5; */
    margin: 10px 0 10px 20px;
  }
`;
