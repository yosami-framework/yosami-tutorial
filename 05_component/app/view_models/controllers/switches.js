const ApplicationViewModel = require('./../application_view_model');

/**
 * ViewModel of SwitchesController
 */
module.exports = class Switches extends ApplicationViewModel {
  static definer() {
    name('switches');
  }
}
