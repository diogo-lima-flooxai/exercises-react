const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        }),
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader, // Extrai o CSS para um arquivo separado
                //'style-loader', // Adiona o CSS na DOM
                'css-loader', // Interpreta @import, url()
                'sass-loader' // Compila o Sass para CSS
            ]
        }]
    }
}