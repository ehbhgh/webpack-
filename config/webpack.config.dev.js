const { resolve } = require("path");
module.exports = {
  output: {
    filename: "scripts/[name].js",
  },
  mode: "development",

  devServer: {
    contentBase: resolve(__dirname, "dist"),
    //启动GZIP压缩
    compress: true,
    //本地启动端口号
    port: 3000,
    //自动打开浏览器
    open: true,
  },
  devtool: "inline-source-map",
};
