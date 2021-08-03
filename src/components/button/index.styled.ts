import styled, { keyframes } from "styled-components";

// 类型文件
export type ButtonLoadingContainerStyledProps = {
  loading?: boolean;
};

export type LoadingIconStyledStatus = "active" | "actived";

export type LoadingIconStyledProps = {
  status: LoadingIconStyledStatus;
};

export const ButtonStyled = styled.button`
  width: 100%;
  outline: none;
  border: 0px;
  margin: 0px;
  border-radius: 4px;
  padding: 6px 10px;
  background: #fff;
  cursor: pointer;
  color: #484646;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLoadingxBOXStyled = styled.div`
  display: flex;
  align-items: center;
`;

// loading样式

export const keyframe = keyframes`
  40% {
      stroke-dasharray: 25, 20;   /* 间距改为1/4 */
  }
  100% {
      stroke-dasharray: 44, 25;   /* 间距恢复为1/2 */
      transform: rotate(720deg);
  }
`;

export const ButtonLoadingContainerStyled = styled.span<ButtonLoadingContainerStyledProps>`
  display: inline-block;
  width: ${(props) => (props.loading ? "20px" : "0")};
  height: 20px;
  margin-right: ${(props) => (props.loading ? "8px" : "0")};
  opacity: ${(props) => (props.loading ? 1 : 0)};
  overflow: hidden;
  transition: width 0.2s ease 0s, opacity 0.4s ease 0.2s,
    margin-right 0.3s ease 0s;
`;

export const ButtonLoadingStyled = styled.svg`
  margin-right: 5px;
  transition: all 0.3s ease 0s;
`;
export const LoadingCircleStyled = styled.circle`
  fill: none;
  stroke: rgb(72 113 255);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 25, 25;
  transform-origin: center;
  animation: ${keyframe} 2.3s ease-out infinite;
`;

export const LoadingIconStyled = styled.span<LoadingIconStyledProps>`
  width: 0px;
  height: 0px;
  background-color: #fff;
  border: 0px solid #319bef;
  border-radius: 50%;
  display: inline-block;
  top: 11px;
  position: absolute;
  left: 20px;
  &::before {
    content: '';
    width: ${(props) => (props.status === "active" ? "24px" : "none")};
    height: ${(props) => (props.status === "active" ? "24px" : "none")};
    left: 0px;
    top: 0px;
    position: absolute;
    transition: all 0.3s linear;
    background-image: url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI2OC44MzEgMjY4LjgzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjY4LjgzMSAyNjguODMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTIyMy4yNTUsODMuNjU5bC04MC03OS45OThjLTQuODgxLTQuODgxLTEyLjc5Ny00Ljg4MS0xNy42NzgsMGwtODAsODBjLTQuODgzLDQuODgyLTQuODgzLDEyLjc5NiwwLDE3LjY3OCAgIGMyLjQzOSwyLjQ0LDUuNjQsMy42NjEsOC44MzksMy42NjFzNi4zOTctMS4yMjEsOC44MzktMy42NjFsNTguNjYxLTU4LjY2MXYyMTMuNjU0YzAsNi45MDMsNS41OTcsMTIuNSwxMi41LDEyLjUgICBjNi45MDEsMCwxMi41LTUuNTk3LDEyLjUtMTIuNVY0Mi42NzdsNTguNjYxLDU4LjY1OWM0Ljg4Myw0Ljg4MSwxMi43OTcsNC44ODEsMTcuNjc4LDAgICBDMjI4LjEzNyw5Ni40NTUsMjI4LjEzNyw4OC41NDEsMjIzLjI1NSw4My42NTl6IiBmaWxsPSIjMzE5YmVmIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==');
    background-repeat: no-repeat;
    background-size: 10px;
    background-position-x: center;
    background-position-y: center;
  }
`;
