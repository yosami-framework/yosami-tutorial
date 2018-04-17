const TrackConfig = require('track-config');

TrackConfig.configure((c) => {
  c.loader = ((module) => require(`../app/${module}.js`));
  c.localeLoader = ((lang) => require(`./locales/${lang}.yml`));
  c.localeSelector = ((url) => url.indexOf('/en') != -1 ? 'en' : 'ja');
});
