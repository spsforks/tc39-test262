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

assert.sameValue(AsyncIterator.prototype.asIndexedPairs.name, 'asIndexedPairs');

const propertyDescriptor = Reflect.getOwnPropertyDescriptor(AsyncIterator.prototype.asIndexedPairs, 'name');
assert.sameValue(propertyDescriptor.value, 'asIndexedPairs');
assert.sameValue(propertyDescriptor.enumerable, false);
assert.sameValue(propertyDescriptor.writable, false);
assert.sameValue(propertyDescriptor.configurable, true);

if (typeof assert.sameValue == 'function')
