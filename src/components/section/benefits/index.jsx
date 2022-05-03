import React from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Body, Typo4, Typo3 } from "../../typographie";
import { Margin } from "styled-components-spacing";
import styled from "styled-components";
import Icon from "../../icon";
import { media } from "../../utils/style-utils";
import Link from "../../utils/link";

export const ReadMore = styled(Link)`
  color: ${(props) => props.theme.color.secondary};
  margin-top: 30px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  display: flex;
  justify-content: center;
  justify-content: flex-start;
  transition: 0.3s all;
  &:hover {
    transform: translate(10px, 0);
  }
`;

export const IconArrow = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  height: 10px;
  margin-left: 10px;
  width: 15px;
  fill: ${(props) => props.theme.color.secondary};
`;

export const Wrapper = styled.div`
  width: 100%;
  /* display: flex; */
  /* align-items: ${(props) => props.direction}; */
  /* flex-direction: column; */
  margin-bottom: 20px;
  ${media.tablet`
    margin-bottom:0;
    padding: 20px 30px;
  `};
`;

export const WrapperImage = styled.div`
  text-align: left;
  margin: 0 0 30px 0;
`;

export const IconBlock = styled.div`
  background: #fff;
  border-radius: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.06), 0 7px 13px 0 rgba(0, 0, 0, 0.06);
  margin-top: 20px;
`;

export default ({ ...props }) => (
  <div
    style={{
      backgroundColor: props.data.primary.background_odd === "Yes" ? "#F9FAFC" : "",
    }}
  >
    <React.Fragment>
      {props.data.primary.layouts === "Layout center picto" && (
        <Grid>
          <Row center="xs">
            {props.data.items.map((item, index) => (
              <Col md={4} xs={12} key={index}>
                <Wrapper direction="Center">
                  <div style={{ display: "inline-block" }}>
                    <Icon className={item.picto_class} />
                  </div>
                  <Margin top={4} bottom={0}>
                    <Typo4 bold>{item.title.text}</Typo4>
                  </Margin>
                  {typeof item.subtitle !== "undefined" && (
                    <Margin top={3}>
                      <Body>{item.subtitle.text}</Body>
                    </Margin>
                  )}
                </Wrapper>
              </Col>
            ))}
          </Row>
        </Grid>
      )}
      {props.data.primary.layouts === "Layout left picto" && (
        <Grid>
          <Row>
            {props.data.items.map((item, index) => (
              <Col md={4} xs={12} key={index}>
                <Wrapper direction="Left">
                  <div style={{ display: "inline-block" }}>
                    {item && item.picture && item.picture?.fluid?.src ? (
                      <IconBlock style={{ display: "block" }}>
                        <img
                          alt=""
                          src={item.picture?.fluid?.src}
                          style={{ width: "30px", height: "30px" }}
                          className="img-responsive"
                        />
                      </IconBlock>
                    ) : (
                      <Icon className={item.picto_class} />
                    )}
                  </div>

                  <Margin top={4} bottom={0}>
                    <Typo4 bold>{item.title.text}</Typo4>
                  </Margin>
                  {typeof item.subtitle !== "undefined" && (
                    <Margin top={3}>
                      <Body>{item.subtitle.text}</Body>
                    </Margin>
                  )}
                  {typeof item.link_anchor !== "undefined" && (
                    <ReadMore to={item.link_slug}>{item.link_anchor} </ReadMore>
                  )}
                </Wrapper>
              </Col>
            ))}
          </Row>
        </Grid>
      )}
      {props.data.primary.layouts === "Layout left image" && (
        <Grid>
          <Row center="xs">
            {props.data.items.map((item, index) => (
              <Col md={4} sm={4} xs={12} key={index}>
                <Wrapper>
                  <Icon className={item.picto_class} />
                  <Margin top={4} bottom={0}>
                    <Typo4 bold>{item.title.text}</Typo4>
                  </Margin>
                  <Body>{item.subtitle.text}</Body>
                </Wrapper>
              </Col>
            ))}
          </Row>
        </Grid>
      )}
      {props.data.primary.layouts === "Layout image title" && (
        <Grid>
          <Row center="xs">
            {props.data.items.map((item, index) => (
              <Col md={3} xs={12} key={index}>
                <Wrapper direction="Center">
                  <div style={{ display: "block" }}>
                    {item && item.picture && item.picture.fluid !== "undefined" && (
                      <img alt="" src={item.picture.fluid.src} style={{ width: "80px" }} className="img-responsive" />
                    )}
                  </div>
                  <Margin top={0} bottom={0}>
                    <Typo4 bold>{item.title.text}</Typo4>
                  </Margin>
                  {typeof item.subtitle !== "undefined" && (
                    <Margin top={3}>
                      <Body>{item.subtitle.text}</Body>
                    </Margin>
                  )}
                </Wrapper>
              </Col>
            ))}
          </Row>
        </Grid>
      )}
      {props.data.primary.layouts === "Layout image title col three" && (
        <Grid>
          <Row center="xs">
            {props.data.items.map((item, index) => (
              <Col md={4} sm={4} xs={12} key={index}>
                <Wrapper direction="Center">
                  <div style={{ display: "block" }}>
                    {item && item.picture && item.picture.fluid !== "undefined" && (
                      <img
                        alt=""
                        src={item.picture.fluid.src}
                        style={{ width: "45px", height: "50px" }}
                        className="img-responsive"
                      />
                    )}
                  </div>
                  <Margin top={0} bottom={0}>
                    <Typo4 bold>{item.title.text}</Typo4>
                  </Margin>
                </Wrapper>
              </Col>
            ))}
          </Row>
        </Grid>
      )}
    </React.Fragment>
  </div>
);

export const query = graphql`
  fragment benefitsFragment on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainBenefitsGlobal {
          slice_type
          primary {
            background_odd
            layouts
          }

          items {
            picto_class
            title {
              text
            }
            picture {
              fluid(maxWidth: 1600) {
                ...GatsbyPrismicImageFluid_noBase64
              }
            }
            subtitle {
              text
            }
            link_anchor
            link_slug
          }
        }
      }
    }
  }
`;
