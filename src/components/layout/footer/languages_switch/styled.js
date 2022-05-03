import styled from "styled-components";

export const LanguagesSelector = styled.div`
  display: flex;
  //border:1px solid #DDE5ED;
  padding: 15px 0;
  //justify-content:center;
  width: 130px;
  &:hover {
    cursor: pointer;
  }

  span {
    margin-left: 10px;
    color: ${props => props.theme.color.body};
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.color.primary};
    }
  }
`;

export const LanguagesDropdown = styled.div`
  position: absolute;
  background: #fff;
  border: 1px solid #dde5ed;
  bottom: 54px;
  width: 140px;
  padding: 30px 20px 0 20px;
  color: ${props => props.theme.color.body};

  box-sizing: inherit;
  &:before {
    top: 100%;
    left: 20%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;

    border-color: rgba(221, 229, 237, 0);
    border-top-color: #dde5ed;

    border-width: 7px;
    margin-left: -7px;
  }

  li {
    list-style: none;
    margin-bottom: 30px;

    &:hover {
      cursor: pointer;
      color: ${props => props.theme.color.primary};
    }

    a {
      color: ${props => props.theme.color.body};
      text-decoration: none;
      &:hover {
        cursor: pointer;
        color: ${props => props.theme.color.primary};
      }
    }

    img {
      margin-right: 5px;
      max-width: 100%;
      width: auto;
      max-width: 20px;
    }
  }
`;

export const Icon = styled.i`
  font-size: 20px;
  margin-top: -3px;
`;
