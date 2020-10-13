import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 15px;
  margin-right: 15px;
`;

export const Label = styled.label`
  font-family: "Effra-Bold";
  font-size: 14px;
  line-height: 14px;
  color: #54595f;

  display: flex;
  align-items: center;
`;

export const Field = styled.input`
  /* Remove First */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  font-family: "HelveticaNeueLight";
  font-size: 14px;
  line-height: 16px;
  color: #54595f;

  border-radius: 5px;
  background-color: #f1f1f5;

  height: 30px;
  width: 30px;

  padding: 15px;

  position: absolute;
  opacity: 0;
  z-index: 9;

  cursor: pointer;

  & + label,
  & + a > label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  & + label:before,
  & + a > label:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 30px;
    height: 30px;
    background: #f1f1f5;

    border: 0.5px solid rgba(0, 0, 0, 0.1);
  }

  &:hover + label:before,
  &:hover + a > label:before {
    background: #ffa53c;
  }

  &:focus + label:before,
  &:focus + a > label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  &:checked + label:before,
  &:checked + a > label:before {
    background: #ffa53c;
  }

  &:disabled + label,
  &:disabled + a > label {
    color: #b8b8b8;
    cursor: auto;
  }

  &:disabled + label:before,
  &:disabled + a > label:before {
    box-shadow: none;
    background: #ddd;
  }

  &:checked + label:after,
  &:checked + a > label:after {
    content: "";
    position: absolute;
    left: 9px;
    top: 17px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: -6px 0 0 white, -4px 0 0 white, -2px 0 0 white, 0px 0 0 white, 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white, 4px -10px 0 white, 4px -12px 0 white, 4px -14px 0 white, 4px -16px 0 white, 4px -18px 0 white, 4px -20px 0 white;

    transform: rotate(45deg);
  }
`;

export const Small = styled.small`
  font-family: "EffraLight-Regular";
  font-size: 10px;
  line-height: 12px;
  color: ${props => props.color};

  margin-top: 2px;
`;
