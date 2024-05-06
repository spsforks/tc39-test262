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
const iter = [].values();
assertThrowsInstanceOf(() => iter.reduce((x, y) => x + y), TypeError);

