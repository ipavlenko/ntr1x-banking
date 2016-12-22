var path = require('path')

module.exports = {
    env: { NODE_ENV: '"production"' },
    index: path.resolve(__dirname, '../dist/mobile/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/mobile/static'),
    assetsPublicPath: './static/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
}
