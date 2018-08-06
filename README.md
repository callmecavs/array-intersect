# array-intersect

[![array-intersect on Travis](https://img.shields.io/travis/callmecavs/array-intersect.svg?style=flat-square)](https://travis-ci.org/callmecavs/array-intersect) [![array-intersect on NPM](https://img.shields.io/npm/v/array-intersect.svg?style=flat-square)](https://www.npmjs.com/package/array-intersect) [![array-intersect Downloads on NPM](https://img.shields.io/npm/dm/array-intersect.svg?style=flat-square)](https://www.npmjs.com/package/array-intersect) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

## Install

```sh
$ npm i array-intersect --save
```

## Use

Pass any number of arrays as arguments.

Expects that:

* Array items are unique (deduped)
* Array items are [primitive types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)


```javascript
import intersect from 'array-intersect'

const simple = intersect(
  [1, 2, 3],
  [2, 3, 4]
)

const complex = intersect(
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5]
)

console.log(simple)            // [2, 3]
console.log(complex)           // [2, 3]
```

## Browser Support

Requires support for [ES5 Array Methods](https://caniuse.com/#feat=es5).

## License

[MIT](https://opensource.org/licenses/MIT). © 2018 Michael Cavalea
