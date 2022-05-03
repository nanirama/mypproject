import React from "react";

import Image from "gatsby-image";

import { Speakers, SpeakerInfo } from "./styled";

const IndexPage = ({ data, heading }) => {
  return (
    <>
      <h3>{heading}</h3>
      <Speakers>
        {data &&
          data.map((item, index) => {
            return (
              <SpeakerInfo>
                <Image fixed={item.speaker_image.fixed} />
                <h5>{item.speaker_name}</h5>
                <h6>{item.speaker_designation}</h6>
              </SpeakerInfo>
            );
          })}
      </Speakers>
    </>
  );
};
export default IndexPage;
