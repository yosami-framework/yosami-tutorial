const ApplicationViewModel = require('./../application_view_model');

/**
 * ViewModel of CounterController
 */
module.exports = class Counter extends ApplicationViewModel {
  static definer() {
    name('counter');
    accessor('count');
    validates('count', {numerical: {min: 5}});
  }
}
