import React, { useState } from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import TrackingNaming from "../../../localization/tracking.json";
import {
  HeroContainer,
  HeroContainerTitle,
  ButtonWrapper,
  HeroBackground,
  // BackgroundBlue,
  // DownloadButton,
  HeroBackgroundTitle,
  // HeroContainerDownload,
  HeroImageWrapper,
  HeroImage,
  VideoHideImg,
  VideoHover,
  TuiHero,
} from "./styled";
import { Body, Typo1 } from "../../typographie";
import ModalVideoLib from "../../modal/video";
import { ButtonSecondary, ButtonAI, ButtonBlank, ButtonBorderPrimary } from "../../button";
import { Margin, Padding } from "styled-components-spacing";
// import ClientOnly from "../../../HOC/clients";
import Arrow from "../../../assets/images/arrow_right.svg";
import { exportLocale } from "../../../localization";
import { replaceColor } from "../../utils/helper";
import MixpanelHelper from "../../utils/segment";
// import AppStore from "../../../assets/images/Apple_store_EN.svg";
// import PlayStore from "../../../assets/images/Play_store_EN.svg";
// import { ColMiddle } from "../../utils/grid";
// import SMSForm from "./smsOLD";
// import ModalHero from "./free_modal";
import VideoForm from "./video";
import ModalVideo from "./video_modal";
import VideoMarketingTopTitle from "./video_marketing_top_title";
import BackgroundImageWithForm from "./bg_with_form";
import HeroCovid from "./covid";
import FormOnboardingEmail from "./form_onboarding_email";
// import FormExpoExpo from "./form_expo_expo";
import Image from "../../image";
import { LinkInternal } from "../../utils/link.jsx";

