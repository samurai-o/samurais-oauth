import styled from "styled-components";
import scancode from "@/assets/images/scancode.png";
import bgimg from "@/assets/images/bgimg.png";
export const LayoutElement = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  &:before {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    filter: blur(20px);
    background: url(${bgimg});
    background-size: cover;
    background-repeat: no-repeat;
    transform: scale(1.2);
  }
`;

export const AuthPageContainer = styled.div`
  padding-bottom: 34px;
  position: relative;
`;

export const AuthRegisterAndLoginModule = styled.div`
  width: 380px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 8;
  border-radius: 16px;
  background: rgb(72 113 255);
  box-shadow: 6px 0 16px -8px rgb(0 0 0 / 30%), 9px 0 28px 0 rgb(0 0 0 / 12%);
`;

export const AuthRegisterAndLoginHeader = styled.div`
  display: flex;
  padding: 30px 40px 20px 40px;
`;

export const AuthRegisterAndLoginLogo = styled.img`
  width: auto;
  height: 40px;
  object-fit: contain;
`;

export const AuthRegisterAndLoginFormBox = styled.div`
  width: 100%;
  flex: 1;
  padding: 20px 40px;
`;

export const AuthRegisterAndLoginFooter = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 二维码
export const ScanCode = styled.i`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
  top: 15px;
  right: 15px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #fff;
  &::after {
    content: '';
    width: 18px;
    height: 18px;
    display: inline-block;
    background: url(${scancode});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
