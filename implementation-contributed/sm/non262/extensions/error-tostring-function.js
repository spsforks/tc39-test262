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

//-----------------------------------------------------------------------------
var BUGNUMBER = 894653;
var summary =
  "Error.prototype.toString called on function objects should work as on any " +
  "object";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

function ErrorToString(v)
{
  return Error.prototype.toString.call(v);
}

// The name property of function objects isn't standardized, so this must be an
// extension-land test.

assert.sameValue(ErrorToString(function f(){}), "f");
assert.sameValue(ErrorToString(function g(){}), "g");
assert.sameValue(ErrorToString(function(){}), "");

var fn1 = function() {};
fn1.message = "ohai";
assert.sameValue(ErrorToString(fn1), "fn1: ohai");

var fn2 = function blerch() {};
fn2.message = "fnord";
assert.sameValue(ErrorToString(fn2), "blerch: fnord");

var fn3 = function() {};
fn3.message = "";
assert.sameValue(ErrorToString(fn3), "fn3");

/******************************************************************************/

print("Tests complete!");
