import React from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import { media } from "../../utils/style-utils";
import styled from "styled-components";
// import Image from "../../image";
import { Typo5, Typo3 } from "../../typographie";
import { Margin, Padding } from "styled-components-spacing";

export const PictoKPI = styled.div`
  width: 60px;
  margin: 0 auto;
  font-size: 2.2rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.primary};
  background: rgba(239, 242, 243);
  border-radius: 50%;
  margin-top: 50px;
  ${media.tablet`
    margin:0 auto;
  `}
`;

export default ({ ...props }) => (
  <React.Fragment>
    <Grid>
      <Row>
        {props.data.primary.layout !== "Number" && (
          <React.Fragment>
            {props.data.items.map((item) => (
              <Col md={4} xs={12}>
                <Padding left={4} right={4} vertical={{ xs: "4", md: "0" }}>
                  {/* <Image src={item.logo.url} fluidImage={item.logo} style={{ width: "170px" }} /> */}
                  <img src={item.logo.fluid.src} style={{ width: "170px" }} />
                  <Margin top={3}>
                    <Typo5>{item.title.text}</Typo5>
                  </Margin>
                </Padding>
              </Col>
            ))}
          </React.Fragment>
        )}
      </Row>
      {props.data.primary.layout === "Number" && (
        <React.Fragment>
          <Row center="xs">
            {props.data.items.map((item) => (
              <Col md={4} xs={12}>
                <PictoKPI className={item.picto_class} />
                <Margin top={3}>
                  <Typo3>{item.number}</Typo3>
                </Margin>
              </Col>
            ))}
          </Row>
        </React.Fragment>
      )}
    </Grid>
  </React.Fragment>
);

export const query = graphql`
  fragment kpiCustomersFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainKpiCustomers {
          slice_type

          primary {
            layout
          }

          items {
            number
            picto_class

            logo {
              fluid(maxWidth: 130) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }

            title {
              text
            }
          }
        }
      }
    }
  }
`;
