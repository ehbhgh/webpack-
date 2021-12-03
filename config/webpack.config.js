const { merge } = require("webpack-merge");
const commonfig = require("./webpack.config.common");
const devfig = require("./webpack.config.dev");
const prodconfig = require("./webpack.config.prod");

module.exports = (env) => {
  switch (true) {
    case env.development:
      return merge(commonfig, devfig);
    case env.production:
      return merge(commonfig, prodconfig);
    default:
      return new Error("error");
  }
};
