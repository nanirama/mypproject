import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import Article from ".";

const label = "Odd";
const options = {
  Yes: "Yes",
  No: "No"
};
const defaultValue = "Yes";
const groupId = "GROUP-ID1";

const stories = storiesOf("Article", module).addDecorator(withKnobs);

stories
  .add("Default", () => (
    <Article
      img={text(
        "Image URL",
        "https://www.swapcard.com/static/f1de771efb0523bca3b7ec469398e8ac/54125/36d9c8d0d84c5c0ac24cae87e00b7c84728a603b_dedicated_expert2.webp"
      )}
      data={{
        primary: {
          background_odd: select("Background odd", { Yes: "Yes", No: "No" }, "No")
        }
      }}
      body={{
        html: text(
          "Body",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lectus eros. Vestibulum tempus est ullamcorper elit lacinia viverra. Proin hendrerit fringilla condimentum. Vestibulum fringilla malesuada velit, a malesuada diam ornare vitae. In pulvinar lorem at sodales interdum. Nullam vel cursus tellus. Cu"
        )
      }}
      title={text("Title", "Title Of Article")}
      feature={text("Feature", "Feature")}
      layout="v"
      odd={select(label, options, defaultValue)}
    />
  ))
  .add("Feature", () => (
    <Article
      img={text(
        "Image URL",
        "https://www.swapcard.com/static/f1de771efb0523bca3b7ec469398e8ac/54125/36d9c8d0d84c5c0ac24cae87e00b7c84728a603b_dedicated_expert2.webp"
      )}
      data={{
        primary: {
          background_odd: select("Background odd", { Yes: "Yes", No: "No" }, "No")
        },
        items: [
          {
            article_list_item: "Awesome feature"
          },
          {
            article_list_item: "Awesome feature"
          },
          {
            article_list_item: "Awesome feature"
          }
        ]
      }}
      body={{
        html: text(
          "Body",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lectus eros. Vestibulum tempus est ullamcorper elit lacinia viverra. Proin hendrerit fringilla condimentum. Vestibulum fringilla malesuada velit, a malesuada diam ornare vitae. In pulvinar lorem at sodales interdum. Nullam vel cursus tellus. Cu"
        )
      }}
      title={text("Title", "Title Of Article")}
      feature={text("Feature", "Feature")}
      layout="v"
      odd={select(label, options, defaultValue)}
    />
  ));
