import styled from "styled-components";

export const StyledWrapper = styled.div`
  //   text-align:right;
`;

export const Logo = styled.img`
  width: 180px;
  margin-bottom: 10px;
`;

export const DemoImage = styled.div``;

export const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 0.25px;
  font-weight: bold;
  letter-spacing: 0;
`;

export const List = styled.div`
  color: ${props => props.theme.color.body};
  ul {
    color: ${props => props.theme.color.primary};
    margin: 10px 0;
    list-style-type: disc;
    list-style-position: inside;
    list-style: initial;
    text-align: left;
    display: block;
  }
  li {
    display: list-item;
    text-align: left;
    */margin: 10px 0 10px 20px;
    color: ${props => props.theme.color.body};
    font-weight: 400;
    list-style: none
  }
`;

