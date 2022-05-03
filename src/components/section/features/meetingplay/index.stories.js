import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import MeetingPlay from ".";

const stories = storiesOf("Features/Meetingplay", module);

stories.add("Default", () => {
  const data = {
    primary: {
      grey_background: boolean("Grey Background", false),
      title_meetingplay: text("Title", "Awesome feature")
    },
    items: [
      {
        picto: "icons8-schedule",
        feature: "Networking"
      },
      {
        picto: "icons8-schedule",
        feature: "Networking"
      },
      {
        picto: "icons8-schedule",
        feature: "Networking"
      },
      {
        picto: "icons8-schedule",
        feature: "Networking"
      }
    ]
  };
  return <MeetingPlay data={data} />;
});
