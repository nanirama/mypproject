import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

export default styled(Grid)`
  opacity: 0.1;
  background-color: ${props => props.theme.color.primary};
  height: 1px;
  display: block;
`;
