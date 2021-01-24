const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFededationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8083
  },
  plugins: [
    new ModuleFededationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartShow': './src/index'
      },
      shared: ['faker']
      // shared: {
      //   faker: {
      //     singleton: true
      //   }
      // }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}
