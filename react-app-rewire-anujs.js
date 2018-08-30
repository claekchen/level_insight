function rewireAnujs(config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    'react': 'anujs',
    'react-dom': 'anujs',
    'prop-types': 'anujs/lib/ReactPropTypes'
  });

  return config;
}

module.exports = {rewireAnujs};