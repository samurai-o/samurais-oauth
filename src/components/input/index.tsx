/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Checkbox } from "./checkbox";
import { InputContainerElement, InputStyled, PrefixElement, SuffixElement } from "./index.styled";

export type InputType =
  | "checkbox"
  | "file"
  | "hidden"
  | "image"
  | "password"
  | "radio"
  | "text";
export type InputProps = {
  id?: string;
  name?: string;
  value?: any;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  placeholder?: string;
  type?: InputType;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
};

/**
 * 输入框
 * @param props 
 * @returns 
 */
export default function Input(props: InputProps): JSX.Element {
	const { prefix, suffix, ..._props } = props;
	return (
		<InputContainerElement>
			{/** 前缀,存在前缀就插入 */}
			{prefix ? <PrefixElement>{prefix}</PrefixElement> : null}
			<InputStyled {..._props} />
			{/** 后缀 */}
			{suffix ? <SuffixElement>{suffix}</SuffixElement> : null}
		</InputContainerElement>
	);
}

Input.Checkbox = Checkbox;
