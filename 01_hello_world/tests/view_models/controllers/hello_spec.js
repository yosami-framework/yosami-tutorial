require('./../../spec_helper');
const t         = require('track-spec');
const ViewModel = require('./../../../app/view_models/controllers/hello');

t.describe('Hello', () => {
  let vm = null;

  t.before(() => {
    vm = new ViewModel();
  });

  console.warn('[PENDING] Please write Hello test in `tests/view_models/controllers/hello`');
});
