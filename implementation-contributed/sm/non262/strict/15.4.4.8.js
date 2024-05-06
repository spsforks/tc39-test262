// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
description: |
  pending
esid: pending
---*//* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

function arr() {
  return Object.defineProperty([1, 2, 3], 0, {writable: false});
}

function obj() {
  var o = {0: 1, 1: 2, 2: 3, length: 3};
  Object.defineProperty(o, 0, {writable: false});
  return o;
}

assert.sameValue(testLenientAndStrict('var a = arr(); a.reverse()',
                              raisesException(TypeError),
                              raisesException(TypeError)),
         true);

assert.sameValue(testLenientAndStrict('var o = obj(); Array.prototype.reverse.call(o)',
                              raisesException(TypeError),
                              raisesException(TypeError)),
         true);

function agap() {
  var a = [1, 2, , 4];
  Object.defineProperty(a, 1, {configurable: false});
  return a;
}

function ogap() {
  var o = {0: 1, 1: 2, /* no 2 */ 3: 4, length: 4};
  Object.defineProperty(o, 1, {configurable: false});
  return o;
}

assert.sameValue(testLenientAndStrict('var a = agap(); a.reverse()',
                              raisesException(TypeError),
                              raisesException(TypeError)),
         true);

assert.sameValue(testLenientAndStrict('var o = ogap(); Array.prototype.reverse.call(o)',
                              raisesException(TypeError),
                              raisesException(TypeError)),
         true);

