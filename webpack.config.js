const path = require('path'); //npm init includes 'path' module
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    devtool: 'cheap-module-source-map',
    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/index.html',
                to: '../index.html'
            }
        ])
    ]
};
