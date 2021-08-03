import React from "react";
import { ParagraphStyled, TextStyled } from "./index.styled";

type ParagraphProps = {
  children: string | JSX.Element | JSX.Element[];
  [key: string]: unknown;
};
function Paragraph(props: ParagraphProps) {
	const { children, ..._props } = props;
	return <ParagraphStyled {..._props}>{children}</ParagraphStyled>;
}

export type TextProps = {
  children: string;
  [key: string]: unknown;
};

export function Text(props: TextProps): JSX.Element {
	const { children, ..._props } = props;
	return <TextStyled {..._props}>{children}</TextStyled>;
}

Text.Paragraph = Paragraph;
