// Write a program to print reverse of digits of numbers.

let num = 1234;
let reversedNum = 0;

while (num > 0) {
  let digit = num % 10;
  reversedNum = (reversedNum * 10) + digit;
  num = Math.floor(num / 10);
}

console.log(reversedNum);
