import fs from "fs";

export function getMockFiles(path: string): string[] {
	const paths = fs.readdirSync(path);
	return paths.map((str) => {
		if (path.endsWith("/")) return `${path}${str}`;
		return `${path}/${str}`;
	});
}