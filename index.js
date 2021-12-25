//welcome to my world
import { PlusMinus, PlusorMinus, checkIfExistHash } from './PlusMinus';

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
console.log(
  'classplusminus',
  plusMnus.minus(4).plus(5).plus(34).minus(6).value()
);

const addAllInteger =
  (...args) =>
  (...args1) =>
    [...args, ...args1].reduce((next, prev) => next + prev, 0);

//ansaawer 1
const employees = [
  { name: 'John', salary: '1000' },
  { name: 'Alex', salary: '1500', isInOffice: true },
].map((item) => ({ ...item, bonus: 500 }));

const sumEmployeeSalery = employees.reduce((prev, current) => ({
  salary: +current.salary + +prev.salary,
}));

const someoneInOffice = employees.filter((item) => item.isInOffice);

console.log(...employees);
console.log(sumEmployeeSalery);

console.log(...someoneInOffice);

console.log(checkIfExistHash([5, 2, 10, 15, 8]));

fun4();

//function expression not hoisted
const func1 = function () {};
let fun2 = function () {};
var fun3 = function fun3() {};

//function declaration would be hosited
function fun4() {}
//sorting decending order - bubble sort
let array = [1, 2, 4, 99, 7, 340];

function bubbleSort2() {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function bubbleSort(array1) {
  let done = false;

  while (!done) {
    done = true;

    for (let i = 0; i < array1.length; i++) {
      if (array1[i - 1] < array1[i]) {
        done = false;
        let temp = array1[i - 1];
        array1[i - 1] = array1[i];
        array1[i] = temp;
      }
    }
  }
  return array1;
}

console.log(bubbleSort([1, 2, 4, 99, 7, 98]), bubbleSort2());
