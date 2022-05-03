import React, { Component, useState } from "react";
// import ModalVideo from "react-modal-video";
const ModalVideo = typeof window !== `undefined` ? require("react-modal-video").default : "none";
import { ModalWrapper, CustomersVideoMiniature, LogoCustomers } from "./styled";
import Link from "../../utils/link";

const ModalVideoCustomersNew = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalWrapper>
        <div>
          <ModalVideo channel="youtube" isOpen={isOpen} videoId={props.youtube} onClose={() => setIsOpen(false)} />
          {props.youtube !== "None" && (
            <CustomersVideoMiniature onClick={() => setIsOpen(true)}>
              <LogoCustomers className="img-reponsive" src={props.logo} />
            </CustomersVideoMiniature>
          )}
          {props.youtube === "None" && (
            <Link to={props.to}>
              <CustomersVideoMiniature>
                <LogoCustomers className="img-reponsive" src={props.logo} />
              </CustomersVideoMiniature>
            </Link>
          )}
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalVideoCustomersNew;
