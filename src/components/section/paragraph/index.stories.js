import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Paragraph from ".";

const stories = storiesOf("Texts/Paragraph", module);

stories.add("Default", () => {
  const data = {
    primary: {
      paragraph: {
        html:
          "Swapcard’s solutions work for both virtual and physical events, so you can use the same platform no matter the weather: for current and future events!"
      }
    }
  };
  return <Paragraph data={data} />;
});
