Package.describe({
  name: 'mgcrea:angular-motion',
  version: '0.4.3',
  summary: 'AngularMotion - Fancy CSS3 animations for AngularJS 1.2+',
  git: 'https://github.com/mgcrea/angular-motion',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles([
    "dist/angular-motion.css"
  ], 'client');
});
