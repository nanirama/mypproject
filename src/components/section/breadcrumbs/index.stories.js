import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Breadcrumbs from ".";

const stories = storiesOf("Blocs/Breadcrumbs", module);

stories.add("Default", () => {
  const data = {
    items: [
      {
        step: "Step 1"
      },
      {
        step: "Step 2"
      },
      {
        current: "Yes",
        step: "Step 3"
      },
      {
        step: "Step 4"
      }
    ]
  };
  return <Breadcrumbs data={data} />;
});
