const expect = require('chai').expect
const intersect = require('../dist/array-intersect.js')

/* eslint-env mocha */

describe('intersect', () => {
  it('should find intersection of arrays', () => {
    const one = [1, 2, 3]
    const two = [2, 3, 4]

    const test = intersect(one, two)
    const expected = [2, 3]

    expect(test).to.deep.equal(expected)
  })
})
