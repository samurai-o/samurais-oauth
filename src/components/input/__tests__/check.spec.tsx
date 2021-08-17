import "jest-styled-components";
import React from "react";
import { render } from "@testing-library/react";
import Input from "..";

describe("checkbox 组件测试", () => {
	test("checkbox 快照", () => {
		const dom = render(<Input.Checkbox>猜测</Input.Checkbox>);
		expect(dom.asFragment()).toMatchSnapshot();
	});
});