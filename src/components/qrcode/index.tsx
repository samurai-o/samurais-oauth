import { WebSocketContext } from "../../common/socket";
import { isEmpty, isFunc, isObject } from "@frade-sam/samtools";
import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { Qrcode, ScanCode } from "./index.styled";
import { SocketMessage } from "./interface";
import { QrImage } from "./qrImage";

type QrcodeStatus = {
	payload: Record<string, unknown>;
	status: boolean;
};

export type QRcodeProps = {
	top: number;
	right: number;
};

export function QRcode(props: QRcodeProps): JSX.Element {
	const dom = useRef<HTMLDivElement>();
	const time = useRef<NodeJS.Timeout | null>();
	const { onSend } = useContext(WebSocketContext);
	const [message, setMessage] = useState<Partial<SocketMessage>>({});
	const [status, setStatus] = useState<QrcodeStatus>({
		status: false,
		payload: undefined,
	});

	const open = useCallback(
		() => {
			setStatus((_status) => {
				if (!_status.status) {
					return {
						payload: {
							time: new Date().getTime(),
							userAgent: window.navigator.userAgent,
							hostname: window.location.hostname,
						},
						status: true,
					};
				}
				return { ..._status, status: !_status.status };
			});
		},
		[status.status],
	);

	const createScanCodeTask = useCallback(
		(params: Record<string, unknown>) => {
			if (!time.current && isObject(params)) {
				time.current = setTimeout(async () => {
					const obs = onSend({
						_event: "qrcode",
						data: JSON.stringify(params),
					});
					if (!obs || !isFunc(obs.subscribe)) return;
					obs.subscribe((message: SocketMessage | Record<string, unknown>) => {
						const { type } = message;
						setMessage(message);
						if (type === 2) {
							clearTimeout(time.current as NodeJS.Timeout);
							time.current = null;
						}
					});
				}, 0);
			}
		},
		[time.current, status.status],
	);

	const update = useCallback(() => {
		if (status.status && status.payload) {
			return createScanCodeTask(status.payload);
		}
	}, [status.status, status.payload]);

	useEffect(() => {
		if (dom.current) {
			dom.current.addEventListener(
				"transitionrun",
				function (e) {
					if (e.target === e.currentTarget) {
						createScanCodeTask(status.payload);
					}
				},
				false,
			);
		}
	}, [dom.current, status.status, status.payload, time.current]);

	return (
		<Qrcode ref={dom} open={status.status} {...props}>
			<ScanCode onClick={open} open={status.status} {...props} />
			<QrImage
				update={update}
				status={isEmpty(status.payload)}
				message={message}
			/>
		</Qrcode>
	);
}
