// problem type : easy
// problem link https://www.hackerrank.com/challenges/compare-the-triplets/problem

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
