import React from "react";
import { StyledInput, StyledTextarea } from "./styled";
//{ placeholder, name, onChange, label, required, type }
export const Input = ({ onChange, required, register, ...props }) => (
  <>
    {register ? (
      <StyledInput
        theme="gray"
        onChange={onChange}
        type={props.type ? props.type : "text"}
        name={props.name}
        {...props}
        ref={register({ required })}
      />
    ) : (
      <StyledInput
        theme="gray"
        onChange={onChange}
        type={props.type ? props.type : "text"}
        name={props.name}
        {...props}
      />
    )}
  </>
);

export const Textarea = ({ label, ...props }) => (
  <React.Fragment>
    <StyledTextarea theme="gray" {...props} />
  </React.Fragment>
);
