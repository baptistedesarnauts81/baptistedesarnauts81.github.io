const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "/src/index.js", // main js
  output: {
    path: path.resolve(__dirname, "dist"), // output folder
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: 'file-loader',
      },
    ],
  },
  resolve: {extensions: [".js", ".jsx"]},
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // base html
    }),
  ],
};
