const TrackRouter = require('track-router');

TrackRouter.configure(() => {
  get('/', {to: 'hello', as: 'root'});
});
