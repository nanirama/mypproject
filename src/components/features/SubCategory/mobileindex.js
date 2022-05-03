import React from "react";
import Collapsible from "react-collapsible";
import Image from "gatsby-image";
import { CategoryBlock, ItemBox, TitleBox } from "./styled";

import PromotionIcon1 from "../../../assets/images/features/promotion-icon1.png";
import ManagmentIcon1 from "../../../assets/images/features/managment-icon1.png";
import ProductionIcon1 from "../../../assets/images/features/production-icon1.png";
import IntegrationIcon1 from "../../../assets/images/features/integration-icon1.png";


const FeatureSubCategory = ({ data }) => {
  return (
    <>
      {data && data.map((cat, index) => {
        return (
          <CategoryBlock>
            <h6>{cat.primary.category_title}</h6>
            {
              cat.items && cat.items.map((sub, subindex) => {
                const subCats = sub.features_sub_category.document.data.body[0].items ? sub.features_sub_category.document.data.body[0].items : []
                return (
                  <Collapsible trigger={sub.features_sub_category.document.data.category_title.text}>
                    {subCats && subCats.map((scat, sindex) => {
                      return (
                        <ItemBox className="item">
                          <TitleBox>
                            {scat.feature_icon && <Image fixed={scat.feature_icon.fixed} />} 
                            <h5>{scat.feature_title}</h5>
                          </TitleBox>
                          {scat.feature_description && <div dangerouslySetInnerHTML={{ __html: scat.feature_description.html }} ></div>}                                      
                        </ItemBox>
                      )
                    })}
                  </Collapsible>
                )
              }
              )

            }
          </CategoryBlock>
        )
      })}      
    </>
  );
};

export default FeatureSubCategory;
