import styled from "styled-components";

export type IconStyledProps = {
  src: string;
  [key: string]: unknown;
};

export const IconStyled = styled.span<IconStyledProps>`
  display: inline-block;
  border-radius: 15px;
  padding: 5px;
  background-color: #fff;
  width: fit-content;
  height: fit-content;
  line-height: 1;
  cursor: pointer;
  &::after {
    display: inline-block;
    vertical-align: bottom;
    content: '';
    width: 24px;
    height: 24px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
