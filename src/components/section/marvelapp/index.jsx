import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Grid, Col, Row } from "react-flexbox-grid";
import { media } from "../../utils/style-utils";
import { Body, Typo4 } from "../../typographie";
import { SpaceH } from "../../space";

const Iframe = styled.iframe`
  width: 100%;
  height: calc(100vh - 100px);
  overflow: scroll;
  margin-top: 10px;
  box-shadow: 0 0 0 1px #ebf0f5;
`;

const OnlyDesktop = styled.div`
  display: block;
  ${media.tablet`
    display:none;
`};
`;

export default ({ ...props }) => {
  const t = props.data.primary;
  return (
    <Grid>
      {/* <Row center="xs">
        <Col xs={12}>
          <OnlyDesktop>
            <Body>{t.desktop_only}</Body>
          </OnlyDesktop>
        </Col>
      </Row> */}
      <SpaceH of={15} />
      <Row>
        <Col xs={12}>
          <Iframe
            src={`https://marvelapp.com/${t.marvelapp_id}?emb=1`}
            frameborder="0"
            allowtransparency="true"
          ></Iframe>
        </Col>
      </Row>
    </Grid>
  );
};

export const query = graphql`
  fragment marvelApp on PrismicTemplate2 {
    data {
      bodyMain {
        ... on PrismicTemplate2BodyMainMarvelapp {
          id
          slice_type
          primary {
            marvelapp_id
            desktop_only
          }
        }
      }
    }
  }
`;
