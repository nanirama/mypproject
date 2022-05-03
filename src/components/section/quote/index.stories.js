import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import QuoteSingle from "./single";
import QuoteSlider from "./slider";

const stories = storiesOf("Social Proof/Quote", module);

stories
  .add("Layout 1", () => {
    const data = {
      items: [
        {
          quote_theme: "Theme 1",
          quote_name: text("Who", "Baptiste Boulard"),
          position: text("Position", "CEO of Swapcard"),
          quote_content: {
            text: text(
              "Quote Content",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper porttitor nulla, nec aliquet enim condimentum at. Nam id consectetur ante. Interdum "
            )
          },
          picture: {
            fluid: {
              src:
                "https://images.prismic.io/showcase-dev/b0536097866612fb6a707d0c901731a4bf69b2cb_loic_le_meur_at_the_2014_leweb_conference.jpg?auto=compress,format"
            }
          }
        }
      ]
    };

    return <QuoteSingle data={data} />;
  })
  .add("Layout 2", () => {
    const data = {
      items: [
        {
          quote_theme: "Theme 2",
          quote_name: text("Who", "Baptiste Boulard"),
          position: text("Position", "CEO of Swapcard"),
          quote_content: {
            text: text(
              "Quote Content",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper porttitor nulla, nec aliquet enim condimentum at. Nam id consectetur ante. Interdum "
            )
          },
          picture: {
            fluid: {
              src:
                "https://images.prismic.io/showcase-dev/b0536097866612fb6a707d0c901731a4bf69b2cb_loic_le_meur_at_the_2014_leweb_conference.jpg?auto=compress,format"
            }
          }
        }
      ]
    };

    return <QuoteSingle data={data} />;
  })
  .add("Layout 3", () => {
    const data = {
      items: [
        {
          quote_theme: "Large quote",
          quote_name: text("Who", "Baptiste Boulard"),
          position: text("Position", "CEO of Swapcard"),
          quote_content: {
            text: text(
              "Quote Content",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper porttitor nulla, nec aliquet enim condimentum at. Nam id consectetur ante. Interdum "
            )
          },
          picture: {
            fluid: {
              src:
                "https://images.prismic.io/showcase-dev/b0536097866612fb6a707d0c901731a4bf69b2cb_loic_le_meur_at_the_2014_leweb_conference.jpg?auto=compress,format"
            }
          }
        }
      ]
    };

    return <QuoteSingle data={data} />;
  })
  .add("Layout 4", () => {
    const data = {
      items: [
        {
          title: {
            text: "Hello"
          },
          subtitle: {
            text: "Hello"
          },
          logo: {
            url:
              "https://images.prismic.io/showcase-dev/b0536097866612fb6a707d0c901731a4bf69b2cb_loic_le_meur_at_the_2014_leweb_conference.jpg?auto=compress,format"
          }
        },
        {
          subtitle: {
            text:
              "We needed the program and speaker information to be accessible on the app and website and well-presented. The information was changing all the time, but editing the app was easy and the widget saved us time."
          },
          title: {
            text: "Katrina Baker Events Coordinator, OECD"
          },
          logo: {
            url:
              "https://images.prismic.io/showcase-dev/b0536097866612fb6a707d0c901731a4bf69b2cb_loic_le_meur_at_the_2014_leweb_conference.jpg?auto=compress,format"
          }
        }
      ]
    };

    return <QuoteSlider data={data} />;
  });
