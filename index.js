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

const someOneInOffice = employees.filter((item) => item.isInOffice);

console.log(employees);
console.log(sumEmployeeSalery);

console.log(someOneInOffice);
