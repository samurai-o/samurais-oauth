import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, InputProps } from ".";

export default {
	title: "Components/Input",
	component: Input,
	argTypes: {
		name: {
			description: "字段key",
			control: { type: null },
			type: { required: false },
		},
		id: {
			description: "字段id",
			control: { type: null },
			type: { required: false },
		},
		value: {
			description: "字段值",
			control: { type: null },
			type: { required: false },
		},
		placeholder: {
			defaultValue: "描述文本",
			description: "input描述文本",
			type: { required: false },
		},
		prefix: {
			description: "前缀",
			control: { type: null }
		},
		suffix: {
			description: "后缀",
			control: { type: null }
		},
		type: {
			defaultValue: { summary: "text" },
			description: "input输入类型",
			type: { options: ["text", "checkbox", "reset", "file", "password", "radio"], required: false },
			control: { type: "select" }
		}
	},
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	placeholder: "请输入字段",
	type: "text",
	onChange: (e) => {
		e.stopPropagation();
		console.log(e, e.target.value);
	}
} as InputProps;

