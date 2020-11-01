import React from "react";

import { FormGroup, Label, Field, Small } from "./styles";

function Input({
  label = "",
  initialValue = "",
  onChange = () => {},
  infoText = "",
  infoTextColor = "#AA91A0",
  required = false,
  placeholder = "",
  type = "text",
  name = "",
  id = "",
  maxLength = "",
  readonly = false,
  disabled = false,
}) {
  return (
    <FormGroup>
      <Label for={id}>{label}</Label>
      <Field
        readOnly={readonly}
        disabled={disabled}
        name={name}
        id={id}
        value={initialValue}
        onChange={event => onChange(event.target.value)}
        required={required}
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
      />
      {infoText ? <Small color={infoTextColor}>{infoText}</Small> : <Small color={infoTextColor}>&nbsp;</Small>}
    </FormGroup>
  );
}

export default React.memo(Input);
