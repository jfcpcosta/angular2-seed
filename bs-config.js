const proxyMiddleware = require('http-proxy-middleware');
const proxyURL = 'http://localhost:9000';

module.exports = {
    port: 8000,
    files: [
        "build/**/*.{html,htm,css,js}"
    ],
    ghostMode: false,
    server: {
        baseDir: "build",
        middleware: [
            proxyMiddleware('/api', { target: proxyURL })
        ]
    }
};