/// <reference types="vitest" />
import {defineConfig} from "vite";

import typescript from "@rollup/plugin-typescript";
import path from "node:path";
import {typescriptPaths} from "rollup-plugin-typescript-paths";

const __dirname = path.resolve();

export default defineConfig({
	plugins: [typescript()],
	resolve: {},
	test: {
		environment: "happy-dom",
		include: ["src/**/*.test.ts"],
		coverage: {
			provider: "v8",
			reporter: ["text", "html"],
		},
	},
	build: {
		manifest: true,
		minify: false,
		reportCompressedSize: true,
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			fileName: "index",
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: [],
			plugins: [
				typescriptPaths({
					preserveExtensions: true,
					tsConfigPath: path.resolve(__dirname, "tsconfig.node.json"),
				}),
				typescript({
					sourceMap: true,
					declaration: true,
					outDir: "dist",
					tsconfig: path.resolve(__dirname, "tsconfig.node.json"),
				}),
			],
		},
	},
});
