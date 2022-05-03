import React from "react";
import { graphql } from "gatsby";
import { Grid, Row } from "react-flexbox-grid";
import { ColFlex } from "../../../utils/grid";
import styled from "styled-components";
import { Typo4, Body } from "../../../typographie";
import { Margin } from "styled-components-spacing";

const Card = styled.div`
  border: 1px solid #eee;
  width: 100%;
  margin-bottom: 16px;
  text-align: center;
  padding: 30px 15px;
  flex: 1;
`;

const Picture = styled.img`
  max-height: 80px;
`;

export default ({ ...props }) => (
  <>
    <Grid>
      <Row>
        {/* {props.data.primary.title_main !== "" && (
          <Col md={12}>
            <Margin bottom={3}>
              <Typo4 bold={600} center>
                {props.data.primary.title_main}
              </Typo4>
            </Margin>
          </Col>
        )} */}
        {props.data.items.map((data, index) => (
          <>
            <ColFlex md={4} xs={12}>
              <Card>
                <Picture className="img-responsive" src={data.picture.url} alt="" />
                <Margin top={3} bottom={3}>
                  <Typo4 bold={600}>{data.title_feature}</Typo4>
                </Margin>

                <Body>{data.description.text}</Body>
              </Card>
            </ColFlex>
          </>
        ))}
      </Row>
    </Grid>
  </>
);

export const query = graphql`
  fragment pricingFeaturesBlocV3Fragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainPricingV3FeaturesBloc {
          slice_type
          primary {
            title_main
          }
          items {
            title_feature
            picture {
              url
            }
            description {
              text
            }
          }
        }
      }
    }
  }
`;
