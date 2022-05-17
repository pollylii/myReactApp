const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        "/ajax",
        createProxyMiddleware({
            target: "http://i.maoyan.com",
            changeOrigin: true,
            // pathRewrite: { "/api": "" },
        })
    );
    // 更多代理配置...
};