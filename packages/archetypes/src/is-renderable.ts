import { basename, extname } from "node:path";

const TEXT_EXTENSIONS = new Set([
	".ts",
	".tsx",
	".js",
	".jsx",
	".mjs",
	".cjs",
	".json",
	".jsonc",
	".md",
	".mdx",
	".txt",
	".css",
	".scss",
	".sass",
	".html",
	".svg",
	".xml",
	".yml",
	".yaml",
	".toml",
	".sql",
	".sh",
	".fish",
	".zsh",
]);

const TEXT_FILENAMES = new Set([
	".env",
	".gitignore",
	".gitattributes",
	".npmrc",
	".editorconfig",
	".prettierrc",
	".prettierignore",
	".eslintignore",
	".eslintrc",
	".eslintrc.json",
	".eslintrc.js",
	"LICENSE",
	"README",
	"README.md",
]);

export function isRenderable(file: string): boolean {
	const name = basename(file);

	if (TEXT_FILENAMES.has(name)) {
		return true;
	}

	return TEXT_EXTENSIONS.has(extname(file));
}
