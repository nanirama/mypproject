import styled from "styled-components";

export const Label = styled.label`
  margin-bottom: 10px;
  /* font-weight: 600; */
  display: block;
  font-size: 0.95rem;
  margin-top: 10px;
  text-align: left;
  color: ${(props) => (props.color ? props.color : props.theme.color.primary)};
`;
