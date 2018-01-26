[![Build Status](https://travis-ci.org/KSH-code/easily-compare-object.svg?branch=master)](https://travis-ci.org/KSH-code/easily-compare-object)
![Npm Version](https://img.shields.io/npm/v/easily-compare-object.svg?style=flat-square)
# HOW TO USE ?
```
npm i --save easily-compare-object
```
```
const easilyCompareObject = require('../index')

easilyCompareObject({ a: 1, b: { a: 4 } }, { a: 1, b: { a: 3 } })) // true
```
## Example
* [compareObjects](https://github.com/KSH-code/easily-compare-object/blob/master/test/compareObjects.test.js)