const buildScssLoader = require('./loaders/buildScssLoader');
const buildSvgLoader = require('./loaders/buildSvgLoader');
module.exports = function buildLoaders(options) {
    const sassLoader = buildScssLoader(options.isDev);
    const svgLoader = buildSvgLoader();
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const babelLoader = {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react'],
                plugins: ["@babel/plugin-proposal-export-default-from"]
            },
        },
    };
    return [sassLoader, svgLoader, fileLoader, babelLoader];
};
