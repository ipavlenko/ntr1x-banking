var path = require('path')

module.exports = {
    env: { NODE_ENV: '"development"' },
    port: 80,
    assetsPublicPath: '/',
    proxyTable: {},
    // proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
}
