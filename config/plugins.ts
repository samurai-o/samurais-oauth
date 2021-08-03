/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	AutomaticPrefetchPlugin,
	BannerPlugin,
	ProgressPlugin,
	DefinePlugin
} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import HtmlWebpackExternalsPlugin from "html-webpack-externals-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CompressionWebpackPlugin from "compression-webpack-plugin";
import SentryWebpackPlugin from "@sentry/webpack-plugin";
import { resolve } from "path";
import { IEnv } from "./interface";
import pkg from "../package.json";

const prodGzipList = ["js", "css", "png", "jpeg", "gif"];

const plugins = [
	new HtmlWebpackPlugin({
		template: "public/index.html",
		title: "cdn",
		favicon: "public/icon.ico",
		inject: true
	}),
	new AutomaticPrefetchPlugin(),
	new BannerPlugin({ banner: "samurais" }),
	new ProgressPlugin({
		activeModules: true,
		percentBy: "modules"
	}),
	new HtmlWebpackExternalsPlugin({
		externals: [
			{
				module: "react",
				entry: "https://www.unpkg.com/react@17.0.1/umd/react.production.min.js",
				global: "React",
			},
			{
				module: "react-dom",
				entry: "https://www.unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js",
				global: "ReactDOM",
			},
		]
	})
];



export function loadPlugins(env: IEnv): any[] {
	plugins.push(new DefinePlugin({
		"process.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
		"process.env.APPVERSION": JSON.stringify(pkg.version),
	}));
	if (env.NODE_ENV === "production") {
		plugins.push(new CompressionWebpackPlugin({
			algorithm: "gzip", // 指定生成gzip格式
			test: new RegExp("\\.(" + prodGzipList.join("|") + ")$"), // 匹配哪些格式文件需要压缩
			threshold: 10240, //对超过10k的数据进行压缩
			minRatio: 0.6, // 压缩比例，值为0 ~ 1
		}));
		plugins.push(new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [resolve(__dirname, "..", "dist")]
		}));
		plugins.push(new BundleAnalyzerPlugin({
			analyzerMode: "static",
			reportFilename: "report.html",
			defaultSizes: "gzip",
			openAnalyzer: false,
			logLevel: "info",
		}));
		plugins.push(new SentryWebpackPlugin({
			release: `${env.NODE_ENV}@${pkg.version}`,
			include: resolve(__dirname, "../dist/"),
			ignore: ["node_modules", "webpack.config.ts"],
			configFile: resolve(__dirname, "../.sentryclirc"),
			urlPrefix: "~/auth"
		}));
	}
	return plugins;
}
