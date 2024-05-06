// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
features:
- AsyncIterator
description: |
  pending
esid: pending
---*/
async function *gen() {}

function check(fn) {
  gen().forEach(fn).then(() => {
    throw new Error('every should have thrown');
  },
  (err) => {
    assert.sameValue(err instanceof TypeError, true);
  });
}

check();
check(undefined);
check(null);
check(0);
check(false);
check('');
check(Symbol(''));
check({});

