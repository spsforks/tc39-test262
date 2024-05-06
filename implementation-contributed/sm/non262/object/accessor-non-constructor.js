// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- deepEqual.js
- compareArray.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/var obj = { get a() { return 1; } };
assertThrowsInstanceOf(() => {
    new Object.getOwnPropertyDescriptor(obj, "a").get
}, TypeError);

obj = { set a(b) { } };
assertThrowsInstanceOf(() => {
    new Object.getOwnPropertyDescriptor(obj, "a").set
}, TypeError);

obj = { get a() { return 1; }, set a(b) { } };
assertThrowsInstanceOf(() => {
    new Object.getOwnPropertyDescriptor(obj, "a").get
}, TypeError);
assertThrowsInstanceOf(() => {
    new Object.getOwnPropertyDescriptor(obj, "a").set
}, TypeError);

