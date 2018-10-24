class Coolculator {
  add(a, b) {
    return a + b
  }

  multiply(a, b) {
    return a * b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a/b;
  }

  factorial(a) {
    if(a === 0) {
      return 1;
    } else {
      return a * this.factorial(a - 1);
    }
  }


  multiplyArray(arr) {
    if(!Array.isArray(arr)) {
      return 'Passed value is not an array'
    }
    return arr.reduce(function(a, b) {
      return a * b;
    })
  }
}

module.exports = Coolculator;
