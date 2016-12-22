// var path = require('path')
// var config = require('../config')
// var utils = require('./utils')
// var projectRoot = path.resolve(__dirname, '../')
// var webpack = require('webpack')
//
// var env = process.env.NODE_ENV
// // check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// // various preprocessor loaders added to vue-loader at the end of this file
// // var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
// // var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
// // var useCssSourceMap = cssSourceMapDev || cssSourceMapProd
//
// module.exports = {
//     entry: {
//         app: './src/main.js'
//     },
//     output: {
//         path: config.build.assetsRoot,
//         publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
//         filename: '[name].js'
//     },
//     resolve: {
//         extensions: ['', '.js', '.vue'],
//         fallback: [path.join(__dirname, '../node_modules')],
//         alias: {
//             'vue$': 'vue/dist/vue.common.js',
//             'src': path.resolve(__dirname, '../src'),
//             'assets': path.resolve(__dirname, '../src/assets'),
//             'components': path.resolve(__dirname, '../src/components'),
//             'pages': path.resolve(__dirname, '../src/pages'),
//             'stores': path.resolve(__dirname, '../src/stores')
//         }
//     },
//     plugins: [
//         new webpack.ProvidePlugin({
//             $: "jquery",
//             jQuery: "jquery"
//         })
//     ],
//     resolveLoader: {
//         fallback: [path.join(__dirname, '../node_modules')]
//     },
//     module: {
//         preLoaders: [
//             {
//                 test: /\.vue$/,
//                 loader: 'eslint',
//                 include: projectRoot,
//                 exclude: /node_modules/
//             },
//             {
//                 test: /\.js$/,
//                 loader: 'eslint',
//                 include: projectRoot,
//                 exclude: /node_modules/
//             },
//             {
//                 test: /\.es$/,
//                 loader: 'eslint',
//                 include: projectRoot,
//                 exclude: /node_modules/
//             }
//         ],
//     },
//     eslint: {
//         formatter: require('eslint-friendly-formatter')
//     },
//     vue: {
//         loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
//         postcss: [
//             require('autoprefixer')({
//                 browsers: ['last 2 versions']
//             })
//         ]
//     }
// }
