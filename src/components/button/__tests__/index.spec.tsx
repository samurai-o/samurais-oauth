/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render } from "@testing-library/react";
import { Button } from "..";

describe("button", () => {
	it("快照", () => {
		const dom = render(<Button>测试</Button>);
		expect(dom.asFragment()).toMatchSnapshot();
	});
});