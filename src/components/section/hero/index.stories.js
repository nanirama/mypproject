import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Hero from ".";

const stories = storiesOf("Hero", module);

stories
  .add("Layout 1", () => {
    const data = {
      primary: {
        hero_title: { text: text("Title", "Boost exhibitors' ROI & digitalize your exhibition") },
        hero_sub_title: {
          text: text(
            "Sub Title",
            "Adapt your trade show to the digital economy. Focus on qualified, in-person meetings to increase exhibitors' spendings."
          )
        },
        hero_image: {
          fluid: {
            src:
              "https://images.prismic.io/showcase-dev/7fbacd4079eccf6f7a78f2885a61fb70f7c5ce74_oracle-sales-immersion-16.jpg?auto=compress,format"
          }
        },
        cta_type_1: "Start now form",
        colLayout: "tiny-img",
        layouts: "Layout 1"
      }
    };
    return <Hero data={data} />;
  })
  .add("Background", () => {
    const dataBackground = {
      primary: {
        hero_title: { text: text("Title", "hero_title") },
        hero_sub_title: { text: "ok" },
        hero_image: {
          fluid: {
            src:
              "https://images.prismic.io/showcase-dev/7fbacd4079eccf6f7a78f2885a61fb70f7c5ce74_oracle-sales-immersion-16.jpg?auto=compress,format"
          }
        },
        layouts: "Background"
      }
    };

    return (
      <div style={{ width: "100%" }}>
        <Hero data={dataBackground} />
      </div>
    );
  })
  .add("Emotion", () => {
    const dataBackground = {
      primary: {
        custom_color: "",
        cta_type_1: "Start now form",
        hero_title: {
          text: text("Title", "Increase interactions at your event with the most advanced B2B matchmaking platform")
        },
        hero_sub_title: {
          html: text(
            "Sub Title",
            "An efficient networking platform that matches participants, delivers qualified meetings and increases ROI, powered by Artificial Intelligence."
          )
        },
        hero_image: {
          thumbnails: {
            new_hero_2: {
              url:
                "https://images.prismic.io/showcase-dev/7fbacd4079eccf6f7a78f2885a61fb70f7c5ce74_oracle-sales-immersion-16.jpg?auto=compress,format"
            }
          },
          fluid: {
            src:
              "https://images.prismic.io/showcase-dev/7fbacd4079eccf6f7a78f2885a61fb70f7c5ce74_oracle-sales-immersion-16.jpg?auto=compress,format"
          }
        },
        layouts: "Emotion"
      }
    };

    return (
      <div style={{ width: "100%" }}>
        <Hero data={dataBackground} />
      </div>
    );
  })
  .add("Emotion Right", () => {
    const dataBackground = {
      primary: {
        custom_color: "",
        cta_type_1: "Start now form",
        hero_title: {
          text: text("Title", "Increase interactions at your event with the most advanced B2B matchmaking platform")
        },
        hero_sub_title: {
          html: text(
            "Sub Title",
            "An efficient networking platform that matches participants, delivers qualified meetings and increases ROI, powered by Artificial Intelligence."
          )
        },
        hero_image: {
          thumbnails: {
            new_hero_2: {
              url:
                "https://images.prismic.io/showcase-dev/7fbacd4079eccf6f7a78f2885a61fb70f7c5ce74_oracle-sales-immersion-16.jpg?auto=compress,format"
            }
          },
          fluid: {
            src:
              "https://images.prismic.io/showcase-dev/7fbacd4079eccf6f7a78f2885a61fb70f7c5ce74_oracle-sales-immersion-16.jpg?auto=compress,format"
          }
        },
        layouts: "Emotion right"
      }
    };

    return (
      <div style={{ width: "100%" }}>
        <Hero data={dataBackground} />
      </div>
    );
  })
  .add("Layout 2", () => {
    const dataBackground = {
      primary: {
        custom_color: "",
        cta_type_1: "Start now form",
        hero_title: {
          text: text("Title", "Increase interactions at your event with the most advanced B2B matchmaking platform")
        },
        hero_sub_title: {
          html: text(
            "Sub Title",
            "An efficient networking platform that matches participants, delivers qualified meetings and increases ROI, powered by Artificial Intelligence."
          )
        },
        hero_image: {
          thumbnails: {
            new_hero_2: {
              url:
                "https://images.prismic.io/showcase-dev/7fbacd4079eccf6f7a78f2885a61fb70f7c5ce74_oracle-sales-immersion-16.jpg?auto=compress,format"
            }
          },
          fluid: {
            src:
              "https://images.prismic.io/showcase-dev/7fbacd4079eccf6f7a78f2885a61fb70f7c5ce74_oracle-sales-immersion-16.jpg?auto=compress,format"
          }
        },
        layouts: "Layout 2"
      }
    };

    return (
      <div style={{ width: "100%" }}>
        <Hero data={dataBackground} />
      </div>
    );
  })
  .add("Video Marketing", () => {
    const dataBackground = {
      primary: {
        hero_title: {
          text: text("Title", "Event app & Matchmaking, [Color=#00CC88]powered by  Artificial Intelligence![/Color]")
        },
        hero_sub_title: { text: text("Sub Title", "Meet the smartest event engagement platform.") },
        hero_image: {
          fluid: {
            src:
              "https://images.prismic.io/showcase-dev/7fbacd4079eccf6f7a78f2885a61fb70f7c5ce74_oracle-sales-immersion-16.jpg?auto=compress,format"
          }
        },
        youtube_id: "cqf1vug4qs",
        cta_type_1: "Get Started To MyEvent",
        cta_type_2: "Demo Request With Video Marketing",
        layouts: "Video Marketing Top Title"
      }
    };

    return (
      <div style={{ width: "100%" }}>
        <Hero data={dataBackground} />
      </div>
    );
  });
