const webpack = require('webpack');
const config = require('./webpack.config');
const packageInfo = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const crypto = require('crypto');

config.devtool = '#source-map';
config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"',
            VERSION: JSON.stringify(packageInfo.version),
            PUBLISHED: JSON.stringify(Date.now())
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new HtmlWebpackPlugin({
        title: 'login',
        vars: "var zPreface = zPREFACE = <%- JSON.stringify(this.vars).replace(/</g, '\\\\<').replace(/>/g, '\\\\>') %>;",
        csshash: ('?' + crypto.randomBytes(10).toString('hex')),
        filename: '../../../views/Login/index.html',
        template: './tpl/index.ejs',
        inject: 'body',
        hash: true
    }),
    new HtmlWebpackPlugin({
        title: 'welcome',
        vars: "var zPreface = zPREFACE = <%- JSON.stringify(this.vars).replace(/</g, '\\\\<').replace(/>/g, '\\\\>') %>;",
        csshash: ('?' + crypto.randomBytes(10).toString('hex')),
        filename: '../../../views/Index/index.html',
        template: './tpl/index.ejs',
        inject: 'body',
        hash: true
    }),
    new webpack.optimize.DedupePlugin()
]);
module.exports = config;
