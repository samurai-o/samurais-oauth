import { resolve } from "path";
import {
	Configuration,
	WebpackOptionsNormalized,
} from "webpack";
import apiMock from "mocker-api";
import optimization from "./optimization";
import { loadPlugins } from "./plugins";
import { IEnv } from "./interface";
import { loaders } from "./loaders";
import { getMockFiles } from "./utils";


export const config: Configuration & Pick<WebpackOptionsNormalized, "devServer"> = {
	devtool: "source-map",
	entry: "./src/index.tsx",
	output: {
		path: resolve(__dirname, "..", "dist"),
		filename: "[name].[chunkhash].js",
	},
	plugins: loadPlugins(process.env as IEnv),
	optimization,
	module: {
		...loaders(process.env as IEnv),
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			"@": resolve(__dirname, "..", "src"),
			"config": resolve(__dirname, ".")
		}
	}
};

export function webpackConfig(env: IEnv): Configuration | WebpackOptionsNormalized {
	const prds = ["production"];
	// 生产环境下的处理
	if (prds.includes(env.NODE_ENV)) {
		config.mode = "production";
		config.output.publicPath = `/${env.APP_NAME}/`;
		return config;
	}
	config.devServer = {
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
		before: (app) => {
			const paths = getMockFiles(resolve(__dirname, "../mock/"));
			apiMock(app, paths, { changeHost: true });
		}
	};
	config.mode = "development";
	config.output.publicPath = "/";
	return config;
}