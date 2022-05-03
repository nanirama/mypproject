import React from "react";
import Image from "gatsby-image";

export default ({ data }) => <>{data.primary.full_image.fluid && <Image fluid={data.primary.full_image.fluid} />}</>;
