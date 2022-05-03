import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Form from "./form";

const stories = storiesOf("Landing", module);

stories.add("Form", () => {
  const data = {
    primary: {
      background_odd: boolean("Background Odd", false),
      hubspot_id: "2ac0f7d4-d563-4dee-9081-0266a556457b",
      hubspot_dev_id: "2ac0f7d4-d563-4dee-9081-0266a556457b"
    }
  };
  return <Form data={data} />;
});
