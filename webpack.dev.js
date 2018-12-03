const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        publicPath: '/',
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'https://staging.datalaab.com',
                secure: false,
            }
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }
    },
    devtool: 'inline-source-map',
});