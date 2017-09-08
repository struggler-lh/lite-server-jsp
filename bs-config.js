let proxy = require('http-proxy-middleware');
let history = require('connect-history-api-fallback'); //lite-server用来依赖实现默认首页修改

module.exports = {
    server: {
        middleware: {
            1: history({
                index: 'index.html或者index-jsp.html(默认跳转到index.jsp首页)',
                verbose: true
            }),
            2: proxy('/index.jsp',
                { target: 'http://host:port/basePath', "secure": false, "changeOrigin": true }),
            3: proxy('/basePath', {
                target: 'http://host:port', "secure": false,
                "changeOrigin": true
            }),
        }
    }
};
