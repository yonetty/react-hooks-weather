const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://weather.livedoor.com',
            pathRewrite: {
                '^/api/': '/',
            },
            changeOrigin: true,
        })
    );
};