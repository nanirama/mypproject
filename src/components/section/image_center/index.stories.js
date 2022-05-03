import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Image from ".";

const stories = storiesOf("Blocs/Image", module).addDecorator(withKnobs);

stories.add("Default", () => {
  const data = {
    primary: {
      max_width: 1000,
      picture: {
        fluid: {
          src:
            "https://images.prismic.io/showcase-dev/71b300f0-f078-4454-96b9-e23f7dcdd282_one.png?auto=compress%2Cformat&fit=max&w=2600&h=1760"
        }
      }
    }
  };
  return <Image data={data} />;
});
