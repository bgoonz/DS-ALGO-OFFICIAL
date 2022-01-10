module.exports = {
    entry: './src/js/App.js',
    output: { path: './public', filename: 'bundle.js' },
    devServer: {
        contentBase: './public',
        port: 3001
    },
    devtools: 'inline',
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};
