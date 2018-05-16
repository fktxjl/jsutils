const { expect } = require('chai')

const { highestRank } = require('..')

describe('lib: highestRank', () => {
  describe('function: isValid', () => {
    it('You have passed all of the tests!', done => {
      expect(highestRank.highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])).to.equal(12)
      expect(highestRank.highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])).to.equal(12)
      expect(highestRank.highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])).to.equal(3)
      done()
    })
  })
})
