const HtmlPlugin = require('html-webpack-plugin')
const path       = require('path')


module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },

    devtool: 'inline-source-map'
}