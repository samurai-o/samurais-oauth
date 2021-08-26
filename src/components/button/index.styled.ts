import styled, { keyframes } from "styled-components";
import { ButtonLoadingElementProps, ButtonElementProps, ButtonPattern } from "./interface";

const play = keyframes`
    from {
      width: 0%;
    }
    to {
      width:98%;
    }
`;

const replay = keyframes`
    from {
      width: 0%;
    }
    to {
      width:98%;
    }
`;


export const ButtonColors: Record<ButtonPattern, string> = {
	default: "#fff",
	primary: "#ddd",
	link: "blue",
	forbidden: "red",
};

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
    width: 0;
    height: 4px;
    background: #000000a6;
    animation-name: ${props => props.recover ? play : replay};
    animation-duration: 10s;
    animation-timing-function: ease-out;
    animation-play-state: ${props => props.isPlay ? "running" : "paused"};
    animation-fill-mode: backwards;
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
  background: ${props => ButtonColors[props.pattern]};
  box-shadow: ${props => props.pattern === "default" ? "6px 0 16px -8px rgb(0 0 0 / 8%), 9px 0 28px 0 rgb(0 0 0 / 0%)" : "#fff"};
`;

export const ButtonLoadingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkElement = styled.a`
  
`;
