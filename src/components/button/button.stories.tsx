import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: "提交",
	loading: false,
	type: "forbidden"
};