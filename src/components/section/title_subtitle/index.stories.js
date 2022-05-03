import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Title from ".";

const stories = storiesOf("Texts/Title", module).addDecorator(withKnobs);

stories.add("Default", () => {
  const data = {
    primary: {
      title: {
        text: text("Title", "Event app, meetings and lead capturing in one platform")
      },
      subtitle: {
        text: text("Sub Title", "Event app, meetings and lead capturing in one platform")
      },
      font_size: select(
        "Size",
        {
          "Size 1": "Size 1",
          "Size 46px": "Size 46px",
          "Size 2": "Size 2",
          "Size 3": "Size 3",
          "Size 4": "Size 4",
          "Size 5": "Size 5"
        },
        "Size 1"
      ),
      new: select("New", { Yes: "Yes", No: "No" }, "No"),
      divider_title: select("Divider", { Yes: "Yes", No: "No" }, "No"),
      background_odd: select("Background Odd", { Yes: "Yes", No: "No" }, "No"),
      back_link: null
    }
  };
  return <Title data={data} />;
});
