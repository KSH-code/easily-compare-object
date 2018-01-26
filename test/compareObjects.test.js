/* global describe, it */
'use strict'
const easilyCompareObject = require('../index')
const { checkEqual } = require('easily-expect')

describe('Test compare objects', () => {
  it('simple object1', () => {
    checkEqual(true, easilyCompareObject({}, {}))
  })
  it('simple object2', () => {
    checkEqual(true, easilyCompareObject({ a: 1 }, { a: 1 }))
  })
  it('simple object3', () => {
    checkEqual(true, easilyCompareObject({ a: 1, b: { a: 3 } }, { a: 1, b: { a: 3 } }))
  })
  it('simple object4', () => {
    checkEqual(false, easilyCompareObject({ a: 1, b: { a: 4 } }, { a: 1, b: { a: 3 } }))
  })
})
