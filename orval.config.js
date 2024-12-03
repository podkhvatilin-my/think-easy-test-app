import { defineConfig } from 'orval'

export default defineConfig({
	posts: {
		input: {
			target: 'https://frontend-test-be.stage.thinkeasy.cz/api-json',
		},
		output: {
			target: './src/api/posts.ts',
			schemas: './src/api/model',
			mode: 'split',
			baseUrl: '/api',
			client: 'react-query',
		},
	},
})