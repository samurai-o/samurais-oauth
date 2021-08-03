import styled from "styled-components";
import loading from "@/assets/images/loading.png";

export type QrcodeUpdateProps = {
  show?: boolean;
};

export type QrcodeUpdateIconProps = {
  status?: boolean;
};


/** 二维码图片容器 */
export const Qrcode = styled.div`
  width: 60%;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  // &::after {
  //   content: '';
  //   padding-top: 100%;
  //   display: block;
  // }
`;

/** 二维码图片 */
export const QrcodeImage = styled.img`
  width: 100%;
  height: 100%;
`;

/** 二维码更新 */
export const QrcodeUpdate = styled.div<QrcodeUpdateProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.show ? "0" : "1")};
  pointer-events: ${(props) => (props.show ? "none" : "all")};
  top: 0;
  background: #00000059;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

/** 刷新按钮 */
export const QrcodeUpdateIcon = styled.i<QrcodeUpdateIconProps>`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url(${loading});
  background-repeat: no-repeat;
  background-size: cover;
  animation: turn 1s linear infinite;
  animation-play-state: ${(props) => (props.status ? "running" : "paused")};
`;

/** 更新文字 */
export const QrcodeUpdateMessage = styled.span`
  display: inline-block;
  width: auto;
  color: #fff;
  margin-left: 10px;
`;
