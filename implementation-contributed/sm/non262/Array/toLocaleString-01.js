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
 * Contributor:
 *   Jeff Walden <jwalden+code@mit.edu>
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 562446;
var summary = 'ES5: Array.prototype.toLocaleString';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var o;

o = { length: 2, 0: 7, 1: { toLocaleString: function() { return "baz" } } };
assert.sameValue(Array.prototype.toLocaleString.call(o), "7,baz");

o = {};
assert.sameValue(Array.prototype.toLocaleString.call(o), "");

var log = '';
arr = {length: {valueOf: function () { log += "L"; return 2; }},
      0: "x", 1: "z"};
assert.sameValue(Array.prototype.toLocaleString.call(arr), "x,z");
assert.sameValue(log, "L");

/******************************************************************************/

print("All tests passed!");
