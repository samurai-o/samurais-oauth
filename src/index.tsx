import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { Main } from "./router";
const { NODE_ENV, APPVERSION } = process.env;

Sentry.init({
	dsn: "https://b3280df6c5ba4a8aa2a8ef95eafa4588@o937351.ingest.sentry.io/5887815",
	integrations: [new Integrations.BrowserTracing()],
	release: `${NODE_ENV}@${APPVERSION}`,
	tracesSampleRate: 1.0,
});

ReactDOM.render(<Main />, document.getElementById("app"));
