import React from "react";

/* navigarion */
import { Link } from "react-router-dom";

/* import styles */
import { FormGroup, Label, Field } from "./styles";

function Checkbox({ label = "", initialValue = "", checked = false, onChange = () => {}, required = false, type = "checkbox", link = "" }) {
  return (
    <FormGroup>
      <Field value={initialValue} onChange={event => onChange(event.target.value, event.target.checked)} required={required} type={type} checked={checked} />

      {link ? (
        <Link to={link} target="_blank">
          <Label>{label}</Label>
        </Link>
      ) : (
        <Label>{label}</Label>
      )}
    </FormGroup>
  );
}

export default Checkbox;
