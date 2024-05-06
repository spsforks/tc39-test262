// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
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

var BUGNUMBER = 615070;
var summary = "Line terminator after backslash is invalid in regexp literals";

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

var regexps = ["/\\\u000A/", "/\\\u000D/", "/\\\u2028/", "/\\\u2029/",
	       "/ab\\\n/", "/ab\\\r/", "/ab\\\u2028/", "/ab\\\u2029/",
	       "/ab[c\\\n]/", "/a[bc\\", "/\\"];

for(var i=0; i<regexps.length; i++) {
    var src = regexps[i];
    try {
	x = eval(src).source;
    } catch(e) {
	assert.sameValue(e.constructor, SyntaxError);
	continue;
    }
    assert.sameValue(0, 1);
}

/**************/

print("All tests passed!");
