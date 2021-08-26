import styled, { keyframes } from "styled-components";
import { ButtonLoadingElementProps, ButtonElementProps } from "./interface";

const buttonloading = keyframes`
    from {
      width:0
    }
    to {
      width:90%
    }
`;

// loading进度
export const ButtonLoadingElement = styled.span<ButtonLoadingElementProps>`
  display: block;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  &::before {
    display: block;
    content: "";
    width: 100%;
    height: 4px;
    background: #000000a6;
    animation: ${buttonloading} 10s ease-out;
    animation-play-state: ${props => props.isPlay ? "running" : "paused"};
  }
`;

export const ButtonElement = styled.button<ButtonElementProps>`
  position: relative;
  width: 100%;
  outline: none;
  border: 0px;
  margin: 0px;
  border-radius: 4px;
  padding: 10px 14px;
  background: #fff;
  cursor: pointer;
  color: #484646;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${props => props.pattern === "forbidden" ? "#fff" : "#fff"};
  box-shadow: ${props => props.pattern === "forbidden" ? "6px 0 16px -8px rgb(0 0 0 / 8%), 9px 0 28px 0 rgb(0 0 0 / 0%)" : "#fff"};
`;

export const ButtonLoadingContainer = styled.div`
  display: flex;
  align-items: center;
`;
