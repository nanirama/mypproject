import React, { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Image from "gatsby-image";
import { Row, Col } from "react-flexbox-grid";
import { GridLarge } from "../../utils/grid";
import Divider from "../../utils/divider";
import { SpaceH } from "../../space";

import { FeatureBlock, TopContent, Heading, Paragraph, FeatureItem } from "./styled";

import FeatureSubCategory from "../SubCategory";
import BottomSection from "../BottomSection";

import CategoryImg1 from "../../../assets/images/features/category-img1.png";

const FeatureCategory = ({data}) => {
  const [ selectedIndex, setSelectedIndex ] = useState(0)
  var loopCount = 0;
  const { cta_block_content, cta_button_link, cta_button_label, heading, sub_heading, bodyMain } = data.data

  const FeaturesCategories = bodyMain.filter((item) => {
    return item.slice_type === "feature_category";
  });
  return (
    <>
      <SpaceH of={40} />
      <SpaceH of={40} />
      <FeatureBlock>
        <TopContent>
        <Row>
        <Col md={12} xs={12}>
          <Heading>{heading.text}</Heading>
          <Paragraph>
            {sub_heading.text}
          </Paragraph>
          </Col>
          </Row>
          </TopContent>
        <GridLarge>
          <Row>
            {FeaturesCategories && FeaturesCategories.map((cat, index)=>{
              const loopArray = [0,4,7,8]
              return(
                <Col lg={3} md={6} xs={12} key={index}>
                  <FeatureItem>
                    <Image fluid={cat.primary.category_image.fluid} alt={cat.primary.category_title} />
                    {/* <img src={cat.primary.category_image.fluid} alt={cat.primary.category_title} /> */}
                    <AnchorLink href='#tabsection'><h4 onClick={(e)=>setSelectedIndex(loopArray[index])}>{cat.primary.category_title}</h4></AnchorLink>
                    <p>{cat.primary.category_short_description}</p>
                  </FeatureItem>
                </Col>
              )
              
            }
            
            )
            
            }   
          </Row>
          <SpaceH of={40} />
      <Divider />
                 
        </GridLarge>
      </FeatureBlock>
      <section id="tabsection">
      <FeatureSubCategory data={FeaturesCategories} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <BottomSection cta_block_content={cta_block_content} cta_button_link={cta_button_link} cta_button_label={cta_button_label} />
      </section>
      
    </>
  );
};
export default FeatureCategory;

export const query = graphql`
  fragment FeaturesCategories on PrismicFeaturesTemplate1 {
    data {
      cta_block_content {
        html
        text
      }
      cta_button_link
      cta_button_label
      bodyMain {
        ... on PrismicFeaturesTemplate1BodyMainFeatureCategory {
          id
          primary {
            category_title
            category_short_description
            category_image {
              fluid(maxWidth: 540, maxHeight: 370) {
                src
                ...GatsbyPrismicImageFluid_noBase64
              }
            }
          }
          items {
            features_sub_category {
              id
              document {
                ... on PrismicFeaturesCategoryTemplate1 {
                  id
                  data {
                    category_title {
                      text
                      html
                    }
                    body {
                      ... on PrismicFeaturesCategoryTemplate1BodyCategoryFeatures {
                        id
                        items {
                          feature_title
                          feature_description {
                            text
                            html
                          }
                          feature_icon {
                            fixed(height: 60, width: 60) {
                              ...GatsbyPrismicImageFixed_noBase64
                              src
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          slice_type
        }
      }
    }
  }
`;

