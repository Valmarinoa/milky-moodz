import styled from "styled-components";

export const Input = styled.input`
  border: 2px solid #000;
  box-sizing: border-box;
  font-size: 18px;
  margin: 8px 0 24px;
  padding: 12px;
  width: 100%;

  &:focus {
    border-color: #c90057;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const Label = styled.label`
  font-weight: 600;
`

export const Error = styled.span `
  color: #e26e2d;
`

export const Submit = styled.button`
  background: none;
  border: 2px solid #c90057;
  color: #c90057;
  cursor: pointer;
  float: right;
  font-size: 12px;
  font-weight: 700;
  padding: 12px;
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;