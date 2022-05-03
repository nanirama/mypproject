import React, { Component } from "react";
import { graphql } from "gatsby";
import HeroJobs from "../components/templates/careers/hero";
import GoHire from "../components/templates/careers/gohire";
import Life from "../components/templates/careers/life";
import Layout from "../components/layout";
import { Grid, Row, Col } from "react-flexbox-grid";
import { SpaceH } from "../components/space";
import styled from "styled-components";
import YouTube from "react-youtube";

const YoutubeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
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
  height: "390",
  width: "640",
  allowfullscreen: "true",
  playerVars: {
    autoplay: 0,
    controls: 1,
    rel: 0,
    fs: 0,
  },
};

export default class Careers extends Component {
  render() {
    const props = this.props;
    return (
      <Layout dataNavigation={props.data.translation} pageContext={props.pageContext}>
        <HeroJobs bg={props.data.hero.childImageSharp.fluid} />
        {/* <Who
          picture={props.data.prismicCareers.data.introduction_picture.url}
          text={props.data.prismicCareers.data.introduction_text}
        /> */}
        <Grid>
          <Row center="xs">
            <Col md={8}>
              <SpaceH of={36} />
              <YoutubeContainer>
                <YouTube videoId="sEGk5XBAv9E" opts={opts} />
              </YoutubeContainer>
              <SpaceH of={36} />
              <p>
                We’re revolutionizing the event industry with our mission to empower human connections and enhance the
                way people network.
              </p>
              <SpaceH of={36} />
            </Col>
          </Row>
        </Grid>
        <GoHire />

        {/* <Positions data={props.data.prismicCareers.data} /> */}
        <Life data={props.data.prismicCareers.data} />
        {/* <GetInTouch
      to={data.prismicDocument.data.link}
      cta={data.prismicDocument.data.button}
      bottom="40"
    >
      {data.prismicDocument.data.title[0].text}
    </GetInTouch> */}
      </Layout>
    );
  }
}

export const query = graphql`
  query getDocumentCareers($lang: String!) {
    prismicCareers(prismicId: { eq: "WxFTnSAAAHIii2Zt" }) {
      data {
        bodyJobs {
          __typename
          ... on PrismicCareersBodyJobsJobsPosition {
            slice_type
            items {
              job_link
              job_anchor_link
            }
            primary {
              meet
              category {
                text
                html
              }

              category_picture {
                fluid(maxWidth: 600) {
                  ...GatsbyPrismicImageFluid_noBase64
                }
              }

              category_description {
                text
                html
              }
            }
          }
        }

        title {
          text
        }
        link
        button
        hero_title {
          text
        }
        introduction_picture {
          url
        }
        introduction_text {
          text
        }
        position_title {
          text
        }
        position_sub_title {
          text
        }
        find_us
        life_at_swapcard1
        life_at_swapcard {
          title {
            text
          }
          content {
            text
          }
        }
      }
    }

    hero: file(relativePath: { regex: "/careers/hero.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    translation: prismicTranslate(lang: { eq: $lang }) {
      ...genericData
    }
  }
`;
