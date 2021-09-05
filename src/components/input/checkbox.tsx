/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
	CheckboxContainerStyled,
	CheckboxLabelStyled,
	CheckboxStyled,
} from "./checkbox.styled";

export type CheckboxProps = {
	children?: string | JSX.Element;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	[key: string]: unknown;
};
export function Checkbox(props: CheckboxProps): JSX.Element {
	const { children, ..._props } = props;
	return (
		<CheckboxContainerStyled>
			<CheckboxStyled type="checkbox" {..._props} />
			{children ? <CheckboxLabelStyled>{children}</CheckboxLabelStyled> : null}
		</CheckboxContainerStyled>
	);
}
