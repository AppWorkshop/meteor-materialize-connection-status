Package.describe({
  name: 'appworkshop:materialize-connection-status',
  summary: 'Materialized connection status with cordova/phonegap support.',
  version: '0.0.3',
  git: 'https://github.com/appworkshop/meteor-materialize-connection-status'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1');
  api.use(['coffeescript', 'templating', 'reactive-var', 'tracker'], 'client');
  api.addFiles(
    ['client/connection-status.html',
    'client/connection-status.litcoffee'], 'client');
});
