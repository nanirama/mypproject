import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import HomeTabs from ".";

const stories = storiesOf("Home Tabs", module).addDecorator(withKnobs);

stories
  .add("Left position", () => {
    const data = {
      primary: {
        position: "Left",
        feature: {
          text: text("Feature", "LEAD GENERATION FOR EXHIBITORS")
        },
        title: {
          text: text("Title", "Boost the ROI of your exhibitors & sponsors")
        },
        subtitle: {
          text: text("Sub Title", "Offer a tailored experience and generate qualified leads.")
        },
        screen: {
          thumbnails: {
            home: {
              src:
                "https://www.swapcard.com/static/d8bf95fbdf406d22940925926314e8a6/26c6a/f6b863f0f0b8e2904451cccebb975a9956caa04e_home_2.jpg"
            }
          },
          home: null,
          fluid: {
            src:
              "https://www.swapcard.com/static/d8bf95fbdf406d22940925926314e8a6/26c6a/f6b863f0f0b8e2904451cccebb975a9956caa04e_home_2.jpg"
          }
        },
        screen_size: "big",
        zoom_image: number("Zoom Image", 180),
        offset_image: ""
      },
      items: [
        {
          picto_class: "icons8-histogramme",
          item: "Sponsoring opportunities"
        },
        {
          picto_class: "icons8-histogramme",
          item: "Smart lead capture"
        }
      ]
    };
    return <HomeTabs data={data} />;
  })
  .add("Right position", () => {
    const data = {
      primary: {
        position: "Right",
        feature: {
          text: text("Feature", "LEAD GENERATION FOR EXHIBITORS")
        },
        title: {
          text: text("Title", "Boost the ROI of your exhibitors & sponsors")
        },
        subtitle: {
          text: text("Sub Title", "Offer a tailored experience and generate qualified leads.")
        },
        screen: {
          thumbnails: {
            home: {
              src:
                "https://www.swapcard.com/static/cf52a1b860bd44020db45c965de13cdc/55e9a/1cbd240de9f8b5fc2383614a0bf5b6275e5b247b_2_networking_made_easy.png"
            }
          },
          fluid: {
            src:
              "https://www.swapcard.com/static/cf52a1b860bd44020db45c965de13cdc/55e9a/1cbd240de9f8b5fc2383614a0bf5b6275e5b247b_2_networking_made_easy.png"
          }
        },
        screen_size: "big",
        zoom_image: number("Zoom Image", 120),
        offset_image: number("Offset Image", 150)
      },
      items: [
        {
          picto_class: "icons8-histogramme",
          item: "Sponsoring opportunities"
        },
        {
          picto_class: "icons8-histogramme",
          item: "Smart lead capture"
        }
      ]
    };
    return <HomeTabs data={data} />;
  });
