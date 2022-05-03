import React, { useState } from "react";
import { graphql } from "gatsby";
import withLocation from "../../../HOC/location";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo2 } from "../../typographie";
import TableSection from "./Table";

export const Registration = ({ data, lang }) => {
  const t = data.primary;

  // console.log("data", data); // deb
  // console.log("t", t); // deb

  return (
    <div style={{ marginTop: "80px" }}>
      <Grid>
        <Row center="xs">
          <Typo2 center mb={17}>
            {t.page_title}
          </Typo2>
        </Row>
        <Row>
          <TableSection t={data.primary} items={data.items} lang={lang} />
        </Row>
      </Grid>
    </div>
  );
};

export default withLocation(Registration);

export const query = graphql`
  fragment planFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainPlan {
          slice_type
          primary {
            page_title
            simple_registration_title
            simple_registration_icon {
              url
            }
            simple_registration_description {
              text
            }
            complex_registration_title
            complex_registration_icon {
              url
            }
            complex_registration_description {
              text
            }
            button_label
          }
          items {
            name
            is_category
            category_icon {
              url
            }
            simple_registration_chosen
            complex_registration_chosen
          }
        }
      }
    }
  }
`;
