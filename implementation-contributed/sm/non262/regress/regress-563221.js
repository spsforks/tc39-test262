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
// Contributor: Jason Orendorff <jorendorff@mozilla.com>

"" + eval("(function () { if (x) ; else if (y) n(); else { " + Array(10000).join("e;") + " } });");

if (this.assert.sameValue)
