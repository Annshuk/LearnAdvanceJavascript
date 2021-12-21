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
    const finalValue = this.result;
    this.result = 0;

    return finalValue;
  }
}

/**
 * PlusM
 * prototype function patten
 */
export function PlusorMinus() {
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
    const finalValue = result;
    result = 0;

    return finalValue;
  }

  return {
    plus,
    minus,
    value,
  };
}
/**
 * @param {number[]} arr
 * @return {boolean}
 */
export const checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let target = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (target === arr[j] * 2 || target === arr[j] / 2) {
        return true;
      }
    }
  }
  return false;
};

export const checkIfExistHash = function (arr) {
  let newSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (newSet.has(arr[i] * 2) || newSet.has(arr[i] / 2)) {
      return true;
    }

    newSet.add(arr[i]);
  }

  return false;
};
