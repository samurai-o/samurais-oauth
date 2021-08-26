import "jest-styled-components";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Button } from "..";
import { ButtonElement } from "../index.styled";



describe("button 组件测试", () => {
	test("ButtonElement 样式组件快照", () => {
		const dom = render(<ButtonElement type="button" pattern="default" >按钮</ButtonElement>);
		expect(dom.asFragment()).toMatchSnapshot();
	});

	test("Button disabled false测试", () => {
		const click = jest.fn();
		const dom = render(<Button htmlType="button" disabled={false} pattern="default" loading={false} onClick={click}>按钮</Button>);
		fireEvent.click(dom.getByRole("button"));
		expect(click).toBeCalled();
	});

	test("button 快照", () => {
		const click = jest.fn();
		const dom = render(<Button htmlType="button" disabled pattern="default" onClick={click}>测试</Button>);
		expect(dom.asFragment()).toMatchSnapshot();
	});

	test("link 快照", () => {
		const dom = render(<Button htmlType="button" pattern="link" disabled>链接</Button>);
		expect(dom.getByText("链接")).toBeInTheDocument();
		expect(dom.asFragment()).toMatchSnapshot();
	});

	test("link类型组件样式测试", () => {
		const dom = render(<ButtonElement data-testid="ButtonTypeTest" pattern="default" type="button">forbidden</ButtonElement>);
		const styledom = dom.queryByTestId("ButtonTypeTest");
		expect(styledom).toHaveStyleRule("background", "#fff");
		expect(styledom).toHaveStyleRule("box-shadow", "6px 0 16px -8px rgb(0 0 0 / 8%),9px 0 28px 0 rgb(0 0 0 / 0%)");
	});
});