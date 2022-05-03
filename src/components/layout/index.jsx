import React, { useState, useEffect } from "react";
import { theme, GlobalStyle } from "./_config";
import PictoStyle from "../picto";
import { ThemeProvider } from "styled-components";
import NavBar from "./navigation";
import Footer from "./footer";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Route from "../../localization";
import CookieBanner from "../cookie_v2";
import HeaderTiny from "./tiny_menu/header";
// import CoronaBanner from "../corona";
// import AttendeesBar from "./attendees";
import "animate.css/animate.compat.css";
import NavigationSub from "./navigation_sub";
import { getUser } from "../../HOC/auth";
import "../picto";
import ExhibitorsBanner from "../section/exhibitors_banner";
import Avolio from "./avolio";
import ExhibitorPopup from "../section/exhibitor_popup";

export default ({ ...props }) => {
  const [openCookieModal, setOpenCookieModal] = useState(false);

  useEffect(() => {
    async function user() {
      if (typeof window.Intercom !== "undefined") {
        const userInfo = await getUser();
        if (userInfo && userInfo.exibitiors && userInfo.exibitiors.nodes && userInfo.exibitiors.nodes.length > 0) {
          const name = userInfo.exibitiors.nodes[0].name;
          const event_title = userInfo.exibitiors.nodes[0].event.title;
          // window.Intercom("update", {
          //   exhibitors_company_name: name,
          //   event_title_attending: event_title,
          //   user_id: userInfo.me.user._id,
          //   email: userInfo.me.user.primaryEmail,
          //   name: userInfo.me.user.firstName,
          // });
        }
      }
    }
    user();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PictoStyle />
      <React.Fragment>
        <Helmet
          htmlAttributes={{
            lang: props.pageContext.lang,
          }}
        >
          <title>{props.pageContext.meta_title}</title>
          <meta name="description" content={props.pageContext.meta_description} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta property="og:title" content={props.pageContext.meta_title} />
          <meta property="og:description" content={props.pageContext.meta_description} />

          {props.seoImage && <meta name="image" content={props.seoImage} />}

          <link
            rel="canonical"
            href={`https://www.swapcard.com${Route[props.pageContext.lang][props.pageContext.route]}`}
          />

          {/* {props.hideOGImage !== true && (
            <meta property="og:image" content="https://www.swapcard.com/swapcard-2021.png" />
          )} */}

          {props.seoImage ? (
            <meta name="og:image" content={props.seoImage} />
          ) : (
            <meta property="og:image" content="https://www.swapcard.com/swapcard-2021.png" />
          )}

          {Route["fr-fr"][props.pageContext.route] !== undefined &&
            Route["en-us"][props.pageContext.route] !== undefined && (
              <link
                rel="alternate"
                href={"https://www.swapcard.com" + Route["en-us"][props.pageContext.route]}
                hreflang="en"
              />
            )}
          {Route["fr-fr"][props.pageContext.route] !== undefined &&
            Route["en-us"][props.pageContext.route] !== undefined && (
              <link
                rel="alternate"
                href={"https://www.swapcard.com" + Route["fr-fr"][props.pageContext.route]}
                hreflang="fr-fr"
              />
            )}
          {Route["it-it"][props.pageContext.route] !== undefined &&
            Route["en-us"][props.pageContext.route] !== undefined && (
              <link
                rel="alternate"
                href={"https://www.swapcard.com" + Route["it-it"][props.pageContext.route]}
                hreflang="it-it"
              />
            )}
        </Helmet>
        <span route={props.pageContext.route} id="route" />
        <span lang={props.pageContext.lang} id="lang" />
        {/* {props.pageContext.showNavigation !== "contentOnly" && props.pageContext.showNavigation !== "tinyMenu" && (
          <Avolio />
        )} */}
        {props.pageContext.showNavigation === "tinyMenu" && <HeaderTiny lang={props.pageContext.lang} />}

        {/* <ExhibitorsBanner lang={props.pageContext.lang} route={props.pageContext.route} /> */}
        {/* {props.pageContext.showNavigation !== "contentOnly" && props.pageContext.showNavigation !== "tinyMenu" && (
          <ExhibitorPopup lang={props.pageContext.lang} route={props.pageContext.route} />
        )} */}

        {props.pageContext.route !== "gulfood" && (
          <CookieBanner
            t={props.dataNavigation.data}
            openCookieModal={openCookieModal}
            setOpenCookieModal={setOpenCookieModal}
          />
        )}
        {/* {props.pageContext.route !== "exhibitors" &&
            props.pageContext.showNavigation !== "contentOnly" &&
            this.state.showAttendeesBar && <AttendeesBar t={props.dataNavigation.data} />} */}
        {props.pageContext.showNavigation !== "contentOnly" && props.pageContext.showNavigation !== "tinyMenu" && (
          <NavigationSub t={props.dataNavigation.data} route={props.pageContext.route} lang={props.pageContext.lang} />
        )}

        {props.pageContext.showNavigation !== "contentOnly" && props.pageContext.showNavigation !== "tinyMenu" && (
          <NavBar
            lang={props.pageContext.lang}
            menu_color={props.pageContext.menu_color}
            t={props.dataNavigation.data}
            route={props.pageContext.route}
          />
        )}

        <React.Fragment>{props.children}</React.Fragment>
        {props.pageContext.showNavigation !== "contentOnly" && props.pageContext.showNavigation !== "tinyMenu" && (
          <Footer
            lang={props.pageContext.lang}
            openCookieModal={openCookieModal}
            setOpenCookieModal={setOpenCookieModal}
            t={props.dataNavigation.data}
            route={props.pageContext.route}
          />
        )}
        {/* <CookieBanner t={props.dataNavigation.data} lang={props.pageContext.lang} /> */}
        {/*<CoronaBanner t={props.dataNavigation.data} lang={props.pageContext.lang} />*/}
      </React.Fragment>
    </ThemeProvider>
  );
};

export const query = graphql`
  fragment genericData on PrismicTranslate {
    data {
      body1 {
        ... on PrismicTranslateBody1NavigationItem {
          primary {
            navigation {
              text
            }

            navigation_main_link
          }
          items {
            new
            navigation_item
            navigation_subtitle
            navigation_link

            navigation_link_v2 {
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
          }
        }
      }
      body2 {
        ... on PrismicTranslateBody2Footer {
          primary {
            title_footer
          }
          items {
            link_anchor
            link_slug

            link_slug_v2 {
              target
              link_type

              document {
                ... on PrismicDemo {
                  id
                  data {
                    body {
                      ... on PrismicDemoBodyMeta {
                        id
                        primary {
                          route
                        }
                      }
                    }
                  }
                }

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
          }
        }
      }
      login
      pricing
      cta
      is_attendee_
      link_anchor
      link_slug

      corona_title
      corona_texts
      corona_cta

      lang_1
      lang_2
      lang_3
      lang_1_route
      lang_2_route
      lang_3_route

      lang_current

      login_as

      tab_consent
      consent_title
      consent_desc
      details_title
      details_desc
      tab_about
      tab_details
      about_title
      about_desc {
        html
      }
      button_accept_all
      button_refuse_all
      button_personalize
      button_authorize

      notifications_title
      notification_plan_building_header
      notification_plan_building_subheader
      notification_plan_building_link

      login_attendees_exhibitors_title
      login_attendees_exhibitors_body
      login_organizers_title
      login_organizers_body

      attendees_login
      organizer_login

      organizer_login

      contact

      knowledge_center
      legal_terms_of_use
      legal_privacy_policy
      cookie_banner_cta
      cookie_banner

      legal_cookie
      cookie_cta_success
    }
  }
`;
