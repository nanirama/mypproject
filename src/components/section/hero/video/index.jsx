import React, { Component } from "react";
import { exportLocale } from "../../../../localization";
import ModalVideo from "../../../modal/video";
import MixpanelHelper from "../../../utils/segment";
import styled from "styled-components";
import FormOnboardingEmail from "../form_onboarding_email";

export const UnderstandInVideo = styled.div`
  margin-top: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: transform 0.3s;
  /* justify-content: center; */
  i {
    margin-right: 5px;
    font-size: 1.2rem;
  }

  &:hover {
    cursor: pointer;
    transform: translateX(5px);
  }
`;

export default class ModalVideoHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    this.setState((prevState) => ({
      modalOpen: true,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <ModalVideo youtube_id={this.props.youtube_id} modalOpen={this.state.modalOpen} />

        <FormOnboardingEmail lang={this.props.lang} />

        <MixpanelHelper
          analytics-location="Hero"
          analytics-category="Watch video"
          analytics-label={exportLocale(this.props.lang).hero.Video.button}
          analytics-register="Watched video hero?"
        >
          <UnderstandInVideo onClick={this.handleModal}>
            <i className="icons8-play-button-circled" /> {exportLocale(this.props.lang).hero.Video.button}
          </UnderstandInVideo>
        </MixpanelHelper>
      </React.Fragment>
    );
  }
}
