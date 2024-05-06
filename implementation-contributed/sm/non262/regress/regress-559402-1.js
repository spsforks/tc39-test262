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
var expect = "No error";
var actual = expect;

try {
    eval('function foo() { "use strict"; }');
} catch (e) {
    actual = '' + e;
}

assert.sameValue(expect, actual, "ok");
