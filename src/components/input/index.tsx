/* eslint-disable @typescript-eslint/no-explicit-any */
import { isFunc } from "@frade-sam/samtools";
import React, { InputHTMLAttributes, useCallback, EventHandler, SyntheticEvent } from "react";
import { Checkbox, CheckboxProps } from "./checkbox";
import { InputContainerElement, InputElement, PrefixElement, SuffixElement } from "./index.styled";

export type InputType =
	| "checkbox"
	| "file"
	| "hidden"
	| "image"
	| "password"
	| "radio"
	| "text";
export type InputProps<V = any> = {
	id?: string;
	name?: string;
	value?: V;
	prefix?: JSX.Element;
	suffix?: JSX.Element;
	placeholder?: string;
	type?: InputType;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "placeholder"> & Pick<CheckboxProps, "children">;

/**
 * 输入框
 * @param props 
 * @returns 
 */
export function Input(props: InputProps): JSX.Element {
	const { prefix, suffix, children, onChange, value, ..._props } = props;
	const _onChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			if (isFunc(onChange)) {
				if (props.type === "checkbox") {
					const _event = { ...event, target: { ...event.target, value: event.target.checked } };
					(_event as any).__proto__ = (_event as any).__proto__;
					return onChange(_event as any);
				}
				return onChange(event);
			}
		},
		[onChange, props.type],
	);


	if (props.type === "checkbox") return <Checkbox onChange={_onChange} checked={!!props.value} {..._props}>{children}</Checkbox>;

	return (
		<InputContainerElement>
			{/** 前缀,存在前缀就插入 */}
			{prefix ? <PrefixElement>{prefix}</PrefixElement> : null}
			<InputElement value={value} onChange={_onChange} {..._props} />
			{/** 后缀 */}
			{suffix ? <SuffixElement>{suffix}</SuffixElement> : null}
		</InputContainerElement>
	);
}

Input.Checkbox = Checkbox;