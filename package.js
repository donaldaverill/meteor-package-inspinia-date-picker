Package.describe({
  name: 'fourquet:inspinia-date-picker',
  version: '0.0.3',
  summary: 'Blaze date picker component to use with the Inspinia Bootstrap Admin Theme',
  git: 'https://github.com/fourquet/meteor-package-inspinia-date-picker',
  documentation: 'README.md',
  license: 'LICENSE',
});

const packages = [
  'ecmascript',
  'templating',
  'rajit:bootstrap3-datepicker@1.5.1',
];

const clientFiles = [
  'datePicker.html',
  'datePicker.js',
  'datePicker.css',
];

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(packages);
  api.imply(packages);
  api.addFiles(clientFiles, 'client');
});
