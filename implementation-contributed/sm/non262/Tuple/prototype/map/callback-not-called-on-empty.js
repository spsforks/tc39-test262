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
---*/var called = 0;
#[].map(() => called++);
assert.sameValue(called, 0);

