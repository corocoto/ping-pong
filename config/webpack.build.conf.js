const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    devtool: false,
    plugins: [
        new htmlWebpackPlugin({
            title: 'Ping-Pong',
            inject: 'body',
            minify: true
        })
    ],
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: 'single'
        }
    },
    performance: {
        hints: 'error',
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
});
   