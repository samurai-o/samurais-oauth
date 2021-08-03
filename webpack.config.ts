import { join } from "path";
import { config as env } from "dotenv";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import WorkboxWebpackPlugin from "workbox-webpack-plugin";
import { config } from "./config/index";

const isProduction = process.env.NODE_ENV == "production";

env({
	path: join(__dirname, ".env"),
});

if (isProduction) {
	config.mode = "production";
	config.output.publicPath = `/${process.env.APP_NAME}/`;
	config.plugins.push(new MiniCssExtractPlugin());

	config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
} else {
	config.mode = "development";
}

export default config;
