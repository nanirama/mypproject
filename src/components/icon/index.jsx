import styled from "styled-components";

export default styled.div`
  font-size: ${props => (props.size ? "50px" : "30px")};
  background: #fff;
  border-radius: 50px;
  padding:15px;
  /* width: ${props => (props.size ? "90px" : "60px")}; */
  /* height: ${props => (props.size ? "90px" : "60px")}; */
  display: flex;
  align-items: center;
  color: ${props => (props.color ? props.color : props.theme.color.primary)};
  justify-content: center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.06), 0 7px 13px 0 rgba(0, 0, 0, 0.06);
`;
