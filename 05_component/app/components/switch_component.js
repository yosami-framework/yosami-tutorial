const ApplicationComponent = require('./application_component');

/**
 * SwitchComponent
 */
module.exports = class SwitchComponent extends ApplicationComponent {
  static definer() {
    name('switch');
  }

  oninit(...args) {
    super.oninit(...args);
    this.vm.count = 0;
  }

  onUp() {
    this.vm.count++;
  }
}
