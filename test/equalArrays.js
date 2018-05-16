const { expect } = require('chai')

const { equalArrays } = require('..')

describe('lib: equalArrays', () => {
  describe('function: isValid', () => {
    it('should return true if arrays is equal', done => {
      expect(equalArrays.isValid([1, {'a': 1}], [1, {'a': 1}])).to.equal(true)
      expect(equalArrays.isValid([], [])).to.equal(true)
      expect(equalArrays.isValid(null, null)).to.equal(true)
      expect(equalArrays.isValid(NaN, NaN)).to.equal(true)
      expect(equalArrays.isValid('1111', '1111')).to.equal(true)
      expect(equalArrays.isValid(['a', 'b', 'c'], ['a', 'b', 'c'])).to.equal(true)
      done()
    })
    it('should return false if arrays is not equal', done => {
      expect(equalArrays.isValid(111, [1])).to.equal(false)
      expect(equalArrays.isValid('1111', '112')).to.equal(false)
      expect(equalArrays.isValid([], [1, {'a': []}])).to.equal(false)
      expect(equalArrays.isValid([1, null], [1])).to.equal(false)
      expect(equalArrays.isValid([1, null], [undefined])).to.equal(false)
      expect(equalArrays.isValid([1, 2, 3], ['1', 'c'])).to.equal(false)
      expect(equalArrays.isValid(['d'], '123123123')).to.equal(false)
      done()
    })
  })
})
