import React, { useEffect, useRef, useState } from "react";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	NormalizedCacheObject
} from "@apollo/client";
import { GraphqlContext } from "./context";


export type GraphqlClientConnects = {
	[key: string]: ApolloClient<NormalizedCacheObject>;
}

export type GraphqlClientProps = {
	uri: string;
	children: JSX.Element;
}

export function GraphqlClient(props: GraphqlClientProps): JSX.Element {
	const [uri, setUri] = useState(props.uri);
	const clientRef = useRef<GraphqlClientConnects>({});
	useEffect(() => {
		if (clientRef.current && clientRef.current[uri]) return () => { clientRef.current = null; };
		clientRef.current[uri] = new ApolloClient({
			uri: uri,
			cache: new InMemoryCache(),
		});
	}, [uri]);
	if (!clientRef.current[uri]) return null;

	return (
		<ApolloProvider client={clientRef.current[uri]}>
			<GraphqlContext.Provider value={{
				uri,
				setUri
			}}>
				{props.children}
			</GraphqlContext.Provider>
		</ApolloProvider>
	);
}