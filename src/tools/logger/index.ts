const tagLevelColor = new Map([
	["info", "#00c54f"],
	["message", "#0757a9"],
]);

// 日志输出
export function tag(level: "info" | "message", label: string, value: unknown): undefined {
	if (!window || !window.console) return;
	console.log(
		`%c${label}%c${value}`,
		"background: #6f5a5a; color: #fff;border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 2px 10px;",
		`background: ${tagLevelColor.get(
			level,
		)};color: #fff;border-top-right-radius: 2px; border-bottom-right-radius: 2px;padding: 2px 10px;`,
	);
}
