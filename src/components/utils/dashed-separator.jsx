import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import dashed from "../../assets/images/dashed-sep.gif";

export default styled(Grid)`
  background-image: url(${dashed});
  width: 70px;
  margin: 0 auto;
  height: 1px;
  background-size: 70px 1px;
`;
