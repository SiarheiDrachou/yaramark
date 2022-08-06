module.exports = {
    publicPath: '/objects/parish-of-the-church-of-the-intercession-of-the-most-holy-theotokos',
    // publicPath: '.',
    productionSourceMap: false,
    chainWebpack: config => {
        config.plugin('html').tap(options => {
            options[0].minify = false;
            return options;
        });
    },
}