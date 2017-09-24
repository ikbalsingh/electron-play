const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    entry: {
        Index: './app/index.jsx',
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['react', 'es2015']
                        }
                    }

                ],
                exclude: /node_modules/
            }
        ]
    },
}
