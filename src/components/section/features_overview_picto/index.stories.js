import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import FeaturesOverview from ".";

const stories = storiesOf("Features Overview", module).addDecorator(withKnobs);

stories.add("Default", () => {
  const data = {
    items: [
      {
        zoom_image: 120,
        picto_class: "icons8-people",
        title: {
          text: "Networking"
        },
        subtitle: {
          text: "Make sure Attendees"
        },
        screenshots: {
          url:
            "https://images.prismic.io/showcase-dev/32bc1f10f82bba1b3079c26c4e8a1b8919629885_networking.png?auto=compress,format"
        }
      },
      {
        zoom_image: 120,
        picto_class: "icons8-people",
        title: {
          text: "Networking"
        },
        subtitle: {
          text: "Make sure Attendees"
        },
        screenshots: {
          url:
            "https://images.prismic.io/showcase-dev/1f7736629b731186fc1e3430c40a8c18cadb06cc_program.png?auto=compress,format"
        }
      },
      {
        zoom_image: 120,
        picto_class: "icons8-people",
        title: {
          text: "Networking"
        },
        subtitle: {
          text: "Make sure Attendees"
        },
        screenshots: {
          url:
            "https://images.prismic.io/showcase-dev/32bc1f10f82bba1b3079c26c4e8a1b8919629885_networking.png?auto=compress,format"
        }
      },
      {
        zoom_image: 120,
        picto_class: "icons8-people",
        title: {
          text: "Networking"
        },
        subtitle: {
          text: "Make sure Attendees"
        },
        screenshots: {
          url:
            "https://images.prismic.io/showcase-dev/32bc1f10f82bba1b3079c26c4e8a1b8919629885_networking.png?auto=compress,format"
        }
      }
    ],
    primary: {}
  };
  return <FeaturesOverview data={data} />;
});
