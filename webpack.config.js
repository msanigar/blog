const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcDir = resolve(__dirname, 'src')

module.exports = {
    entry: `${srcDir}/index.jsx`,
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loaders: ['babel-loader', 'eslint-loader'],
            exclude: /node_modules/
        }, {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]-[local]-[hash:base64:6]',
            camelCase: true
          }
        }]
      }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${srcDir}/index.html`
        }),
        new ExtractTextPlugin({filename: 'main.css'})
    ]
}
