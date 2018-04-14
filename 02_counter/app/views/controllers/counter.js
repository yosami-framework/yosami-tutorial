const m = require('mithril');

/**
 * View of CounterController
 * @param {ApplicationController} controller Controller instance.
 * @param {object}                pipe       Pipe between views.
 * @param {object}                _yield     Rendering result upper view.
 * @return {object} Rendering result.
 */
module.exports = function(controller, pipe, _yield) {
  return (
<div class='controllers/counter'>
  <p>{this.count} clicks</p>
  <button onclick={() => controller.onUp()}>CLICK</button>
</div>
  );
};
