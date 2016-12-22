var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.moduleLoaders = function (options) {
    return [
        {
            test: /\.vue$/,
            loader: 'vue'
        },
        {
            test: /\.theme$/,
            loaders: ['raw', 'sass-loader']
        },
        {
            test: /\.js$/,
            loader: 'babel',
            include: projectRoot,
            exclude: /node_modules/
        },
        {
            test: /\.es$/,
            loader: 'babel',
            include: projectRoot,
            exclude: /node_modules/
        },
        {
            test: /\.json$/,
            loader: 'json'
        },
        {
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]',
                publicPath: options.imagesPublicPath
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: 'fonts/[name].[hash:7].[ext]',
                publicPath: options.fontsPublicPath
            }
        },
    ]
}

exports.cssLoaders = function (options) {
    options = options || {}
    // generate loader string to be used with extract text plugin
    function generateLoaders (loaders) {
        var sourceLoader = loaders.map(function (loader) {
            var extraParamChar
            if (/\?/.test(loader)) {
                loader = loader.replace(/\?/, '-loader?')
                extraParamChar = '&'
            } else {
                loader = loader + '-loader'
                extraParamChar = '?'
            }
            return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
        }).join('!')

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
        } else {
            return ['vue-style-loader', sourceLoader].join('!')
        }
    }

    // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
    return {
        css: generateLoaders(['css']),
        postcss: generateLoaders(['css']),
        less: generateLoaders(['css', 'less']),
        sass: generateLoaders(['css', 'sass?indentedSyntax']),
        scss: generateLoaders(['css', 'sass']),
        stylus: generateLoaders(['css', 'stylus']),
        styl: generateLoaders(['css', 'stylus'])
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
    var output = []
    var loaders = exports.cssLoaders(options)
    for (var extension in loaders) {
        var loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            loader: loader
        })
    }
    return output
}

exports.modulePreLoaders = function(options) {
    return [
        {
            test: /\.vue$/,
            loader: 'eslint',
            include: projectRoot,
            exclude: /node_modules/
        },
        {
            test: /\.js$/,
            loader: 'eslint',
            include: projectRoot,
            exclude: /node_modules/
        },
        {
            test: /\.es$/,
            loader: 'eslint',
            include: projectRoot,
            exclude: /node_modules/
        }
    ]
}
