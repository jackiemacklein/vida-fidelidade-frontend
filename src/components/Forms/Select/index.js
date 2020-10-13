import React from "react";

import { FormGroup, Label, Field, Small } from "./styles";

function Select({
  label = "",
  initialValue = "",
  onChange = () => {},
  infoText = "",
  infoTextColor = "#AA91A0",
  required = false,
  placeholder = "",
  options = [],
  empty = false,
}) {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Field value={initialValue} onChange={event => onChange(event.target.value)} required={required} placeholder={placeholder}>
        {empty ? (
          <>
            <option value="">Selecione</option>
          </>
        ) : (
          <></>
        )}
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.text}
          </option>
        ))}
      </Field>
      {infoText ? <Small color={infoTextColor}>{infoText}</Small> : <Small color={infoTextColor}>&nbsp;</Small>}
    </FormGroup>
  );
}

export default Select;
