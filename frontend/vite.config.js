import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// ...autoAlias,
			app: path.resolve(__dirname, './src/app'),
			pages: path.resolve(__dirname, './src/pages'),
			widgets: path.resolve(__dirname, './src/widgets'),
			features: path.resolve(__dirname, './src/features'),
			entities: path.resolve(__dirname, './src/entities'),
			shared: path.resolve(__dirname, './src/shared'),
		},
	},
	base: './',
	build: {
		outDir: './docs',
		emptyOutDir: true, // also necessary
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler', // remove deprecated warning
			},
		},
	},
});
