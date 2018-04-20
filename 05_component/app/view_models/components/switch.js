const ApplicationViewModel = require('./../application_view_model');

/**
 * ViewModel of SwitchComponent
 */
module.exports = class Switch extends ApplicationViewModel {
  static definer() {
    name('switch');
    accessor('count');
  }
}
