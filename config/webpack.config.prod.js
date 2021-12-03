const CssminimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
module.exports = {
  output: {
    filename: "scripts/[name].[contenthash].js",
    publicPath: "http://localhost:3000/",
  },
  mode: "production",

  optimization: {
    minimizer: [new CssminimizerWebpackPlugin(), new TerserWebpackPlugin()],
  },

  performance: {
    hints: false,
  },
};
