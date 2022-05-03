import React, { useState } from "react";
import Image from "gatsby-image";
import { Row, Col } from "react-flexbox-grid";

import CategoryItem from '../CategoryItem'

import AccordionItem from "./AccordionItem";

import { CategoryBlock, CategoryBlockM  } from "./styled";
export const faqs = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium."
  },
  {
    question: "Dignissimos sequi architecto?",
    answer:
      "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque."
  },
  {
    question: "Voluptas praesentium facere?",
    answer: "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque."
  }
];



const FeatureSubCategory = ({ data, viewFeatures }) => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

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
                  <ul className="accordion" key={subindex}>
                    {subCats && <AccordionItem
                    data={subCats}
                    onToggle={() => handleToggle(subindex)}
                    active={clicked === subindex}
                    title={sub.features_sub_category.document.data.category_title.text}
                    />}                 
                  </ul>
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
