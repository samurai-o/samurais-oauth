/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import logtext from "@/assets/images/logtext.png";
import { AuthPageContainer, AuthRegisterAndLoginFooter, AuthRegisterAndLoginFormBox, AuthRegisterAndLoginHeader, AuthRegisterAndLoginLogo, AuthRegisterAndLoginModule, LayoutElement } from "./index.styled";
import { QRcode } from "@/components/qrcode";
import { Text } from "@/components/text";
import { Tripartite, thridoptions, TripartiteItems } from "@/components/tripartite";
import LoginPage from "./login";
import RegisterPage from "./register";

export function Auth(): JSX.Element {
	const [status, setStatus] = useState(false);
	const location = useLocation();
	useEffect(() => {
	}, [location]);

	return (
		<React.Fragment>
			<LayoutElement>
				<AuthPageContainer>
					<AuthRegisterAndLoginModule>
						<AuthRegisterAndLoginHeader>
							<AuthRegisterAndLoginLogo src={logtext} />
						</AuthRegisterAndLoginHeader>
						<AuthRegisterAndLoginFormBox>
							<div>
								<Switch>
									<Route exact path="/auth/login" component={LoginPage} />
									<Route exact path="/auth/register">
										<RegisterPage />
									</Route>
								</Switch>
							</div>
							<QRcode top={15} right={15} />
							<AuthRegisterAndLoginFooter>
								<Text.Paragraph>
									<Text>登录注册即代表同意力扣</Text>
									<Text>用户协议</Text>
									<Text>和</Text>
									<Text>隐私协议</Text>
								</Text.Paragraph>
								<Text.Paragraph>
									<Text>关于我们</Text>
									<Text>问题反馈</Text>
									<Text>帮助文档</Text>
									<Text onClick={() => setStatus(true)}>三方登录</Text>
								</Text.Paragraph>
							</AuthRegisterAndLoginFooter>
						</AuthRegisterAndLoginFormBox>
					</AuthRegisterAndLoginModule>
					<Tripartite show={status}>
						<TripartiteItems
							options={thridoptions}
							onClick={() => setStatus(false)}
						/>
					</Tripartite>
				</AuthPageContainer>
			</LayoutElement>
		</React.Fragment>
	);
}