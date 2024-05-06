// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- noStrict
features: []
info: |
  needs drainJobQueue
description: |
  pending
esid: pending
---*/
class ExpectedError extends Error {
  name = "ExpectedError";
}

class UnexpectedError extends Error {
  name = "UnexpectedError";
}

function throwExpectedError() {
  throw new ExpectedError();
}

async function throwsInParameterExpression(a = throwExpectedError()) {
  throw new UnexpectedError();
}
assertEventuallyThrows(throwsInParameterExpression(), ExpectedError);

async function throwsInObjectDestructuringParameterEmpty({}) {
  throw new UnexpectedError();
}
assertEventuallyThrows(throwsInObjectDestructuringParameterEmpty(), TypeError);

let objectThrowingExpectedError = {
  get a() {
    throw new ExpectedError();
  }
}

async function throwsInObjectDestructuringParameter({a}) {
  throw new UnexpectedError();
}
assertEventuallyThrows(throwsInObjectDestructuringParameter(), TypeError);
assertEventuallyThrows(throwsInObjectDestructuringParameter(objectThrowingExpectedError), ExpectedError);

let iteratorThrowingExpectedError = {
  [Symbol.iterator]() {
    throw new ExpectedError();
  }
};

async function throwsInArrayDestructuringParameterEmpty([]) {
  throw new UnexpectedError();
}
assertEventuallyThrows(throwsInArrayDestructuringParameterEmpty(), TypeError);
assertEventuallyThrows(throwsInArrayDestructuringParameterEmpty(iteratorThrowingExpectedError), ExpectedError);

async function throwsInArrayDestructuringParameter([a]) {
  throw new UnexpectedError();
}
assertEventuallyThrows(throwsInArrayDestructuringParameter(), TypeError);
assertEventuallyThrows(throwsInArrayDestructuringParameter(iteratorThrowingExpectedError), ExpectedError);

