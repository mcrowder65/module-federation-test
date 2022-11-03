const { override, addBabelPlugin, addBabelPreset } = require("customize-cra")
const path = require("path")
const { ModuleFederationPlugin } = require("webpack").container

let config = override(
  (config) => {
    config.plugins = config.plugins.filter((plugin) => {
      return plugin.key !== "ESLintWebpackPlugin"
    })
    // Adds human readable names to chunks
    config.optimization.chunkIds = "named"
    return config
  },
  (config) => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "app3",
        filename: "remoteEntry.js",
        exposes: {
          "./module-federation-test": "./src/module-federation-test",
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: "18.2.0",
          },
          "react-dom": {
            singleton: true,
            requiredVersion: "18.2.0",
          },
        },
      }),
    )
    config.output.publicPath = "auto"
    return config
  },
)

/*eslint-disable no-param-reassign */
if (process.env.NODE_ENV === "test") {
  config = {
    babelrc: true,
    jest: (config) => {
      config.setupFilesAfterEnv = ["<rootDir>/test/setup-tests.js"]
      config.modulePaths = ["."]

      return config
    },
  }
}

module.exports = config
