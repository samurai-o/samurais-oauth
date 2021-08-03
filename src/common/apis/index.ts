import { Network } from "@samuras/samurai-network";
import { Account } from "./interface";

class Api extends Network {
	// constructor() {
	//   super();
	// }

	@Network.Get("/api/checkLogin")
	async check(params: Record<string, unknown>): Promise<Record<string, unknown>> {
		return params;
	}

	@Network.Post("/api/login")
	async login(params: Account, data?: Record<string, unknown>) {
		const url = window.document.referrer
			? window.document.referrer
			: `${window.location.origin}`;
		if (data.data) window.location.href = url;
		return data;
	}

	@Network.Post("/api/register")
	async register(params: Account, data?: Record<string, unknown>) {
		const url = window.document.referrer
			? window.document.referrer
			: `${window.location.origin}`;
		if (data.data) window.location.href = url;
		return data;
	}
}

export default new Api();
