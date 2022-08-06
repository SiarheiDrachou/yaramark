const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = (api, options) => {
    let staticDir = path.join(__dirname, options.outputDir);
    let outputDir = path.join(__dirname, 'prerender');
    let routes = [
        '/',
        // '/objects',
        // '/about_us',
        // '/equipment_rental',
        // '/technical_competence',
        // '/АЗС-64',
        // '/АЗС-46',
        // '/АЗС-80',
        // '/Компания-по-управлению-недвижимостью-индустриального-парка',
        // '/Храм-Вилейка',
        // '/Республиканский-центр-обработки-данных',
        // '/Санвест',
        // '/Флоренс-компани',
        // '/Социально-педагогический-центр',
        // '/Минский-объединенный-спортивный-клуб',
        // '/Индустриального-парка',
        // '/contacts'
    ];

    api.registerCommand('build:prerender', async(args) => {
        api.chainWebpack(config => {
            config.plugin('prerender').use(PrerenderSPAPlugin, [{
                staticDir,
                outputDir,
                routes,
                renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
                    renderAfterDocumentEvent: 'renderer-ready',
                    renderAfterElementExists: '#app',
                    renderAfterTime: 5000,
                    headless: true,
                    maxConcurrentRoutes: 2,
                })
            }]);
        });

        await api.service.run('build');
    });
}

module.exports.defaultModes = {
    'build:prerender': 'production'
}