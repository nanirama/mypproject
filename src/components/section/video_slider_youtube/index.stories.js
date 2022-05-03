import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import VideoYoutubeSlider from ".";

const stories = storiesOf("Social Proof/Slider Video", module);

stories.add("Default", () => {
  const data = {
    primary: {},
    items: [
      {
        youtube_video_link: "WO43XZ1zXBg",
        person_name: "Vivatechnology",
        person_job: "Salon",
        company_logo: {
          fluid: {
            src:
              "https://www.swapcard.com/static/94a804e5b9a9c39aefe61de5a35b126d/f5f11/649ec428-5892-4005-a274-d1d0e8d66850_logo%2Bgitex.png"
          }
        },
        video_preview: {
          fixed: {
            src:
              "https://www.swapcard.com/static/fbea225ad96a7cede3f4eb15a0b3664b/50bff/c5edd248866677fdf5381526c671c5e7990d12fb_capture-decran-2019-01-29-10.32.17.png"
          }
        }
      },
      {
        youtube_video_link: "WO43XZ1zXBg",
        person_name: "Vivatechnology",
        person_job: "Salon",
        company_logo: {
          fluid: {
            src:
              "https://www.swapcard.com/static/94a804e5b9a9c39aefe61de5a35b126d/f5f11/649ec428-5892-4005-a274-d1d0e8d66850_logo%2Bgitex.png"
          }
        },
        video_preview: {
          fixed: {
            src:
              "https://www.swapcard.com/static/0efeaa4ddf41ce888c211e33a982fc0e/50bff/952d66c0-326c-446d-87b9-eeaecbf9f51d_gitex.png"
          }
        }
      },
      {
        youtube_video_link: "WO43XZ1zXBg",
        person_name: "Vivatechnology",
        person_job: "Salon",
        company_logo: {
          fluid: {
            src:
              "https://www.swapcard.com/static/94a804e5b9a9c39aefe61de5a35b126d/f5f11/649ec428-5892-4005-a274-d1d0e8d66850_logo%2Bgitex.png"
          }
        },
        video_preview: {
          fixed: {
            src:
              "https://www.swapcard.com/static/fbea225ad96a7cede3f4eb15a0b3664b/50bff/c5edd248866677fdf5381526c671c5e7990d12fb_capture-decran-2019-01-29-10.32.17.png"
          }
        }
      }
    ]
  };

  return <VideoYoutubeSlider data={data} />;
});
