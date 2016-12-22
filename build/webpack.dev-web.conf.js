var webpack = require('webpack')
var path = require('path')
var merge = require('webpack-merge')
var utils = require('./utils')
var config = require('../config/dev-web')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: ['./build/dev-client', './src/main.js'],
    },
    output: {
        path: path.resolve(__dirname, '../dist/dev'),
        publicPath: config.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.json'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'pages': path.resolve(__dirname, '../src/pages'),
            'stores': path.resolve(__dirname, '../src/stores')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        preLoaders: utils.modulePreLoaders({}),
        loaders: [
            ...utils.moduleLoaders({}),
            ...utils.styleLoaders({ sourceMap: config.cssSourceMap }),
        ]
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    },
    vue: {
        loaders: utils.cssLoaders({ sourceMap: config.cssSourceMap }),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    },
    // eval-source-map is faster for development
    devtool: '#eval-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.DefinePlugin({
            'process.env': config.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}
