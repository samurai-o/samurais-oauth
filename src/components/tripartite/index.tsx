import React from "react";
import { Icon } from "../icon";
import weibo from "@/assets/images/weibo.png";
import weixin from "@/assets/images/weixin.png";
import qq from "@/assets/images/qq.png";
import github from "@/assets/images/github.png";
import { TripartiteItemStyled, TripartiteStyled } from "./index.styled";

export const thridoptions = [
	{
		label: "微博",
		code: "weibo1",
		src: weibo,
	},
	{
		label: "微信",
		code: "weixin",
		src: weixin,
	},
	{
		label: "qq",
		code: "qq",
		src: qq,
	},
	{
		label: "github",
		code: "github",
		src: github,
	},
];

export type TripartiteItem = {
	src: string;
	label: string;
	code: string | number;
};

export type TripartiteProps = {
	options: TripartiteItem[];
	onClick: (code: string | number) => void;
};

export const Tripartite = TripartiteStyled;

export function TripartiteItems(props: TripartiteProps): JSX.Element {
	return (
		<TripartiteItemStyled>
			{props.options.map((opt) => (
				<Icon
					key={opt.code}
					src={opt.src}
					onClick={() => props.onClick(opt.code)}
				/>
			))}
		</TripartiteItemStyled>
	);
}
