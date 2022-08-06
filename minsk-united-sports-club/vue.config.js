module.exports = {
    publicPath: '/objects/minsk-united-sports-club',
    // publicPath: '.',
    productionSourceMap: false,
    chainWebpack: config => {
        config.plugin('html').tap(options => {
            options[0].minify = false;
            return options;
        });
    },
}