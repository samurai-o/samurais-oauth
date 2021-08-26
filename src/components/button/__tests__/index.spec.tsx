import "jest-styled-components";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Button } from "..";
import { ButtonElement } from "../index.styled";



describe("button 组件测试", () => {
	test("ButtonElement 样式组件快照", () => {
		const dom = render(<ButtonElement type="button" pattern="forbidden" >按钮</ButtonElement>);
		expect(dom.asFragment()).toMatchSnapshot();
	});

	test("Button disabled测试", () => {
		const click = jest.fn();
		const dom = render(<Button htmlType="button" disabled={false} pattern="forbidden" onClick={click}>按钮</Button>);
		fireEvent.click(dom.getByRole("button"));
		expect(click).toBeCalled();
	});

	test("button 快照", () => {
		const dom = render(<Button>测试</Button>);
		expect(dom.asFragment()).toMatchSnapshot();
	});

	test("link类型组件样式测试", () => {
		const dom = render(<ButtonElement data-testid="ButtonTypeTest" pattern="forbidden" type="button">forbidden</ButtonElement>);
		const styledom = dom.queryByTestId("ButtonTypeTest");
		expect(styledom).toHaveStyleRule("background", "#fff");
		expect(styledom).toHaveStyleRule("box-shadow", "6px 0 16px -8px rgb(0 0 0 / 8%),9px 0 28px 0 rgb(0 0 0 / 0%)");
	});

	test("link类型组件loading状态测试", () => {
		const dom = render(<Button pattern="link" loading={false}>loading</Button>);
		expect(dom.queryAllByRole("svg").length).toBe(0);
	});
});