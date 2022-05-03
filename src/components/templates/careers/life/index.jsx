import React from "react";
import { Grid } from "react-flexbox-grid";
import { Body, Typo2, Typo3 } from "../../../typographie";
import styled, { css } from "styled-components";
import { replaceColor } from "../../../utils/helper";
import { Margin } from "styled-components-spacing";
import { SocialIcon } from "react-social-icons";
import { media } from "../../../utils/style-utils";

import Office from "../../../../assets/images/careers/1.jpg";
// import Justine from "../../../../assets/images/careers/4.jpg";
import Team from "../../../../assets/images/careers/3.jpg";

import Theo from "../../../../assets/images/careers/9.jpg";
// import Martell from "../../../../assets/images/careers/10.jpeg";

import Team3 from "../../../../assets/images/careers/20.jpg";
import Team4 from "../../../../assets/images/careers/21.jpg";
import ItalieHome from "../../../../assets/images/careers/2_1.jpg";
import GreceeBateau from "../../../../assets/images/careers/2_2.jpg";
import ItalieBabyFoot from "../../../../assets/images/careers/2_3.jpg";
import PartyYannDamienMartell from "../../../../assets/images/careers/2_4.jpg";
import ItalieOutsideDinner from "../../../../assets/images/careers/2_5.jpg";
// import Vincent from "../../../../assets/images/careers/14.jpg";

export const LifeHeader = styled.div`
  background: ${props => props.theme.color.primary};
  color: #fff;
  padding: 25px 0;
  font-weight: 700;
  text-align: center;
  font-size: ${props => props.theme.fontSize.typo3};
`;

export const LifeContent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 20px;
  background: #f9f9f9;
  flex-direction: column;
`;

export const LifePicture = styled.div`
  background-image: url(${props => props.bg});
  width: 100%;
  height: 380px;
  background-position: center center;
  background-size: cover;
  position: relative;
  ${props =>
    props.triangle &&
    css`
      &:after {
        content: " ";
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        top: 50%;
        border-left: 20px solid #fff;
        position: absolute;
      }
    `};
`;

export const FlexItem = styled.div`
  flex: 100%;
  ${media.tablet`
  flex: ${props => props.xs};
  `};
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SocialIconWrapper = styled.div`
  a {
    height: 40px !important;
    margin-left: 15px;
    width: 40px !important;
  }
`;

export const QuoteName = styled.div`
  margin-top: 10px;
  font-style: italic;
`;

export const FlexSocial = styled.div``;

export default ({ data }) => (
  <React.Fragment>
    <Grid>
      <Flex>
        <FlexItem xs={12}>
          <LifeHeader>{data.life_at_swapcard1}</LifeHeader>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem xs={4}>
          <LifeContent>
            <Margin bottom={3}>
              <Typo3
                bold
                dangerouslySetInnerHTML={{
                  __html: data.life_at_swapcard[0].title.text
                }}
              />
            </Margin>
            <Body>{data.life_at_swapcard[0].content.text}</Body>
          </LifeContent>
        </FlexItem>
        <FlexItem xs={4}>
          <LifePicture bg={Office} />
        </FlexItem>
        <FlexItem xs={4}>
          <LifePicture bg={Team3} />
        </FlexItem>
      </Flex>

      <Flex>
        {/* <FlexItem xs={8}>
          <LifePicture bg={Team} />
        </FlexItem> */}
        <FlexItem xs={8}>
          <LifePicture bg={ItalieHome} />
        </FlexItem>
        {/* <FlexItem xs={4}>
          <LifePicture bg={GreceeBateau} />
        </FlexItem> */}

        <FlexItem xs={4}>
          <LifeContent>
            <Margin bottom={3}>
              <Typo3
                bold
                dangerouslySetInnerHTML={{
                  __html: data.life_at_swapcard[1].title.text
                }}
              />
            </Margin>
            <Body>{data.life_at_swapcard[1].content.text}</Body>
          </LifeContent>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem xs={4}>
          <LifePicture bg={PartyYannDamienMartell} />
        </FlexItem>

        <FlexItem xs={4}>
          <LifeContent>
            <Margin bottom={3}>
              <Typo3
                bold
                dangerouslySetInnerHTML={{
                  __html: data.life_at_swapcard[2].title.text
                }}
              />
            </Margin>
            <Body>{data.life_at_swapcard[2].content.text}</Body>
          </LifeContent>
        </FlexItem>

        <FlexItem xs={4}>
          <LifePicture bg={ItalieBabyFoot} />
        </FlexItem>
      </Flex>

      <Flex>
        <FlexItem xs={4}>
          <LifeContent>
            <Margin bottom={3}>
              <Typo2
                dangerouslySetInnerHTML={{
                  __html: replaceColor(data.find_us)
                }}
              />
            </Margin>
            <FlexSocial>
              <SocialIconWrapper>
                <SocialIcon url="http://facebook.com/swapcard" />
                <SocialIcon url="http://twitter.com/swapcard" />
                <SocialIcon url="https://www.youtube.com/swapcard" />
                <SocialIcon url="http://linkedin.com/company/swapcard" />
                <SocialIcon url="http://instagram.com/swapcard" />
              </SocialIconWrapper>
            </FlexSocial>
          </LifeContent>
        </FlexItem>
        <FlexItem xs={8}>
          <LifePicture bg={Team} />
        </FlexItem>
        {/* <FlexItem xs={4}>
          <LifePicture bg={Team4} />
        </FlexItem>
        <FlexItem xs={4}>
          <LifePicture bg={Founder} />
        </FlexItem> */}
      </Flex>

      <Flex>
        <FlexItem xs={4}>
          <LifePicture bg={ItalieOutsideDinner} />
        </FlexItem>
        <FlexItem xs={4}>
          <LifePicture bg={Theo} />
        </FlexItem>
        <FlexItem xs={4}>
          <LifeContent>
            <Margin bottom={3}>
              <Typo3
                bold
                dangerouslySetInnerHTML={{
                  __html: data.life_at_swapcard[3].title.text
                }}
              />
            </Margin>
            <Body>{data.life_at_swapcard[3].content.text}</Body>
          </LifeContent>
        </FlexItem>
      </Flex>

      <Flex>
        <FlexItem xs={4}>
          <LifePicture bg={GreceeBateau} />
        </FlexItem>

        <FlexItem xs={4}>
          <LifeContent>
            <Body>{data.life_at_swapcard[4].content.text}</Body>
            <QuoteName>{data.life_at_swapcard[4].title.text}</QuoteName>
          </LifeContent>
        </FlexItem>

        <FlexItem xs={4}>
          <LifePicture bg={Team4} />
        </FlexItem>
      </Flex>
    </Grid>
  </React.Fragment>
);
