import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import KPI from ".";

const stories = storiesOf("Social Proof/KPI", module).addDecorator(withKnobs);

stories
  .add("Logo Layout", () => {
    const data = {
      primary: {
        layout: "Logo"
      },
      items: [
        {
          title: {
            text: "KPI Test"
          },
          logo: {
            fluid: {
              src:
                "https://images.prismic.io/showcase-dev/62d4ebfa-4cf0-4b24-83a0-8d6a1425cd76_clarion_1.png?auto=compress%2Cformat&fit=max&w=800&h=320"
            }
          }
        }
      ]
    };
    return <KPI data={data} />;
  })
  .add("Number Layout", () => {
    const data = {
      primary: {
        layout: "Number"
      },
      items: [
        {
          picto_class: "icons8-poign-e-de-main ",
          number: "200",
          title: {
            text: "KPI Test"
          },
          logo: {
            fluid: {
              src:
                "https://images.prismic.io/showcase-dev/62d4ebfa-4cf0-4b24-83a0-8d6a1425cd76_clarion_1.png?auto=compress%2Cformat&fit=max&w=800&h=320"
            }
          }
        },
        {
          picto_class: "icons8-poign-e-de-main ",
          number: "200",
          title: {
            text: "KPI Test"
          },
          logo: {
            fluid: {
              src:
                "https://images.prismic.io/showcase-dev/62d4ebfa-4cf0-4b24-83a0-8d6a1425cd76_clarion_1.png?auto=compress%2Cformat&fit=max&w=800&h=320"
            }
          }
        }
      ]
    };
    return <KPI data={data} />;
  });
