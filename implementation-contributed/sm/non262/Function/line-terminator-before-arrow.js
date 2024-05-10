// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
description: |
  pending
esid: pending
---*/assertThrowsInstanceOf(() => eval("() \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("a \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a) /*\n*/ => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a, b) \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a, b = 1) \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a, ...b) \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a, b = 1, ...c) \n => {}"), SyntaxError);

