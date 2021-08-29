/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, FastField, Formik } from "formik";
import Input from "@/components/input";
import { useHistory } from "react-router-dom";
import { Text } from "@/components/text";
import { Button } from "@/components/button";
// import api from '@/common/apis';
import { Errormessage } from "../form/errormessage";
import { loginValidationSchema } from "../form/validation";
import { FormField, SubmitText } from "../form/form.styled";

export type Formdata = {
	email: string;
	password: string;
	isSave: boolean;
};

export default function LoginPage(): JSX.Element {
	const { push } = useHistory();

	const onsubmit = async () => {
		throw new Error("1sss");
		// np.start();
		// await api.login(payload);
		let stop = setTimeout(() => {
			// np.done();
			clearTimeout(stop);
			stop = null;
		}, 1000);
	};

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
				isSave: false,
			}}
			validationSchema={loginValidationSchema}
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
								<Text onClick={() => push("/auth/register")}>
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
