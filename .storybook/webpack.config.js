const path = require("path");
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../src"),
    loader: require.resolve("awesome-typescript-loader")
  });

  // addon-storysource使うときだけ
  defaultConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: { parser: "typescript" }
      }
    ],
    enforce: "pre"
  });

  // defaultConfig.plugins.push(new TSDocgenPlugin());
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  return defaultConfig;
};