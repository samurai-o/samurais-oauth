import React from "react";
import {
	Qrcode,
	QrcodeImage,
	QrcodeUpdate,
	QrcodeUpdateIcon,
	QrcodeUpdateMessage,
} from "./qrImage.styled";
import { imagedata } from "./data";
import { SocketMessage } from "./interface";

export type QrImageProps = {
	update: () => void;
	status: boolean;
	message: Partial<SocketMessage>;
};

/**
 * 二维码容器
 * @param props
 */
export function QrImage(props: QrImageProps): JSX.Element {
	const { update, status, message } = props;
	return (
		<Qrcode>
			<QrcodeImage src={message.data ? message.data : imagedata} />
			<QrcodeUpdate onClick={update} show={!!message.data}>
				<QrcodeUpdateIcon status={status} />
				<QrcodeUpdateMessage>{message.message}</QrcodeUpdateMessage>
			</QrcodeUpdate>
		</Qrcode>
	);
}
