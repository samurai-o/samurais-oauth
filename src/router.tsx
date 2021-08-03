import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import { Router } from 'react-router';
import { Globalstyle } from "./global.styled";
import { Auth } from "./pages/auth";


export function Main(): JSX.Element {
	return (
		<div>
			<Globalstyle />
			<Router>
				<Switch>
					<Route path="/auth" component={Auth} />
				</Switch>
				<Redirect to="/auth/login" />
			</Router>
		</div>
	);
}