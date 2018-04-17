const ApplicationController = require('./application_controller');

/**
 * HelloController
 */
module.exports = class HelloController extends ApplicationController {
  static definer() {
    name('hello');
  }
}
