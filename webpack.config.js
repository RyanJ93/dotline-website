'use strict';

const WebpackNotifierPlugin = require('webpack-notifier');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        index: ['babel-polyfill', './index.jsx']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                { loader: 'babel-loader' },
                { loader: 'thread-loader' }
            ]
        }, {
            test: /\.(scss|css)$/,
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                },
                { loader: 'sass-loader' },
                { loader: 'thread-loader' }
            ]
        }]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: { output: { ascii_only: true } },
            parallel: true
        })]
    },
    plugins: [new WebpackNotifierPlugin()]
};
