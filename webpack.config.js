module.exports = {
    module: {
        rules: [
                {
                    test: /\.js$/,
                    use: ['cache-loader', 'babel-loader'],
                },
        ],
        css: {
            loaderOptions: {
              sass: {
                data: `
                  @import "./src/assets/_schema.scss";
                `
              }
            }
          }
    },
};