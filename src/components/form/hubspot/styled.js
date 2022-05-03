import styled from "styled-components";
// import { media } from "../../utils/style-utils";
import caret from "../../../assets/images/Forms/caret.svg";

export const HubspotStyle = styled.div`
  /* All HubSpot Forms
   ========================================================================== */

  /* Form Field (selector for form field wrapper) */
  .hs-form .hs-form-field {
    width: 100%;
    padding-left: 10px;
  }

  /* Descriptions (targets class applied to Help Text divs) */
  .hs-form .hs-field-desc {
  }

  /* Labels (selects field labels and error messages) */
  .hs-form label {
    margin-bottom: 10px;
    font-weight: 600;
    text-transform: uppercase;
    display: block;
    font-size: 0.8rem;
    padding-top: 13px;
    text-align: left;
    color: ${(props) => props.theme.color.primary};
    a {
    }
  }
  .hs-form .hs-form-field > label {
  }

  /* Inputs (selectors for all inputs)  */
  .hs-form input[type="text"],
  .hs-form input[type="password"],
  .hs-form input[type="datetime"],
  .hs-form input[type="datetime-local"],
  .hs-form input[type="date"],
  .hs-form input[type="month"],
  .hs-form input[type="time"],
  .hs-form input[type="week"],
  .hs-form input[type="number"],
  .hs-form input[type="email"],
  .hs-form input[type="url"],
  .hs-form input[type="search"],
  .hs-form input[type="tel"],
  .hs-form input[type="color"],
  .hs-form input[type="file"],
  .hs-form textarea,
  .hs-form select {
    height: 40px;
    padding: 5px 15px;
    width: 100% !important;
    display: block;
    margin: 0 auto;
    font-size: 0.9rem;
    border-radius: 2px;
    border: 1px solid #d5d2d9;
    background: #fff;
    /* border: none; */
    margin: 0 0 10px 0;
    -webkit-appearance: none;
  }

  .hs-form textarea {
    height: 150px;
    padding: 10px;
  }

  /* Inputs in focus (selectors for all inputs when clicked)  */
  .hs-form input[type="text"]:focus,
  .hs-form input[type="password"]:focus,
  .hs-form input[type="datetime"]:focus,
  .hs-form input[type="datetime-local"]:focus,
  .hs-form input[type="date"]:focus,
  .hs-form input[type="month"]:focus,
  .hs-form input[type="time"]:focus,
  .hs-form input[type="week"]:focus,
  .hs-form input[type="number"]:focus,
  .hs-form input[type="email"]:focus,
  .hs-form input[type="url"]:focus,
  .hs-form input[type="search"]:focus,
  .hs-form input[type="tel"]:focus,
  .hs-form input[type="color"]:focus,
  .hs-form input[type="file"]:focus,
  .hs-form textarea:focus,
  .hs-form select:focus {
  }

  /* Multi-line inputs (selectors to target multi-line fields */
  .hs-form textarea {
  }
  .hs-form textarea:focus {
  }

  /* Dropdowns (selectors for dropdowns) */
  .hs-form select {
  }
  .hs-form select:focus {
  }

  /* Multi-select (selectors for multi-select fields) */
  .hs-form form.hs-form .hs-form-field ul.inputs-list {
  }

  .hs-form form.hs-form .hs-form-field ul.inputs-list li input {
  }

  .inputs-list[role="radiogroup"] {
    display: flex;
    /* margin-bottom: 20px; */
    flex-direction: column;
  }

  .hs-form-radio-display {
    margin-right: 20px;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .hs-form input[type="radio"] {
    margin: 10px 10px 10px 0px;
    -webkit-appearance: radio;
    -moz-appearance: radio;
    -ms-progress-appearance: radio;
  }
  .hs-form input[type="checkbox"] {
    -webkit-appearance: checkbox;
    -moz-appearance: checkbox;
    -ms-progress-appearance: checkbox;
  }

  /* Required (selectors for fields, when they do not pass validation) */
  .hs-form input:focus:required:invalid,
  .hs-form textarea:focus:required:invalid,
  .hs-form select:focus:required:invalid {
  }

  .hs-form input:focus:required:invalid:focus,
  .hs-form textarea:focus:required:invalid:focus,
  .hs-form select:focus:required:invalid:focus {
  }

  /* Error message (selector for validation messages) */
  .hs-form .hs-error-msgs label {
  }

  /* Placeholder Text (styles the placeholder attribute text) */
  ::-webkit-input-placeholder {
    /* Webkit Browsers */
  }
  :-moz-placeholder {
    /* Firefox 18- */
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
  }
  :-ms-input-placeholder {
    /* IE10 */
  }

  /* Multi Column Form (selectors for fieldsets and field wrappers) 
   ========================================================================== */

  fieldset {
    max-width: 100% !important;
  }

  .hs-form .hs-form fieldset.form-columns-1 {
  }
  .hs-form .hs-form fieldset.form-columns-1 .hs-form-field {
  }

  .hs-form .hs-form fieldset.form-columns-2 {
    max-width: 100% !important;
  }
  .hs-form .hs-form fieldset.form-columns-2 .hs-form-field {
  }

  .hs-form .hs-form fieldset.form-columns-3 {
  }
  .hs-form .hs-form fieldset.form-columns-3 .hs-form-field {
  }

  /* Submit buttons (selectors for all non-CTA buttons) 
   ========================================================================== */

  .hs-submit {
    /* margin-bottom: 80px; */
    margin: 0 auto;
    text-align: ${(props) => (props.centerSubmit ? "center" : "left")};
  }

  .hs-form select {
    background: url(${caret}) 97% no-repeat #fff;
  }

  .hs-button.primary,
  input[type="submit"],
  input[type="button"] {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
    text-shadow: none;
    font-weight: 600;
    padding: 10px 20px;
    background: none;
    color: #fff;
    background: ${(props) => (props.inverted ? "#FFF" : props.theme.color.secondary)};
    border-radius: 50px;
    border: none;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s all;
    font-size: 16px;
    margin-top: 15px;
  }

  .hs-button.primary:hover,
  input[type="submit"]:hover,
  input[type="button"]:hover {
    cursor: pointer;
  }

  body .hs-button.primary:focus,
  body input[type="submit"]:focus,
  body input[type="button"]:focus {
  }

  .hs-richtext {
    color: ${(props) => props.theme.color.body};
    font-size: 14px;
    margin-bottom: 10px;
  }

  .submitted-message {
    overflow: initial !important;
    text-align: left;
  }
`;

