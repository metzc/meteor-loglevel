Package.describe({
  name: "spacejamio:loglevel",
  summary: "This package has been renamed to practicalmeteor:loglevel. Please use the new name instead.",
  version: "1.1.0_2",
  git: "https://github.com/practicalmeteor/meteor-loglevel.git"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.3');

  api.use(['meteor', 'coffeescript']);

  api.use(['spacejamio:chai@1.9.2_2']);

  api.addFiles('loglevel.js');
  api.addFiles('LoggerFactory.coffee');

  api.export('loglevel');
});


Package.onTest(function(api) {
  api.use(['coffeescript', 'practicalmeteor:loglevel', 'spacejamio:munit@2.1.1']);
  api.addFiles('tests/LoggerFactoryTest.coffee');
});
