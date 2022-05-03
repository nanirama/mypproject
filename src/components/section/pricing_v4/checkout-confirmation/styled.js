import styled from "styled-components";

export const Logo = styled.img`
  width: 180px;
  margin-top: 50px;
`;

export const Background = styled.div`
  background-color: rgb(249, 250, 252);
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 800px;
  padding: 30px;
  margin: 0 auto 0 auto;
`;

export const ContainerContent = styled.div`
  margin-top: 30px;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 3px 0px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  padding: 30px;
`;

export const IconChecked = styled.i`
  margin-right: 10px;
  color: ${props => props.theme.color.secondary};
  font-size: 3rem;
  display: block;
`;
