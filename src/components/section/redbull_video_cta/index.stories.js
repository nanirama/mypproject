import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import RedBullVideo from ".";

const stories = storiesOf("Blocs/Red Bull Video", module);

stories.add("Default", () => {
  const data = {
    primary: {},
    items: [
      {
        youtube_id: "WO43XZ1zXBg",
        introduction: {
          text:
            "Discover how Step Conference used Swapcard to offer their attendees a dynamic and personalized event experience"
        },
        logo: {
          url:
            "https://images.prismic.io/showcase-dev/096d6054c729eb237f367e86e8cd7c7a6c0b3983_stepconf_logo.png?auto=compress,format"
        },
        case_link: "/",
        case_anchor: "Watch the case study"
      }
    ]
  };

  return <RedBullVideo data={data} />;
});
