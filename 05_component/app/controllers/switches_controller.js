const ApplicationController = require('./application_controller');

/**
 * SwitchesController
 */
module.exports = class SwitchesController extends ApplicationController {
  static definer() {
    name('switches');
  }
}
