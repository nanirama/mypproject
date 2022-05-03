import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { graphql } from "gatsby";
import { Typo2, Typo4, Typo3, Body, Typo5 } from "../../typographie";
import styled from "styled-components";
import { SpaceH } from "../../space";
import { ButtonSecondary, ButtonWhite } from "../../button";
import Image from "../../image";
import { Margin } from "styled-components-spacing";

const Bg = styled.div`
  color: #fff;
  padding: 50px 0;
  background-image: url(${(props) => props.src});
  width: 100%;
`;

const EvolveBanner = ({ ...props }) => {
  const t = props.data.primary;
  return (
    <Bg src={t.background.fluid.src}>
      <Grid>
        <Row center="xs">
          <Col md={10}>
            <Typo2
              color="#FFF"
              center={true}
              dangerouslySetInnerHTML={{
                __html: t.title_main,
              }}
            />
          </Col>
        </Row>
        <SpaceH of={50} />
        <Row center="xs" middle="xs" start="md">
          <Col md={6}>
            {/* <Typo4 color="#FFF">More than a platform, you need a trusted partner </Typo4> */}
            {/* <SpaceH of={20} /> */}
            <Margin bottom={{ xs: 4, md: 0 }}>
              <Typo5 color="#FFF">{t.content_main}</Typo5>
              <SpaceH of={30} />
              <ButtonWhite size={"big"} hoverColor={"primary"} to="https://evolve.swapcard.com">
                {t.button_label}
              </ButtonWhite>
            </Margin>
            {/* <SpaceH of={40} /> */}
          </Col>
          <Col md={6}>
            <Image fluidImage={t.image_right} />
          </Col>
        </Row>
      </Grid>
    </Bg>
  );
};

export default EvolveBanner;

export const query = graphql`
  fragment evolveFramgent on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainEvolve {
          primary {
            button_label
            title_main
            content_main
            background {
              fluid(maxWidth: 1600) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }
            image_right {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }
            link_url {
              slug
              link_type
              lang
              url
              uid
            }
          }
          slice_type
          slice_label
        }
      }
    }
  }
`;
