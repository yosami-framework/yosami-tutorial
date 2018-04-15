/**
 * View of CounterController
 * @param {function}              $          Element creator.
 * @param {ApplicationController} controller Controller instance.
 * @param {object}                pipe       Pipe between views.
 * @param {object}                _yield     Rendering result upper view.
 * @return {object} Rendering result.
 */
module.exports = function($, controller, pipe, _yield) {
  pipe.title = `${this.count} clicks`;
  return (
<div class='controllers/counter'>
  <p>{this.count} clicks</p>
  <button onclick={() => controller.onUp()}>CLICK</button>
</div>
  );
};
