const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'chat-app',

  exposes: {
    './Component': './projects/chat-app/src/app/app.component.ts',
    './Routes': './projects/chat-app/src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
