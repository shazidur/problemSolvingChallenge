// problem link https://www.hackerrank.com/challenges/compare-the-triplets/problem

const a = [5, 9, 10, 33];
const b = [3, 6, 11, 44];

let Alice = [];
let Bob = [];

let index = 0;
for (let aValue of a) {
  if (aValue > b[index]) {
    console.log(" Alise got a point 1 for the value of : ", aValue);
    Alice.push(1);
  }

  if (aValue < b[index]) {
    console.log(" Bob got a point 1 for the value of ", aValue);
    Bob.push(1);
  }

  index += 1;
}

const winAlice = Alice.length;
const winBob = Bob.length;

const finalOutput = [winAlice, winBob];
console.log("Final outout is :", finalOutput);
return finalOutput;
