module.exports = {
    publicPath: '/technical_competence',
    // publicPath: '.',
    productionSourceMap: false,
    chainWebpack: config => {
        config.plugin('html').tap(options => {
            options[0].minify = false;
            return options;
        });
    },
}