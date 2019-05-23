# merge-objects-values

## Installation

`yarn add merge-objects-values` OR `npm i --save merge-objects-values`

## Usage

```js
const merge = require("merge-objects-values");

// Simple merge
const object1 = { foo: 2 };
const object2 = { foo: 4 };

merge(null, object1, object2); // { foo: 6 }

// It merge recursively, so you can make the sum of sub-objects
const object3 = { foo: { bar: 2 } };
const object4 = { foo: { bar: 4 } };
const object5 = { foo: { bar: 6 } };

merge(null, object3, object4, object5); // { foo: { bar: 12 } }

// You can disable deep merge
const object6 = { foo: { bar: 2 } };
const object7 = { foo: { bar: 4 } };

merge({ deep: false }, object6, object7); // { foo: { bar: 4 } }
```
