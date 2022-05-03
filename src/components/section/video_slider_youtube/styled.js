import styled from "styled-components";
import Link from "../../utils/link";
import { media } from "../../utils/style-utils";

export const ModalWrapper = styled.div`
  @keyframes modal-video {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes modal-video-inner {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, 0);
    }
  }
  .modal-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000000;
    cursor: pointer;
    opacity: 1;
    animation-timing-function: ease-out;
    animation-duration: 0.1s;
    animation-name: modal-video;
    -webkit-transition: opacity 0.3s ease-out;
    -moz-transition: opacity 0.3s ease-out;
    -ms-transition: opacity 0.3s ease-out;
    -o-transition: opacity 0.3s ease-out;
    transition: opacity 0.3s ease-out;
  }
  .modal-video-effect-exit {
    opacity: 0;
  }
  .modal-video-effect-exit .modal-video-movie-wrap {
    -webkit-transform: translate(0, 100px);
    -moz-transform: translate(0, 100px);
    -ms-transform: translate(0, 100px);
    -o-transform: translate(0, 100px);
    transform: translate(0, 100px);
  }
  .modal-video-body {
    max-width: 800px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: table;
  }
  .modal-video-inner {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }
  .modal-video-movie-wrap {
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 56.25%;
    background-color: #333;
    animation-timing-function: ease-out;
    animation-duration: 0.3s;
    animation-name: modal-video-inner;
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
    -webkit-transition: -webkit-transform 0.3s ease-out;
    -moz-transition: -moz-transform 0.3s ease-out;
    -ms-transition: -ms-transform 0.3s ease-out;
    -o-transition: -o-transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
  }
  .modal-video-movie-wrap iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .modal-video-close-btn {
    position: absolute;
    z-index: 2;
    top: -35px;
    right: -35px;
    display: inline-block;
    width: 35px;
    height: 35px;
    overflow: hidden;
    border: none;
    background: transparent;
  }
  .modal-video-close-btn:before {
    transform: rotate(45deg);
  }
  .modal-video-close-btn:after {
    transform: rotate(-45deg);
  }
  .modal-video-close-btn:before,
  .modal-video-close-btn:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #fff;
    border-radius: 5px;
    margin-top: -6px;
  }
`;

export const SliderItem = styled(Link)`
  margin: 15px 0 30px 0;
  ${media.tablet`
    width:auto;  
    height: 350;
    flex-direction:row;
  `};
`;

export const WrapperTabs = styled.div`
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-dots,
  .slick-next,
  .slick-prev {
    position: absolute;
    display: block;
    padding: 0;
  }
  .slick-dots li button:before,
  .slick-next:before,
  .slick-prev:before {
    font-family: slick;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-loading .slick-list {
    background: url(ajax-loader.gif) center center no-repeat #fff;
  }

  .slick-next,
  .slick-prev {
    font-size: 0;
    line-height: 0;
    top: 50%;
    width: 20px;
    height: 20px;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: 0;
    background: 0 0;
  }
  .slick-next:focus,
  .slick-next:hover,
  .slick-prev:focus,
  .slick-prev:hover {
    color: transparent;
    outline: 0;
    background: 0 0;
  }
  .slick-next:focus:before,
  .slick-next:hover:before,
  .slick-prev:focus:before,
  .slick-prev:hover:before {
    opacity: 1;
  }
  .slick-next.slick-disabled:before,
  .slick-prev.slick-disabled:before {
    opacity: 0.25;
  }
  .slick-next:before,
  .slick-prev:before {
    font-size: z0px;
    line-height: 1;
    opacity: 0.75;
    color: #fff;
  }
  .slick-prev {
    left: -25px;
  }
  [dir="rtl"] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: "←";
  }
  .slick-next:before,
  [dir="rtl"] .slick-prev:before {
    content: "→";
  }
  .slick-next {
    right: -25px;
  }
  [dir="rtl"] .slick-next {
    right: auto;
    left: -25px;
  }
  [dir="rtl"] .slick-next:before {
    content: "←";
  }
  .slick-dotted.slick-slider {
    margin-top: 10px;
    margin-bottom: 0;
  }
  .slick-dots {
    /* bottom: 0px;
    width: 100%; */
    margin: 0;
    list-style: none;
    text-align: center;
    /* font-size: 25px; */
    display: none;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    /* width: 70px; */
    /* height: 20px; */
    /* margin: 0 5px; */
    padding: 0;
    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    /* width: 20px; */
    /* height: 20px; */
    /* padding: 5px; */
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: 0;
    background: 0 0;
  }
  .slick-dots li button:focus,
  .slick-dots li button:hover {
    outline: 0;
  }
  .slick-dots li button:focus:before,
  .slick-dots li button:hover:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-size: 100px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    /* content: "i"; */
    text-align: center;
    opacity: 0.25;
    color: ${props => props.theme.color.secondary};
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: ${props => props.theme.color.secondary};
  }
  width: 100%;
`;

export const CostumerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  margin: 20px 30px;
  p {
    line-height: 1.2 !important;
  }
`;

export const CostumerLogo = styled.img`
  width: 140px;
  height: 40px;
  margin: 0;
`;

export const CostumerDetails = styled.div`
  color: blue;
`;
export const LogoCustomers = styled.div`
  max-width: 100%;
  max-height: 100%;
`;

export const CustomersVideoMiniature = styled.div`
  display: flex;
  margin: 20px;
  border-radius: 5px;
  overflow: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    width: 80px;
    border-radius: 500px;
    height: 80px;
    background: ${props => props.theme.color.primary};
    opacity: 0.8;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.1s all;
    content: " ";
    cursor: pointer;
  }
  &:before {
    z-index: 5;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 18px 0 18px 25px;
    border-color: transparent transparent transparent #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: " ";
  }
  &:hover:after {
    border-radius: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
`;
