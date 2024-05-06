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
---*/// Don't allow serialized data to use objects as property keys.

if (typeof serialize === "function") {
    let data = new Uint8Array([
        104,97,108,101,7,0,255,255,95,98,0,0,0,0,0,104,97,108,101,9,0,255,255,95,98,
        115,10,109,97,120,95,108,101,110,0,0,0,0,109,97,120,95,108,101,110,0,0,0,0,0,
        0,0,0,0,246,0,0,0,42,4,0,0,0,0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,0,0,0,0,0,0,0,0,0,0,0,0,
        191,190,190,184,65,65,65,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,97,108,101,9,0,
        255,255,95,98,115,10,109,97,120,95,110,100,108,213,95,175,175,175,175,175,0,
        0,0,0,0,2,0,0,0,0,0,13,0,255,255,96,125,115,135,109,97,120,110,0,0,32,0,8,0,
        0,0
    ]);
    let cloneBuffer = serialize(null);
    cloneBuffer.clonebuffer = data.buffer;
    try {
        let obj = deserialize(cloneBuffer);
    } catch(exc1) {}
}

