import React from "react";
import { StyledSelect } from "./styled";

export const Select = ({ options, onChange, name, disabled, register, required }) => {
  return (
    <React.Fragment>
      {register && (
        <StyledSelect theme="gray" onChange={onChange} name={name} disabled={disabled} ref={register({ required })}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      )}
      {!register && (
        <StyledSelect theme="gray" onChange={onChange} disabled={disabled} name={name}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      )}
    </React.Fragment>
  );
};
