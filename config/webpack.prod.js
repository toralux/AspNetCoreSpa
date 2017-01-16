var webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[name].[chunkhash].bundle.map',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },
    plugins: [
        new WebpackMd5Hash(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            sourceMap: true
        })
    ]
});
