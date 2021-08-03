import styled from "styled-components";


export type TripartiteStyledProps = {
  show?: boolean;
};


export const TripartiteStyled = styled.div<TripartiteStyledProps>`
  position: absolute;
  bottom: ${(props) => (props.show ? "0px" : "34px")};
  background: #fff;
  width: 96%;
  left: 2%;
  padding: 1px 20px;
  z-index: 5;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: 6px 0 16px -8px rgb(0 0 0 / 30%), 9px 0 28px 0 rgb(0 0 0 / 12%);
  transition: all 0.3s ease 0s;
`;

export const TripartiteItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
