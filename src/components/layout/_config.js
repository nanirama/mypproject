import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { media } from "../../components/utils/style-utils";
// import "../fonts";

export const GlobalStyle = createGlobalStyle`
${reset}

html { 
    font-size:16px;
    overflow-x:hidden;
}

body {
  color:#262F3D;
  overflow-x:hidden;
  /* font-family: "Open Sans"; */
  font-family: "sofia-pro";
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  /* line-height:1.0; */
  line-height: 1.1;
}

.img, .img-responsive {
    width:auto;
    max-width:100%;
    height:auto;
    object-fit: contain;
}

.wistia_responsive_padding {
  box-shadow:none !important;
}

.title-arrow {
  transform: rotate(180deg);
  display: inline-block;
  margin-right:0;
  line-height:0;
}

.start-md {
  /*text-align:left;*/
}

a {
  color:#777887;
  text-decoration:none;
}

b, strong {
    font-weight:600;
}

.hideMobile {
    display:none;
    ${media.tablet`
        display:block;
    `}
}

.showMobile {
    display:block;
    ${media.tablet`
        display:none;
    `} 
}

*, :after, :before {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
}

*:focus {outline:0;}

#leadinModal-390331 {
  padding-top:100px !important;
}

`;

export const theme = {
  color: {
    // primary: "#123456",
    primary: "#262F3D",
    // secondary: "#58B570",
    secondary: "#00CC88",
    secondary_button: "#00CC88",
    secondary_onhover: "#22DF88",
    grey: "#5d768b",
    body: "#777788",
    link: "#678098",
    error: "rgb(245, 90, 38);",
    success: "#00CC88",
    border: "#eee",
  },
  radius: {
    primary: "3px",
  },
  shadow: {
    primary: "0px 4.5px 6.5px 0 rgba(181,197,213,0.4)",
    secondary: "0 6px 8px 0 rgba(45, 35, 66, 0.15)",
  },
  fontSize: {
    typo1: "2.6rem",
    typo2: "36px",
    typo3: "1.4rem",
    typo4: "1.2rem",
    typo5: "1.1rem",
    title: "2.5rem",
    subTitle: "1.6rem",
    headline: "1.4rem",
    body: "1.0rem",
    small: "0.9rem",
  },
  pictoSize: {
    picto1: "1.5rem",
  },
  lineHeight: {
    body: "1.5",
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 890,
    lg: 992,
    xl: 1200,
  },
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "1rem",
    4: "1.5rem",
    5: "3rem",
    6: "3.5rem",
  },
};
