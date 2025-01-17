const path = require('path');

module.exports = {
    entry: './src/webview/main.tsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
