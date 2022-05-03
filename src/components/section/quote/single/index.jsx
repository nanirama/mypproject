import React from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Margin } from "styled-components-spacing";
import {
  Bulle,
  Picture,
  Persona,
  Bloc2,
  Persona2,
  Picture2,
  LargeQuoteBloc,
  IconQuote,
  LargeQuotePersona,
  LargeQuotePersonaWrapper,
  LargeQuoteBlocInner,
  LargeQuotePersonaPicture,
} from "./styled";

export default ({ data }) => (
  <React.Fragment>
    <Grid>
      <Row around="xs">
        {data.items.map((item, index) => (
          <React.Fragment key={index}>
            {item.quote_theme === "Theme 1" && (
              <Col md={5} xs={12} key={index}>
                <Margin bottom={{ xs: "5", md: "0" }}>
                  <Bulle>{item.quote_content.text}</Bulle>
                  <Picture src={item.picture.fluid.src} />
                  <Persona>
                    <h4>{item.quote_name}</h4>
                    <span>{item.position}</span>
                  </Persona>
                </Margin>
              </Col>
            )}
            {item.quote_theme === "Theme 2" && (
              <Col md={5} xs={12} key={index}>
                <Bloc2>
                  <Persona2>
                    <Picture2 src={item.picture.fluid.src} />
                    <Persona>
                      <h4>{item.quote_name}</h4>
                      <span>{item.position}</span>
                    </Persona>
                  </Persona2>
                  {item.quote_content.text}
                </Bloc2>
              </Col>
            )}
          </React.Fragment>
        ))}
      </Row>
    </Grid>

    {data.items.map((item, index) => (
      <React.Fragment key={index}>
        {item.quote_theme === "Large quote" && (
          <LargeQuoteBloc>
            <LargeQuoteBlocInner>
              <React.Fragment>
                {/* <IconQuote className="icons8-get-quote" /> */}
                {item.quote_content.text}
                <LargeQuotePersonaWrapper>
                  <LargeQuotePersonaPicture src={item.picture.fluid.src} />
                  <LargeQuotePersona>
                    {item.quote_name}, {item.position}
                  </LargeQuotePersona>
                </LargeQuotePersonaWrapper>
              </React.Fragment>
            </LargeQuoteBlocInner>
          </LargeQuoteBloc>
        )}
      </React.Fragment>
    ))}
  </React.Fragment>
);

export const query = graphql`
  fragment quoteFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainQuote {
          slice_type
          items {
            quote_content {
              text
            }
            picture {
              url
            }

            picture {
              fluid(maxWidth: 180) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }

            position
            quote_name
            quote_theme
          }
        }
      }
    }
  }
`;
