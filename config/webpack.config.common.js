const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtarctPlugin = require("mini-css-extract-plugin");
const toml = require("toml");
const yaml = require("yaml");
module.exports = {
  entry: {
    index: "./src/main.js",
    another: "./src/js/load.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    //这里也可以输入assets中文件打包后的文件名
    assetModuleFilename: "images/[contenthash][ext]",
  },

  plugins: [
    new HtmlWebpackPlugin({
      //这里是需要打包html文件的路径
      template: "./index.html",
      //打包后html文件的名称
      filename: "bundle.html",
      //将引入的js放在哪个位置,默认放在head里面
      inject: "body",
    }),

    new MiniCssExtarctPlugin({
      //打包后的名字
      filename: "style/[contenthash].css",
    }),
  ],

  module: {
    //这里进行配置模块资源，但是确保图片都在assets下
    rules: [
      {
        //匹配规则，得用正则表达式，这里是匹配后缀名
        test: /(\.css|\.less)$/,
        use: [
          //先将css文本的格式用style标签插进html中，在进行css渲染
          //将js的样式插入style标签中
          //数组中解析的顺序是从下到上的顺序，逆序执行
          MiniCssExtarctPlugin.loader,
          //将css转化为js
          "css-loader",
          //将less转化为css
          "less-loader",
        ],
      },
      {
        //匹配规则，得用正则表达式，这里是匹配后缀名
        test: /(\.csv|\.tsv)$/,
        use: ["csv-loader"],
      },
      {
        //匹配规则，得用正则表达式，这里是匹配后缀名
        test: /\.xml$/,
        use: "xml-loader",
      },
      {
        test: /\.png$/,
        type: "asset/resource",
        generator: {
          filename: "images/[contenthash][ext]",
        },
      },
      {
        //inline不会打包进入dist目录下
        test: /\.svg$/,
        type: "asset/inline",
      },

      {
        //source用于读取数据
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        //source用于读取数据
        test: /\.jpg$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 25 * 1024,
          },
        },
      },
      {
        test: /\.yaml$/,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.toml$/,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [["@babel/plugin-transform-runtime"]],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
