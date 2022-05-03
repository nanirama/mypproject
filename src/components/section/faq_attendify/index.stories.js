import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import FaqAttendify from ".";

const stories = storiesOf("Texts/FAQ", module).addDecorator(withKnobs);

stories.add("Default", () => {
  const data = {
    items: [
      {
        is_title_: "Yes",
        group_id: "networking",
        title: {
          text: "Networking"
        },
        answer: {
          html:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id pharetra nunc, in bibendum odio. Suspendisse elementum efficitur justo et feugiat. Mauris porta ipsum velit, sit amet mollis turpis ornare eu. Aenean convallis maximus augue, vitae dapibus risus ultricies a. Phasellus et quam mi. Integer egestas placerat ex at euismod. Nulla eu turpis enim. Donec sapien est, iaculis vitae porttitor et, varius vel turpis. Aliquam non lacinia nisi. Cras fringilla faucibus urna vitae dignissim. Maecenas sed venenatis orci. Quisque eu dapibus purus. Sed sit amet feugiat est, quis suscipit nulla. Proin facilisis lorem quam, eget congue velit ultricies a. Praesent gravida ut velit posuere accumsan."
        }
      },
      {
        is_title_: "No",
        group_id: "networking",
        title: {
          text: "What is a question"
        },
        answer: {
          html:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id pharetra nunc, in bibendum odio. Suspendisse elementum efficitur justo et feugiat. Mauris porta ipsum velit, sit amet mollis turpis ornare eu. Aenean convallis maximus augue, vitae dapibus risus ultricies a. Phasellus et quam mi. Integer egestas placerat ex at euismod. Nulla eu turpis enim. Donec sapien est, iaculis vitae porttitor et, varius vel turpis. Aliquam non lacinia nisi. Cras fringilla faucibus urna vitae dignissim. Maecenas sed venenatis orci. Quisque eu dapibus purus. Sed sit amet feugiat est, quis suscipit nulla. Proin facilisis lorem quam, eget congue velit ultricies a. Praesent gravida ut velit posuere accumsan."
        }
      },
      {
        is_title_: "No",
        group_id: "networking",
        title: {
          text: "When do we eat"
        },
        answer: {
          html:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id pharetra nunc, in bibendum odio. Suspendisse elementum efficitur justo et feugiat. Mauris porta ipsum velit, sit amet mollis turpis ornare eu. Aenean convallis maximus augue, vitae dapibus risus ultricies a. Phasellus et quam mi. Integer egestas placerat ex at euismod. Nulla eu turpis enim. Donec sapien est, iaculis vitae porttitor et, varius vel turpis. Aliquam non lacinia nisi. Cras fringilla faucibus urna vitae dignissim. Maecenas sed venenatis orci. Quisque eu dapibus purus. Sed sit amet feugiat est, quis suscipit nulla. Proin facilisis lorem quam, eget congue velit ultricies a. Praesent gravida ut velit posuere accumsan."
        }
      },
      {
        is_title_: "Yes",
        group_id: "event",
        title: {
          text: "Matchmaking"
        },
        answer: {
          html:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id pharetra nunc, in bibendum odio. Suspendisse elementum efficitur justo et feugiat. Mauris porta ipsum velit, sit amet mollis turpis ornare eu. Aenean convallis maximus augue, vitae dapibus risus ultricies a. Phasellus et quam mi. Integer egestas placerat ex at euismod. Nulla eu turpis enim. Donec sapien est, iaculis vitae porttitor et, varius vel turpis. Aliquam non lacinia nisi. Cras fringilla faucibus urna vitae dignissim. Maecenas sed venenatis orci. Quisque eu dapibus purus. Sed sit amet feugiat est, quis suscipit nulla. Proin facilisis lorem quam, eget congue velit ultricies a. Praesent gravida ut velit posuere accumsan."
        }
      },
      {
        is_title_: "No",
        group_id: "event",
        title: {
          text: "What is a question"
        },
        answer: {
          html:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id pharetra nunc, in bibendum odio. Suspendisse elementum efficitur justo et feugiat. Mauris porta ipsum velit, sit amet mollis turpis ornare eu. Aenean convallis maximus augue, vitae dapibus risus ultricies a. Phasellus et quam mi. Integer egestas placerat ex at euismod. Nulla eu turpis enim. Donec sapien est, iaculis vitae porttitor et, varius vel turpis. Aliquam non lacinia nisi. Cras fringilla faucibus urna vitae dignissim. Maecenas sed venenatis orci. Quisque eu dapibus purus. Sed sit amet feugiat est, quis suscipit nulla. Proin facilisis lorem quam, eget congue velit ultricies a. Praesent gravida ut velit posuere accumsan."
        }
      },
      {
        is_title_: "No",
        group_id: "event",
        title: {
          text: "When do we eat"
        },
        answer: {
          html:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id pharetra nunc, in bibendum odio. Suspendisse elementum efficitur justo et feugiat. Mauris porta ipsum velit, sit amet mollis turpis ornare eu. Aenean convallis maximus augue, vitae dapibus risus ultricies a. Phasellus et quam mi. Integer egestas placerat ex at euismod. Nulla eu turpis enim. Donec sapien est, iaculis vitae porttitor et, varius vel turpis. Aliquam non lacinia nisi. Cras fringilla faucibus urna vitae dignissim. Maecenas sed venenatis orci. Quisque eu dapibus purus. Sed sit amet feugiat est, quis suscipit nulla. Proin facilisis lorem quam, eget congue velit ultricies a. Praesent gravida ut velit posuere accumsan."
        }
      }
    ]
  };
  return <FaqAttendify data={data} />;
});
