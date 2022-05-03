import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo1, Body } from "../../../typographie";
import { replaceColor } from "../../../utils/helper";
import { SpaceH } from "../../../space";
// import WistiaEmbed from "../../../wistia";
import styled from "styled-components";
import { renderButtons } from "../index";
import { media } from "../../../utils/style-utils";

const AlignButton = styled.div`
  text-align: center;
  margin-bottom: 10px;
  ${media.tablet`
  margin:0;
  text-align: ${(props) => props.align};
  `}
`;

const HeroCovid = ({ props, lang }) => (
  <Grid>
    <Row center="xs">
      <Col md={8} xs={12}>
        <Typo1
          center
          dangerouslySetInnerHTML={{
            __html: `${replaceColor(props.hero_title.text)}`,
          }}
        />
        <SpaceH of={16} />
        <Body>{props.hero_sub_title.text}</Body>
      </Col>
    </Row>
    <SpaceH of={32} />
    <Row center="xs">
      {props.cta_type_2 != null && (
        <>
          <Col md={4} xs={12}>
            <AlignButton align="right">
              {renderButtons({
                cta_type_1: props.cta_type_1,
                lang,
                data: { cta_free_link_v2: props.cta_free_link_v2, cta_free_label: props.cta_free_label },
              })}
            </AlignButton>
          </Col>

          <Col md={4} xs={12}>
            <AlignButton align="left">{renderButtons({ cta_type_1: props.cta_type_2, lang })}</AlignButton>
          </Col>
        </>
      )}
      {props.cta_type_2 == null && (
        <>
          <Col md={3} xs={12}>
            {renderButtons({
              cta_type_1: props.cta_type_1,
              lang,
              data: {
                cta_free_link_v2: props.cta_free_link_v2,
                cta_free_label: props.cta_free_label,
                buttonAlign: "center",
              },
            })}
          </Col>
        </>
      )}
    </Row>
    <SpaceH of={32} />
  </Grid>
);

export default HeroCovid;
