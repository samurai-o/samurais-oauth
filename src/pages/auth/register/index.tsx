/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Text } from "@/components/text";
import { useHistory } from "react-router-dom";
import { Form, FastField, Formik } from "formik";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { registerValidationSchema } from "../form/validation";
import { Errormessage } from "../form/errormessage";
import { FormField, SubmitText } from "../form/form.styled";

export type Formdata = {
	email: string;
	password: string;
	checkPassword: string;
	isSave: boolean;
};

export default function RegisterPage(): JSX.Element {
	const { push } = useHistory();
	const onsubmit = async () => {
		console.log(1);
		// throw new Error("1sss");
		// await api.register(payload);
	};

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
				checkPassword: "",
				isSave: false,
			}}
			validateOnMount
			validate={(values) => {
				return new Promise((res) => {
					if (values.password !== values.checkPassword) {
						return res({
							checkPassword: "密码不一致",
						});
					}
					return res({});
				});
			}}
			validationSchema={registerValidationSchema}
			onSubmit={onsubmit}
		>
			<Form>
				<FastField name="email">
					{(meta: Record<string, unknown>) => {
						return (
							<FormField>
								<Input
									id="email"
									type="text"
									autoComplete="username"
									placeholder="邮箱"
									{...meta.field}
								/>
								<Errormessage name="email" />
							</FormField>
						);
					}}
				</FastField>
				<FastField name="password">
					{(meta: Record<string, unknown>) => {
						return (
							<FormField>
								<Input
									id="password"
									autoComplete="current-password"
									type="password"
									placeholder="密码"
									{...meta.field}
								/>
								<Errormessage name="password" />
							</FormField>
						);
					}}
				</FastField>
				<FastField name="checkPassword">
					{(meta: Record<string, unknown>) => {
						return (
							<FormField>
								<Input
									id="checkPassword"
									autoComplete="current-password"
									type="password"
									placeholder="密码"
									{...meta.field}
								/>
								<Errormessage name="checkPassword" />
							</FormField>
						);
					}}
				</FastField>
				<FastField name="isSave">
					{(meta: Record<string, Record<string, unknown>>) => {
						return (
							<FormField>
								<Input.Checkbox
									id="isSave"
									name={meta.field.name}
									checked={meta.field.value}
									onChange={meta.field.onChange as any}
								>
									<Text>是否记住密码</Text>
								</Input.Checkbox>
								<Text onClick={() => push("/auth/login")}>
									无账号?前往注册
								</Text>
							</FormField>
						);
					}}
				</FastField>
				<Button htmlType="submit">
					<SubmitText>提交</SubmitText>
				</Button>
			</Form>
		</Formik>
	);
}
