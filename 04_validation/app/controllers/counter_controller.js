const ApplicationController = require('./application_controller');
const m                     = require('mithril');

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
    this.vm.validateAll();
  }
}
