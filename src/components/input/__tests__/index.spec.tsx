import "jest-styled-components";
import React from "react";
import { render } from "@testing-library/react";
import { Input } from "..";

describe("input", () => {
	it("Input 快照", () => {
		const dom = render(<Input />);
		expect(dom.asFragment()).toMatchSnapshot();
	});

	it("CheckBox 快照", () => {
		const dom = render(<Input placeholder="checkbox" type="checkbox" />);
		expect(dom.asFragment()).toMatchSnapshot();
	});
});