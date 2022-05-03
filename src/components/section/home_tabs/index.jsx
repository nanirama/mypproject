import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { graphql } from "gatsby";
import Img from "../../image";
// import { StyledTabs, TitleTabs, TabMobile } from "./styled";
import { Typo4, Body, Typo2, Small } from "../../typographie";
import { Margin } from "styled-components-spacing";
import { media } from "../../utils/style-utils";
import styled, { css } from "styled-components";
import { withTheme } from "styled-components";
// import "../../picto";
import Icon from "../../icon";

export const WrapperContent = styled.div`
  ${props =>
    props.direction === "Right" &&
    css`
      /* padding-right: 40px; */
    `};
`;

export const ImageWrapperTiny = styled.div`
  text-align: center;
  img {
    width: 450px;
    border-radius: 10px;
    overflow: none;
  }
  ${media.tablet`
  text-align: ${props => (props.direction === "Right" ? "left" : "right")};
  img {
    width:470px;
  }
  `}
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  ${media.tablet`
    margin:40px 0 0 0;
    flex-direction:row;
  `};
`;

export const ImageWrapper = styled.div`
  ${media.desktop`
    width:${props => props.zoom}%;
  `};

  ${props =>
    props.direction === "Right" &&
    css`
      ${media.desktop`
      margin-left: -${props => props.offset}px;
      `};
    `};

  ${props =>
    props.direction === "Left" &&
    css`
      ${media.desktop`
      margin-left: 50px;
      `};
    `};
`;

export const ColOrder = styled(Col)`
 ${media.tablet`
  order: ${props => props.order};
  `}
  /* ${media.tablet`
    order:1;
  `}; */
`;

export const VerticalImage = ({ ...props }) => {
  let propsOrderCol1 = {};
  let propsOrderCol2 = {};

  if (props.data.primary.position === "Left") {
    propsOrderCol1 = {
      order: 1,
      md: 6,
      xs: 12
    };

    propsOrderCol2 = {
      order: 2,
      md: 6,
      xs: 12
    };
  }

  if (props.data.primary.position === "Right") {
    propsOrderCol1 = {
      order: 3,
      md: 6,
      xs: 12
    };

    propsOrderCol2 = {
      order: 1,
      md: 6,
      xs: 12
    };
  }

  return (
    <React.Fragment>
      <Grid>
        <Row middle="xs" center="xs" start="md">
          <ColOrder {...propsOrderCol1}>
            <WrapperContent direction={props.data.primary.position}>
              <Margin bottom={4}>
                <Small>{props.data.primary.feature.text}</Small>
                <Margin bottom={1}>
                  <Typo2 color={props.theme.color.secondary_button}>{props.data.primary.title.text}</Typo2>
                </Margin>
                <Body>{props.data.primary.subtitle.text}</Body>
              </Margin>

              {props.data.items.map((items, index) => (
                <Items key={index}>
                  <Icon className={items.picto_class} />
                  <Margin left={{ xs: "0", md: "4" }} top={{ xs: "4", md: "0" }}>
                    <Typo4 bold>{items.item}</Typo4>
                  </Margin>
                </Items>
              ))}
            </WrapperContent>
          </ColOrder>
          <ColOrder {...propsOrderCol2}>
            {props.data.primary.screen_size === "big" && (
              <ImageWrapper
                zoom={props.data.primary.zoom_image}
                offset={props.data.primary.offset_image}
                direction={props.data.primary.position}
              >
                {props.data.primary.screen.fluid ? (
                  <Img
                    className="img-responsive"
                    fluidImage={props.data.primary.screen}
                    src={props.data.primary.screen.fluid.src}
                  />
                ) : (
                  <h1>Image missing</h1>
                )}

                {/* <img className="img-responsive" src={props.data.primary.screen.fluid.src} /> */}
              </ImageWrapper>
            )}
            {props.data.primary.screen.home !== null && props.data.primary.screen_size !== "big" && (
              <ImageWrapperTiny direction={props.data.primary.position}>
                <img className="img-responsive" alt="" src={props.data.primary.screen.thumbnails.home.src} />
              </ImageWrapperTiny>
            )}
          </ColOrder>
        </Row>
      </Grid>
    </React.Fragment>
  );
};

export default withTheme(VerticalImage);

export const query = graphql`
  fragment textVertical on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainV2LeftTextImages {
          slice_type
          primary {
            title {
              text
            }
            subtitle {
              text
            }
            screen {
              fluid(maxWidth: 1200, srcSetBreakpoints: [200, 340, 520, 890]) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
              thumbnails {
                home {
                  fluid(maxWidth: 1100) {
                    ...GatsbyPrismicImageFluid_noBase64
                    src
                  }
                  url
                }
              }
            }
            screen_size

            zoom_image
            position
            offset_image
            feature {
              text
            }
          }
          items {
            picto_class
            item
          }
        }
      }
    }
  }
`;
