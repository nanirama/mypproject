import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { ButtonSecondary } from "../../button";
import ModalDetail from "./steps";

const CreditsPurchase = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ButtonSecondary onClick={() => setIsOpen(!isOpen)}>Buy More</ButtonSecondary>
      <ModalPurchase isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />
    </>
  );
};

const ModalPurchase = ({ isOpen, setIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      contentLabel=""
    >
      <ModalDetail setIsOpen={setIsOpen} />
    </Modal>
  );
};

export default CreditsPurchase;
