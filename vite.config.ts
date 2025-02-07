// vite.config.ts
import { defineConfig } from "vite";

import typescript from "@rollup/plugin-typescript";
import path from "node:path";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

const __dirname = path.resolve();

export default defineConfig({
  plugins: [typescript()],
  resolve: {},
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
        }),
        typescript({
          sourceMap: true,
          declaration: true,
          outDir: "dist",
        }),
      ],
    },
  },
});
