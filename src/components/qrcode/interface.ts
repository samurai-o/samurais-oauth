export interface SocketMessage {
  event: string;
  type: number;
  data: string;
  message?: string;
}

export enum ScancodeAction {
  "code", // 二维码生成
  "scan", // 扫码
  "abolish", // 二维码超时过期
}
