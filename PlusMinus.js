/**
 * PlusMinus
 * plus(2).minus(7).plus(2).value()
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

function plus(value) {
  return plusMinus.plus(value);
}

function minus(value) {
  return plusMinus.minus(value);
}

console.log(plus().minus());
