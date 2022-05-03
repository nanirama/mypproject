import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import TabsVertical from ".";

const stories = storiesOf("Vertical Tabs", module);

stories.add("Default", () => {
  const data = {
    primary: {},
    items: [
      {
        zoom_image1: 0,
        title: {
          text: "Networking"
        },
        subtitle: {
          text:
            "Swapcard’s solutions work for both virtual and physical events, so you can use the same platform no matter the weather: for current and future events!"
        },
        screenshots: {
          fluid: {
            src:
              "https://www.swapcard.com/static/cf52a1b860bd44020db45c965de13cdc/55e9a/1cbd240de9f8b5fc2383614a0bf5b6275e5b247b_2_networking_made_easy.png"
          }
        }
      },
      {
        zoom_image1: 0,
        title: {
          text: "Networking"
        },
        subtitle: {
          text:
            "Swapcard’s solutions work for both virtual and physical events, so you can use the same platform no matter the weather: for current and future events!"
        },
        screenshots: {
          fluid: {
            src:
              "https://www.swapcard.com/static/cf52a1b860bd44020db45c965de13cdc/55e9a/1cbd240de9f8b5fc2383614a0bf5b6275e5b247b_2_networking_made_easy.png"
          }
        }
      }
    ]
  };
  return <TabsVertical data={data} />;
});
