// problem type : easy
// problem link https://www.hackerrank.com/challenges/compare-the-triplets/problem
/*
const a = [5, 9, 10, 33];
const b = [3, 6, 11, 44];

let Alice = [];
let Bob = [];

let index = 0;
for (let aValue of a) {
  if (aValue > b[index]) {
    Alice.push(1);
  }

  if (aValue < b[index]) {
    Bob.push(1);
  }

  index += 1;
}

const winAlice = Alice.length;
const winBob = Bob.length;

const finalOutput = [winAlice, winBob];
// return finalOutput

//-----------------------------------------------------------------------------------

//  Title : A very big sum
//  Problem_4 https://www.hackerrank.com/challenges/a-very-big-sum/problem

let A = [23, 2, 23];
let B = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

var sum = B.reduce(function (a, b) {
  //  sum Result here
  return a + b;
}, 0);

//-----------------------------------------------------------------------------------

// Title :  Diagonal Difference
// problem_5 :  hackerrank.com/challenges/diagonal-difference/problem

let arr = [
  [1, 2, 4],
  [3, 4, 5],
  [5, 6, 7],
];

const arrayLength = arr.length;
let primaryDiagonal = 0;
let secondaryDiagonal = 0;

for (let i = 0; i < arrayLength; i++) {
  primaryDiagonal += arr[i][i];
  secondaryDiagonal += arr[i][arrayLength - i - 1];
}

const diffrent = Math.abs(primaryDiagonal - secondaryDiagonal); // Result here
// return diffrent
*/
//-----------------------------------------------------------------------------------

// Title :  Plus Minus
// problem_6 : https://www.hackerrank.com/challenges/plus-minus/problem

const arr = [-4, 3, -9, 0, 4, 1];
const ok = 23;

function myFunction(arr) {
  let positiveNumber = 0;
  let negativeNumber = 0;
  let zero = 0;
  let arrLength = arr.length;

  for (let newArray of arr) {
    if (newArray > 0) {
      positiveNumber += 1;
    }
    if (newArray < 0) {
      negativeNumber += 1;
    }
    if (newArray == 0) {
      zero += 1;
    }
  }
  function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
  }

  // calculation
  let positiveRatio = (positiveNumber / arrLength).toFixed(6);
  let negativeRatio = (negativeNumber / arrLength).toFixed(6);
  let zeroRatio = (zero / arrLength).toFixed(6);

  return log(positiveRatio, negativeRatio, zeroRatio);
}

console.log("this is the result --->> ", myFunction(arr));

// var name = "shazid";
// var obj = {
//   name: "shazudur Rahma",
//   showName: function () {
//     console.log(this.name);
//     setTimeout(function () {
//       console.log(this.name);
//     }, 2000);
//   },
// };

// obj.showName();
// console.log(showName.name);
