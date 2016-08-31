var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './assets/public/dist');
var APP_DIR = path.resolve(__dirname, './app');
var LESS_DIR = path.resolve(__dirname, './assets/less');

var config = {
    entry: APP_DIR + '/main.js',
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
                test: /\.less?/,
                include: LESS_DIR,
                loader: ExtractTextPlugin.extract("style?sourceMap", "css?sourceMap!autoprefixer?browsers=last 2 version!less")
            }
        ]
    },
    plugins: ([
        // extract inline css into separate 'styles.css'
        new ExtractTextPlugin( '../css/styles.css', { allChunks: true }),
        new webpack.optimize.DedupePlugin(),

        ].concat(process.env.WEBPACK_ENV==='dev' ? [] : [

            new webpack.optimize.OccurenceOrderPlugin(),

            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify('production')
                }
            }),

            new webpack.optimize.UglifyJsPlugin({
                output: { comments: false },
            })
        ])
    ),
    devtool: 'source-map'

};  

module.exports = config;