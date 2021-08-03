import { Configuration } from "webpack";

const optimization: Pick<Configuration, "optimization"> = {
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					name: "chunk-vendors",
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					chunks: "initial"
				},
				components: {
					name: "components",
					test: /[\\/]components[\\/]/,
					priority: -10,
					chunks: "initial"
				},
				common: {
					name: "common",
					test: /[\\/]common[\\/]/,
					priority: -10,
					chunks: "initial"
				}
			}
		}
	}
};

export default optimization.optimization;