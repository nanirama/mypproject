import React from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import { Typo2, Typo3, Typo4 } from "../../typographie";
import { SpaceH } from "../../space";
import Image from "../../image";
import { media } from "../../utils/style-utils";
import HubspotForm from "../../form/hubspot";

const Bg = styled.div`
  background: ${(props) => props.theme.color.primary};
  /* padding: 70px 80px; */
  padding: 60px 0;
  color: #fff;
`;

const GridEbook = styled(Grid)`
  max-width: 990px;
`;

const ColOrder = styled(Col)`
  /* order: 0;
  ${media.tablet`
    order:0;
`} */
  margin-top: 40px;

  ${media.tablet`
  /* margin:0; */
  `};
`;

const EbookBanner = ({ ...props }) => {
  const t = props.data.primary;
  return (
    <Bg>
      <GridEbook>
        <Row middle="xs">
          <Col md={6}>
            <div style={{ padding: "0" }}>
              <Typo2 color="#FFF">{t.ebook_title}</Typo2>
              <SpaceH of={20} />
              <Typo3 bold color="#00CC88">
                {t.ebook_content}
              </Typo3>
              <SpaceH of={40} />

              <HubspotForm
                themeHubspot={"ebook"}
                centerSubmit="center"
                hubspot_dev_id={t.ebook_hubspot_dev}
                hubspot_id={t.ebook_hubspot_prod}
              />
            </div>
          </Col>
          <ColOrder md={5} mdOffset={1} isBook={"true"}>
            <div style={{ textAlign: "center" }}>
              <Image
                style={{ margin: "0 auto", maxHeight: "440px" }}
                className="img-responsive"
                src={t.ebook_image.fluid.src}
              />
            </div>
          </ColOrder>
        </Row>
      </GridEbook>
    </Bg>
  );
};

export default EbookBanner;

export const query = graphql`
  fragment ebookFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainEbookDownload {
          slice_type
          primary {
            ebook_content
            ebook_hubspot_dev
            ebook_hubspot_prod
            ebook_title
            ebook_image {
              fluid(maxWidth: 600) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }
          }
          slice_label
          id
        }
      }
    }
  }
`;
