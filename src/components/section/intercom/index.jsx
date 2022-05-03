import React, { useState } from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import { replaceColorBackground } from "../../utils/helper";
import Video from "../../video";
import SwapImage from "../../image";

const BigText = styled.div`
  font-size: 30px;
  font-weight: bold;
  line-height: 45px;
`;

const Intercom = ({ ...props }) => {
  const t = props.data.primary;

  return (
    <div style={{ background: t.video_mp4.url !== "" ? "rgb(250, 250, 250)" : "", padding: "50px 0" }}>
      <Grid>
        <Row middle="xs">
          <Col md={6}>
            {t.video_mp4.url !== "" ? (
              <Video mp4={t.video_mp4.url} webm={t.video_webm.url} />
            ) : (
              <SwapImage
                className="img-responsive"
                style={{
                  width: "500px",
                  margin: "0 auto",
                }}
                src={t.intercom_image}
                fluidImage={t.intercom_image}
              />
            )}
          </Col>
          <Col md={6}>
            <BigText
              dangerouslySetInnerHTML={{
                __html: replaceColorBackground(t.intercom_text),
              }}
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Intercom;

export const query = graphql`
  fragment intercom on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainIntercom {
          primary {
            intercom_image {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }
            intercom_text
            intercom_video
            video_webm {
              url
            }
            video_mp4 {
              url
            }
          }
          slice_type
          slice_label
        }
      }
    }
  }
`;
