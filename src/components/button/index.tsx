import { isFunc } from "@frade-sam/samtools";
import React, { useCallback } from "react";
import {
	ButtonLoadingElement,
	ButtonLoadingContainer,
	ButtonElement,
	LinkElement
} from "./index.styled";
import { ButtonHtmlType, ButtonPattern } from "./interface";

export type ButtonProps = {
	pattern?: ButtonPattern,
	htmlType?: ButtonHtmlType;
	disabled?: boolean;
	loading?: boolean;
	children?: string | JSX.Element;
	onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
};

/**
 * button按钮
 * @param props 
 * @returns 
 */
export function Button(props: ButtonProps): JSX.Element {
	const { htmlType = "button", pattern = "default", children, loading = false } = props;
	const _onClick = useCallback((e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
		if (props.loading) return;
		// 禁止默认事件
		if (props.disabled) e.preventDefault();
		if (isFunc(props.onClick) && !props.disabled) props.onClick(e);
	}, [props]);

	if (pattern === "link") return <LinkElement onClick={_onClick}>{children}</LinkElement>;

	return (
		<ButtonElement type={htmlType} pattern={pattern} onClick={_onClick}>
			<ButtonLoadingContainer>
				{children}
				<ButtonLoadingElement isPlay={loading} recover={loading} />
			</ButtonLoadingContainer>
		</ButtonElement>
	);
}