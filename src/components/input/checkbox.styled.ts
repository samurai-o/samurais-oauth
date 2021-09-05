import styled from "styled-components";

export const CheckboxContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxLabelStyled = styled.label`
  margin-left: 10px;
  color: #fff;
`;

export const CheckboxStyled = styled.input`
  cursor: pointer;
  position: relative;
  width: 18px;
  height: 18px;
  font-size: 12px;
  visibility: hidden;
  overflow: visible;
  color: inherit;
  font-family: inherit;
  line-height: inherit;
  margin: 0;
  &::after {
    position: absolute;
    top: 0px;
    border-radius: 10px;
    border: 2px solid #ddd;
    background-color: transparent;
    /* background-color: rgb(72 113 255); */
    color: #000;
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    display: inline-block;
    visibility: visible;
    text-align: center;
    content: ' ';
    transition: all 0.2s ease 0s;
  }
  &:checked::after {
    font-family: system-ui;
    content: '✓';
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    color: #000;
    font-weight: bold;
    border: 2px solid #000;
    /* border: 2px solid #fff; */
    background-color: transparent;
  }
`;
