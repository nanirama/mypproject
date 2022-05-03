import styled from "styled-components";

export const Bulle = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  font-size: 12pt;
  text-align: center;
  color: ${props => props.theme.color.body};
  /* */
  margin: 40px auto 25px auto;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 30px;
    border-width: 15px 0 0 15px;
    border-style: solid;
    border-color: #f2f2f2 transparent;
    display: block;
    width: 0;
  }
`;

export const Picture = styled.div`
  border-radius: 90px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 90px;
  height: 90px;
  border: 1px solid #eee;
  float: left;
`;

export const Persona = styled.div`
  padding: 0 0 0 20px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-weight: 600;
  }

  span {
    color: ${props => props.theme.color.body};
    font-size: 0.8rem;
    /* */
    margin-top: 5px;
  }
`;
