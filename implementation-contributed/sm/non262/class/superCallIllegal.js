// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
description: |
  pending
esid: pending
---*/// super() invalid outside derived class constructors, including in dynamic
// functions and eval
assertThrowsInstanceOf(() => new Function("super();"), SyntaxError);
assertThrowsInstanceOf(() => eval("super()"), SyntaxError);

