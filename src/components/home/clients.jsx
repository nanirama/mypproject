import React from "react";
import Slider from "react-slick";
import { graphql } from "gatsby";
import { ClientImg } from "./styled";

const Clients = ({ data, logos }) => {
  const { items } = data;
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    speed: 3000,
    variableWidth: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
        },
      },

      {
        breakpoint: 780,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <ClientImg>
      <Slider {...settings}>
        {logos &&
          logos.map((item) => {
            return (
              <div className="client-logo">
                <img src={item.logo.fluid.src} />
              </div>
            );
          })}
      </Slider>
    </ClientImg>
  );
};
export default Clients;

export const query = graphql`
  fragment clientsLogoFragment on PrismicHomeTemplate1 {
    data {
      bodyMain {
        ... on PrismicHomeTemplate1BodyMainBrandLogos {
          id
          slice_type
          items {
            logo {
              fluid(maxWidth: 230, maxHeight: 45) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }
          }
        }
        __typename
        ... on PrismicHomeTemplate1BodyMainCustomersLogo {
          slice_type
          primary {
            animated
            crop
            logo_width
          }
          items {
            target
            logo {
              fluid(maxHeight: 200) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
              thumbnails {
                big {
                  fluid(maxHeight: 80) {
                    ...GatsbyPrismicImageFluid_noBase64
                    src
                  }
                  url
                }
              }
              thumbnails {
                auto {
                  fluid(maxWidth: 135, maxHeight: 60) {
                    ...GatsbyPrismicImageFluid_noBase64
                  }
                }
              }
              url
            }
          }
        }
      }
    }
  }
`;
