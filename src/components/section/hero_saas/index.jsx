import React from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo2, Typo3, Typo5 } from "../../typographie";
import { SpaceH } from "../../space";
import styled from "styled-components";
import { Margin, Padding } from "styled-components-spacing";
import Video from "../../video";
import { ButtonPrimary, ButtonSecondary, ButtonBorderPrimary } from "../../button";
import Route from "../../../localization";
import { media } from "../../utils/style-utils";

const Typo46 = styled.div`
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${(props) => props.theme.color.secondary};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet`flex-direction:row; align-items:flex-start;`};
`;

const Subline = styled(Typo5)`
  line-height: 1.6rem;
  opacity: 0.9;
`;

const Hero = ({ ...props }) => {
  const t = props.data.primary;
  return (
    <Grid>
      <Row middle="xs">
        <Col md={5}>
          {/* <Typo46 color="#00CC88">{t.hero_video_title}</Typo46> */}
          <Typo46
            color="#00CC88"
            dangerouslySetInnerHTML={{
              __html: `${t.hero_video_title}`,
            }}
          />
          <SpaceH of={20} />
          <Subline>{t.hero_video_subline}</Subline>
          <SpaceH of={30} />
          <ButtonWrapper>
            <Margin right={{ md: 3, xs: 0 }} bottom={{ xs: 3 }}>
              <ButtonBorderPrimary size={"big"} to="https://studio.swapcard.com">
                {t.button_one_label}
              </ButtonBorderPrimary>
            </Margin>
            <div>
              <ButtonSecondary size={"big"} to={Route[props.lang]["about/contact/sales/v2"]}>
                {t.button_two_label}
              </ButtonSecondary>
            </div>
          </ButtonWrapper>
        </Col>
        <Col md={7}>
          <Video mp4={t.video_mp4.url} webm={t.video_webm.url} />
        </Col>
      </Row>
    </Grid>
  );
};

export const query = graphql`
  fragment heroSaaSFeb on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainHeroSaas {
          primary {
            button_one_label
            button_two_label
            hero_video_subline
            hero_video_title
            video_mp4 {
              url
            }
            video_webm {
              url
            }
          }
          slice_type
          slice_label
        }
      }
    }
  }
`;

export default Hero;
