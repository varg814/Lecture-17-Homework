const add = (a, b) => console.log(a + b);
add(4, 8);
//
//
let minus = function (a, b) {
  return a - b;
};
console.log(minus(6, 4));
//
//
const isEven = (a) => a % 2 === 0;
console.log(isEven(7));
//
//
function calc(a, b, callback) {
  return callback(a, b);
}
function mult(a, b) {
  return a * b;
}
console.log(calc(4, 7, mult));
//
//
const isPositive = (a) => a > 0;
console.log(isPositive(8));
//
//
let double = function (a) {
  {
    return a * 2;
  }
};
console.log(double(5));
//
//
function main(a, callback) {
  return callback(a);
}
function doubled(a) {
  return a * 2;
}
console.log(main(4, doubled));
//
//
const isDivisibleByThree = (a) => a % 3 === 0;
console.log(isDivisibleByThree(2));
//
//
function main2(a, callback) {
  return callback(a);
}
function isEvenCheck(a) {
  return a % 2 === 0;
}
console.log(main2(5, isEvenCheck));
//
//
const numCube = (a) => console.log(a * a * a);
numCube(3);
//
//
let anonymous = function (a) {
  return a / 2;
};
console.log(anonymous(9));
//
//
function calc2(a, b, callback) {
  return callback(a, b);
}
function add2(a, b) {
  return a + b;
}
console.log(calc2(4, 7, add2));
//
//
const square = (a) => console.log(a * a);
square(9);