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
var BUGNUMBER = 518663;
var summary = 'Object.getOwnPropertyNames: function objects';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function two(a, b) { }

assert.sameValue(Object.getOwnPropertyNames(two).indexOf("length") >= 0, true);

var bound0 = Function.prototype.bind
           ? two.bind("this")
           : function two(a, b) { };

assert.sameValue(Object.getOwnPropertyNames(bound0).indexOf("length") >= 0, true);
assert.sameValue(bound0.length, 2);

var bound1 = Function.prototype.bind
           ? two.bind("this", 1)
           : function one(a) { };

assert.sameValue(Object.getOwnPropertyNames(bound1).indexOf("length") >= 0, true);
assert.sameValue(bound1.length, 1);

var bound2 = Function.prototype.bind
           ? two.bind("this", 1, 2)
           : function zero() { };

assert.sameValue(Object.getOwnPropertyNames(bound2).indexOf("length") >= 0, true);
assert.sameValue(bound2.length, 0);

var bound3 = Function.prototype.bind
           ? two.bind("this", 1, 2, 3)
           : function zero() { };

assert.sameValue(Object.getOwnPropertyNames(bound3).indexOf("length") >= 0, true);
assert.sameValue(bound3.length, 0);


/******************************************************************************/

print("All tests passed!");
