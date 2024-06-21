module.exports = function buildSvgLoader() {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
};
