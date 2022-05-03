import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { GridMedium } from "../../utils/grid";
import styled from "styled-components";
import { graphql } from "gatsby";
import { media } from "../../utils/style-utils";

export const PragraphStyled = styled.div`
  text-align: ${(props) => props.align};
  p {
    color: ${(props) => props.theme.color.body};
    line-height: ${(props) => props.theme.lineHeight.body};
    margin-bottom: 10px;
  }
  em {
    font-style: italic;
  }
  h1 {
    font-size: ${(props) => props.theme.fontSize.typo1};
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize.typo2};
  }
  h3 {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

const PictureBlockStyled = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LayoutGreenBg = styled.div`
  background: ${(props) => props.theme.color.secondary};
  color: #fff;
  text-align: center;
  padding: 50px;
  font-size: 1.4rem;
  ${media.tablet`
  padding: 70px 240px;
  font-size: 2rem;
  `}
`;
const LayoutBlueBg = styled.div`
  background: #262f3d;
  color: #fff;
  text-align: center;
  padding: 50px;
  font-size: 30px;
  line-height: 38px;
  ${media.tablet`
  padding: 70px 240px;
  font-size: 30px;
  line-height: 38px;
  `}
`;

const GreenLiteBackground = styled.div`
  background: rgba(0, 204, 136, 0.1);
  padding: 40px 0;
`;

const GreenLiteBackgroundText = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 50px;
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

const WhiteBackgroundText = styled.div`
  h1 {
    font-size: 2.6rem;
    margin-bottom: 12px;
    font-weight: bold;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 50px;
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

const PictureBlock = ({ props, md, xs }) => {
  const width = props.data.primary.picture_width_percent ? `${props.data.primary.picture_width_percent}%` : "100%";
  return (
    <PictureBlockStyled md={md} xs={xs}>
      <img src={props.data.primary.picture.url} alt={"image"} width={width} />
    </PictureBlockStyled>
  );
};

const HtmlBlock = ({ props, md, xs }) => {
  return (
    <Col md={md} xs={xs}>
      <PragraphStyled
        align={props.data.primary.text_align}
        dangerouslySetInnerHTML={{
          __html: props.data.primary.paragraph.html,
        }}
      />
    </Col>
  );
};

const Content = ({ props }) => {
  return (
    <>
      {props.data.primary.picture?.url && props.data.primary.picture_position === "Left" && (
        <Row>
          <PictureBlock props={props} md={6} xs={12} />
          <HtmlBlock props={props} md={6} xs={12} />
        </Row>
      )}
      {props.data.primary.picture?.url && props.data.primary.picture_position === "Right" && (
        <Row>
          <HtmlBlock props={props} md={6} xs={12} />
          <PictureBlock props={props} md={6} xs={12} />
        </Row>
      )}
      {!props.data.primary.picture?.url && (
        <Row>
          <HtmlBlock props={props} md={12} xs={12} />
        </Row>
      )}
    </>
  );
};

const GreenLiteBackgroudImage = ({ props }) => (
  <GreenLiteBackground>
    <Grid>
      <Row middle="xs">
        <Col md={6}>
          <GreenLiteBackgroundText
            dangerouslySetInnerHTML={{
              __html: props.data.primary.paragraph.text,
            }}
          />
        </Col>
        <Col md={5} mdOffset={1}>
          <img src={props.data.primary.picture.url} alt={"image"} className="img-responsive" />
        </Col>
      </Row>
    </Grid>
  </GreenLiteBackground>
);

const WhiteBackgroudImage = ({ props }) => (
  <GreenLiteBackground>
    <Grid>
      <Row middle="xs">
        <Col md={6}>
          <WhiteBackgroundText
            dangerouslySetInnerHTML={{
              __html: props.data.primary.paragraph.text,
            }}
          />
        </Col>
        <Col md={5} mdOffset={1}>
          <img src={props.data.primary.picture.url} alt={"image"} className="img-responsive" />
        </Col>
      </Row>
    </Grid>
  </GreenLiteBackground>
);

export default ({ ...props }) => {
  return (
    <>
      {props.data.primary.layout === "green_background" && (
        <LayoutGreenBg dangerouslySetInnerHTML={{ __html: props.data.primary.paragraph.text }} />
      )}
      {props.data.primary.layout === "blue" && (
        <LayoutBlueBg dangerouslySetInnerHTML={{ __html: props.data.primary.paragraph.text }} />
      )}

      {props.data.primary.layout === "green_lite_backgroud_image" && <GreenLiteBackgroudImage props={props} />}
      {props.data.primary.layout === "white_backgroud_image" && <WhiteBackgroudImage props={props} />}
      {(props.data.primary.layout === "default" || !props.data.primary.layout) && (
        <>
          {props.data.primary.grid_size === "Medium" ? (
            <GridMedium>
              <Content props={props} />
            </GridMedium>
          ) : (
            <Grid>
              <Content props={props} />
            </Grid>
          )}
        </>
      )}
    </>
  );
};

export const query = graphql`
  fragment paragraphFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainParagraph {
          slice_type
          primary {
            layout
            grid_size
            text_align
            picture_position
            picture {
              url
            }
            picture_width_percent
            picture {
              fluid(maxWidth: 200) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }
            paragraph {
              html
              text
            }
          }
        }
      }
    }
  }
`;
