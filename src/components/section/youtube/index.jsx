import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import YouTube from "react-youtube";
import styled from "styled-components";
import { analyticsTrack } from "../../utils/segment";
import { graphql } from "gatsby";
import * as typo from "../../typographie";
import { SpaceH } from "../../space";
import tp from "../../../localization/tracking.json";

export const YoutubeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  box-shadow: rgba(181, 197, 213, 0.4) 0px 4.5px 6.5px 0px;
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
  height: "390",
  width: "640",
  allowFullScreen: "allowfullscreen",
  modestbranding: 1,
  playerVars: {
    autoplay: 0,
    controls: 3,
    cc_load_policy: 0,
    fs: 1,
    iv_load_policy: 3,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
  },
};

export default ({ ...props }) => {
  function onPlay(e) {
    analyticsTrack(tp.events.video_played, {
      [tp.properties.video_id]: props.data.primary.youtube_id,
      [tp.properties.videl_title]: e.target.playerInfo.videoData.title,
      [tp.properties.video_provider]: "Youtube",
    });
  }

  function onEnd(e) {
    analyticsTrack(tp.events.video_ended, {
      [tp.properties.video_id]: props.data.primary.youtube_id,
      [tp.properties.videl_title]: e.target.playerInfo.videoData.title,
      [tp.properties.video_provider]: "Youtube",
    });
  }

  return (
    <React.Fragment>
      <Grid>
        {props.data.primary.youtube_id && (
          <Row center="xs">
            <Col md={9} xs={12}>
              <YoutubeContainer>
                <YouTube
                  allowFullScreen="allowfullscreen"
                  onPlay={onPlay}
                  onEnd={onEnd}
                  videoId={props.data.primary.youtube_id}
                  opts={opts}
                />
              </YoutubeContainer>
            </Col>
          </Row>
        )}

        {props.data.items && props.data.items.length > 0 && props.data.items[0].item_sub_title && (
          <Row>
            {props.data.items.map((e) => (
              <Col md={6} xs={12}>
                <div style={{ padding: "0 10px" }}>
                  <YoutubeContainer>
                    <YouTube onPlay={onPlay} onEnd={onEnd} videoId={e.youtube_id} opts={opts} />
                  </YoutubeContainer>
                  <SpaceH of={15} />
                  <typo.Typo3>{e.item_title}</typo.Typo3>
                  <SpaceH of={5} />
                  <typo.Body>{e.item_sub_title}</typo.Body>
                </div>
                <SpaceH of={20} />
              </Col>
            ))}
          </Row>
        )}
      </Grid>
    </React.Fragment>
  );
};
export const query = graphql`
  fragment youtubeFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainYoutube {
          slice_type
          primary {
            youtube_id
          }
          items {
            youtube_id
            item_title
            item_sub_title
          }
        }
      }
    }
  }
`;
