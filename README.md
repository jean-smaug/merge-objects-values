# merge-objects-values

## Installation

`yarn add merge-objects-values` OR `npm i --save merge-objects-values`

## Usage

```js
const merge = require("merge-objects-values");

// Simple merge
const object1 = { foo: 2 };
const object2 = { foo: 4 };

merge(object1, object2); // { foo: 6 }

// It merge recursively, so you can make the sum of sub-objects
const object1 = { foo: { bar: 2 } };
const object2 = { foo: { bar: 4 } };

merge(object1, object2); // { foo: { bar: 6 } }
```
