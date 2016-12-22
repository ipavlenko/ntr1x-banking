// https://github.com/shelljs/shelljs
require('./check-versions')()
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config/build-mobile.js')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.build-mobile.conf')

var spinner = ora('building for mobile...')
spinner.start()

rm('-rf', config.assetsRoot)
mkdir('-p', config.assetsRoot)
cp('-R', 'static/*', config.assetsRoot)

webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})
