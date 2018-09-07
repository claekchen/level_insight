const { injectBabelPlugin } = require("react-app-rewired");
const { rewireAnujs } = require("./react-app-rewire-anujs");
module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
    config
  );
  // config = rewireAnujs(config, env)
  return config;
};
