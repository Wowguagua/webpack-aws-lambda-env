const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: ['./src/index'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    externals: {
        'aws-sdk': 'aws-sdk'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    mangle: !debug,
                },
            })
        ]
    },
}