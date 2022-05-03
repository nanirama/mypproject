import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
// import LogoImg from "../../../../assets/images/Logo/logo-swapcard-bleu-vert.svg";
import { StyledDemoContainer, LeftSidebar, RightSidebar, ColDemo } from "./styled";
import DemoForm from "../form";
import Benefits from "../benefits";
import Proof from "../proof";
import { MixpanelConsumer } from "react-mixpanel";

export default ({ data, lang }) => (
  <React.Fragment>
    <Grid>
      <Row>
        <Col xs={12}>
          <StyledDemoContainer>
            <Row mddle="xs">
              <ColDemo md={7} xs={12} order={2}>
                <LeftSidebar>
                  <Benefits data={data} />
                  <Proof t={data} />
                </LeftSidebar>
              </ColDemo>
              <ColDemo md={5} xs={12} order={1}>
                <RightSidebar>
                  <MixpanelConsumer>
                    {mixpanel => <DemoForm t={data} lang={lang} mixpanel={mixpanel} />}
                  </MixpanelConsumer>
                </RightSidebar>
              </ColDemo>
            </Row>
          </StyledDemoContainer>
        </Col>
      </Row>
    </Grid>
  </React.Fragment>
);
