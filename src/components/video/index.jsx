import React from "react";
import styled from "styled-components";

const VideoPlayer = styled.video`
  width: 100%;
  height: auto;
`;

export default ({ webm, mp4, poster }) => {
  return (
    <VideoPlayer autoPlay={true} loop={true} muted={true} playsInline={true} poster={poster}>
      {webm && <source src={webm} />}
      {mp4 && <source src={mp4} />}
    </VideoPlayer>
  );
};
