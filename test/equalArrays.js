const { expect } = require('chai')

const { equalArrays } = require('..')

describe('lib: equalArrays', () => {
  describe('function: isValid', () => {
    it('should return true if arrays is equal', done => {
      expect(equalArrays.isValid([1, 2], [1, 2])).to.equal(true)
      expect(equalArrays.isValid(['a', 'b', 'c'], ['a', 'b', 'c'])).to.equal(true)
      done()
    })
    it('should return false if arrays is not equal', done => {
      expect(equalArrays.isValid(111, [1])).to.equal(false)
      expect(equalArrays.isValid([1, 2, 3], ['1', 'c'])).to.equal(false)
      expect(equalArrays.isValid(['d'], '123123123')).to.equal(false)
      done()
    })
  })
})
