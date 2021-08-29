/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes } from "react";
// import { Checkbox } from "./checkbox";
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
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "placeholder">;

/**
 * 输入框
 * @param props 
 * @returns 
 */
export function Input(props: InputProps): JSX.Element {
	const { prefix, suffix, ..._props } = props;
	return (
		<InputContainerElement>
			{/** 前缀,存在前缀就插入 */}
			{prefix ? <PrefixElement>{prefix}</PrefixElement> : null}
			<InputElement {..._props} />
			{/** 后缀 */}
			{suffix ? <SuffixElement>{suffix}</SuffixElement> : null}
		</InputContainerElement>
	);
}
