import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { graphql } from "gatsby";
import { Typo2, Body } from "../../typographie";
import { SpaceH } from "../../space/index";
import styled from "styled-components";
import Image from "../../image";
import { Margin } from "styled-components-spacing";
import Link from "../../utils/link";

const Icon = styled.img`
  max-height: 70px;
`;

const IconWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background: rgb(250, 250, 250);
  border-radius: 8px;
  height: 130px;
  color: rgb(80, 80, 80);
  font-weight: bold;
  box-shadow: 0px 4.5px 6.5px 0 rgb(181 197 213 / 40%);
  padding: 15px;
  &:hover {
    box-shadow: 0px 4.5px 6.5px 0 rgb(181 197 213 / 80%);
  }
`;

const ImgWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 130px; */
`;

const HubspotSupport = ({ ...props }) => {
  const t = props.data.primary;
  return (
    <Grid>
      <Row>
        <Col md={5}>
          <Margin bottom={{ xs: 5, md: 0 }}>
            <Image fluidImage={t.hubspot_image} />
          </Margin>
        </Col>
        <Col md={6} mdOffset={1}>
          <Typo2>{t.title_hubspot}</Typo2>
          <SpaceH of={20} />
          <Body>{t.content}</Body>
          <SpaceH of={30} />
          <Row center="xs">
            <Col xs={4}>
              <IconWrapper to="https://insideevents.swapcard.com/">
                <ImgWrapper>
                  <Icon
                    src={
                      "https://images.prismic.io/showcase-dev/8ab97590-8ade-421e-903d-700421812501_inside_2.png?auto=compress,format&w=300"
                    }
                  />
                </ImgWrapper>
                <SpaceH of={10} />
                {t.doc}
              </IconWrapper>
            </Col>
            <Col xs={4}>
              <IconWrapper to="https://academy.swapcard.com">
                <ImgWrapper>
                  <Icon
                    src={
                      "https://showcase-dev.cdn.prismic.io/showcase-dev/e2eec130-96be-4616-986e-fd5d71ce7de6_Swp-Academy+Logo.svg"
                    }
                  />
                </ImgWrapper>
                <SpaceH of={10} />
                {t.phone}
              </IconWrapper>
            </Col>
            <Col xs={4}>
              <IconWrapper to="https://evolve.swapcard.com">
                <ImgWrapper>
                  <Icon
                    className="img-responsive"
                    src={
                      "https://showcase-dev.cdn.prismic.io/showcase-dev/fd331aa9-0f60-4676-83ab-91a15c4fc08f_evolve_1.svg"
                    }
                  />
                </ImgWrapper>
                <SpaceH of={10} />
                {t.community}
              </IconWrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

export default HubspotSupport;

export const query = graphql`
  fragment hubspotSupportFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainHubspotSupport {
          primary {
            community
            content
            doc
            phone
            title_hubspot: title
            title_mini
            hubspot_image {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }
          }
          slice_type
          slice_label
        }
      }
    }
  }
`;
