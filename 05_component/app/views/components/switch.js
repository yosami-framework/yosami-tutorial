/**
 * View of SwitchComponent
 * @param {function}             $         Element creator.
 * @param {ApplicationComponent} component Component instance.
 * @param {object}               pipe      Pipe between views.
 * @param {object}               _yield    Rendering result upper view.
 * @return {object} Rendering result.
 */
module.exports = function($, component, pipe, _yield) {
  return (
<div class='components/switch'>
  <div
    class='switch__knob'
    onclick={() => component.onUp()}
    style={`transform:rotate(${this.count * 90}deg)`}
  />
</div>
  );
};
