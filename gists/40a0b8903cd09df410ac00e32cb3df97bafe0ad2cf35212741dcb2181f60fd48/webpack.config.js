const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'datechooser': './src/index.js',
    'demo-app': './demo/app.js'
  },
  output: {
    filename: './lib/[name].js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            }
          },
          { loader: 'less-loader' }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/templates/demo.html'
  })]
}