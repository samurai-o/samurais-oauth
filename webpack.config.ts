import { join } from "path";
import { config as env } from "dotenv";
import { IEnv, webpackConfig } from "./config/index";

// const isProduction = process.env.NODE_ENV == "production";

env({
	path: join(__dirname, ".env"),
});

// if (isProduction) {
// 	config.mode = "production";
// } else {
// 	config.mode = "development";
// }

export default webpackConfig(process.env as IEnv);
