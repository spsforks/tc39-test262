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
async function* gen(x) { yield x; }

const methods = ['map', 'filter', 'flatMap'];

for (const method of methods) {
  const iter = gen('value');
  const iterHelper = iter[method](x => iterHelper.next());
  iterHelper.next().then(
    _ => assert.sameValue(true, false, 'Expected reject.'),
    err => assert.sameValue(err instanceof TypeError, true),
  );
}

if (typeof assert.sameValue == 'function')
