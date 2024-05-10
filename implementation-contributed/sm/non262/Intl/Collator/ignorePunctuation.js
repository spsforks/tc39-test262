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
function testPunctuation(col, expectedIgnorePunctuation) {
  let ignorePunctuation = col.resolvedOptions().ignorePunctuation;
  assert.sameValue(ignorePunctuation, expectedIgnorePunctuation);

  // Punctuation is ignored iff |ignorePunctuation| is true.
  assert.sameValue(col.compare("", "*"), ignorePunctuation ? 0 : -1);

  // Whitespace is also ignored when |ignorePunctuation| is true due to ICU limitations.
  assert.sameValue(col.compare("", " "), ignorePunctuation ? 0 : -1);
}

const locales = [
  "en", "de", "fr", "it", "es", "ar", "zh", "ja",

  // Thai, including some subtags.
  "th", "th-Thai", "th-TH", "th-u-kf-false",
];

for (let locale of locales) {
  // Thai ignores punctuation by default.
  let isThai = new Intl.Locale(locale).language === "th";

  // Using default "ignorePunctuation" option.
  testPunctuation(new Intl.Collator(locale, {}), isThai);

  // Using explicit "ignorePunctuation" option.
  for (let ignorePunctuation of [true, false]) {
    testPunctuation(new Intl.Collator(locale, {ignorePunctuation}), ignorePunctuation);
  }
}

if (typeof getDefaultLocale === "undefined") {
  var getDefaultLocale = SpecialPowers.Cu.getJSTestingFunctions().getDefaultLocale;
}
if (typeof setDefaultLocale === "undefined") {
  var setDefaultLocale = SpecialPowers.Cu.getJSTestingFunctions().setDefaultLocale;
}

const defaultLocale = getDefaultLocale();

function withLocale(locale, fn) {
  setDefaultLocale(locale);
  try {
    fn();
  } finally {
    setDefaultLocale(defaultLocale);
  }
}

// Ensure this works correctly when Thai is the default locale.
for (let locale of ["th", "th-TH"]) {
  withLocale(locale, () => {
    testPunctuation(new Intl.Collator(undefined, {}), true);
  });
}

