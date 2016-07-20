var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './client/public/dist');
var APP_DIR = path.resolve(__dirname, './app');
var LESS_DIR = path.resolve(__dirname, './client/less');

var config = {
    entry: APP_DIR + '/main.jsx',
    output: {
        path: BUILD_DIR + '/js',
        filename: 'bundle.js'
    },
    resolve: {
        // you can load named modules from any dirs you want.
        // attempts to find them in the specified order.
        modulesDirectories: [
            './src/lib',
            'node_modules'
        ]
    },
    module : {
        preLoaders: [
            // before hitting the actual loaders, load any sourcemaps specified by npm modules
            { loader: 'source-map' }
        ],
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            },
            // bundle LESS and CSS into a single CSS file, auto-generating -vendor-prefixes
            {
                test: /\.(less|css)$/,
                include: LESS_DIR,
                loader: ExtractTextPlugin.extract("style?sourceMap", "css?sourceMap!autoprefixer?browsers=last 2 version!less")
            }
        ]
    },
    plugins: [
        // extract inline css into separate 'styles.css'
        new ExtractTextPlugin( '../css/styles.css', { allChunks: true })
    ],
    devtool: 'source-map'
};  

module.exports = config;