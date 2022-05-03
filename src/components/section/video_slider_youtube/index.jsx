import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Body } from "../../typographie";
import { graphql } from "gatsby";
import Image from "gatsby-image";
const ModalVideo = typeof window !== "undefined" ? require("react-modal-video").default : "no";
import {
  WrapperTabs,
  SliderItem,
  CostumerInfo,
  CostumerLogo,
  CostumerDetails,
  CustomersVideoMiniature,
  LogoCustomers,
  ModalWrapper,
} from "./styled";

export const YoutubeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  border-radius: 10px;
  & iframe,
  & object,
  & embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const settings = {
  dots: false,
  centerPadding: "80px",
  slidesToShow: 3,
  initialSlide: true,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 820,
      settings: {
        centerMode: false,
        variableWidth: false,
        prevArrow: false,
        nextArrow: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default class VideoSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      video: null,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal = (id) => {
    this.setState({ isOpen: true, video: id });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <ModalWrapper>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            onClose={() => this.closeModal()}
            videoId={this.state.video}
          />

          <WrapperTabs>
            <Slider {...settings}>
              {this.props.data.items.map((item, index) => (
                <React.Fragment key={index}>
                  <CustomersVideoMiniature onClick={() => this.openModal(item.youtube_video_link)}>
                    <LogoCustomers>
                      <Image fixed={item.video_preview.fixed} />
                    </LogoCustomers>
                  </CustomersVideoMiniature>
                  <SliderItem>
                    <SliderInner name={item.person_name} job={item.person_job} logo={item.company_logo.fluid} />
                  </SliderItem>
                </React.Fragment>
              ))}
            </Slider>
          </WrapperTabs>
        </ModalWrapper>
      </React.Fragment>
    );
  }
}

export const SliderInner = ({ name, job, logo }) => (
  <CostumerInfo>
    <CostumerLogo src={logo.src} className="img-responsive" />

    {/* <CostumerLogo src={logo} /> */}
    <CostumerDetails>
      <Body>
        <b>{name}</b>
      </Body>
      <Body>{job}</Body>
    </CostumerDetails>
  </CostumerInfo>
);

export const query = graphql`
  fragment videoSliderFragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainVideoSlider {
          slice_type
          primary {
            display
          }
          items {
            youtube_video_link
            person_name
            person_job
            video_preview {
              fixed(width: 440, height: 275) {
                ...GatsbyPrismicImageFixed
                src
              }
            }
            company_logo {
              fluid(maxWidth: 180, maxHeight: 80) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }
          }
        }
      }
    }
  }
`;
