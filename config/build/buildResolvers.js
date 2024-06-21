module.exports = function buildResolvers(options) {
    return {
        extensions: ['.js', '.jsx', '.css', '.scss'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
};
