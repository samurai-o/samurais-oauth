import React from "react";
import { useMemo } from "react";
import {
	ButtonHtmlType,
	ButtonLoadingContainerStyled,
	ButtonLoadingStyled,
	ButtonLoadingxBOXStyled,
	ButtonStyled,
	ButtonType,
	LoadingCircleStyled,
} from "./index.styled";

export type ButtonProps = {
	type?: ButtonType,
	htmlType?: ButtonHtmlType;
	loading?: boolean;
	children?: string | JSX.Element;
};

export function Button(props: ButtonProps): JSX.Element {
	const { htmlType = "button", type = "forbidden", children, loading = false } = props;
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
		<ButtonStyled type={htmlType} types={type}>
			<ButtonLoadingxBOXStyled>{content}</ButtonLoadingxBOXStyled>
		</ButtonStyled>
	);
}
