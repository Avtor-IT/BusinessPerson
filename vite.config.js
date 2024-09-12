import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoAlias from './config/autoAlias.js';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			...autoAlias,
		},
	},
});