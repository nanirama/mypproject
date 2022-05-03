import React from "react";
import Collapsible from "react-collapsible";
import Image from "gatsby-image";
import { Row, Col } from "react-flexbox-grid";

import CategoryItem from '../CategoryItem'

import { CategoryBlock, CategoryBlockM, ItemBox, TitleBox } from "./styled";

const FeatureSubCategory = ({ data, viewFeatures }) => {
  return (
    <>
      {!viewFeatures && data && data.map((cat, index) => {
        return (
          <CategoryBlock>
            <h6>{cat.primary.category_title}</h6>
            {
              cat.items && cat.items.map((sub, subindex) => {
                const subCats = sub.features_sub_category.document.data.body[0].items ? sub.features_sub_category.document.data.body[0].items : []
                return (
                  <Collapsible trigger={sub.features_sub_category.document.data.category_title.text}>
                    {subCats && subCats.map((scat, sindex) => <CategoryItem key={sindex} data={scat} />)}
                  </Collapsible>
                )
              }
              )

            }
          </CategoryBlock>
        )
      })}
      {viewFeatures && data && data.map((cat, index) => {
        return (
          <CategoryBlockM key={index}>
            <h6>{cat.primary.category_title}</h6>
            {
              cat.items && cat.items.map((sub, subindex) => {
                const subCats = sub.features_sub_category.document.data.body[0].items ? sub.features_sub_category.document.data.body[0].items : []
                return (
                  <div key={subindex}>
                    <h2>{sub.features_sub_category.document.data.category_title.text}</h2>
                    <Row>
                      {subCats && subCats.map((scat, sindex) => <CategoryItem key={sindex} data={scat} />)}
                    </Row>
                  </div>
                )
              })
            }
          </CategoryBlockM>
        )
      })}
    </>
  );
};

export default FeatureSubCategory;
