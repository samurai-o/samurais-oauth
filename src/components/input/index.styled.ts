import styled from "styled-components";

export const InputStyled = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  background: transparent;
  border: 1.8px solid #fff;
  color: #fff;
  letter-spacing: 2px;
  font-family: sans-serif;
  transition: border 0.2s ease 0s, padding-right 0.1s ease 0s;
  &:focus {
    outline: 1.8px solid transparent;
    border: 1.8px solid #ffffffab;
  }
  &::-ms-input-placeholder {
    color: #fff;
  }
  &::-webkit-input-placeholder {
    color: #fff;
  }
  &::-moz-input-placeholder {
    color: #fff;
  }
`;
