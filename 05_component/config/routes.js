const TrackRouter = require('track-router');

TrackRouter.configure(() => {
  get('/', {to: 'switches', as: 'root'});
});
