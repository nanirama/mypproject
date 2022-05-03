import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Benefits from ".";

const stories = storiesOf("Blocs/Benefits", module).addDecorator(withKnobs);

stories
  .add("Center Layout", () => {
    const data = {
      primary: {
        background_odd: "No",
        layouts: "Layout center picto"
      },
      items: [
        {
          picto_class: text("Picto", "icons8-heures-suppl-mentaires"),
          title: {
            text: text("Title", "Easy networking")
          },
          subtitle: {
            text: text(
              "Sub Title",
              "L'utilisation de l'outil est gratuite. Vous pouvez faire jusqu'à 25 consultations par jour. Après cela, l'inscription est également gratuite.Par la suite, une inscription gratuite est également requise."
            )
          }
        }
      ]
    };
    return <Benefits data={data} />;
  })
  .add("Left Layout", () => {
    const data = {
      primary: {
        background_odd: "No",
        layouts: "Layout left picto"
      },
      items: [
        {
          picto_class: text("Picto", "icons8-heures-suppl-mentaires"),
          title: {
            text: text("Title", "Easy networking")
          },
          subtitle: {
            text: text(
              "Sub Title",
              "L'utilisation de l'outil est gratuite. Vous pouvez faire jusqu'à 25 consultations par jour. Après cela, l'inscription est également gratuite.Par la suite, une inscription gratuite est également requise."
            )
          }
        }
      ]
    };
    return <Benefits data={data} />;
  });
