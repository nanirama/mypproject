import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Features from ".";

const stories = storiesOf("Blocs/Zoho Features", module);

stories.add("Default", () => {
  const data = {
    items: [
      {
        picto_class: "icons8-building",
        title: {
          text: "Feature 1"
        }
      },
      {
        picto_class: "icons8-building",
        title: {
          text: "Feature 1"
        }
      },
      {
        picto_class: "icons8-building",
        title: {
          text: "Feature 1"
        }
      },
      {
        picto_class: "icons8-building",
        title: {
          text: "Feature 1"
        }
      },
      {
        picto_class: "icons8-building",
        title: {
          text: "Feature 1"
        }
      },
      {
        picto_class: "icons8-building",
        title: {
          text: "Feature 1"
        }
      }
    ]
  };
  return <Features data={data} />;
});
