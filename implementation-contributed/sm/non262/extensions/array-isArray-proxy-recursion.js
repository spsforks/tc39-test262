// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

//-----------------------------------------------------------------------------
var BUGNUMBER = 1282047;
var summary = 'Infinite recursion via Array.isArray on a proxy';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var proxy = Proxy.revocable([], {}).proxy;

// A depth of 100000 ought to be enough for any platform to consume its entire
// stack, hopefully without making any recalcitrant platforms time out.  If no
// timeout happens, the assert.sameValue checks for the proper expected value.
for (var i = 0; i < 1e5; i++)
  proxy = new Proxy(proxy, {});

try
{
  assert.sameValue(Array.isArray(proxy), true);

  // If we reach here, it's cool, we just didn't consume the entire stack.
}
catch (e)
{
  assert.sameValue(e instanceof InternalError, true,
           "should have thrown for over-recursion");
}

/******************************************************************************/

print("Tests complete");
