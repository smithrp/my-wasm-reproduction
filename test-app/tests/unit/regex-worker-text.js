import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

import createWorker from 'my-wasm-reproduction';

module('Unit | regex', function (hooks) {
  setupTest(hooks);

  let worker;

  hooks.beforeEach(async function () {
    worker = await createWorker();
  });

  test('worker properly validates regex with valid string', async function (assert) {
    let result = await worker.postMessage([{ pattern: '^hello$', s: 'hello' }]);
    assert.true(result, 'string hello is valid against regex');
  });
});
