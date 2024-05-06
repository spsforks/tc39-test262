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
---*/const EMPTY = 0;
const INLINE_STORAGE = 10;
const NON_INLINE_STORAGE = 1024;

class DetachedInt32Array extends Int32Array {
    constructor(...args) {
        super(...args);
        detachArrayBuffer(this.buffer);
    }
}

function throwsTypeError(fn) {
    try {
        fn();
    } catch (e) {
        assert.sameValue(e instanceof TypeError, true);
        return true;
    }
    return false;
}

// Non-standard: Accessing elements of detached array buffers should throw, but
// this is currently not implemented.
const ACCESS_ON_DETACHED_ARRAY_BUFFER_THROWS = (() => {
    let ta = new DetachedInt32Array(10);
    let throws = throwsTypeError(() => ta[0]);
    // Ensure [[Get]] and [[GetOwnProperty]] return consistent results.
    assert.sameValue(throwsTypeError(() => Object.getOwnPropertyDescriptor(ta, 0)), throws);
    return throws;
})();

function maybeThrowOnDetached(fn, returnValue) {
    if (ACCESS_ON_DETACHED_ARRAY_BUFFER_THROWS) {
        assertThrowsInstanceOf(fn, TypeError);
        return returnValue;
    }
    return fn();
}

// Empty typed arrays can be sealed.
{
    let ta = new DetachedInt32Array(EMPTY);
    Object.seal(ta);

    assert.sameValue(Object.isExtensible(ta), false);
    assert.sameValue(Object.isSealed(ta), true);
    assert.sameValue(Object.isFrozen(ta), true);
}

// Non-empty typed arrays can be sealed, but calling TestIntegrityLevel will
// throw on detached typed arrays.
for (let length of [INLINE_STORAGE, NON_INLINE_STORAGE]) {
    let ta = new DetachedInt32Array(length);
    Object.seal(ta);

    assert.sameValue(Object.isExtensible(ta), false);
    assert.sameValue(maybeThrowOnDetached(() => Object.isSealed(ta), true), true);
    assert.sameValue(maybeThrowOnDetached(() => Object.isFrozen(ta), true), true);
}

// Empty typed arrays can be frozen.
{
    let ta = new DetachedInt32Array(EMPTY);
    Object.freeze(ta);

    assert.sameValue(Object.isExtensible(ta), false);
    assert.sameValue(Object.isSealed(ta), true);
    assert.sameValue(Object.isFrozen(ta), true);
}

// Non-empty typed arrays cannot be frozen.
for (let length of [INLINE_STORAGE, NON_INLINE_STORAGE]) {
    let ta = new DetachedInt32Array(length);
    maybeThrowOnDetached(() => Object.freeze(ta));

    assert.sameValue(Object.isExtensible(ta), false);
    assert.sameValue(maybeThrowOnDetached(() => Object.isSealed(ta), true), true);
    assert.sameValue(maybeThrowOnDetached(() => Object.isFrozen(ta), true), true);
}

// Non-extensible empty typed arrays are sealed and frozen.
{
    let ta = new DetachedInt32Array(EMPTY);
    Object.preventExtensions(ta);

    assert.sameValue(Object.isExtensible(ta), false);
    assert.sameValue(Object.isSealed(ta), true);
    assert.sameValue(Object.isFrozen(ta), true);
}

// Calling TestIntegrityLevel will throw on detached typed arrays with non-zero
// length.
for (let length of [INLINE_STORAGE, NON_INLINE_STORAGE]) {
    let ta = new DetachedInt32Array(length);
    Object.preventExtensions(ta);

    assert.sameValue(Object.isExtensible(ta), false);
    assert.sameValue(maybeThrowOnDetached(() => Object.isSealed(ta), true), true);
    assert.sameValue(maybeThrowOnDetached(() => Object.isFrozen(ta), true), true);
}


