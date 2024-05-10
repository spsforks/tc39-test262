// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
features: []
description: |
  pending
esid: pending
---*/function IsLatin1String(str) {
  for (var i = 0; i < str.length; ++i) {
    if (str.charCodeAt(i) > 0xff) {
      return false;
    }
  }
  return true;
}

function IsTwoByteString(str) {
  return !IsLatin1String(str);
}

const latin1Strings = [
  // Empty string.
  "",

  // Single character string.
  "a",
  "\0",
  "\u{80}",
  "\u{ff}",

  // Inline strings.
  "ascii",
  "látïñ-¹",

  // Too large for inline string storage.
  "This is an ASCII string which is too large for inline storage",
  "This is a látïñ-¹ string which is too large for inline storage",
];

assert.sameValue(latin1Strings.every(IsLatin1String), true);

const twoByteStrings = [
  // Single code point string.
  "\u{100}",
  "\u{10ffff}",

  // Leading two-byte character.
  ...latin1Strings.map(s => "\u{100}" + s),

  // Trailing two-byte character.
  ...latin1Strings.map(s => s + "\u{100}"),

  // Interspersed two-byte character.
  ...latin1Strings.map(s => s + "\u{100}" + "-"),
  ...latin1Strings.map(s => "-" + "\u{100}" + s),
];

assert.sameValue(twoByteStrings.every(IsTwoByteString), true);

const unpairedSurrogates = [
  // LeadSurrogateMin and LeadSurrogateMax
  "\u{D800}",
  "\u{DBFF}",

  // TrailSurrogateMin and TrailSurrogateMax
  "\u{DC00}",
  "\u{DFFF}",
];

const strings = [
  ...latin1Strings,
  ...twoByteStrings,

  // In case we've missed some special cases above.
  // (Assumes it doesn't return a string with unpaired surrogates.)
  ...representativeStringArray(),
];

function toRope(string) {
  try {
    let rope = newRope(string[0], string.slice(1));
    return {rope, filler: ""};
  } catch {}

  // |newRope| fails if the input is too short. Add some characters to make
  // the input large enough.
  let filler = "012345678901234567890123456789";
  let rope = newRope(string, filler);
  return {rope, filler};
}

for (let string of strings) {
  assert.sameValue(string.isWellFormed(), true);
  assert.sameValue(string.toWellFormed(), string);

  // Need at least two characters to make a rope.
  if (string.length >= 2) {
    let {rope, filler} = toRope(string);
    assert.sameValue(rope.isWellFormed(), true);
    assert.sameValue(rope.toWellFormed(), string + filler);
  }

  // Copy the string to create a non-atom string. (Unless |string| is a static string.)
  let copy = newString(string);
  assert.sameValue(copy.isWellFormed(), true);
  assert.sameValue(copy.toWellFormed(), string);

  let twoByte = newString(string, {twoByte: true});
  assert.sameValue(twoByte.isWellFormed(), true);
  assert.sameValue(twoByte.toWellFormed(), string);
}

// Single unpaired surrogates.
for (let unpaired of unpairedSurrogates) {
  assert.sameValue(unpaired.isWellFormed(), false);
  assert.sameValue(unpaired.toWellFormed(), "\u{FFFD}");
}

// Add unpaired surrogates.
for (let unpaired of unpairedSurrogates.flatMap(unpaired => {
  return [
    // Single unpaired.
    unpaired,

    // Two consecutive unpaired.
    unpaired + unpaired,

    // Two separate unpaired.
    unpaired + "-" + unpaired
  ];
})) {
  for (let string of strings.flatMap(string => {
    return [
      // Leading unpaired.
      unpaired + string,

      // Trailing unpaired.
      string + unpaired,

      // Interspersed unpaired.
      string + unpaired + "-",
      "-" + unpaired + string,
      string + unpaired + string,
    ];
  })) {
    assert.sameValue(string.isWellFormed(), false);
    assert.sameValue(string.toWellFormed() === string, false);

    // Need at least two characters to make a rope.
    if (string.length >= 2) {
      let {rope, filler} = toRope(string);
      assert.sameValue(rope.isWellFormed(), false);
      assert.sameValue(rope.toWellFormed() === string + filler, false);
    }

    // Copy the string to create a non-atom string. (Unless |string| is a static string.)
    let copy = newString(string);
    assert.sameValue(copy.isWellFormed(), false);
    assert.sameValue(copy.toWellFormed() === string, false);
  }
}

