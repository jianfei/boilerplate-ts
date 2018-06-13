const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const styleLoaders = [
    {
        loader: 'style-loader',
    },
    {
        loader: 'css-loader',
        options: {
            sourceMap: true,
            alias: {
                assets: resolve('./src/assets'),
            },
        },
    },
    {
        loader: 'less-loader',
        options: {
            sourceMap: true,
            paths: 'src',
        },
    },
];
const ExtractTextPluginInstance = ExtractTextPlugin.extract({ use: styleLoaders.slice(1) });

module.exports = {
    rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'awesome-typescript-loader'],
        },
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['happypack/loader?id=babel'],
        },
        {
            test: /\.(css|less)$/,
            use: isDevelopment ? styleLoaders : ExtractTextPluginInstance,
        },
        {
            test: /\.(svg|png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: 'img/[name].[ext]',
                    limit: 8192,
                    fallback: 'file-loader',
                },
            }],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: 'font/[name].[ext]',
                    fallback: 'file-loader',
                },
            }],
        },
        {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader',
        },
    ],
};
