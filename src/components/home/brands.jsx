import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import { Row, Col } from "react-flexbox-grid";
import { GridLarge } from "../utils/grid";
import { Container, BrandsBlk, TitleLarge, BrandItem, BrandText, TagBtn, AnchorBorderGrey } from "./styled";

const Brands = ({ data }) => {
  const { items, primary, button_link } = data;

  const checkLinkHandler = (string) => {
    if (/(http(s?)):\/\//i.test(string)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <BrandsBlk>
        <GridLarge>
          <TitleLarge style={{ textAlign: "center" }}>{primary.heading.text}</TitleLarge>
        </GridLarge>

        <Container>
          <div dangerouslySetInnerHTML={{ __html: primary.description.html }}></div>
          <Row>
            {items &&
              items.map((item, index) => {
                return (
                  <Col md={4} key={index}>
                    <BrandItem>
                      <Image fluid={item.image.fluid} />
                      <TagBtn tagBg={item.color}>{item.tag}</TagBtn>
                      <BrandText>
                        <p>{item.bdesc.text}</p>
                        {checkLinkHandler(item.button_link) ? (
                          <AnchorBorderGrey href={item.button_link} target="_blank">
                            {item.button_text}
                          </AnchorBorderGrey>
                        ) : (
                          <Link className="buttonlink" to={`/${item.button_link}/`}>
                            {item.button_text}
                          </Link>
                        )}
                      </BrandText>
                    </BrandItem>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </BrandsBlk>
    </>
  );
};

export default Brands;

export const query = graphql`
  fragment leadingBrands on PrismicHomeTemplate1 {
    data {
      bodyMain {
        ... on PrismicHomeTemplate1BodyMainHowLeadingBrandsSection {
          id
          slice_type
          primary {
            heading {
              text
              html
            }
            description {
              text
              html
            }
          }
          items {
            button_link
            button_text
            tag
            color
            bdesc: description {
              text
              html
            }
            image {
              fluid(maxWidth: 600) {
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
