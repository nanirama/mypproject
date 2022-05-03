import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { Col, Row } from "react-flexbox-grid";
import Link from "../.././../utils/link";
import LogoSrc from "../../../../assets/images/Logo/LogoFINAL.svg";
import * as styled from "./styled";
import Route from "../../../../localization";
import { Typo2, Typo4, Body } from "../../../typographie";
import { SpaceH } from "../../../space";
import { analyticsTrack } from "../../../utils/segment";
import { ButtonSecondary } from "../../../button";

export default ({ data, lang }) => {
  const isClient = typeof window !== "undefined";
  useEffect(() => {
    if (isClient) window.localStorage.removeItem("package");
  }, []);
  return (
    <styled.Background>
      <styled.Container>
        <Row>
          <Col md={12}>
            <Link to={Route[lang]["pricing/build-plan"]}>
              <styled.Logo src={LogoSrc} />
            </Link>
          </Col>
        </Row>
        <Row center="xs">
          <Col md={12}>
            <styled.ContainerContent>
              <Row center="xs">
                <Col md={8}>
                  <Typo2>
                    <styled.IconChecked className="icons8-green-check-mark" /> {data.primary.congrats}
                  </Typo2>
                  <SpaceH of={30} />
                  <Typo4>{data.primary.block_1}</Typo4>
                </Col>
              </Row>
              <SpaceH of={30} />
              <Body>{data.primary.block_2}</Body>
              <SpaceH of={30} />
              <ButtonSecondary to={"https://studio.swapcard.com"}>{data.primary.cta}</ButtonSecondary>
            </styled.ContainerContent>
          </Col>
        </Row>
      </styled.Container>
    </styled.Background>
  );
};

export const query = graphql`
  fragment PricingCheckoutConfirmation on PrismicTemplate2 {
    data {
      bodyMain {
        ... on PrismicTemplate2BodyMainCheckoutConfirmation {
          slice_type
          primary {
            congrats
            block_1
            block_2
            cta
          }
        }
      }
    }
  }
`;
