const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { options } = require('axios');

module.exports = function buildScssLoader(isDev) {
	return {
		test: /\.(sa|c|sc)ss$/,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: /[A-Za-z]+\.module\.(sass|scss|css)+/i,
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]',
					},
				},
			},
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: [
							[
								'autoprefixer',
								{
									overrideBrowserslist: [
										'ie >= 8',
										'not dead',
										'iOS >= 9',
										'last 4 version',
										'> 1%',
									],
								},
							],
						],
					},
				},
			},
			'sass-loader',
		],
	};
};
