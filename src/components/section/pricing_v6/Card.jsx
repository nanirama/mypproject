import React from "react";

import { CardContainerGrey, Border, CardSectionBlock, H2, P } from "./styled";

export const CardSection = ({ t }) => {
  const cardData = [
    {
      title: t.pay_as_you_go_title,
      description: t.pay_as_you_go_content,
    },
    {
      title: t.volume_discount_title,
      description: t.volume_discount_content,
    },
    {
      title: t.commit_discount,
      description: t.commit_discount_content,
    },
  ];

  return (
    <CardSectionBlock>
      <CardContainerGrey key={cardData[0].title}>
        <div>
          <H2 mb={16}>{cardData[0].title}</H2>
          <P align="center">{cardData[0].description}</P>
        </div>
      </CardContainerGrey>
      <Border />

      <CardContainerGrey key={cardData[1].title}>
        <div>
          <H2 mb={16}>{cardData[1].title}</H2>
          <P align="center">{cardData[1].description}</P>
        </div>
      </CardContainerGrey>
      <Border />

      <CardContainerGrey key={cardData[2].title}>
        <div>
          <H2 mb={16}>{cardData[2].title}</H2>
          <P align="center">{cardData[2].description}</P>
        </div>
      </CardContainerGrey>
    </CardSectionBlock>
  );
};

export default CardSection;
