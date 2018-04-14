const ApplicationViewModel = require('./../application_view_model');

/**
 * ViewModel of HelloController
 */
module.exports = class Hello extends ApplicationViewModel {
  static definer() {
    name('hello');
  }
}
