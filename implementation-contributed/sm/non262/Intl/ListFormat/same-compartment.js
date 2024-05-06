// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- deepEqual.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
var locale = "en";
var list = ["a", "b", "c"];

var listFormat = new Intl.ListFormat(locale);
var scwListFormat = wrapWithProto(listFormat, Intl.ListFormat.prototype);

// Intl.ListFormat.prototype.format
{
    var fn = Intl.ListFormat.prototype.format;

    var expectedValue = fn.call(listFormat, list);
    var actualValue = fn.call(scwListFormat, list);

    assert.sameValue(actualValue, expectedValue);
}

// Intl.ListFormat.prototype.formatToParts
{
    var fn = Intl.ListFormat.prototype.formatToParts;

    var expectedValue = fn.call(listFormat, list);
    var actualValue = fn.call(scwListFormat, list);

    assert.deepEqual(actualValue, expectedValue);
}

// Intl.ListFormat.prototype.resolvedOptions
{
    var fn = Intl.ListFormat.prototype.resolvedOptions;

    var expectedValue = fn.call(listFormat);
    var actualValue = fn.call(scwListFormat);

    assert.deepEqual(actualValue, expectedValue);
}

