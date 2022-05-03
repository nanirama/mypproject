import styled from "styled-components";

const alertsTheme = {
  success: {
    background: "#d4edda",
    color: "#155724",
  },
  warning: {
    background: "#d4edda",
    color: "#155724",
  },
  info: {
    background: "#cce5ff",
    color: "#004085",
  },
};

export const StyledAlert = styled.div`
  background: ${(props) => alertsTheme[props.theme].background};
  color: ${(props) => alertsTheme[props.theme].color};
  padding: 20px 25px;
  border-radius: 5px;
`;
