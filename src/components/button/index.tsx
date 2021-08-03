import React from "react";
import { useMemo } from "react";
import {
	ButtonLoadingContainerStyled,
	ButtonLoadingStyled,
	ButtonLoadingxBOXStyled,
	ButtonStyled,
	LoadingCircleStyled,
} from "./index.styled";

export type ButtonType = "button" | "submit" | "reset";
export type ButtonProps = {
	type?: ButtonType;
	loading?: boolean;
	children?: string | JSX.Element;
};

export function Button(props: ButtonProps): JSX.Element {
	const { type = "button", children, loading } = props;
	const content = useMemo(() => {
		const _con = [children];
		_con.unshift(
			<ButtonLoadingContainerStyled key="loading" loading={loading}>
				<ButtonLoadingStyled width="20" height="20">
					<LoadingCircleStyled cx="10" cy="10" r="8" />
				</ButtonLoadingStyled>
			</ButtonLoadingContainerStyled>,
		);
		return _con;
	}, [loading, children]);
	return (
		<ButtonStyled type={type}>
			<ButtonLoadingxBOXStyled>{content}</ButtonLoadingxBOXStyled>
		</ButtonStyled>
	);
}
