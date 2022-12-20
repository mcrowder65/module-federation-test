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
        name: "remote-host-myveeva",
        filename: "remoteEntry.js",
        library: { type: "var", name: "app3" },
        exposes: {
          "./module-federation-test": "./src/module-federation-test",
          "./app-injector": "./src/app-injector",
        },
        shared: {
          react: {
            import: 'react', // the "react" package will be used a provided and fallback module
            shareKey: 'newReact', // under this name the shared module will be placed in the share scope
            shareScope: 'default', // share scope with this name will be used
            singleton: true, // only a single version of the shared module is allowed
          },
          "react-dom": {
            import: 'react-dom', // the "react" package will be used a provided and fallback module
            shareKey: 'newReactDom', // under this name the shared module will be placed in the share scope
            shareScope: 'default', // share scope with this name will be used
            singleton: true, // only a single version of the shared module is allowed
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
