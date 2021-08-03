import styled from "styled-components";
import scancode from "@/assets/images/scancode.png";
import close from "@/assets/images/close.png";

export type QrcodeProps = {
  top: number;
  right: number;
  open: boolean;
};

export const Qrcode = styled.div<QrcodeProps>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  justify-content: center;
  position: absolute;
  z-index: 10;
  overflow: hidden;
  top: ${(props) => (props.open ? "0px" : `${props.top}px`)};
  right: ${(props) => (props.open ? "0px" : `${props.right}px`)};
  width: ${(props) => (props.open ? "100%;" : "24px;")}
  height: ${(props) => (props.open ? "100%;" : "24px;")}
  background-color: ${(props) => (props.open ? "rgb(72 113 255)" : "#fff")};
  transition: all 0.3s ease-out 0s;
`;

// 二维码
export const ScanCode = styled.i<QrcodeProps>`
  counter-reset: section 2;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${(props) => (!props.open ? "0px" : `${props.top}px`)};
  right: ${(props) => (!props.open ? "0px" : `${props.right}px`)};
  z-index: 10;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #fff;
  &::after {
    content: '';
    width: 18px;
    height: 18px;
    display: inline-block;
    background: url(${(props) => (props.open ? close : scancode)});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
