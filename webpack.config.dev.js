const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map", //lets us see original source in web debugger
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    stats: "minimal", //reduces info it writes to command line
    overlay: true, //overlay any errors that occur in browser
    historyApiFallback: true, //all requests will be sent to index.html, 404's fallback to index.html
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
    })
  ],
  module: {
    //tell webpack what files we want to handle
    rules: [
      {
        test: /\.(js|jsx)$/, //regex to find what our js files look like
        exclude: /node_modules/, //ignore node modules
        use: ["babel-loader", "eslint-loader"] //what to do with these files, run babel loader and eslint loader
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
