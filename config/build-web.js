var path = require('path')

module.exports = {
    env: { NODE_ENV: '"production"' },
    index: path.resolve(__dirname, '../dist/web/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/web/static'),
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
}
