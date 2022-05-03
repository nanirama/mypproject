import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Integrations from ".";

const stories = storiesOf("Blocs/Integrations", module).addDecorator(withKnobs);

stories.add("Default", () => {
  const data = {
    items: [
      {
        logo: {
          url: text(
            "Image",
            "https://images.prismic.io/showcase-dev/9312743c8b4bbe06f59d144a3ef2fb75893b8667_eventbrite_logo.png?auto=compress,format"
          )
        }
      }
    ]
  };
  return <Integrations data={data} />;
});
