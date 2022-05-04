import React from "react";
import HubspotForm from "react-hubspot-form";
import styled from "styled-components";
import caret from "../../../assets/images/Forms/caret.svg";
const Index = ({ portalId, formId }) => {
  return (
    <HubSpotFormOuter>
      <HubspotForm portalId={portalId} formId={formId} css="yes" onReady={(form) => console.log(form)} />
    </HubSpotFormOuter>
  );
};

export default Index;

const HubSpotFormOuter = styled.div`
  padding: 20px;
  min-height: 700px;
  background-color: #fff;
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
  .form-columns-1,
  .form-columns-2 {
    max-width: 100%;
  }
  label {
    font-size: 0.8rem;
    margin: 15px 15px 10px 15px;
    color: #000;
    float: left;
  }
  input,
  select,
  textarea {
    width: 100% !important;
    border-radius: 3px;
    border: 1px solid rgb(213, 210, 217);
    /* background-color: #e3eefd; */
    height: 44px;
    padding: 7px 15px;
    margin-bottom: 0px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  textarea {
    padding: 15px;
    height: 150px;
  }
  .input,
  .actions {
    margin: 0 10px !important;
  }
  input[type="submit"] {
    background: rgb(2, 200, 134) none repeat scroll 0% 0%;
    font-size: 16px;
    padding: 0 18px;
    border-radius: 3px;
    border: 0;
    color: #fff;
  }
  .hs-form select {
    background: url(${caret}) 97% no-repeat #fff;
  }
  .hs-dependent-field {
    margin-top: 10px;
  }
  .hs_submit {
    width: auto;
    display: flex;
    font-weight: 600;
    margin-top: 10px;
  }
  input[type="submit"],
  .hs_submit:hover {
    cursor: pointer;
  }
  .hs-error-msg {
    margin: 10px 0 10px 10px;
    color: red;
  }
  .hs-form-field {
    /* height: 90px; */
  }
  .hs_error_rollup {
    display: flex;
  }
`;