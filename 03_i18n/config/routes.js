const TrackRouter = require('track-router');

TrackRouter.configure(() => {
  namespace('/:lang', {constraints: {lang: /^ja|en$/}}, () => {
    get('/', {to: 'hello', as: 'root'});
  });
});
