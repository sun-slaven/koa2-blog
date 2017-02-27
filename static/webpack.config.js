const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const path = require('path');

// webpack.config.js
module.exports = {
    devtool: '#cheap-module-eval-source-map',

    // entry point of our application
    entry: {
        loginBundle: './src/scripts/login_main.js',
        homeBundle: './src/scripts/home_main.js',
        vendor: ['lodash', 'jquery','bootstrap']
    },
    // where to place the compiled bundle
    output: {
        path: `${__dirname}/public/assets/`,
        filename: '[name].js',
        sourceMapFilename: 'debug/[name].map'
        // publicPath: '/static/my/assets/',
    },
    resolve: {
        extensions: ['', '.js', '.es', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js',//原因详见 https://segmentfault.com/a/1190000006435886
            'api': path.join(__dirname, './src/scripts/api/index.js')
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                // loader: 'vue!eslint'
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'less',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('css'),
            less: ExtractTextPlugin.extract('css!less')
        },
        autoprefixer: {
            browsers: ['last 2 versions']
        }
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-us|zh-cn/),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        //name改为“vendor”导致vue的css打包不进去
        new ExtractTextPlugin('[name].css',{allChunks: true}),
        new TransferWebpackPlugin([
            {
                from: 'node_modules/bootstrap/dist',
                to: '../bootstrap/'
            }
        ], path.join(__dirname, './')),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            '_': 'lodash'
        }),
        new HtmlWebpackPlugin({
            title: 'Login',
            vars: "var zPreface = zPREFACE = <%- JSON.stringify(this.vars).replace(/</g, '\\\\<').replace(/>/g, '\\\\>') %>;",
            csshash: '',
            filename: '../../../views/Login/index.html',
            chunks: ['loginBundle',"vendor"],
            template: './tpl/index.ejs',
            inject: 'body',
            hash: false
        }),
        new HtmlWebpackPlugin({
            title: 'Home',
            vars: "var zPreface = zPREFACE = <%- JSON.stringify(this.vars).replace(/</g, '\\\\<').replace(/>/g, '\\\\>') %>;",
            csshash: '',
            filename: '../../../views/Home/index.html',
            chunks: ['homeBundle',"vendor"],
            template: './tpl/index.ejs',
            inject: 'body',
            hash: false
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
