import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import { Banner, Heading, SubHeading, BannerImage, BannerText } from "./styled";
import { Row, Col } from "react-flexbox-grid";
import { GridLarge } from "../utils/grid";
import { SpaceH } from "../space";

import BannerImgBg from "../../assets/images/home/hero-banner-bg.png";
import BannerMobImgBg from "../../assets/images/home/hero-bg-mob.png";

import HeroImg from "../../assets/images/home/hero-img.png";
import HeroImgMob from "../../assets/images/home/hero-banner-bg.png";

const BannerSection = ({ data }) => {
  const { hero_title, hero_sub_title, button_text, button_link, hero_image, hero_mobile_image } = data.primary;
  return (
    <>
      <SpaceH of={40} />
      <SpaceH of={20} />
      {/* <BannerImage>
        <Image className="hero-img" fluid={hero_image.fluid} />
        <Image className="hero-mob-img" fluid={hero_mobile_image.fluid} />
        <BannerText>
          <GridLarge>
            <Row>
              <Col lg={6} md={8}>
                <SubHeading>{hero_title.text}</SubHeading>
                <Heading>{hero_sub_title.text}</Heading>

                <Link className="linksecondary" to={`/${button_link}`}>
                  {button_text}
                  <svg
                    style={{ marginLeft: "7px", float: "right" }}
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6 16.1L17.2 9.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.16696 9.36698H16.4339"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.6 2.90002L17.2 9.50002"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                </Link>
              </Col>
              <Col lg={6} md={4}></Col>
            </Row>
          </GridLarge>
        </BannerText>
      </BannerImage> */}

      <Banner bgImg={BannerImgBg} BgMobile={BannerMobImgBg}>
        <GridLarge>
          <Row>
            <Col className="banner_text" lg={5} md={12}>
              <SubHeading>{hero_title.text}</SubHeading>

              <Heading>{hero_sub_title.text}</Heading>
              <Link className="linksecondary" to={`/${button_link}`}>
                {button_text}
                <svg
                  style={{ marginLeft: "7px", float: "right" }}
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6 16.1L17.2 9.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.16696 9.36698H16.4339"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6 2.90002L17.2 9.50002"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
              </Link>
            </Col>
            <Col lg={7} md={12}>
              <Image fluid={hero_image.fluid} className="w-100 show" />
              <Image fluid={hero_mobile_image.fluid} className="w-100 hide" />
              {/* <img className="w-100 show" src={HeroImg} alt="" />
              <img className="w-100 hide" src={HeroImgMob} alt="" /> */}
            </Col>
          </Row>
        </GridLarge>
      </Banner>

      {/*       
      <Banner bgImg={hero_image.fluid.srcWebp} BgMobile={hero_mobile_image.fluid.srcWebp}>
        <GridLarge>
          <Row>
            <Col lg={6} md={8}>
              <SubHeading>{hero_title.text}</SubHeading>

              <Heading>{hero_sub_title.text}</Heading>

              <ButtonSecondary
                to={`${site.siteMetadata.siteUrl}/${button_link}`}
                style={{ padding: "18px 35px" }}
                className="btn"
              >
                {button_text}{" "}
                <svg
                  style={{ marginLeft: "7px", float: "right" }}
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6 16.1L17.2 9.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.16696 9.36698H16.4339"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6 2.90002L17.2 9.50002"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
              </ButtonSecondary>

              <Link 
                className="linksecondary"
                  to={`${site.siteMetadata.siteUrl}/${button_link}`}>{button_text}
                  
                  <svg
                  style={{ marginLeft: "7px", float: "right" }}
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6 16.1L17.2 9.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.16696 9.36698H16.4339"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6 2.90002L17.2 9.50002"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                  </Link>




            </Col>
            <Col lg={6} md={4}></Col>
          </Row>
        </GridLarge>
      </Banner> */}
    </>
  );
};
export default BannerSection;

export const query = graphql`
  fragment heroSectionFragment on PrismicHomeTemplate1 {
    data {
      bodyMain {
        ... on PrismicHomeTemplate1BodyMainHeroSection {
          id
          slice_type
          primary {
            hero_title {
              text
              html
            }
            hero_sub_title {
              text
              html
            }
            button_text
            button_link
            hero_image {
              fluid(maxWidth: 2000) {
                ...GatsbyPrismicImageFluid_noBase64
                srcWebp
                src
              }
            }
            hero_mobile_image {
              fluid(maxWidth: 768, maxHeight: 1250) {
                srcWebp
                ...GatsbyPrismicImageFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
