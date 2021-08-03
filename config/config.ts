import { resolve } from "path";
import {
	Configuration,
	WebpackOptionsNormalized,
} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import optimization from "./optimization";
import { loadPlugins } from "./plugins";
import { IEnv } from "./interface";


export const config: Configuration | WebpackOptionsNormalized = {
	devtool: "source-map",
	entry: "./src/index.tsx",
	output: {
		path: resolve(__dirname, "..", "dist"),
		publicPath: "/",
		filename: "[name].[chunkhash].js",
	},
	devServer: {
		contentBase: resolve(__dirname, "../dist"),//打包后的文件路径
		host: "localhost",
		hot: true,
		hotOnly: true,
		open: true,//自动打开浏览器
		compress: true,//启动gzip压缩
		port: 3000,//端口号
		inline: true,
		historyApiFallback: true,
		disableHostCheck: true,
		overlay: true,
		stats: "errors-only",
		progress: true,
	},
	plugins: loadPlugins(process.env as IEnv),
	optimization,
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: "ts-loader",
				exclude: ["/node_modules/"],
			},
			{
				test: /\.less$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"@": resolve(__dirname, "..", "src"),
			"config": resolve(__dirname, ".")
		}
	}
};