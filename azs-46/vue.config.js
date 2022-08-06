module.exports = {
    publicPath: '/objects/azs-46',
    // publicPath: '.',
    productionSourceMap: false,
    chainWebpack: config => {
        config.plugin('html').tap(options => {
            options[0].minify = false;
            return options;
        });
    },
}