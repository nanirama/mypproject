import React, { Component } from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import lottie from "lottie-web";
import loaderSvg from "../../assets/lottie/loader_2.json";
import { analyticsTrack, analyticsRegister } from "../utils/segment";
import tp from "../../localization/tracking.json";

const StyledWistiaLoader = styled.div`
  position: absolute;
  z-index: 20;
  width: 100%;
  height: auto;
`;
export const LottieWrapper = styled.div`
  z-index: 40;
  height: 20%;
  width: inherit;
  position: absolute;
  fill: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* height: 180px;
  width: 390px;
  margin: 0 auto 30px auto;
  position: relative; */
`;

class WistiaEmbed extends Component {
  constructor(props) {
    super(props);
    const { hashedId, ...embedOptions } = { ...this.props };
    this.state = {
      loaded: false,
    };

    if (typeof window !== `undefined`) {
      window._wq = window._wq || [];
      window._wq.push({
        id: hashedId,
        options: embedOptions,
      });
    }
  }

  componentDidUpdate() {
    this._animation = lottie.loadAnimation({
      container: this._el,
      loop: true,
      renderer: "svg",
      color: "#FFF",
      animationData: loaderSvg,
    });
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query preload {
            preloaded_fr: file(relativePath: { regex: "/wistia_preload_2.png/" }) {
              childImageSharp {
                fluid(quality: 80) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
            preloaded_en: file(relativePath: { regex: "/wistia_3.png/" }) {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        `}
        render={(data) => (
          <div style={{ position: "relative" }}>
            {!this.state.loaded && (
              <StyledWistiaLoader>
                <Image
                  fluid={
                    this.props.lang !== "en-us"
                      ? data.preloaded_fr.childImageSharp.fluid
                      : data.preloaded_en.childImageSharp.fluid
                  }
                />
              </StyledWistiaLoader>
            )}
            <div
              className="wistia_responsive_padding"
              style={{
                padding: this.props.lang !== "en-us" ? "53% 0 0 0" : "62% 0 0 0",
                position: "relative",
              }}
            >
              <div
                className="wistia_responsive_wrapper"
                style={{
                  height: "100%",
                  left: "0",
                  boxShadow: "rgba(181, 197, 213, 0.4) 0px 4.5px 6.5px 0px",
                  position: "absolute",
                  top: "0",
                  width: "100%",
                }}
              >
                <div
                  className={`wistia_embed wistia_async_${this.props.hashedId} videoFoam=true`}
                  style={{ height: "100%", width: "100%" }}
                >
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        )}
      />
    );
  }

  componentDidMount() {
    if (!document.getElementById("wistia_script")) {
      var wistiaScript = document.createElement("script");
      wistiaScript.id = "wistia_script";
      wistiaScript.type = "text/javascript";
      wistiaScript.src = "https://fast.wistia.com/assets/external/E-v1.js";
      wistiaScript.async = true;
      document.body.appendChild(wistiaScript);
    }

    window._wq = window._wq || [];
    window._wq.push({
      id: this.props.hashedId,
      onEmbedded: (video) => {
        this.handle = video;
      },
    });
    window._wq.push({
      id: this.props.hashedId,
      onReady: (video) => {
        // video.height(545, { constrain: true });
        setTimeout(() => {
          this.setState({
            loaded: true,
          });
        }, 150);

        video.bind("play", () => {
          analyticsTrack(tp.events.video_played, {
            [tp.properties.video_id]: this.props.hashedId,
            [tp.properties.video_provider]: "Wistia",
          });
        });

        video.bind("end", () => {
          analyticsTrack(tp.events.video_ended, {
            [tp.properties.video_id]: this.props.hashedId,
            [tp.properties.video_provider]: "Wistia",
          });
        });
      },
    });
  }

  componentWillUnmount() {
    this.handle && this.handle.remove();
  }
}

export default WistiaEmbed;
