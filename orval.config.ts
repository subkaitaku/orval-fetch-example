import { defineConfig } from "orval";

export default defineConfig({
	iten: {
		input: "./schema.yaml",
		output: {
			target: "./src/generated/endpoints.ts",
			client: "fetch",
			mock: true,
		},
	},
});
