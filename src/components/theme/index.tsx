import React, { createContext } from "react";

export const ThemeContext = createContext({});
export type ProviderProps = {
	children?: JSX.Element;
};

export function Provider(props: ProviderProps): JSX.Element {
	return (
		<ThemeContext.Provider value={{}}>{props.children}</ThemeContext.Provider>
	);
}
