// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
features:
- Iterator
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/
const sum = (x, y) => x + y;
assertThrowsInstanceOf(Iterator.prototype.reduce.bind(undefined, sum), TypeError);
assertThrowsInstanceOf(Iterator.prototype.reduce.bind({}, sum), TypeError);
assertThrowsInstanceOf(Iterator.prototype.reduce.bind({next: 0}, sum), TypeError);

