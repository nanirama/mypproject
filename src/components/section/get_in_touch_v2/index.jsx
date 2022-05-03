import React from "react";
import { ButtonSecondary, ButtonCustom } from "../../button";
import {
  StyledGetInTouch,
  StyledGetInTouchBody,
  StyledBody,
  GetInTouchSecondary,
  StyledGetInTouchCustom,
} from "./styled";
import { Margin } from "styled-components-spacing";
import { exportLocale } from "../../../localization";
import MixpanelHelper from "../../utils/segment";
import TrackingNaming from "../../../localization/tracking.json";
import { graphql } from "gatsby";
// import SMSForm from "../hero/sms";
import { LinkInternal } from "../../utils/link";
import { SpaceH } from "../../space";

export default ({ data, lang, route }) => (
  <React.Fragment>
    {route === "gulfood" ? (
      <StyledGetInTouchCustom customColor="#000">
        <StyledGetInTouchBody
          dangerouslySetInnerHTML={{
            __html: data.primary.title?.text || data.primary.title_alt?.text,
          }}
        />
        <SpaceH of={30} />
        <div onClick={() => (window.location.hash = "#tool")}>
          <ButtonCustom size={"big"} bg={"#de0125"}>
            {data.primary.custom_label}
          </ButtonCustom>
        </div>
      </StyledGetInTouchCustom>
    ) : (
      <StyledGetInTouch customColor={data.primary.custom_background_color}>
        {(typeof data.primary.title !== "undefined" || typeof data.primary.title_alt?.text !== "undefined") && (
          // <StyledGetInTouchBody>{data.primary.title.text}</StyledGetInTouchBody>
          <StyledGetInTouchBody
            dangerouslySetInnerHTML={{
              __html: data.primary.title?.text || data.primary.title_alt?.text,
            }}
          />
        )}
        {typeof data.primary.body1 !== "undefined" && typeof data.primary.body1 !== "undefined" && (
          <Margin top={4}>
            <StyledBody>{data.primary.body1.text}</StyledBody>
          </Margin>
        )}
        <Margin top={4}>
          {data.primary.button_type === "Contact form" && (
            <MixpanelHelper
              analytics-location="Get in touch"
              // analytics-category={TrackingNaming["Contact us"]}
              analytics-label={exportLocale(lang).getInTouch.Contact_us.button}
            >
              <ButtonSecondary size={"big"} to={exportLocale(lang).getInTouch.Contact_us.to}>
                {exportLocale(lang).getInTouch.Contact_us.button}
              </ButtonSecondary>
            </MixpanelHelper>
          )}
          {data.primary.button_type === "Demo request" && (
            <MixpanelHelper
              analytics-location="Get in touch"
              // analytics-category={TrackingNaming["Request demo"]}
              analytics-label={exportLocale(lang).getInTouch.Request_demo.button}
            >
              <ButtonSecondary size={"big"} to={exportLocale(lang).getInTouch.Request_demo.to}>
                {exportLocale(lang).getInTouch.Request_demo.button}
              </ButtonSecondary>
            </MixpanelHelper>
          )}

          {/* {data.primary.button_type === "Support link attendees" && (
          <ButtonSecondary to={exportLocale(lang).getInTouch.Support_link_attendees.to}>
            {exportLocale(lang).getInTouch.Support_link_attendees.button}
          </ButtonSecondary>
        )}

        {data.primary.button_type === "Support link exhibitors" && (
          <ButtonSecondary to={exportLocale(lang).getInTouch.Support_link_exhibitors.to}>
            {exportLocale(lang).getInTouch.Support_link_exhibitors.button}
          </ButtonSecondary>
        )} */}

          {data.primary.button_type === "Free" && (
            <MixpanelHelper
              analytics-location="Get in touch"
              analytics-category={"CTA Free Label And Link"}
              analytics-label={data.primary.custom_label}
            >
              <ButtonSecondary
                size={"big"}
                to={LinkInternal(data.primary.custom_link_v2, data.primary.custom_link, lang)}
              >
                {data.primary.custom_label}
              </ButtonSecondary>
            </MixpanelHelper>
          )}
        </Margin>
        <div style={{ display: "block" }}>
          <Margin top={4}>
            {data.primary.second_button === "Get started" && (
              <span style={{ color: "#FFF" }}>
                {exportLocale(lang).getInTouch.getStarted.or}&nbsp;
                <GetInTouchSecondary to={exportLocale(lang).getInTouch.getStarted.to}>
                  {exportLocale(lang).getInTouch.getStarted.button}
                </GetInTouchSecondary>
              </span>
            )}
            {data.primary.second_button === "Secondary Free Button" && (
              <span style={{ color: "#FFF" }}>
                <MixpanelHelper
                  analytics-location="Get in touch"
                  analytics-category={"CTA Free Label And Link"}
                  analytics-label={data.primary.secondary_free_label}
                >
                  {exportLocale(lang).getInTouch.getStarted.or}&nbsp;
                  <GetInTouchSecondary to={LinkInternal(data.primary.secondary_free_link, null, lang)}>
                    {data.primary.secondary_free_label}
                  </GetInTouchSecondary>
                </MixpanelHelper>
              </span>
            )}
          </Margin>
        </div>
      </StyledGetInTouch>
    )}
  </React.Fragment>
);

export const query = graphql`
  fragment getInTouch2Fragment on PrismicTemplate1 {
    data {
      bodyMain {
        ... on PrismicTemplate1BodyMainGetInTouchV2 {
          slice_type
          primary {
            title {
              text
            }
            body1 {
              text
            }

            custom_link_v2 {
              link_type
              url
            }

            secondary_free_label
            secondary_free_link {
              link_type
              url
            }

            button_type
            theme
            custom_background_color
            margin
            custom_link
            custom_label
            second_button
          }
        }
      }
    }
  }

  fragment getInTouch2Fragment2 on PrismicTemplate2 {
    data {
      bodyMain {
        ... on PrismicTemplate2BodyMain5GetInTouch {
          slice_type
          primary {
            title_alt: title {
              text
            }
            body1 {
              text
            }

            custom_link_v2 {
              link_type
              url
            }

            secondary_free_label
            secondary_free_link {
              link_type
              url
            }

            button_type
            theme
            margin
            custom_link
            custom_label
            second_button
          }
        }
      }
    }
  }
`;
