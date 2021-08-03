import React from "react";
import { IconStyled, IconStyledProps } from "./index.styled";

export function Icon(props: IconStyledProps): JSX.Element {
	return <IconStyled {...props} />;
}
