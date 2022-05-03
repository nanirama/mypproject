import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Youtube from ".";

const stories = storiesOf("Social/Youtube", module);

stories.add("Default", () => {
  const data = {
    primary: { youtube_id: "" }
  };
  return <Youtube data={data} />;
});
