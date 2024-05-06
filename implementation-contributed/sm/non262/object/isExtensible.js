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
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var BUGNUMBER = 1060873;
var summary = "Object.isExtensible() should return false when given primitive values as input";

print(BUGNUMBER + ": " + summary);
assert.sameValue(Object.isExtensible(), false);
assert.sameValue(Object.isExtensible(undefined), false);
assert.sameValue(Object.isExtensible(null), false);
assert.sameValue(Object.isExtensible(1), false);
assert.sameValue(Object.isExtensible("foo"), false);
assert.sameValue(Object.isExtensible(true), false);
if (typeof Symbol === "function") {
    assert.sameValue(Object.isExtensible(Symbol()), false);
}