export default ({ ...props }) => {
  const [openVideo, setOpenVideo] = useState(false);

  let colParams = {
    default: {
      text: {
        xs: 12,
        md: 6,
      },
      img: {
        xs: 12,
        md: 6,
        offset: 0,
      },
    },
    "tiny-img": {
      text: {
        xs: 12,
        md: 7,
      },
      img: {
        xs: 12,
        md: 5,
        offset: 0,
      },
    },
  };

  const colLayout = props.data.primary.structure_layouts ? props.data.primary.structure_layouts : "default";

  const { hero_title, hero_sub_title, hero_image, layouts, cta_type_1, cta_type_2, youtube_id } = props.data.primary;

  return (
    <>
      {layouts === "Video Marketing Top Title" && (
        <VideoMarketingTopTitle props={props.data.primary} lang={props.lang} />
      )}

      {layouts === "Background Image With Form" && (
        <BackgroundImageWithForm props={props.data.primary} lang={props.lang} />
      )}

      {layouts === "Title Center Covid" && <HeroCovid props={props.data.primary} lang={props.lang} />}
      {layouts === "Tui blue background" && (
        <TuiHero>
          <Grid>
            <HeroContainer>
              <Row middle="xs" center="xs" start="md">
                <Col xs={colParams[colLayout].text.xs} md={colParams[colLayout].text.md}>
                  <Padding right={{ xs: "0", md: "3" }}>
                    <Typo1 color={"#00CC88"}>{hero_title.text}</Typo1>
                    <Margin top={4} bottom={4}>
                      <div style={{ color: "#FFF", fontSize: "1.8rem" }}>{hero_sub_title.text}</div>
                    </Margin>
                    <ButtonSecondary size={"big"} to={exportLocale(props.lang).getInTouch.Request_demo.to}>
                      {props.data.primary.cta_free_label}
                    </ButtonSecondary>
                  </Padding>
                </Col>
                <Col
                  xs={colParams[colLayout].img.xs}
                  md={colParams[colLayout].img.md}
                  mdOffset={colParams[colLayout].img.offset}
                >
                  <Margin all={{ xs: "4", md: "0" }}>
                    {hero_image.fluid ? (
                      <Image fluidImage={hero_image.fluid} className="img-responsive" src={hero_image.fluid.src} />
                    ) : (
                      <h1>Image missing</h1>
                    )}
                    {/* <img alt="" className="img-responsive" src={hero_image.fluid.src} /> */}
                  </Margin>
                </Col>
              </Row>
            </HeroContainer>
          </Grid>
        </TuiHero>
      )}
      {layouts === "Layout 1" && (
        <React.Fragment>
          <Grid>
            <HeroContainer>
              <Row middle="xs" center="xs" start="md">
                <Col xs={colParams[colLayout].text.xs} md={colParams[colLayout].text.md}>
                  <Padding right={{ xs: "0", md: "3" }}>
                    <Typo1
                      dangerouslySetInnerHTML={{
                        __html: `${replaceColor(hero_title.text)}`,
                      }}
                    />
                    <Margin top={4} bottom={4}>
                      <Body
                        dangerouslySetInnerHTML={{
                          __html: hero_sub_title.text,
                        }}
                      />
                    </Margin>
                    {renderButtons({
                      cta_type_1,
                      youtube_id,
                      lang: props.lang,
                      color: props.data.primary.custom_color,
                      data: props.data.primary,
                    })}
                  </Padding>
                </Col>
                <Col
                  xs={colParams[colLayout].img.xs}
                  md={colParams[colLayout].img.md}
                  mdOffset={colParams[colLayout].img.offset}
                >
                  <Margin all={{ xs: "4", md: "0" }}>
                    {hero_image.fluid ? (
                      <Image fluidImage={hero_image.fluid} className="img-responsive" src={hero_image.fluid.src} />
                    ) : (
                      <h1>Image missing</h1>
                    )}
                    {/* <img alt="" className="img-responsive" src={hero_image.fluid.src} /> */}
                  </Margin>
                </Col>
              </Row>
            </HeroContainer>
          </Grid>
        </React.Fragment>
      )}
      {layouts === "Emotion" && (
        <React.Fragment>
          <Grid>
            <HeroContainer>
              <Row middle="xs" center="xs" start="md">
                <Col xs={12} md={5}>
                  <div className="hideMobile">
                    <Margin all={{ xs: "4", md: "0" }}>
                      <HeroImageWrapper color={props.data.primary.custom_color} to={props.data.primary.link_slug}>
                        <HeroImage bg={hero_image.thumbnails.new_hero_2.url} />
                      </HeroImageWrapper>
                    </Margin>
                  </div>
                </Col>

                <Col xs={12} md={7}>
                  <Padding left={{ xs: "0", md: "5" }}>
                    <Typo1
                      align="left"
                      dangerouslySetInnerHTML={{
                        __html: `${replaceColor(hero_title.text)}`,
                      }}
                    />

                    <Margin top={4} bottom={4}>
                      <Body
                        dangerouslySetInnerHTML={{
                          __html: `${replaceColor(hero_sub_title.html)}`,
                        }}
                      />
                    </Margin>

                    {renderButtons({
                      cta_type_1,
                      youtube_id,
                      data: props.data.primary,
                      color: props.data.primary.custom_color,
                      lang: props.lang,
                    })}
                  </Padding>
                </Col>
              </Row>
            </HeroContainer>
          </Grid>
        </React.Fragment>
      )}
      {layouts === "Video" && (
        <React.Fragment>
          <Grid>
            <HeroContainer>
              <Row middle="xs" center="xs" start="md">
                <Col xs={12} lg={5}>
                  <VideoHideImg>
                    <Margin all={{ xs: "4", md: "0" }}>
                      <ModalVideo
                        to={props.data.primary.link_slug}
                        bg={hero_image.thumbnails.new_hero_2.url}
                        youtube_id={props.data.primary.youtube_id}
                      />
                    </Margin>
                  </VideoHideImg>
                </Col>

                <Col xs={12} lg={7}>
                  <Padding left={{ xs: "0", md: "5" }}>
                    <Typo1
                      dangerouslySetInnerHTML={{
                        __html: `${replaceColor(hero_title.text)}`,
                      }}
                    />

                    <Margin top={4} bottom={4}>
                      <Body
                        dangerouslySetInnerHTML={{
                          __html: `${replaceColor(hero_sub_title.html)}`,
                        }}
                      />
                    </Margin>

                    {renderButtons({
                      cta_type_1,
                      youtube_id,
                      data: props.data.primary,
                      lang: props.lang,
                      color: props.data.primary.custom_color,
                    })}
                  </Padding>
                </Col>
              </Row>
            </HeroContainer>
          </Grid>
        </React.Fragment>
      )}
      {layouts === "Emotion right" && (
        <React.Fragment>
          <Grid>
            <HeroContainer>
              <Row middle="xs" center="xs" start="md">
                <Col xs={12} md={7}>
                  <div>
                    <Padding left={{ xs: "0", md: "5" }}>
                      <Typo1
                        dangerouslySetInnerHTML={{
                          __html: `${replaceColor(hero_title.text)}`,
                        }}
                      />

                      <Margin top={4} bottom={4}>
                        <Body
                          dangerouslySetInnerHTML={{
                            __html: `${replaceColor(hero_sub_title.html)}`,
                          }}
                        />
                      </Margin>

                      {renderButtons({
                        cta_type_1,
                        youtube_id,
                        primary: props.data.primary,
                        lang: props.lang,
                        color: props.data.primary.custom_color,
                      })}
                    </Padding>
                  </div>
                </Col>

                <Col xs={12} md={5}>
                  <div className="hideMobile">
                    <Margin all={{ xs: "4", md: "0" }}>
                      <HeroImageWrapper to={props.data.primary.link_slug}>
                        <HeroImage bg={hero_image.thumbnails.new_hero_2.url} />
                      </HeroImageWrapper>
                    </Margin>
                  </div>
                </Col>
              </Row>
            </HeroContainer>
          </Grid>
        </React.Fragment>
      )}

      {layouts === "Layout 2" && (
        <Grid>
          <HeroContainerTitle>
            <Row middle="xs">
              <Col xs={12}>
                <Typo1>{hero_title.text}</Typo1>
                {hero_sub_title !== null && (
                  <Margin top={4} bottom={4}>
                    <Body>{hero_sub_title.text}</Body>
                  </Margin>
                )}
              </Col>
            </Row>
          </HeroContainerTitle>
        </Grid>
      )}

      {layouts === "Background" && (
        <>
          {hero_image.fluid.src ? (
            <HeroBackground
              bg={hero_image.fluid.src}
              // bg={
              //   props.data.primary.hero_image.localFile.childImageSharp.fluid
              //     .src
              // }
            >
              <HeroBackgroundTitle>{hero_title.text}</HeroBackgroundTitle>
            </HeroBackground>
          ) : (
            <h1>Image missing</h1>
          )}
        </>
      )}

      {layouts === "Download" && (
        <React.Fragment>
          <Grid>
            <HeroContainer>
              <Row middle="xs" center="xs">
                <Col md={8} xs={12}>
                  <Padding right={{ xs: "0", md: "3" }}>
                    <Typo1
                      dangerouslySetInnerHTML={{
                        __html: `${replaceColor(hero_title.text)}`,
                      }}
                    />

                    <Margin top={4} bottom={4}>
                      <Body>{hero_sub_title.text}</Body>
                    </Margin>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      {renderButtons({
                        cta_type_1,
                        youtube_id,
                        lang: props.lang,
                        color: props.data.primary.custom_color,
                        data: props.data.primary,
                      })}
                      <div style={{ marginLeft: "20px" }}>
                        <MixpanelHelper
                          analytics-location="Hero"
                          // analytics-category={TrackingNaming["Get started"]}
                          analytics-label={exportLocale(props.lang).hero.StartFree.button}
                        >
                          <ButtonBorderPrimary to={exportLocale(props.lang).hero.StartFree.to}>
                            {exportLocale(props.lang).hero.StartFree.button}
                          </ButtonBorderPrimary>
                        </MixpanelHelper>
                      </div>
                    </div>
                  </Padding>
                </Col>

                <>
                  {youtube_id && (
                    <ModalVideoLib youtube_id={youtube_id} modalOpen={openVideo} onClose={() => setOpenVideo(false)} />
                  )}
                  <Col md={9} xs={12}>
                    <Margin all={{ xs: "4", md: "0" }}>
                      <VideoHover hasVideo={youtube_id} onClick={() => (youtube_id ? setOpenVideo(true) : null)}>
                        {hero_image.fluid ? (
                          <Image fluidImage={hero_image.fluid} className="img-responsive" src={hero_image.fluid.src} />
                        ) : (
                          <h1>Image missing</h1>
                        )}
                        {/* <img alt="" className="img-responsive" src={hero_image.fluid.src} /> */}
                      </VideoHover>
                    </Margin>
                  </Col>
                </>
              </Row>
            </HeroContainer>
          </Grid>
        </React.Fragment>
      )}
    </>
  );
};

