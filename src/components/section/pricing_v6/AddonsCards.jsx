import React from "react";

import CardImg from "../../../assets/images/card-img.png";
import { CardContainer, CardImage, H2, P } from "./styled";

const AddonsSection = ({ t }) => {
  return (
    <>
      <CardContainer width={50} mw={500} mb={24}>
        <CardImage
          src={
            "https://images.prismic.io/showcase-dev/b9703be6-b9cb-493a-aef0-d5eccbef95f1_virtual-booths.png?auto=format%2Ccompress&fit=max&q=50"
          }
        />
        <H2 mt={16}>{t.addon_bloc_title_1}</H2>
        <P mt={8} align="center">
          {t.addon_bloc_content_1}
        </P>
      </CardContainer>
      <CardContainer width={50} mw={500} mb={24}>
        <CardImage
          src={
            "https://images.prismic.io/showcase-dev/610dc493-fcd3-42fc-9ebd-391c154f2336_live-stream.png?auto=format%2Ccompress&fit=max&q=50"
          }
        />
        <H2 mt={16}>{t.addon_bloc_title_2}</H2>
        <P mt={8} align="center">
          {t.addon_bloc_content_2}
        </P>
      </CardContainer>
      <CardContainer width={50} mw={500} mb={24}>
        <CardImage
          src={
            "https://images.prismic.io/showcase-dev/f6558d27-3f10-47de-9aa3-beeb1cf8c918_audience-interaction.png?auto=format%2Ccompress&fit=max&q=50"
          }
        />
        <H2 mt={16}>{t.addon_bloc_title_3}</H2>
        <P mt={8} align="center">
          {t.addon_bloc_content_3}
        </P>
      </CardContainer>
      <CardContainer width={50} mw={500} mb={24}>
        <CardImage
          src={
            "https://images.prismic.io/showcase-dev/b5f9899c-e347-444e-9b10-5f4c0c20f259_lead-capture.png?auto=format%2Ccompress&fit=max&q=50"
          }
        />
        <H2 mt={16}>{t.addon_bloc_title_4}</H2>
        <P mt={8} align="center">
          {t.addon_bloc_content_4}
        </P>
      </CardContainer>
    </>
  );
};

export default AddonsSection;
