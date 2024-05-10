// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

var gTestfile = 'object-literal-accessor-arguments.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 536472;
var summary =
  'ES5: { get x(v) { } } and { set x(v, v2) { } } should be syntax errors';

print(BUGNUMBER + ": " + summary);

//-----------------------------------------------------------------------------

function expectSyntaxError(s)
{
  try
  {
    eval(s);
    throw new Error("no error thrown");
  }
  catch (e)
  {
    assert.sameValue(e instanceof SyntaxError, true,
             "expected syntax error parsing '" + s + "', got: " + e);
  }
}

expectSyntaxError("({ get x(a) { } })");
expectSyntaxError("({ get x(a, a) { } })");
expectSyntaxError("({ get x(a, b) { } })");
expectSyntaxError("({ get x(a, a, b) { } })");
expectSyntaxError("({ get x(a, b, c) { } })");

expectSyntaxError("({ set x() { } })");
expectSyntaxError("({ set x(a, a) { } })");
expectSyntaxError("({ set x(a, b) { } })");
expectSyntaxError("({ set x(a, a, b) { } })");
expectSyntaxError("({ set x(a, b, c) { } })");

//-----------------------------------------------------------------------------

