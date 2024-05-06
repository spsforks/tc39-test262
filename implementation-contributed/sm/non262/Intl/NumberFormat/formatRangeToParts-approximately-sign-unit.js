// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
if (typeof getAvailableLocalesOf === "undefined") {
  var getAvailableLocalesOf = SpecialPowers.Cu.getJSTestingFunctions().getAvailableLocalesOf;
}

const numbers = [
  0, 1, 2, 5, 10, 100, 1000, 10_000, 100_000, 1_000_000,
  0.1, 0.2, 0.5, 1.5,
  -0, -1, -2, -5,
  Infinity, -Infinity,
];

const options = {style: "unit", unit: "meter"};

// List of known approximately sign in CLDR 40.
const approximatelySigns = [
  "~", "∼", "≈", "≃", "ca.", "約", "dáàṣì", "dáàshì",
];

// Iterate over all locales and ensure we find exactly one approximately sign.
for (let locale of getAvailableLocalesOf("NumberFormat").sort()) {
  let nf = new Intl.NumberFormat(locale, options);
  for (let number of numbers) {
    let parts = nf.formatRangeToParts(number, number);
    let approx = parts.filter(part => part.type === "approximatelySign");

    // Known failure case.
    // - https://github.com/tc39/proposal-intl-numberformat-v3/issues/64
    // - https://unicode-org.atlassian.net/browse/CLDR-14918
    if (approx.length === 0 && new Intl.Locale(locale).language === "ar") {
      continue;
    }

    assert.sameValue(approx.length, 1);
    assert.sameValue(approximatelySigns.some(approxSign => approx[0].value.includes(approxSign)), true);
  }
}