export const HubspotStyleEbook = styled.div`
  /* All HubSpot Forms
   ========================================================================== */

  /* Form Field (selector for form field wrapper) */
  .hs-form .hs-form-field {
    width: 100%;
    display: flex;
  }

  /* Descriptions (targets class applied to Help Text divs) */
  .hs-form .hs-field-desc {
  }

  .hs-form {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 680px) {
      flex-direction: row;
    }
  }

  /* Labels (selects field labels and error messages) */
  .hs-form label {
    margin-bottom: 10px;
    font-weight: 600;
    text-transform: uppercase;
    display: block;
    font-size: 0.8rem;
    padding-top: 13px;
    text-align: left;
    color: ${(props) => props.theme.color.primary};
    display: none;
    a {
    }
  }
  .hs-form .hs-form-field > label {
  }

  .hs-form .input {
    width: 100%;
  }

  /* Inputs (selectors for all inputs)  */
  .hs-form input[type="text"],
  .hs-form input[type="password"],
  .hs-form input[type="datetime"],
  .hs-form input[type="datetime-local"],
  .hs-form input[type="date"],
  .hs-form input[type="month"],
  .hs-form input[type="time"],
  .hs-form input[type="week"],
  .hs-form input[type="number"],
  .hs-form input[type="email"],
  .hs-form input[type="url"],
  .hs-form input[type="search"],
  .hs-form input[type="tel"],
  .hs-form input[type="color"],
  .hs-form input[type="file"],
  .hs-form textarea,
  .hs-form select {
    width: 100%;
    height: 40px;
    padding: 5px 15px;

    display: block;

    font-size: 0.9rem;
    border-radius: 2px;
    border: 1px solid #d5d2d9;
    background: #fff;
    -webkit-appearance: none;
  }

  .hs-form textarea {
    height: 150px;
    padding: 10px;
  }

  /* Inputs in focus (selectors for all inputs when clicked)  */
  .hs-form input[type="text"]:focus,
  .hs-form input[type="password"]:focus,
  .hs-form input[type="datetime"]:focus,
  .hs-form input[type="datetime-local"]:focus,
  .hs-form input[type="date"]:focus,
  .hs-form input[type="month"]:focus,
  .hs-form input[type="time"]:focus,
  .hs-form input[type="week"]:focus,
  .hs-form input[type="number"]:focus,
  .hs-form input[type="email"]:focus,
  .hs-form input[type="url"]:focus,
  .hs-form input[type="search"]:focus,
  .hs-form input[type="tel"]:focus,
  .hs-form input[type="color"]:focus,
  .hs-form input[type="file"]:focus,
  .hs-form textarea:focus,
  .hs-form select:focus {
  }

  /* Multi-line inputs (selectors to target multi-line fields */
  .hs-form textarea {
  }
  .hs-form textarea:focus {
  }

  /* Dropdowns (selectors for dropdowns) */
  .hs-form select {
  }
  .hs-form select:focus {
  }

  /* Multi-select (selectors for multi-select fields) */
  .hs-form form.hs-form .hs-form-field ul.inputs-list {
  }

  .hs-form form.hs-form .hs-form-field ul.inputs-list li input {
  }

  .inputs-list[role="radiogroup"] {
    display: flex;
    /* margin-bottom: 20px; */
    flex-direction: column;
  }

  .hs-form-radio-display {
    margin-right: 20px;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .hs-form input[type="radio"] {
    margin: 10px 10px 10px 0px;
    -webkit-appearance: radio;
    -moz-appearance: radio;
    -ms-progress-appearance: radio;
  }
  .hs-form input[type="checkbox"] {
    -webkit-appearance: checkbox;
    -moz-appearance: checkbox;
    -ms-progress-appearance: checkbox;
  }

  /* Required (selectors for fields, when they do not pass validation) */
  .hs-form input:focus:required:invalid,
  .hs-form textarea:focus:required:invalid,
  .hs-form select:focus:required:invalid {
  }

  .hs-form input:focus:required:invalid:focus,
  .hs-form textarea:focus:required:invalid:focus,
  .hs-form select:focus:required:invalid:focus {
  }

  /* Error message (selector for validation messages) */
  .hs-form .hs-error-msgs label {
  }

  /* Placeholder Text (styles the placeholder attribute text) */
  ::-webkit-input-placeholder {
    /* Webkit Browsers */
  }
  :-moz-placeholder {
    /* Firefox 18- */
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
  }
  :-ms-input-placeholder {
    /* IE10 */
  }

  /* Multi Column Form (selectors for fieldsets and field wrappers) 
   ========================================================================== */

  fieldset {
    max-width: 100% !important;
  }

  .hs-form .hs-form fieldset.form-columns-1 {
  }
  .hs-form .hs-form fieldset.form-columns-1 .hs-form-field {
  }

  .hs-form .hs-form fieldset.form-columns-2 {
    max-width: 100% !important;
  }
  .hs-form .hs-form fieldset.form-columns-2 .hs-form-field {
  }

  .hs-form .hs-form fieldset.form-columns-3 {
  }
  .hs-form .hs-form fieldset.form-columns-3 .hs-form-field {
  }

  /* Submit buttons (selectors for all non-CTA buttons) 
   ========================================================================== */

  .hs-submit {
    /* margin-bottom: 80px; */
    margin: 0 auto;
    text-align: ${(props) => (props.centerSubmit ? "center" : "left")};
  }

  .hs-form select {
    background: url(${caret}) 97% no-repeat #fff;
  }

  .hs-button.primary,
  input[type="submit"],
  input[type="button"] {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
    text-shadow: none;
    font-weight: 600;
    padding: 11px 20px;
    width: 190px;
    margin-left: 10px;
    border-radius: 4px;
    background: none;
    color: #fff;
    background: ${(props) => (props.inverted ? "#FFF" : props.theme.color.secondary)};

    border: none;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s all;
    font-size: 16px;

    margin-top: 20px;
    /* width:100%; */

    @media screen and (min-width: 680px) {
      margin-top: 0;
    }
  }

  .hs-button.primary:hover,
  input[type="submit"]:hover,
  input[type="button"]:hover {
    cursor: pointer;
  }

  body .hs-button.primary:focus,
  body input[type="submit"]:focus,
  body input[type="button"]:focus {
  }

  .hs-richtext {
    color: ${(props) => props.theme.color.body};
    font-size: 14px;
    margin-bottom: 10px;
  }

  .submitted-message {
    overflow: initial !important;
    text-align: left;
  }
`;
