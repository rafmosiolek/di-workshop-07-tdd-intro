var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe.only('Coolculator', function() {
  mm = new Coolculator()

  it('should add', function() {
    result = mm.add(2, 3)
    expect(result).to.equal(5)
  })

  // Uncomment this 👇
  it('should multiply', function() {
    result = mm.multiply(2, 3)
    expect(result).to.equal(6)
  })

  // Uncomment this 👇
  it('should subtract', function() {
    result = mm.subtract(3, 2)
    expect(result).to.equal(1)
  })

  it('should divide', function() {
    result = mm.divide(4, 2)
    expect(result).to.equal(2)
  })

  it('should factorial', function() {
    result = mm.factorial(5)
    expect(result).to.equal(120)
  })
  describe('multiplyArray', function() {
    it('should accept only arrays', function() {
      expect(() => mm.multiplyArray('not a array')).to.throw(TypeError);
    })

    it('should multiply all numbers in the array', function() {
      result = mm.multiplyArray([1,2,3])
      expect(result).to.equal(6)
    })
  })
})
