const TrackRouter = require('track-router');

TrackRouter.configure(() => {
  get('/', {to: 'counter', as: 'root'});
});
