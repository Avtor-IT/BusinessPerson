const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = function buildPlugins({ paths, isDev }) {
	return [
		new HtmlWebpackPlugin({
			template: paths.html,
			favicon: './src/shared/assets/favicon.svg',
		}),
		isDev ? new webpack.ProgressPlugin() : undefined,
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
		}),
		isDev && new ReactRefreshWebpackPlugin(),
	].filter(Boolean);
};
