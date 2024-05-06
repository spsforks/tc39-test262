// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
description: |
  pending
esid: pending
---*/let values = [
  [-0, undefined, "0"],
  [-0, 0, "0"],
  [-0, 1, "0.0"],
  [-0, 10, "0.0000000000"],
  [-0, 50, "0.00000000000000000000000000000000000000000000000000"],
  [-0, 100, "0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [0, undefined, "0"],
  [0, 0, "0"],
  [0, 1, "0.0"],
  [0, 10, "0.0000000000"],
  [0, 50, "0.00000000000000000000000000000000000000000000000000"],
  [0, 100, "0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [NaN, undefined, "NaN"],
  [NaN, 0, "NaN"],
  [NaN, 1, "NaN"],
  [NaN, 10, "NaN"],
  [NaN, 50, "NaN"],
  [NaN, 100, "NaN"],
  [Infinity, undefined, "Infinity"],
  [Infinity, 0, "Infinity"],
  [Infinity, 1, "Infinity"],
  [Infinity, 10, "Infinity"],
  [Infinity, 50, "Infinity"],
  [Infinity, 100, "Infinity"],
  [-Infinity, undefined, "-Infinity"],
  [-Infinity, 0, "-Infinity"],
  [-Infinity, 1, "-Infinity"],
  [-Infinity, 10, "-Infinity"],
  [-Infinity, 50, "-Infinity"],
  [-Infinity, 100, "-Infinity"],
  [3.141592653589793, undefined, "3"],
  [3.141592653589793, 0, "3"],
  [3.141592653589793, 1, "3.1"],
  [3.141592653589793, 10, "3.1415926536"],
  [3.141592653589793, 50, "3.14159265358979311599796346854418516159057617187500"],
  [3.141592653589793, 100, "3.1415926535897931159979634685441851615905761718750000000000000000000000000000000000000000000000000000"],
  [-1, undefined, "-1"],
  [-1, 0, "-1"],
  [-1, 1, "-1.0"],
  [-1, 10, "-1.0000000000"],
  [-1, 50, "-1.00000000000000000000000000000000000000000000000000"],
  [-1, 100, "-1.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [1, undefined, "1"],
  [1, 0, "1"],
  [1, 1, "1.0"],
  [1, 10, "1.0000000000"],
  [1, 50, "1.00000000000000000000000000000000000000000000000000"],
  [1, 100, "1.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [-123456.78, undefined, "-123457"],
  [-123456.78, 0, "-123457"],
  [-123456.78, 1, "-123456.8"],
  [-123456.78, 10, "-123456.7800000000"],
  [-123456.78, 50, "-123456.77999999999883584678173065185546875000000000000000"],
  [-123456.78, 100, "-123456.7799999999988358467817306518554687500000000000000000000000000000000000000000000000000000000000000000"],
  [123456.78, undefined, "123457"],
  [123456.78, 0, "123457"],
  [123456.78, 1, "123456.8"],
  [123456.78, 10, "123456.7800000000"],
  [123456.78, 50, "123456.77999999999883584678173065185546875000000000000000"],
  [123456.78, 100, "123456.7799999999988358467817306518554687500000000000000000000000000000000000000000000000000000000000000000"],
  [100000000000000000000, undefined, "100000000000000000000"],
  [100000000000000000000, 0, "100000000000000000000"],
  [100000000000000000000, 1, "100000000000000000000.0"],
  [100000000000000000000, 10, "100000000000000000000.0000000000"],
  [100000000000000000000, 50, "100000000000000000000.00000000000000000000000000000000000000000000000000"],
  [100000000000000000000, 100, "100000000000000000000.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [1e+21, undefined, "1e+21"],
  [1e+21, 0, "1e+21"],
  [1e+21, 1, "1e+21"],
  [1e+21, 10, "1e+21"],
  [1e+21, 50, "1e+21"],
  [1e+21, 100, "1e+21"],
  [-100000000000000000000, undefined, "-100000000000000000000"],
  [-100000000000000000000, 0, "-100000000000000000000"],
  [-100000000000000000000, 1, "-100000000000000000000.0"],
  [-100000000000000000000, 10, "-100000000000000000000.0000000000"],
  [-100000000000000000000, 50, "-100000000000000000000.00000000000000000000000000000000000000000000000000"],
  [-100000000000000000000, 100, "-100000000000000000000.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [-1e+21, undefined, "-1e+21"],
  [-1e+21, 0, "-1e+21"],
  [-1e+21, 1, "-1e+21"],
  [-1e+21, 10, "-1e+21"],
  [-1e+21, 50, "-1e+21"],
  [-1e+21, 100, "-1e+21"],
  [Number.MAX_VALUE, undefined, "1.7976931348623157e+308"],
  [Number.MAX_VALUE, 0, "1.7976931348623157e+308"],
  [Number.MAX_VALUE, 1, "1.7976931348623157e+308"],
  [Number.MAX_VALUE, 10, "1.7976931348623157e+308"],
  [Number.MAX_VALUE, 50, "1.7976931348623157e+308"],
  [Number.MAX_VALUE, 100, "1.7976931348623157e+308"],
  [-Number.MAX_VALUE, undefined, "-1.7976931348623157e+308"],
  [-Number.MAX_VALUE, 0, "-1.7976931348623157e+308"],
  [-Number.MAX_VALUE, 1, "-1.7976931348623157e+308"],
  [-Number.MAX_VALUE, 10, "-1.7976931348623157e+308"],
  [-Number.MAX_VALUE, 50, "-1.7976931348623157e+308"],
  [-Number.MAX_VALUE, 100, "-1.7976931348623157e+308"],
  [Number.MIN_VALUE, undefined, "0"],
  [Number.MIN_VALUE, 0, "0"],
  [Number.MIN_VALUE, 1, "0.0"],
  [Number.MIN_VALUE, 10, "0.0000000000"],
  [Number.MIN_VALUE, 50, "0.00000000000000000000000000000000000000000000000000"],
  [Number.MIN_VALUE, 100, "0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],
  [-Number.MIN_VALUE, undefined, "-0"],
  [-Number.MIN_VALUE, 0, "-0"],
  [-Number.MIN_VALUE, 1, "-0.0"],
  [-Number.MIN_VALUE, 10, "-0.0000000000"],
  [-Number.MIN_VALUE, 50, "-0.00000000000000000000000000000000000000000000000000"],
  [-Number.MIN_VALUE, 100, "-0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"],
];

for (let [val, prec, expected] of values) {
  assert.sameValue(Number.prototype.toFixed.call(val, prec), expected);
}

if (typeof assert.sameValue === "function") {
}
