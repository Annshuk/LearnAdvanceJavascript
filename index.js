//welcome to my world
import { PlusMinus, PlusorMinus } from './PlusMinus';

const plusOrMinus = new PlusorMinus(); // Function prototype

const plusMnus = new PlusMinus(); //Class Pattern

function plus(value) {
  return plusOrMinus.plus(value);
}

function minus(value) {
  return plusOrMinus.minus(value);
}

console.log('plus =', plus(34).minus(13).plus(4).value());

console.log('minus =', minus(5).plus(13).minus(4).value());

console.log('plus =', plus(5).plus(13).minus(4).value());
