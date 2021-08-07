import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IEnv } from "./interface";


export function loaders(env: IEnv): ModuleOptions {
	const prds = ["production"];
	const lessloader = ["css-loader", "postcss-loader", "less-loader"];
	const cssloader = ["css-loader", "postcss-loader"];
	const rules = [
		{
			test: /\.(ts|tsx)$/i,
			loader: "ts-loader",
			exclude: ["/node_modules/"],
		},
		{
			test: /\.less$/i,
			use: lessloader,
		},
		{
			test: /\.css$/i,
			use: ["css-loader", "postcss-loader"],
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
			type: "asset",
		},
	];

	if (prds.includes(env.NODE_ENV)) {
		lessloader.unshift(MiniCssExtractPlugin.loader);
		cssloader.unshift(MiniCssExtractPlugin.loader);
	}

	return {
		rules,
	};
}