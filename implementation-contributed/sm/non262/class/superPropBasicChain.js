// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
description: |
  pending
esid: pending
---*/var o = {
    access() {
        super.foo.bar;
    }
};

// Delazify
assertThrowsInstanceOf(o.access, TypeError);

