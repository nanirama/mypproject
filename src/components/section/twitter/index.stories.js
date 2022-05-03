import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Twitter from ".";

const stories = storiesOf("Social/Twitter", module);

stories.add("Default", () => {
  const data = {
    primary: {},
    items: [
      {
        tweet_id: "1239605781126729728"
      },
      {
        tweet_id: "1239667294265057280"
      }
    ]
  };
  return <Twitter data={data} />;
});
