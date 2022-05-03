import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Navigation from ".";

const stories = storiesOf("Navigation", module);

stories.add("Default", () => {
  const data = {
    items: [
      {
        scroll_id: "1",
        title: {
          text: "Tradeshow"
        }
      },
      {
        scroll_id: "1",
        title: {
          text: "Conference"
        }
      },
      {
        scroll_id: "1",
        title: {
          text: "Congress"
        }
      }
    ]
  };

  return <Navigation data={data} />;
});
