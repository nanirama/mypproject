import React from "react";
import { graphql } from "gatsby";
import { Col, Grid, Row } from "react-flexbox-grid";
import { CardContainer, CardImage, H2, P } from "./styled";

import _ from "lodash";
import { ButtonBlank } from "../../button";
import Route from "../../../localization";
import { SpaceH } from "../../space";
import { Typo2, Typo3, Typo4 } from "../../typographie";

const FeaturesCards = ({ ...props }) => {
  const t = props.data.primary;
  const linkText = props.data.primary.link_text.text;
  const linkRoute = props.data.primary.link_route;
  const items = props.data.items;

  const cards = items.map((i) => {
    return (
      <CardContainer width={50} mw={500} mb={24}>
        <CardImage src={i.card_image.url} />
        <H2 mt={16}>{i.card_title.text}</H2>
        <P mt={8} lh={1.4} align="center">
          {i.card_desc.text}
        </P>
      </CardContainer>
    );
  });

  const handleClick = (e) => {
    if (typeof window !== "undefined") {
      const offsetDoc = document.getElementById("featuresListSaaS").getBoundingClientRect();

      window.scroll({
        top: window.scrollY + offsetDoc.top - 250,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ background: "rgb(250, 250, 250)" }}>
      <Col xl={12} style={{ paddingBottom: 66, paddingTop: 36 }}>
        <Row center="xs">
          <ButtonBlank color={"rgb(0, 204, 136)"} onClick={handleClick}>
            {linkText} &nbsp;
            <div className="hideMobile">
              <span
                style={{ position: "absolute", top: "2px", right: "-15px", display: "inline-block" }}
                className="icons8-right-pointing-arrow"
              />
            </div>
          </ButtonBlank>
        </Row>

        <SpaceH of={36} />

        <Row center="lg">
          <Row style={{ maxWidth: 1024, width: "100%", margin: 0 }} between="lg" center="md">
            {cards}
          </Row>
        </Row>
      </Col>
    </div>
  );
};

export default FeaturesCards;

export const query = graphql`
  fragment featuresCards on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainFeaturesCards {
          id
          slice_type
          slice_label
          items {
            card_desc {
              raw
              text
            }
            card_image {
              url
            }
            card_title {
              raw
              text
            }
          }
          primary {
            title {
              raw
              text
            }
            link_route
            link_text {
              text
              raw
              html
            }
          }
        }
      }
    }
  }
`;
