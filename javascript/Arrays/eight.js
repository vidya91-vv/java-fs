// simple program to sum of 2D array in javascript.

var arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

// initialize a variable to hold the sum
var sum = 0;

// loop through the array and add each element to the sum
for(var i=0; i < arr.length; i++){
  for(var j=0; j < arr[i].length; j++){
     sum += arr[i][j];
  }
}
console.log(sum);

