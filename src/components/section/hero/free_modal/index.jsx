import React, { Component } from "react";
import Modal from "react-modal";
import { StyledModal, WrapperModal, FormWrapper } from "./styled";
import { Typo2, Body } from "../../../typographie";
import HubspotForm from "../../../form/hubspot";
import { Margin } from "styled-components-spacing";
import { ButtonSecondary } from "../../../button";
import "../../feature_block/modal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    position: "fixed",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export default class ModalHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <WrapperModal>
        <ButtonSecondary onClick={this.openModal}>
          {this.props.dataModal.cta_free_label}
        </ButtonSecondary>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          className="Modal"
        >
          <StyledModal>
            <Typo2>{this.props.dataModal.modal_title}</Typo2>
            <Margin top={3}>
              <Body>{this.props.dataModal.modal_description}</Body>
            </Margin>
            <FormWrapper>
              <HubspotForm
                centerSubmit="center"
                hubspot_dev_id={this.props.dataModal.hubspot_id_dev}
                hubspot_id={this.props.dataModal.hubspot_id_prod}
              />
            </FormWrapper>
          </StyledModal>
        </Modal>
      </WrapperModal>
    );
  }
}
