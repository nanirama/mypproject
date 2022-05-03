import React from "react";
import { graphql } from "gatsby";
import Slider from "react-slick";
import { Typo3, Body } from "../../../typographie";
import { Margin } from "styled-components-spacing";
import { WrapperTabs, SliderItem, SliderItemLeft, SliderItemRight, SliderBg } from "./styled";

const settings = {
  dots: true,
  centerMode: true,
  centerPadding: "80px",
  slidesToShow: 1,
  variableWidth: true,
  initialSlide: true,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 820,
      settings: {
        centerMode: false,
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default ({ ...props }) => (
  <React.Fragment>
    <WrapperTabs>
      <Slider {...settings}>
        {props.data.items.map((item, index) => (
          <React.Fragment key={index}>
            <SliderItem to={item.link_slug}>
              <SliderInner title={item.title.text} img={item.logo.url} body={item.subtitle.text} />
            </SliderItem>
          </React.Fragment>
        ))}
      </Slider>
    </WrapperTabs>
  </React.Fragment>
);

export const SliderInner = ({ title, img, body }) => (
  <React.Fragment>
    <SliderItemLeft>
      <Margin bottom={2}>
        <Typo3>{title}</Typo3>
      </Margin>
      <Body>{body}</Body>
    </SliderItemLeft>
    <SliderItemRight>
      <SliderBg bg={img} />
    </SliderItemRight>
  </React.Fragment>
);

export const query = graphql`
  fragment quote2Fragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainQuoteV2 {
          slice_type
          items {
            title {
              text
            }
            subtitle {
              text
            }
            logo {
              url
            }

            logo {
              fluid(maxWidth: 180) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
