module.exports = {
    publicPath: '/objects/stroytrest-1',
    // publicPath: '.',
    productionSourceMap: false,
    chainWebpack: config => {
        config.plugin('html').tap(options => {
            options[0].minify = false;
            return options;
        });
    },
}