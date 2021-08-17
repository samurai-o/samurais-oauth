module.exports = {
	core: {
		builder: "webpack5",
	},
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-info",
		"storybook/addon-outline",
		"@storybook/addon-measure",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-postcss",
	],
};
