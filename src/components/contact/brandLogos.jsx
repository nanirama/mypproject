import React from "react";
import Image from "gatsby-image";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

import { LogosBlk, BrandContainer, BrandLogo } from "./styled";

const BrandLogos = ({ data }) => {
  return (
    <>
      <LogosBlk>
        <BrandContainer>
          <h2>Leading brands trust Swapcard</h2>
          <Row>
            {data &&
              data.map((item) => {
                return (
                  <Col md={3} xs={6} className="box">
                    <BrandLogo>
                      <Image fluid={item.logo.fluid} />
                    </BrandLogo>
                  </Col>
                );
              })}
          </Row>
        </BrandContainer>
      </LogosBlk>
    </>
  );
};

export default BrandLogos;
