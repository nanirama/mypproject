import React from "react";
import { graphql } from "gatsby";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Typo2, Typo5, Body, Typo3, Typo4 } from "../../typographie";
import { Margin } from "styled-components-spacing";
// import Icon from "../../icon";
import { replaceColor } from "../../utils/helper";
// import "../../picto";
import Link from "../../utils/link";
import styled, { withTheme } from "styled-components";
import DividerBlue from "../../utils/divider-blue";
import { exportLocale } from "../../../localization";

export const NewLabel = styled.div`
  color: #fff;
  background: ${(props) => props.theme.color.success};
  padding: 2px 10px 3px 10px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.2px;
  border-radius: 20px;
  margin-left: 10px;
`;

// export const BackArrow = styled.i`
//   transform: rotate(180deg);
//   transform-origin: center;
//   /* margin-top: 22px; */
//   font-size: 20px;
//   margin-right: 10px;
// `;

export const Typo46 = styled.div`
  font-size: 46px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Backlink = styled(Link)`
  color: ${(props) => props.theme.color.secondary};
  display: block;
  transition: 0.2s all;
  &:hover {
    /* text-decoration: underline; */
    transform: translateX(-10px);
  }
`;
// export const Icon = styled.i``;

export const TitleAndSubtitle = ({ ...props }) => {
  const title = props.data.primary?.title?.text || props.data.primary?.title_alt?.text;
  const titleCenter = props.data.primary.align_title === "center";
  const titleLeft = props.data.primary.align_title === "left";
  const colMdSize = props.data.primary.width === "medium" ? 7 : 12;
  return (
    <div
      style={{
        backgroundColor: props.data.primary.background_odd === "Yes" ? "#F9FAFC" : "",
      }}
    >
      <Grid className={props.data.primary.scroll_id} id={props.data.primary.scroll_id}>
        {/* {props.data.primary.picto_class !== null && (
        <Row center="xs">
          <Margin bottom={3}>
            <Icon
              color={props.theme.color.secondary_button}
              size={props.data.primary.picto_size}
              className={props.data.primary.picto_class}
            />
          </Margin>
        </Row>
      )} */}
        <Row center="xs">
          <Col xs={12} md={colMdSize}>
            <>
              {props.data.primary.font_size === "Size 1" && (
                <Typo2
                  dangerouslySetInnerHTML={{
                    __html: `${replaceColor(title)}`,
                  }}
                  color={
                    props.data.primary.color_title === "Secondary"
                      ? props.theme.color.secondary_button
                      : props.theme.color.primary
                  }
                  center={titleCenter}
                  left={titleLeft}
                />
              )}

              {props.data.primary.font_size === "Size 2" && (
                <Typo2
                  color={props.data.primary.color_title}
                  dangerouslySetInnerHTML={{
                    __html: `${replaceColor(props.data.primary.title.text)}`,
                  }}
                />
              )}

              {props.data.primary.font_size === "Size 46px" && (
                <>
                  <Typo46
                    color={
                      props.data.primary.color_title === "Secondary"
                        ? props.theme.color.secondary_button
                        : props.theme.color.primary
                    }
                  >
                    {props.data.primary.title.text}
                  </Typo46>
                  <Margin top={2}>
                    <Typo4>{props.data.primary.subtitle.text}</Typo4>
                  </Margin>
                </>
              )}

              {props.data.primary.font_size === "Size 3" && (
                <Typo3
                  color={props.data.primary.color_title}
                  dangerouslySetInnerHTML={{
                    __html: `${replaceColor(props.data.primary.title.text)}`,
                  }}
                />
              )}

              {props.data.primary.font_size === "Size 4" && (
                <Typo4 color={props.data.primary.color_title}>{props.data.primary.title.text}</Typo4>
              )}

              {props.data.primary.font_size === "Size 5" && (
                <Typo5 color={props.data.primary.color_title}>{props.data.primary.title.text}</Typo5>
              )}
              {typeof props.data.primary.subtitle !== "undefined" &&
                props.data.primary.subtitle.text != null &&
                props.data.primary.font_size !== "Size 46px" && (
                  <Margin top={2}>
                    <Body>{props.data.primary.subtitle.text}</Body>
                  </Margin>
                )}
            </>
          </Col>
        </Row>
        {props.data.primary.new === "Yes" && (
          <Row center="xs">
            <Margin top={2}>
              <NewLabel>
                {props.data.primary.new_label ? (
                  <>{props.data.primary.new_label}</>
                ) : (
                  <>{exportLocale(props.lang).menu.new}</>
                )}
              </NewLabel>
            </Margin>
          </Row>
        )}
        {props.data.primary.divider_title === "Yes" && (
          <Row center="xs">
            <Margin top={3}>
              <DividerBlue
                bg={
                  props.data.primary.color_title === "Secondary"
                    ? props.theme.color.secondary_button
                    : props.theme.color.primary
                }
              />
            </Margin>
          </Row>
        )}
        {props.data.primary.back_link !== null && (
          <Row center="xs">
            <Col xs={12}>
              <Margin top={3}>
                <Backlink to={props.data.primary.back_link}>
                  <i class="icons8-right-pointing-arrow-4 title-arrow"></i>&nbsp;
                  {props.data.primary.back_link_anchor}
                </Backlink>
              </Margin>
            </Col>
          </Row>
        )}
      </Grid>
    </div>
  );
};

export default withTheme(TitleAndSubtitle);

export const query = graphql`
  fragment titleAndSubtitle on PrismicTemplate1 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate1BodyMainTitleAndSubtitle {
          slice_type
          primary {
            display
            width
            back_link
            back_link_anchor
            background_odd
            scroll_id
            picto_size
            picto_class
            font_size
            color_title
            align_title
            divider_title
            new
            new_label
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
  fragment titleAndSubtitleTemplate2 on PrismicTemplate2 {
    data {
      bodyMain {
        __typename
        ... on PrismicTemplate2BodyMain1TitleAndSubtitle {
          slice_type
          primary {
            display
            back_link
            back_link_anchor
            background_odd
            scroll_id
            picto_size
            picto_class
            font_size
            color_title
            divider_title
            new
            new_label
            title_alt: title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`;
