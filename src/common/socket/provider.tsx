import { isEmpty } from "@frade-sam/samtools";
import React, { useRef, createContext, useCallback, useEffect } from "react";
import { Observable } from "rxjs";
import { webSocket, WebSocketSubject } from "rxjs/webSocket";

export type EventType = "qrcode";

export enum WebProtocol {
	"https:",
	"http:",
}

export enum SocketProtocol {
	"wss:",
	"ws:",
}

export type WebSocketProviderProps = {
	url: string;
	children?: JSX.Element | JSX.Element[];
};

export type WebSocketContextParams = {
	socket?: WebSocketSubject<Record<string, unknown>>;
	onSend: (params: {
		_event: EventType;
		data: Record<string, unknown> | string;
	}) => Observable<Record<string, unknown>> | null | undefined;
};

export const WebSocketContext = createContext<WebSocketContextParams>({
	onSend: () => null,
});
export const events: EventType[] = ["qrcode"];

export function WebSocketProvider(props: WebSocketProviderProps): JSX.Element {
	const socket = useRef<WebSocketSubject<Record<string, unknown>> | null>();
	const event = useRef<{ [key in EventType]?: Observable<Record<string, unknown>> }>({});

	useEffect(() => {
		if (!isEmpty(props.url)) {
			// 建立socket链接
			socket.current = webSocket(
				`${SocketProtocol[WebProtocol[window.location.protocol as string] as string]
				}//${props.url}`,
			);
			event.current = events.reduce<{ [key in EventType]?: Observable<Record<string, unknown>> }>(
				(a: { [key in EventType]?: Observable<Record<string, unknown>> }, b: EventType) => {
					if (a[b] || !socket.current) return a;
					a[b] = socket.current.multiplex(
						() => ({ type: "subscribe", tag: b }),
						() => ({ type: "unsubscribe", tag: b }),
						(message) => message.event === b,
					);
					return a;
				},
				event.current,
			);
		}
		return () => {
			event.current = {};
			socket.current = null;
		};
	}, [props.url]);

	const onSend = useCallback(
		(options: { _event: EventType; data: Record<string, unknown> }) => {
			if (!socket.current) return null;
			socket.current.next({ event: options._event, data: options.data });
			return event.current[options._event];
		},
		[socket.current],
	);

	return (
		<WebSocketContext.Provider
			value={{
				socket: socket.current as WebSocketSubject<Record<string, unknown>>,
				onSend,
			}}
		>
			{props.children}
		</WebSocketContext.Provider>
	);
}
