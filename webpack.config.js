var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    devtool: 'eval',
    entry: [
        'app.ts'
    ],
    output: {
        filename: 'app.js',
        path: path.resolve('dist')
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
        modulesDirectories: ['app', 'node_modules'],
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] }
        ]
    },
    plugins: [
        // Set up the notifier plugin - you can remove this (or set alwaysNotify false) if desired
        new WebpackNotifierPlugin({ alwaysNotify: true }),
    ]
};