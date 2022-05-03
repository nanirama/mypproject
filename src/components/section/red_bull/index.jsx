import React from "react";
import { graphql } from "gatsby";
import { Row } from "react-flexbox-grid";
import { ColFlex } from "../../utils/grid";
import { Body } from "../../typographie";
import styled from "styled-components";
import Link, { LinkInternal } from "../../utils/link";
import Arrow from "../../../assets/images/arrow_right_green.svg";
import { GridLarge } from "../../utils/grid";

export const Picture = styled.div`
  background: url(${props => props.bg});
  width: 100%;
  height: ${props => (props.align === "Left" ? "250px" : "300px")};
  transition: all 0.5s;
  overflow: hidden;
  background-size: cover;
  background-position: center center;

  &:hover {
    /* cursor: pointer; */
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div`
  box-shadow: 0px 4.5px 6.5px 0 rgba(181, 197, 213, 0.4);
  border: 1px solid #eee;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: block;
  text-decoration: none;
  &:hover {
    cursor: ${props => (props.to !== null ? "pointer" : "default")};
  }

  &:hover ${Picture} {
    cursor: ${props => (props.to !== null ? "pointer" : "default")};
    transform: ${props => (props.to !== null ? "scale(1.1)" : "scale(1.0)")};
  }
`;

export const PictureParent = styled.div`
  height: 300px;
  height: ${props => (props.align === "Left" ? "250px" : "300px")};
  overflow: hidden;
`;

export const Story = styled.div`
  text-align: left;
  padding: 30px;
  &.hover {
    /* cursor: pointer; */
  }
`;

export const WrapperCol = styled.div`
  margin-bottom: 30px;
  width: 100%;
  padding: 0 40px;
  padding: ${props => (props.align === "Left" ? "0 20px" : "0")};
`;

export const Tag = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  color: ${props => props.theme.color.primary};
  margin-bottom: 15px;
  font-size: 14px;
`;

export const Title = styled.div`
  margin-bottom: 15px;
  color: ${props => props.theme.color.primary};
  font-weight: 700;
  font-size: ${props => props.theme.fontSize.typo3};
  text-align: ${props => (props.align ? props.align : "left")};
`;

export const ReadMore = styled.div`
  color: ${props => props.theme.color.secondary};
  margin-top: 30px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: 0.3s all;
  &:hover {
    transform: translate(10px, 0);
  }
`;

export const IconArrow = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  height: 10px;
  margin-left: 10px;
  width: 15px;
  fill: ${props => props.theme.color.secondary};
`;

export const Description = styled.div``;

export const RowCustom = styled(Row)`
  justify-content: ${props => (props.align === "Left" ? "flex-start" : "center")};
`;

export default ({ ...props }) => (
  <React.Fragment>
    <GridLarge>
      <RowCustom align={props.data.primary.align}>
        {props.data.items.map((item, index) => (
          <ColFlex md={4} xs={12} key={index}>
            <WrapperCol align={props.data.primary.align}>
              <Wrapper to={LinkInternal(item.link_slug_v2, item.link_slug, props.lang)}>
                <Link to={LinkInternal(item.link_slug_v2, item.link_slug, props.lang)}>
                  <PictureParent align={props.data.primary.align}>
                    <Picture
                      align={props.data.primary.align}
                      bg={item.picture.fluid && item.picture.fluid.src ? item.picture.fluid.src : ""}
                    />
                  </PictureParent>
                  <Story>
                    {item.category !== "TAG" && <Tag>{item.category}</Tag>}
                    {typeof item.title !== "undefined" && <Title align={item.title_align}>{item.title.text}</Title>}
                    {typeof item.subtitle !== "undefined" && <Body>{item.subtitle.text}</Body>}
                    {(item.link_slug != null || item.link_slug_v2 != null) && item.link_anchor != null && (
                      <ReadMore>
                        {item.link_anchor} <IconArrow src={Arrow} />
                      </ReadMore>
                    )}
                  </Story>
                </Link>
              </Wrapper>
            </WrapperCol>
          </ColFlex>
        ))}
      </RowCustom>
    </GridLarge>
  </React.Fragment>
);

export const query = graphql`
  fragment redBull on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainRedBullBlock {
          slice_type
          primary {
            align
          }
          items {
            category
            link_slug
            link_slug_v2 {
              target
              link_type
              document {
                ... on PrismicTemplate2 {
                  id
                  data {
                    body {
                      ... on PrismicTemplate2BodyMeta {
                        id
                        primary {
                          route
                        }
                      }
                    }
                  }
                }
                ... on PrismicTemplate1 {
                  id
                  data {
                    body {
                      ... on PrismicTemplate1BodyMeta {
                        id
                        primary {
                          route
                        }
                      }
                    }
                  }
                }
                ... on PrismicSuccessStory {
                  id
                  data {
                    body {
                      ... on PrismicSuccessStoryBodyMeta {
                        id
                        primary {
                          route
                        }
                      }
                    }
                  }
                }
              }
            }
            link_anchor
            title {
              text
            }
            subtitle {
              text
            }

            picture {
              fluid(maxWidth: 300) {
                ...GatsbyPrismicImageFluid_noBase64
                src
              }
            }

            title_align
          }
        }
      }
    }
  }
`;
