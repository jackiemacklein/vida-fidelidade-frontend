import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  flex: 1;
  width: 100%;

  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-family: "Effra-Bold";
  font-size: 14px;
  line-height: 14px;
  color: #54595f;

  margin-bottom: 5px;
`;

export const Field = styled.select`
  /* Remove First
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;*/

  font-family: "HelveticaNeueLight";
  font-size: 14px;
  line-height: 16px;
  color: #fff;

  border-radius: 5px;
  background-color: #0d756f;
  height: 50px;
  padding: 15px;

  width: 100%;

  border: 0.5px solid rgba(0, 0, 0, 0.1);

  &:focus {
    border: 0.5px solid #3fb07b;
    outline: none;
  }

  &:active {
    border: 0.5px solid #3fb07b;
    outline: none;
  }
`;

export const Small = styled.small`
  font-family: "EffraLight-Regular";
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.color};

  margin-top: 3px;
`;
