import {
  analyticsTrack,
  analyticsRegister,
  analyticsSetOnce,
  analyticsRegisterOnce,
  analyticsUnRegister,
  // analyticsPeopleSet,
  analyticsPeopleSetMixpanel,
} from "./src/components/utils/segment";
import queryString from "query-string";
import { getVisitorSource } from "./src/components/utils/tracking";
import tp from "./src/localization/tracking.json";

export const onClientEntry = async () => {
  if (typeof window !== "undefined") {
    const queryParams = queryString.parse(window.location.search);

    const source = getVisitorSource();

    // window.Intercom("boot", {
    //   app_id: "yto8e5lh",
    // });

    if (source && source !== "") {
      analyticsRegister({
        [tp.properties.last_touch_attribution]: source,
      });
      analyticsPeopleSetMixpanel({ [tp.properties.last_touch_attribution]: source });
    }

    analyticsUnRegister("Lookup Id");
    analyticsUnRegister("First Touch Attribution");
    analyticsUnRegister("Last Touch Ref");
    analyticsUnRegister("First Touch Ref");

    // window.analytics.ready(function () {
    //   analyticsRegisterOnce({
    //     [tp.properties.lookup_id]: window.analytics.user().anonymousId(),
    //   });
    // });

    if (source && source !== "") {
      analyticsSetOnce({ [tp.properties.first_touch_attribution]: source });
      // analyticsRegisterOnce({ [tp.properties.first_touch_attribution]: source });
    }

    if (queryParams.ref) {
      console.log(tp.properties.last_touch_ref, queryParams.ref);
      // analyticsRegister({
      //   [tp.properties.last_touch_ref]: queryParams.ref,
      // });

      analyticsSetOnce({ [tp.properties.first_touch_ref]: queryParams.ref });
      // analyticsRegisterOnce({ [tp.properties.first_touch_ref]: queryParams.ref });
    }

    if (queryParams.utm_campaign && queryParams.utm_medium && queryParams.utm_source) {
      const { utm_medium, utm_source } = queryParams;
      if (utm_medium === "cpc" || utm_medium === "ppc" || utm_source === "adwords") {
        analyticsTrack(tp.events.ad_clicked);
      }
    }
  }
};

export const onRouteUpdate = ({ location }) => {
  // if (process.env.NODE_ENV === "development") return;
  const dataLang = document.getElementById("lang") ? document.getElementById("lang").getAttribute("lang") : "en-us";
  const dataRoute = document.getElementById("route")
    ? document.getElementById("route").getAttribute("route").toLocaleLowerCase()
    : "none";

  if (typeof window.$crisp !== "undefined")
    window.$crisp.push(["set", "session:event", ["view_page", { page: dataRoute }, "green"]]);

  analyticsRegister({
    [tp.properties.page_language]: dataLang,
    [tp.properties.page_route]: dataRoute,
  });

  if (typeof window.analytics !== "undefined")
    window.analytics.ready(function () {
      if (typeof window.ga !== "undefined")
        window.ga(function (tracker) {
          // window.$crisp.push(["set", "session:data", ["ga_client_id", tracker.get("clientId")]]);
          // analyticsRegister({ google_client_id: tracker.get("clientId") });
        });
    });

  const routeExcluded = ["about/contact", "careers", "support-form", "about/careers"];

  const pathname = location.pathname.toLowerCase();

  if (
    pathname.indexOf("/app") !== -1 ||
    pathname.indexOf("support") !== -1 ||
    pathname.indexOf("faq") !== -1 ||
    pathname.indexOf("attendees") !== -1 ||
    dataRoute.indexOf("legal") !== -1 ||
    routeExcluded.includes(dataRoute)
  ) {
    // -1 === Not Found

    // window.Intercom("update", {
    //   hide_default_launcher: true,
    // });
    console.log("===> Excluded Pages");

    if (typeof window !== undefined) {
      window.analytics.ready(function () {
        window.mixpanel.track(tp.events.page_visited, {
          [tp.properties.page_path]: location.pathname,
          [tp.properties.page_group]: "showcase",
          [tp.properties.page_language]: dataLang,
          [tp.properties.page_route]: dataRoute,
        });

        if (typeof window.twq !== "undefined") window.twq("track", "PageView");

        if (typeof window.ga !== "undefined") window.ga("send", "pageview", location.pathname);
      });
    }
  } else {
    if (typeof window._hsq !== "undefined") {
      const path = location ? location.pathname + location.search + location.hash : undefined;
      window._hsq.push(["setPath", path]);
      window._hsq.push(["trackPageView"]);
      console.log("Hubspot Push");
    }

    const track = () => {
      if (window.analytics !== undefined) {
        window.analytics.ready(function () {
          window.analytics.page(
            document.title,
            {
              [tp.properties.page_route]: dataRoute,
              [tp.properties.page_language]: dataLang,
              [tp.properties.page_group]: "showcase",
            },
            {
              Webhooks: false,
              "Amazon Lambda": false,
              Salesmachine: false,
              UserPilot: false,
            }
          );

          analyticsTrack(
            tp.events.page_visited,
            {
              [tp.properties.page_path]: location.pathname,
              [tp.properties.page_route]: dataRoute,
              [tp.properties.page_language]: dataLang,
              [tp.properties.page_group]: "showcase",
            },
            {
              Webhooks: false,
              "Amazon Lambda": false,
              UserPilot: false,
              Salesmachine: false,
            }
          );
        });
      }
    };

    if (typeof window.requestAnimationFrame === "function") {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(track);
      });
    } else {
      setTimeout(track, 32);
    }
  }

  if (typeof window.pagesense !== "undefined") {
    window.pagesense = window.pagesense || [];
    window.pagesense.push(["tagRecording", dataRoute]);
  }
  return;
};
