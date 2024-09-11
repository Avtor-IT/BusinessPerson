const path = require('path');
const buildWebpackConfig = require('./config/build/buildWebpackConfig');

module.exports = (env) => {
	const paths = {
		entry: path.resolve(__dirname, 'src', 'index.jsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const mode = env.mode || 'development';
	const PORT = env.port || 3000;
	const isDev = mode === 'development';

	return buildWebpackConfig({
		mode,
		paths,
		port: PORT,
		isDev,
	});
};
