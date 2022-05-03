import React from "react";
import { Col } from "react-flexbox-grid";
import Image from "gatsby-image";
import {TitleBox, ItemBox } from "./styled";

const CategoryItem = ({ data }) => {

  return (
    <Col lg={6} md={12} xs={12}>
      <ItemBox>
        <TitleBox>
          {data.feature_icon && <Image fixed={data.feature_icon.fixed} />}
          <h5>{data.feature_title}</h5>
        </TitleBox>
        {data.feature_description && <div dangerouslySetInnerHTML={{ __html: data.feature_description.html }} ></div>}
      </ItemBox>
    </Col>
  );
};
export default CategoryItem;