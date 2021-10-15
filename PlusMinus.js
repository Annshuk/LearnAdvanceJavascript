/**
 * PlusMinus
 * plus(2).minus(7).plus(2).value()
 * Class pattern
 *
 */
export class PlusMinus {
  constructor(value = 0) {
    this.result = value;
  }

  plus(number = 0) {
    this.result += number;
    return this;
  }

  minus(number = 0) {
    this.result -= number;
    return this;
  }

  value() {
    return this.result;
  }
}

const plusMinus = new PlusMinus();

/**
 * PlusM
 * prototype function patter
 */
function PlusM() {
  let result = 0;

  function plus(value = 0) {
    result += value;
    return this;
  }

  function minus(value = 0) {
    result -= value;
    return this;
  }

  function value() {
    return result;
  }

  return {
    plus,
    minus,
    value,
  };
}

const plusm = new PlusM();

console.log(plusm, plusMinus);

function plus(value) {
  return plusm.plus(value);
}

function minus(value) {
  return plusm.minus(value);
}

console.log(plus(34).minus(13).plus(4).value());
