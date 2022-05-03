import React, { Component } from "react";
const ModalVideo = typeof window !== "undefined" ? require("react-modal-video").default : "none";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        {ModalVideo && (
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId={this.props.yt}
            onClose={() => this.setState({ isOpen: false })}
          />
        )}
        <p onClick={this.openModal}>hello</p>
      </React.Fragment>
    );
  }
}
