import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Body } from "../../../typographie";
import { Margin } from "styled-components-spacing";
import { StyledWrapper, List, Logo, Title } from "./styled";
import Image from "gatsby-image";
import LogoImg from "../../../../assets/images/Logo/LogoFINAL.svg";
import Link from "../../../utils/link";

export default ({ data }) => (
  <React.Fragment>
    <StyledWrapper>
      <Link to={data.link_logo}>
        <Logo className="hideMobile" src={LogoImg} />
      </Link>
      <Title>{data.hero_title.text}</Title>
      <Margin top={3} bottom={3}>
        <Body>{data.sub_title.text}</Body>
      </Margin>
      <Row center="xs">
        <Col sm={9} xs={12}>
          <Margin top={3} bottom={3}>
            <Image fluid={data.mac.fluid} />
          </Margin>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <List
            dangerouslySetInnerHTML={{
              __html: data.you_will_learn_how_to.html
            }}
          />
        </Col>
      </Row>
    </StyledWrapper>
  </React.Fragment>
);
