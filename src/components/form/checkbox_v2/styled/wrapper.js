import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 34px;
  height: 14px;
  border-radius: 30px;
  background-color: ${props =>
    props.checked ? "rgba(153, 153, 153, 0.3)" : props.bgColor ? props.bgColor : "rgba(0, 204, 136, 0.5)"};
  transition: 200ms;
  cursor: pointer;
`;

export default Wrapper;
