import React from "react";
import { Checkbox } from "./checkbox";
import { InputStyled } from "./index.styled";

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
  value?: unknown;
  placeholder?: string;
  type?: InputType;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
};
export default function Input(props: InputProps): JSX.Element {
	return (
		<React.Fragment>
			<InputStyled {...props} />
		</React.Fragment>
	);
}

Input.Checkbox = Checkbox;
