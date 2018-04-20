const SwithComponent = require('../../components/switch_component');

/**
 * View of SwitchesController
 * @param {function}              $          Element creator.
 * @param {ApplicationController} controller Controller instance.
 * @param {object}                pipe       Pipe between views.
 * @param {object}                _yield     Rendering result upper view.
 * @return {object} Rendering result.
 */
module.exports = function($, controller, pipe, _yield) {
  return (
<div class='controllers/switches'>
  <SwithComponent />
  <SwithComponent />
  <SwithComponent />
  <SwithComponent />
  <SwithComponent />
</div>
  );
};
