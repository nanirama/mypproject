import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import RedBull from ".";

const stories = storiesOf("Blocs/Red Bull", module);

stories.add("Default", () => {
  const data = {
    primary: { align: "" },
    items: [
      {
        picture: {
          fluid: {
            src:
              "https://www.swapcard.com/static/9a8c73b5c5400b22a79cc3bcf3656241/a07a5/a85302158e097f6ee4d9ccb52dc71b83cd18d2f1_26177218332_ecb5581cd9_o.jpg"
          }
        },
        category: text("Category", "Conference"),
        title: {
          text: text("Title", "Step Conference")
        },
        subtitle: {
          text: text(
            "Sub Title",
            "Once a series of small gatherings, the Step organization is now the largest experiential tech festival in the Middle East."
          )
        },
        link_slug: "ok",
        link_anchor: "Read More"
      }
    ]
  };

  return <RedBull data={data} />;
});
