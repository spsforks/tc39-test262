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
const fn = x => x;
assertThrowsInstanceOf(Iterator.prototype.every.bind(undefined, fn), TypeError);
assertThrowsInstanceOf(Iterator.prototype.every.bind({}, fn), TypeError);
assertThrowsInstanceOf(Iterator.prototype.every.bind({next: 0}, fn), TypeError);

