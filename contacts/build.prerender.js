const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = (api, options) => {
    let staticDir = path.join(__dirname, options.outputDir);
    let outputDir = path.join(__dirname, 'prerender');
    let routes = [
        '/'
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