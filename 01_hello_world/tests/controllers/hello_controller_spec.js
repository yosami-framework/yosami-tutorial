require('./../spec_helper');
const t          = require('track-spec');
const Controller = require('./../../app/controllers/hello_controller');

t.describe('HelloController', () => {
  let vnode      = null;
  let controller = null;

  t.before(() => {
    vnode = {state: {}, attrs: {}};
    controller = new Controller(vnode);
  });

  t.describe('#view', () => {
    const subject = (() => controller.view());

    t.it('Render view', () => {
      t.expect(subject().tag).equals('html');
    });
  });
});
