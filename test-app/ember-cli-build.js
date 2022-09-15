'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    tests: true,
    fingerprint: {
      enabled: true,
      prepend: 'https://foo.bar.com/',
    },
    autoImport: {
      watchDependencies: ['my-wasm-reproduction'],
      publicAssetURL: 'https://foo.bar.com/assets',
      webpack: {
        optimization: { minimize: false },
      },
    },
  });

  return app.toTree();
};
