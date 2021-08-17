/* eslint-disable @typescript-eslint/no-explicit-any */
import "jest-styled-components";
import React from "react";
import { render } from "@testing-library/react";
import { Button } from "..";
import { ButtonLoadingContainerStyled, ButtonStyled } from "../index.styled";



describe("button", () => {
	it("ButtonStyled 样式组件快照", () => {
		const dom = render(<ButtonStyled type="button" types="forbidden" />);
		expect(dom.asFragment()).toMatchSnapshot();
	});

	it("ButtonStyled 样式组件 types", () => {
		const dom = render(<ButtonStyled type="button" types="forbidden" />);
		expect(dom.queryByRole("button")).toHaveStyleRule("background", "#ddd");
	});

	it("ButtonLoadingContainerStyled 样式组件快照", () => {
		const dom = render(<ButtonLoadingContainerStyled loading={1} />);
		expect(dom.asFragment()).toMatchSnapshot();
	});

	it("ButtonLoadingContainerStyled 样式组件props测试", () => {
		const dom = render(<ButtonLoadingContainerStyled data-testid="styles" loading={1} />);
		const stylesdom = dom.queryByTestId("styles");
		expect(stylesdom).toHaveStyleRule("width", "20px");
		expect(stylesdom).toHaveStyleRule("margin-right", "8px");
		expect(stylesdom).toHaveStyleRule("opacity", "1");
	});

	it("button 快照", () => {
		const dom = render(<Button>测试</Button>);
		expect(dom.asFragment()).toMatchSnapshot();
	});

	it("link类型组件loading状态测试", () => {
		const dom = render(<Button type="link" loading={false}>loading</Button>);
		expect(dom.queryAllByRole("svg").length).toBe(0);
	});
});