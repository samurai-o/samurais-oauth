import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { Main } from "./router";

Sentry.init({
	dsn: "https://2835e2e9da7b4b708203b7f3b367c6fb@o937351.ingest.sentry.io/5891924",
	debug: true,
	integrations: [new Integrations.BrowserTracing()],
	release: window.APPVERSION,
	environment: window.NODE_ENV,
	tracesSampleRate: 1.0,
});

ReactDOM.render(<Main />, document.getElementById("app"));
