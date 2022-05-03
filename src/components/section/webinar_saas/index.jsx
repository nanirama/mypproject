import React from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import { Typo2, Body } from "../../typographie";
import { SpaceH } from "../../space";
import { ButtonWhite } from "../../button/index";
import Image from "../../image";
import { Margin } from "styled-components-spacing";

const Wrapper = styled.div`
  background: #00cc88;
  width: 100%;
  color: #fff;
  border-radius: 8px;
  padding: 40px;
`;

const WebinarSaas = ({ ...props }) => {
  const t = props.data.primary;
  return (
    <Grid>
      <Row>
        <Col>
          <Wrapper>
            <Row middle="xs">
              <Col md={7}>
                <Typo2 color="#FFF">{t.webinar_title}</Typo2>
                <SpaceH of={20} />
                <Body color="#FFF">{t.webinar_content}</Body>
                <SpaceH of={20} />
                <ButtonWhite size={"big"} to={t.webinar_link}>
                  {t.webinar_anchor}
                </ButtonWhite>
              </Col>
              <Col md={4} mdOffset={1}>
                <Margin top={{ xs: 4, md: 0 }}>
                  <Image fluidImage={t.webinar_image} />
                </Margin>
              </Col>
            </Row>
          </Wrapper>
        </Col>
      </Row>
    </Grid>
  );
};

export default WebinarSaas;

export const query = graphql`
  fragment webinarSaaS on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainWebinarSaas {
          id
          primary {
            webinar_anchor
            webinar_content
            webinar_extra_1
            webinar_link
            webinar_title

            webinar_image {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }
          }
          slice_label
          slice_type
        }
      }
    }
  }
`;
