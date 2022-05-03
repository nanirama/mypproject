import React from "react";
import { Grid, Row } from "react-flexbox-grid";
import { Background, Zindex } from "./styled";
import Informations from "../informations";
import Devices from "../devices";
import { ColMiddle } from "../../../utils/grid";

export default ({ data, favicon, lang }) => (
  <React.Fragment>
    <Background bg={data.background_color} gradient={data.background_color_gradient}>
      <Zindex>
        <Grid style={{ zIndex: 10, width: "100%" }}>
          <Row middle="xs" style={{ minHeight: "100vh" }}>
            <ColMiddle md={6} xs={12}>
              <Informations
                code={data.code}
                sentence_code={data.sentence_code}
                bg={data.background_color}
                icon={data.app_icon.url}
                favicon={favicon}
                link={data.web_app_link}
                linkLabel={data.web_app_link_label.text}
                customerName={data.customer_name.text}
                appStore={data.app_store_link ? data.app_store_link.url : ""}
                googleStore={data.google_store_link ? data.google_store_link.url : ""}
                lang={lang}
              />
            </ColMiddle>
            <ColMiddle md={6} xs={12}>
              {data.screenshot_iphone.fluid?.src && <Devices screen={data.screenshot_iphone.fluid.src} />}
            </ColMiddle>
          </Row>
        </Grid>
      </Zindex>
      <a
        style={{
          display: "block",
          position: "absolute",
          bottom: "10px",
          left: "10px",
          zIndex: "1000",
        }}
        href="https://www.swapcard.com?ref=app"
      >
        Powered by Swapcard
      </a>
    </Background>
  </React.Fragment>
);
