const ApplicationController = require('./application_controller');

/**
 * CounterController
 */
module.exports = class CounterController extends ApplicationController {
  static definer() {
    name('counter');
    before_action('clear');
  }

  clear() {
    this.vm.count = 0;
  }

  onUp() {
    this.vm.count++;
  }
}
