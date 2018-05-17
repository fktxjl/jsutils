const { expect } = require('chai')

const { digitalRoot } = require('..')

describe('lib: digitalRoot', () => {
  describe('function: digitalRoot', () => {
    it('You have passed all of the tests!', done => {
      expect(digitalRoot.digitalRoot(16)).to.equal(7)
      expect(digitalRoot.digitalRoot(942)).to.equal(6)
      expect(digitalRoot.digitalRoot(132189)).to.equal(6)
      expect(digitalRoot.digitalRoot(493193)).to.equal(2)
      done()
    })
  })
})
