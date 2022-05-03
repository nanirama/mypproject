import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Testimonials from ".";

const stories = storiesOf("Social Proof/KPI + Youtube Video", module);

stories.add("Default", () => {
  const data = {
    primary: {
      youtube_id: "DTxAdIHYVMs",
      logo: {
        url:
          "https://images.prismic.io/showcase-dev/4db67a8ba56501eff3f2c236b93f676cb4782c65_viva_technology_logo.jpg?auto=compress,format"
      },
      link_anchor: "Lear More",
      body_quote: { text: "How 92% of exhibitors at Viva Technology used Swapcard to collect leads." }
    },
    items: [
      {
        number: "100,00",
        number_label: "visitors"
      },
      {
        number: "100,00",
        number_label: "visitors"
      }
    ]
  };

  return <Testimonials data={data} />;
});
