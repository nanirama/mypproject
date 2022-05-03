import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  border: 1px solid rgb(224, 224, 224);
  width: 100%;
  border-radius: 3px;
  padding: 20px;
  /* font-size: 16px; */
  /* width: 32%; */
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

export const ModalWrapper = styled.div`
  padding: 10px 0;
  max-width: 500px;
  width: 100%;
  min-width: 500px;
`;

export const Line = styled.div`
  /* color: ${(props) => props.theme.color.body}; */
`;

export const DefaultCard = styled.div`
  /* color: ${(props) => props.theme.color.body}; */
  font-size: 0.8rem;
  text-align: right;
`;

export const Update = styled.div`
  display: inline;
  color: ${(props) => props.theme.color.body};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
