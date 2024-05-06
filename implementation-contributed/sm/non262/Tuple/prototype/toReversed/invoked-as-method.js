// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/var TuplePrototype = Tuple.prototype;

assert.sameValue(typeof TuplePrototype.toReversed, 'function');

assertThrowsInstanceOf(function() {
  TuplePrototype.toReversed();
}, TypeError, "toReversed() invoked as method");

