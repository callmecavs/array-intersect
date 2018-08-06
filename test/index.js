const expect = require('chai').expect
const intersect = require('../dist/array-intersect.js')

/* eslint-env mocha */

describe('intersect', () => {
  it('should find intersection of 2 arrays', () => {
    const one = [1, 2, 3]
    const two = [2, 3, 4]

    const test = intersect(one, two)
    const expected = [2, 3]

    expect(test).to.deep.equal(expected)
  })

  it('should find intersection of more than 2 arrays', () => {
    const one = [0, 1, 2, 3]
    const two = [1, 2, 3, 4]
    const three = [2, 3, 4, 5]

    const test = intersect(one, two, three)
    const expected = [2, 3]

    expect(test).to.deep.equal(expected)
  })
})
