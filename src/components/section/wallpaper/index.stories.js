import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Wallpaper from ".";

const stories = storiesOf("Texts/Wallpaper", module).addDecorator(withKnobs);

stories.add("Default", () => {
  const data = {
    primary: {
      picture: { fluid: { src: "https://iphonesoft.fr/images/_082019/fond-ecran-dynamique-macos-wallpaper-club.jpg" } },
      title: {
        text: text("Title", "Networking is the #1")
      }
    }
  };
  return <Wallpaper data={data} />;
});
