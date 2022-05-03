import React from "react";
import Img from "gatsby-image";

export default ({ style, className, fluidImage, src }) => (
  <>
    {typeof fluidImage !== "undefined" && typeof fluidImage.fluid !== "undefined" ? (
      <Img style={style} className={className} fluid={fluidImage.fluid} />
    ) : (
      <img alt="" style={style} className={className} src={src} />
    )}
  </>
);
