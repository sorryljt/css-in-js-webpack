const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              }
              
        ]
    },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: 'index.css',
    //     })
    // ]
}