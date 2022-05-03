import React from "react";
// import ModalVideo from "react-modal-video";
const ModalVideo = typeof window !== `undefined` ? require("react-modal-video").default : "no";
import { ModalWrapper } from "./styled";

export default ({ ...props }) => (
  <ModalWrapper>
    <ModalVideo channel="youtube" isOpen={props.modalOpen} videoId={props.youtube_id} onClose={props.onClose} />
  </ModalWrapper>
);
