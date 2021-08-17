import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonProps } from ".";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		loading: {
			defaultValue: { summary: false },
			description: "loading状态",
			type: { required: false },
		},
		type: {
			defaultValue: { summary: "forbidden" },
			description: "按钮类型",
			type: { options: ["forbidden", "link"], required: false },
			control: { type: "select" }
		},
		children: {
			description: "子元素",
			control: { type: null }
		},
		htmlType: {
			defaultValue: { summary: "button" },
			description: "按钮类型",
			type: { options: ["button", "submit", "reset"], required: false },
			control: { type: "select" }
		}
	}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = {
	children: "提交",
	loading: false,
	type: "forbidden",
	htmlType: "button"
} as ButtonProps;

export const Link = Template.bind({});
Link.args = {
	children: "链接",
	loading: false,
	type: "link",
	htmlType: "button",
} as ButtonProps;