import styled from "styled-components";
import { Input } from "../../../form/input";
import { StyledSubmit } from "../../../form/submit/styled";
import { media } from "../../../../components/utils/style-utils";
import caret from "../../../../assets/images/Forms/caret.svg";

export const DemoInput = styled(Input)``;

export const FormWrapper = styled.div`
  text-align: center;
`;

export const StyledLogo = styled.img`
  width: 150px;
  text-align: center;
  margin: 0 auto;
`;

export const Triangle = styled.div`
  border-style: solid;
  border-width: 20px 0 20px 20px;
  border-color: transparent transparent transparent #fff;
  position: absolute;
  top: 9%;
  left: 0;
`;

export const DemoSubmit = styled(StyledSubmit)`
  // background:red;
  box-shadow: none;
  text-align: center;
  //padding:15px 40px;
  font-weight: 600;
  width: auto;
  height: auto;
  white-space: normal;
`;

export const StyledSuccess = styled.div`
  ${media.tablet`
  height: 880px;
  `} display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-direction: column;

  h3 {
    color: #fff;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

export const HubspotStyle = styled.div`
  /* All HubSpot Forms
   ========================================================================== */

  /* Form Field (selector for form field wrapper) */
  .hs-form .hs-form-field {
    color: #fff;
  }

  /* Descriptions (targets class applied to Help Text divs) */
  .hs-form .hs-field-desc {
    color: #fff;
  }

  /* Labels (selects field labels and error messages) */
  .hs-form label {
    margin-bottom: 10px;
    font-weight: 600;
    text-transform: uppercase;
    display: block;
    font-size: 0.8rem;
    margin-top: 13px;
    text-align: left;
    color: #fff;

    a {
      color: #fff;
    }
  }
  .hs-form .hs-form-field > label {
    color: #fff;
  }

  #label-type_of_event-0f594600-f601-4037-a210-10e6e312da18 {
    @media screen and (min-width: 768px) and (max-width: 1199px) {
      margin-bottom: 26px !important;
    }
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
    border: none;
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
    background: url(${caret}) 97% no-repeat #fff;
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
  }

  .hs-form-radio-display {
    margin-right: 20px;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .hs-form input[type="radio"] {
    margin-right: 10px;
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
    color: #ff5a5a;
    text-transform: none;
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

  .hs-form .hs-form fieldset.form-columns-1 {
  }
  .hs-form .hs-form fieldset.form-columns-1 .hs-form-field {
  }

  .hs-form .hs-form fieldset.form-columns-2 {
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
    display: flex;
    justify-content: center;
  }

  .hs-button.primary,
  input[type="submit"],
  input[type="button"] {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 0px;
    font-weight: 600;
    padding: 10px 20px;
    background: none;
    color: #fff;
    background: ${props =>
      props.inverted ? "#FFF" : props.theme.color.secondary_button};
    border-radius: 50px;
    border: none;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s all;
    font-size: 16px;
    margin-top: 10px;
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
    color: #fff;
    margin-bottom: 10px;
  }

  .submitted-message {
    color: #fff;
    text-align: center;
  }
`;
