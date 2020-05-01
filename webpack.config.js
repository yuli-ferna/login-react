const path = require('path');
var glob = require("glob");
module.exports = {
    entry: './components/index.js',
    
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
            }
        ]
    },
    mode: 'development'
};