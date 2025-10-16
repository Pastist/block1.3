const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [
      // JS / Babel - УПРОЩАЕМ КОНФИГУРАЦИЮ
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader' // ← УБИРАЕМ options отсюда
      },

      // SASS / CSS - ВЫБИРАЕМ ОДИН ПОДХОД:

      // Вариант для разработки (с style-loader):
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      // ИЛИ Вариант для production (с MiniCssExtractPlugin):
      // {
      //   test: /\.(scss|css)$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      // },

      // Остальные правила остаются без изменений...
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        //generator: {
        //  filename: 'assets/icon/[name][ext]',
        //},
      },
      {
      test: /\.html$/i, // применяется к файлам .html
      loader: "html-loader",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // Раскомментируйте если используете MiniCssExtractPlugin.loader:
     new MiniCssExtractPlugin({
       filename: '[name].[contenthash].css',
     }),
  ],
};