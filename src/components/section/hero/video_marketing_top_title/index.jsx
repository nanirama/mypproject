import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo1, Body } from "../../../typographie";
import { replaceColor } from "../../../utils/helper";
import { SpaceH } from "../../../space";
import WistiaEmbed from "../../../wistia";
import styled from "styled-components";
import { renderButtons } from "../index";
import { startExperiment } from "../../../utils/segment";
// import ClientOnly from "../../../../HOC/clients";
import YouTube from "react-youtube";
import { media } from "../../../utils/style-utils";
import { experimentDebugger, emitter } from "@marvelapp/react-ab-test";
// import { Experiment, Variant, experimentDebugger, emitter } from "@marvelapp/react-ab-test";

experimentDebugger.enable();

export const YoutubeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  box-shadow: ${(props) => props.theme.shadow.primary};
  padding-top: 30px;
  height: 0;
  overflow: hidden;

  & iframe,
  & object,
  & embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const opts = {
  height: 585 / 1.3,
  width: 960 / 1.3,
  allowfullscreen: "true",
  playerVars: {
    autoplay: 0,
    controls: 1,
    rel: 0,
    fs: 0,
  },
};

const AlignButton = styled.div`
  text-align: center;
  margin-bottom: 10px;
  ${media.tablet`
  margin:0;
  text-align: ${(props) => props.align};
  `}
`;

const VideoMarketingTopTitle = ({ props, lang }) => {
  const playerType = props.youtube_id.split("yt_").length === 2 ? "youtube" : "wistia";

  emitter.addPlayListener(function (experimentName, variantName) {
    console.log(`Displaying experiment ${experimentName} variant ${variantName}`);

    startExperiment(experimentName, variantName);
  });

  return (
    <Grid>
      <Row center="xs">
        <Col md={9} xs={12}>
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
                  data: {
                    cta_free_link_v2: props.cta_free_link_v2,
                    cta_free_label: props.cta_free_label,
                    cta_free_link: props.cta_free_link,
                  },
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
                  cta_free_link: props.cta_free_link,
                  buttonAlign: "center",
                },
              })}
            </Col>
          </>
        )}
      </Row>
      <SpaceH of={32} />
      <Row center="xs">
        {/* {props.video_id_variant_1 !== null ? (
            <Col md={10} xs={12}>
              <Experiment name="homepage_hero_video">
                <Variant name="original">
                  <WistiaEmbed hashedId={props.youtube_id} />
                </Variant>
                <Variant name="variant_1">
                  <YoutubeContainer>
                    <YouTube videoId={props.video_id_variant_1} opts={opts} />
                  </YoutubeContainer>
                </Variant>
              </Experiment>
            </Col>
          ) : (
            <Col md={10} xs={12}>
              {playerType === "wistia" ? (
                <WistiaEmbed hashedId={props.youtube_id} />
              ) : (
                <YoutubeContainer>
                  <YouTube videoId={props.youtube_id.split("yt_")[1]} opts={opts} />
                </YoutubeContainer>
              )}
            </Col>
          )} */}
        <Col md={10} xs={12}>
          {playerType === "wistia" ? (
            <WistiaEmbed hashedId={props.youtube_id} lang={lang} />
          ) : (
            <YoutubeContainer>
              <YouTube videoId={props.youtube_id.split("yt_")[1]} opts={opts} />
            </YoutubeContainer>
          )}
        </Col>
      </Row>
    </Grid>
  );
};

export default VideoMarketingTopTitle;
