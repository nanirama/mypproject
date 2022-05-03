import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import GetInTouch from ".";

const stories = storiesOf("Get In Touch #3", module).addDecorator(withKnobs);

stories
  .add("Default", () => {
    const data = {
      primary: {
        title: { text: text("Title", "Increase interactions at your event, with AI") },
        button_type: select(
          "Primary Button",
          { "Contact form": "Contact form", "Demo request": "Demo request", Free: "Free" },
          "Contact form"
        ),
        second_button: select(
          "Secondary Button",
          { None: "None", "Get started": "Get started", "Secondary Free Button": "Get started" },
          "Contact form"
        )
      }
    };
    return <GetInTouch data={data} />;
  })
  .add("With Sub Title", () => {
    const data = {
      primary: {
        title: { text: text("Title", "Increase interactions at your event, with AI") },
        body1: {
          text: text(
            "Sub Title",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has b"
          )
        },
        button_type: select(
          "Primary Button",
          { "Contact form": "Contact form", "Demo request": "Demo request", Free: "Free" },
          "Contact form"
        ),
        second_button: select(
          "Secondary Button",
          { None: "None", "Get started": "Get started", "Secondary Free Button": "Secondary Free Button" },
          "None"
        )
      }
    };
    return <GetInTouch data={data} />;
  })
  .add("Free CTA", () => {
    const data = {
      primary: {
        title: { text: "Get in Touch" },
        body1: { text: "Get in Touch" },
        button_type: "Free",
        custom_label: text("Custom Label", "Custom Label"),
        second_button: select(
          "Secondary Button",
          { "Get started": "Get started", "Secondary Free Button": "Secondary Free Button" },
          "Contact form"
        )
      }
    };
    return <GetInTouch data={data} />;
  });