export function renderButtons({ cta_type_1, youtube_id, data, color, lang }) {
  return (
    <React.Fragment>
      {cta_type_1 === "Demo request" && (
        <ButtonWrapper>
          <MixpanelHelper
            analytics-location="Hero"
            // analytics-category={TrackingNaming["Request demo"]}
            analytics-label={exportLocale(lang).hero.Request_demo.button}
          >
            <ButtonSecondary to={exportLocale(lang).getInTouch.Request_demo.to}>
              {exportLocale(lang).hero.Request_demo.button}
            </ButtonSecondary>
          </MixpanelHelper>
          <MixpanelHelper
            analytics-location="Hero"
            // analytics-category={TrackingNaming["Get started"]}
            analytics-label={exportLocale(lang).hero.StartFree.button}
          >
            <ButtonBlank style={{ marginLeft: "20px" }} to={exportLocale(lang).hero.StartFree.to}>
              {exportLocale(lang).hero.StartFree.button}
              &nbsp;
              <img alt="" src={Arrow} />
            </ButtonBlank>
          </MixpanelHelper>
        </ButtonWrapper>
      )}

      {cta_type_1 === "Get Started To MyEvent" && (
        <MixpanelHelper
          analytics-location="Hero"
          // analytics-category={TrackingNaming["Get started"]}
          analytics-label={exportLocale(lang).hero.StartFree.button}
        >
          <ButtonBorderPrimary to={exportLocale(lang).hero.StartFree.to}>
            {exportLocale(lang).hero.StartFree.button}
          </ButtonBorderPrimary>
        </MixpanelHelper>
      )}

      {cta_type_1 === "Demo Request With Video Marketing" && (
        <MixpanelHelper
          analytics-location="Hero"
          // analytics-category={TrackingNaming["Request demo"]}
          analytics-label={exportLocale(lang).hero.Request_demo.button}
        >
          <ButtonSecondary to={exportLocale(lang).getInTouch.Request_demo.to}>
            {exportLocale(lang).hero.Request_demo.button}
          </ButtonSecondary>
        </MixpanelHelper>
      )}

      {/* Form to get started. Redirect to /signup */}
      {cta_type_1 === "Start now form" && <FormOnboardingEmail lang={lang} />}

      {cta_type_1 === "CTA Free Label And Link" && (
        <MixpanelHelper
          analytics-location="Hero"
          analytics-category={"CTA Free Label And Link"}
          analytics-label={data.cta_free_label}
        >
          <ButtonWrapper buttonAlign={data.buttonAlign}>
            <ButtonSecondary color={color} to={LinkInternal(data.cta_free_link_v2, data.cta_free_link, lang)}>
              {data.cta_free_label}
            </ButtonSecondary>
          </ButtonWrapper>
        </MixpanelHelper>
      )}

      {cta_type_1 === "Experience Our AI" && (
        <MixpanelHelper
          analytics-location="Hero"
          // analytics-category={TrackingNaming["Request demo"]}
          analytics-label={exportLocale(lang).hero.Request_demo.button}
        >
          <ButtonAI to={exportLocale(lang).getInTouch.Request_demo.to}>
            {exportLocale(lang).hero.Experience_our_ai.button}
          </ButtonAI>
        </MixpanelHelper>
      )}
      {/* Form to get started and with a link bellow to start a video */}
      {cta_type_1 === "Video" && <VideoForm youtube_id={youtube_id} lang={lang} />}

      {cta_type_1 === "Contact" && (
        <ButtonWrapper>
          <MixpanelHelper
            analytics-location="Hero"
            // analytics-category={TrackingNaming["Contact us"]}
            analytics-label={exportLocale(lang).hero.StartFree.button}
          >
            <ButtonSecondary to={exportLocale(lang).hero.Contact.to}>
              {exportLocale(lang).hero.Contact.button}
            </ButtonSecondary>
          </MixpanelHelper>
        </ButtonWrapper>
      )}
    </React.Fragment>
  );
}

export const query = graphql`
  fragment heroFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainHero {
          slice_type
          primary {
            link_slug
            hero_title {
              text
            }
            hero_sub_title {
              text
              html
            }
            hero_image {
              thumbnails {
                new_hero_2 {
                  url
                }
              }
            }
            layouts
            structure_layouts
            cta_type_1
            cta_type_2

            video_id_variant_1

            youtube_id

            hubspot_form_id

            cta_free_label
            cta_free_link

            cta_free_link_v2 {
              link_type
            }

            custom_color

            hero_image {
              fluid(maxWidth: 2000) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }
          }
        }
      }
    }
  }
`;
