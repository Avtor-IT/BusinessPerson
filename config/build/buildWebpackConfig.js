const buildLoaders = require('./buildLoaders');
const buildResolvers = require('./buildResolvers');
const buildPlugins = require('./buildPlugins');
const buildDevServer = require('./buildDevServer');

module.exports = function buildWebpackConfig(options) {
	const { paths, mode } = options;

	return {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
			publicPath: '/',
		},
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		plugins: buildPlugins(options),
		devtool: options.isDev ? 'inline-source-map' : undefined,
		devServer: options.isDev ? buildDevServer(options) : undefined,
	};
};
