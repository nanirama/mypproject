import React from "react";
import { Link } from "gatsby";
import { Row, Col } from "react-flexbox-grid";
import { GridLarge } from "../../utils/grid";
import { BusinessBlock, Button } from "./styled";

const BottomSection = ({cta_block_content, cta_button_link, cta_button_label}) => {
  const checkLinkHandler = (string) => {
    if (/(http(s?)):\/\//i.test(string)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <BusinessBlock>
        <GridLarge>
          <Row>
            <Col lg={9} xs={12}>
              <h2>{cta_block_content.text}</h2>
            </Col>
            <Col lg={3} xs={12}>
            {checkLinkHandler(cta_button_link) ? (
              <a href={cta_button_link} target="_blank"><Button>{cta_button_label}</Button></a>
            ) : (
              <Link to={`/${cta_button_link}`}><Button>{cta_button_label}</Button></Link>
            )
            }
             
            </Col>
          </Row>
          </GridLarge>
        </BusinessBlock>
    </>
  );
};
export default BottomSection;
