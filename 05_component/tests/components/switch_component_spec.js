require('./../spec_helper');
const t         = require('track-spec');
const Component = require('./../../app/components/switch_component');

t.describe('SwitchComponent', () => {
  let vnode      = null;
  let component = null;

  t.before(() => {
    vnode = {state: {}, attrs: {}};
    component = new Component(vnode);
  });

  t.describe('#view', () => {
    const subject = (() => component.view());

    t.it('Render view', () => {
      t.expect(subject().tag).equals('div');
    });
  });
});
