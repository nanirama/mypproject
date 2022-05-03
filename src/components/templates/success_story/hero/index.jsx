import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { StyledHero, LogoPlus, BackgroundHero, Title } from "./styled";
// import MixpanelHelper from "../../../utils/segment";

export default ({ data, lang }) => (
  <React.Fragment>
    <BackgroundHero bg={data.primary.background.fluid.src}>
      <Grid>
        <Row>
          <Col xs={12}>
            <StyledHero>
              <Row center="xs" middle="xs">
                <Col md={3} xs={6}>
                  <img className="img" alt="" src={data.primary.logo_customers.fluid.src} />
                </Col>
                <Col md={1} xs={12}>
                  <LogoPlus>
                    {lang === "en-us" && <span>With</span>}
                    {lang === "fr-fr" && <span>Avec</span>}
                  </LogoPlus>
                </Col>
                <Col md={3} xs={6}>
                  <img className="img" alt="" src={data.primary.logo_swapcard.url} />
                </Col>
              </Row>
              <Row center="xs">
                <Col md={7} xs={12}>
                  <Title>{data.primary.title.text}</Title>
                </Col>
              </Row>
              {/* {data.primary.downloadpdf.url != null && (
                <Row center="xs">
                  <Col xs={12} md={7}>
                
                    <ButtonDownload to={data.primary.downloadpdf.url} size="hero">
                      {data.primary.downloadcta}
                    </ButtonDownload>
                   
                  </Col>
                </Row>
              )} */}
            </StyledHero>
          </Col>
        </Row>
      </Grid>
    </BackgroundHero>
  </React.Fragment>
);
